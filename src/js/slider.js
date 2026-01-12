/**
 * TE Slider - Teenage Engineering Inspired Card Slider
 * Uses CSS scroll-snap with enhanced keyboard and button navigation
 */

class TESlider {
    constructor(element) {
        this.slider = element;
        this.container = this.slider.querySelector('.te-slider-container');
        this.prevBtn = this.slider.querySelector('.te-slider-prev');
        this.nextBtn = this.slider.querySelector('.te-slider-next');
        this.dots = this.slider.querySelector('.te-slider-dots');

        if (!this.container) return;

        this.cards = Array.from(this.container.children);
        this.currentIndex = 0;

        this.init();
    }

    init() {
        // Create dots if container exists
        if (this.dots) {
            this.createDots();
        }

        // Add navigation hints
        this.addNavigationHints();

        // Add button listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.hideHints();
                this.prev();
            });
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.hideHints();
                this.next();
            });
        }

        // Update dots on scroll
        this.container.addEventListener('scroll', () => {
            this.hideHints();
            this.updateDots();
        }, { passive: true });

        // Hide hints on any user interaction
        this.container.addEventListener('touchstart', () => this.hideHints(), { passive: true });
        this.container.addEventListener('mousedown', () => this.hideHints());

        // Keyboard navigation
        this.slider.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Initialize per-card slide rotation
        this.initCardSlides();

        // Initial dot update
        this.updateDots();
        this.updateButtons();
    }

    addNavigationHints() {
        // Don't add hints if already present
        if (this.slider.querySelector('.te-slider-hint')) return;

        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            // Add mobile scroll hint
            const hint = document.createElement('div');
            hint.className = 'te-slider-hint';
            hint.innerHTML = 'Swipe to view more';
            hint.setAttribute('aria-hidden', 'true');
            this.slider.querySelector('.te-slider-wrapper').appendChild(hint);
            this.scrollHint = hint;
        } else {
            // Add desktop button pulse hints
            if (this.nextBtn) {
                this.nextBtn.classList.add('hint-pulse');
            }
        }

        // Auto-hide after 5 seconds
        setTimeout(() => this.hideHints(), 5000);
    }

    hideHints() {
        // Only hide once
        if (this.hintsHidden) return;
        this.hintsHidden = true;

        // Hide mobile scroll hint
        if (this.scrollHint) {
            this.scrollHint.classList.add('hidden');
            setTimeout(() => {
                if (this.scrollHint && this.scrollHint.parentNode) {
                    this.scrollHint.remove();
                }
            }, 500);
        }

        // Remove desktop button pulse
        if (this.nextBtn) {
            this.nextBtn.classList.remove('hint-pulse');
        }
        if (this.prevBtn) {
            this.prevBtn.classList.remove('hint-pulse');
        }
    }

    createDots() {
        this.dots.innerHTML = '';
        this.cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'te-slider-dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dots.appendChild(dot);
        });
    }

    getCardWidth() {
        if (this.cards.length === 0) return 0;
        const cardStyle = window.getComputedStyle(this.cards[0]);
        const cardWidth = this.cards[0].offsetWidth;
        const marginRight = parseInt(cardStyle.marginRight) || 0;
        return cardWidth + marginRight;
    }

    getVisibleCards() {
        const containerWidth = this.container.offsetWidth;
        const cardWidth = this.getCardWidth();
        return Math.floor(containerWidth / cardWidth) || 1;
    }

    getCurrentIndex() {
        const scrollLeft = this.container.scrollLeft;
        const cardWidth = this.getCardWidth();
        return Math.round(scrollLeft / cardWidth);
    }

    goToSlide(index) {
        const cardWidth = this.getCardWidth();
        this.container.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    }

    next() {
        const visibleCards = this.getVisibleCards();
        const currentIndex = this.getCurrentIndex();
        const nextIndex = Math.min(currentIndex + visibleCards, this.cards.length - visibleCards);
        this.goToSlide(nextIndex);
    }

    prev() {
        const visibleCards = this.getVisibleCards();
        const currentIndex = this.getCurrentIndex();
        const prevIndex = Math.max(currentIndex - visibleCards, 0);
        this.goToSlide(prevIndex);
    }

    updateDots() {
        if (!this.dots) return;

        const currentIndex = this.getCurrentIndex();
        const dotElements = this.dots.querySelectorAll('.te-slider-dot');

        dotElements.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.classList.remove('active');
                dot.removeAttribute('aria-current');
            }
        });

        this.updateButtons();
    }

    updateButtons() {
        if (!this.prevBtn || !this.nextBtn) return;

        const currentIndex = this.getCurrentIndex();
        const visibleCards = this.getVisibleCards();

        // Disable prev button at start
        if (currentIndex === 0) {
            this.prevBtn.disabled = true;
            this.prevBtn.style.opacity = '0.3';
        } else {
            this.prevBtn.disabled = false;
            this.prevBtn.style.opacity = '1';
        }

        // Disable next button at end
        if (currentIndex >= this.cards.length - visibleCards) {
            this.nextBtn.disabled = true;
            this.nextBtn.style.opacity = '0.3';
        } else {
            this.nextBtn.disabled = false;
            this.nextBtn.style.opacity = '1';
        }
    }

    handleKeyboard(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            this.prev();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            this.next();
        }
    }

    /**
     * Initialize per-card slide rotation
     * Each rotatable card can have multiple slides that rotate independently
     */
    initCardSlides() {
        // Find all rotatable cards in this slider
        const rotatableCards = this.container.querySelectorAll('.te-card-rotatable');

        rotatableCards.forEach(card => {
            const slides = card.querySelectorAll('.te-card-slide');
            const dots = card.querySelectorAll('.te-card-slide-dot');

            // Skip if only one slide (no rotation needed)
            if (slides.length <= 1) return;

            let currentSlideIndex = 0;
            let autoRotateInterval = null;

            // Dot click handlers for manual navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    // Reset auto-rotation when user manually navigates
                    if (autoRotateInterval) {
                        clearInterval(autoRotateInterval);
                    }
                    this.goToCardSlide(card, index);
                    // Restart auto-rotation after manual interaction
                    autoRotateInterval = this.startCardAutoRotation(card, slides.length);
                });
            });

            // Start auto-rotation (5 seconds per slide)
            autoRotateInterval = this.startCardAutoRotation(card, slides.length);

            // Pause auto-rotation on hover (desktop only)
            if (window.innerWidth >= 768) {
                card.addEventListener('mouseenter', () => {
                    if (autoRotateInterval) {
                        clearInterval(autoRotateInterval);
                    }
                });

                card.addEventListener('mouseleave', () => {
                    autoRotateInterval = this.startCardAutoRotation(card, slides.length);
                });
            }
        });
    }

    /**
     * Start auto-rotation for a card's slides
     * @param {Element} card - The card element
     * @param {number} slideCount - Number of slides in the card
     * @returns {number} - Interval ID
     */
    startCardAutoRotation(card, slideCount) {
        let currentIndex = 0;

        return setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            this.goToCardSlide(card, currentIndex);
        }, 5000); // 5 seconds per slide
    }

    /**
     * Navigate to a specific slide within a card
     * @param {Element} card - The card element
     * @param {number} slideIndex - Index of the slide to show
     */
    goToCardSlide(card, slideIndex) {
        const slides = card.querySelectorAll('.te-card-slide');
        const dots = card.querySelectorAll('.te-card-slide-dot');

        // Remove active class from all slides and dots
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.setAttribute('aria-hidden', index !== slideIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            dot.setAttribute('aria-current', index === slideIndex ? 'true' : 'false');
        });

        // Add active class to target slide and dot
        if (slides[slideIndex]) {
            slides[slideIndex].classList.add('active');
        }
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add('active');
        }
    }
}

// Initialize all sliders on page load
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.te-slider');
    sliders.forEach(slider => new TESlider(slider));
});

// Re-initialize on window resize (debounced)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const sliders = document.querySelectorAll('.te-slider');
        sliders.forEach(slider => {
            const instance = new TESlider(slider);
            instance.updateButtons();
        });
    }, 250);
});
