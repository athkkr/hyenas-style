# Feature Plan: Dual Show Display for Homepage Cards

**Status:** Planning  
**Created:** January 10, 2026  
**Priority:** High  
**Complexity:** Medium-High

---

## 🎯 Goal

Implement a dual-show display for homepage cards so each card can present **two shows at once**, while still supporting **slide rotation over time** (e.g., current week vs next week).

This enhancement should integrate cleanly with the existing homepage slider system without breaking the current 3-card desktop layout or responsive behavior.

---

## 🔍 Discovery Findings

### Current Implementation Analysis

**Homepage Structure** (`/src/templates/homepage.html`):
- 6 total cards in slider (2 pages of 3 cards on desktop)
- Card 1: Fort Worth (dual-venue: Main Room + Red Room as secondary callout)
- Cards 2-6: Standard single-show cards
- Responsive: 3 cards (desktop), 2 (tablet), 1 (mobile)

**Slider Behavior** (`/src/js/slider.js`):
- Uses CSS scroll-snap for native scrolling
- JavaScript controls: prev/next buttons, keyboard nav, dot indicators
- Scrolls **between cards**, not within cards
- No per-card slide rotation currently exists

**Card Types**:
1. **Standard Card** (`.te-card`): Single show with grouped showtimes
2. **Dual-Venue Card** (`.te-card-dual-venue`): Primary show + secondary show callout (static, no rotation)

**Key Limitations**:
- ❌ No per-card slide rotation mechanism
- ❌ Dual-venue card is static (doesn't rotate between show pairs)
- ❌ Data model assumes one show per card
- ✅ Dual-show layout already exists (can be extended)
- ✅ Responsive card system works well

---

## 📋 Implementation Strategy

### Phase 1: Data Model & Structure

#### 1.1 Slide Data Format

Create a new data structure to support multiple slides per card:

```javascript
const cardSlides = {
  fortworth: [
    {
      // Slide 1: This Week
      primary: {
        artist: "DAVID KOECHNER",
        credits: "OFFICE / ANCHORMAN / SNL",
        image: "...",
        link: "/events/david-koechner",
        showtimes: [
          { day: "FRI", date: "JAN 09", times: ["8:00PM", "10:00PM"] },
          { day: "SAT", date: "JAN 10", times: ["7:00PM", "9:30PM"] }
        ]
      },
      secondary: {
        venue: "RED ROOM",
        venueLink: "/locations/redroom",
        artist: "NICK ROCHEFORT",
        showtime: "THU NOV 20 · 7PM & 9PM"
      }
    },
    {
      // Slide 2: Next Week
      primary: {
        artist: "COMEDIAN NAME",
        credits: "NETFLIX / HBO",
        image: "...",
        link: "/events/comedian-name",
        showtimes: [
          { day: "FRI", date: "JAN 16", times: ["8:00PM", "10:00PM"] }
        ]
      },
      secondary: {
        venue: "RED ROOM",
        venueLink: "/locations/redroom",
        artist: "ANOTHER COMEDIAN",
        showtime: "FRI JAN 16 · 9PM"
      }
    }
  ],
  dallas: [
    {
      // Slide 1: This Week
      primary: {
        artist: "LEARNMORE JONASI",
        credits: "AGT WINNER / COMEDY CENTRAL",
        // ...
      }
    },
    {
      // Slide 2: Next Week
      primary: {
        artist: "NEXT WEEK COMEDIAN",
        // ...
      }
    }
  ],
  albuquerque: [
    // Similar structure
  ]
};
```

#### 1.2 HTML Structure for Rotatable Card

```html
<article class="te-card te-card-rotatable" data-location="fortworth" data-venues="main,redroom">
  <!-- Card Header (static) -->
  <div class="te-card-header">
    <div class="te-location-badge-dual">
      <div class="badge-segment fort-worth">
        <span class="loc-id">FW-TX</span>
        <span class="loc-name">FORT WORTH</span>
      </div>
      <div class="badge-divider">|</div>
      <div class="badge-segment red-room">
        <span class="loc-id">FW-RR</span>
      </div>
    </div>
    <div class="te-ui-dots">UPCOMING</div>
  </div>

  <!-- Slide Container (rotates) -->
  <div class="te-card-slides">
    <!-- Slide 1 -->
    <div class="te-card-slide active" data-slide-index="0">
      <a href="/events/david-koechner" class="te-image-container">
        <img src="..." alt="David Koechner">
        <div class="te-overlay-scan"></div>
      </a>

      <div class="te-content">
        <div class="te-artist-block">
          <h3 class="te-artist-name">DAVID KOECHNER</h3>
          <p class="te-artist-credits">OFFICE / ANCHORMAN / SNL</p>
        </div>

        <div class="te-schedule-grouped">
          <!-- Showtimes -->
        </div>

        <div class="te-secondary-show">
          <!-- Secondary show callout -->
        </div>

        <a href="/locations/fortworth" class="te-main-cta">VIEW ALL FORT WORTH SHOWS</a>
      </div>
    </div>

    <!-- Slide 2 -->
    <div class="te-card-slide" data-slide-index="1">
      <!-- Similar structure for next week -->
    </div>
  </div>

  <!-- Per-Card Slide Navigation -->
  <div class="te-card-slide-nav">
    <button class="te-card-slide-dot active" data-slide="0" aria-label="Week 1"></button>
    <button class="te-card-slide-dot" data-slide="1" aria-label="Week 2"></button>
  </div>
</article>
```

---

### Phase 2: CSS Layout & Styling

#### 2.1 Card Slide Container

```css
/* Card-level slide container */
.te-card-slides {
  position: relative;
  overflow: hidden;
}

.te-card-slide {
  display: none;
  animation: slideIn 0.3s ease-out;
}

.te-card-slide.active {
  display: block;
}

/* Slide transition animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}
```

#### 2.2 Per-Card Slide Navigation

```css
/* Slide dots at bottom of each card */
.te-card-slide-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3);
  border-top: 1px solid var(--te-gray-light);
  background: var(--te-off-white);
}

.te-card-slide-dot {
  width: 8px;
  height: 8px;
  border: 2px solid var(--te-black);
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
  border-radius: 50%;
}

.te-card-slide-dot:hover {
  background: var(--te-gray-light);
}

.te-card-slide-dot.active {
  background: var(--te-orange);
  border-color: var(--te-orange);
}
```

#### 2.3 Responsive Dual-Show Layout

For future true side-by-side dual-show layout (optional enhancement):

```css
/* Desktop: Side-by-side shows */
@media (min-width: 1024px) {
  .te-card-slide.dual-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }

  .te-card-slide.dual-split .te-image-container {
    grid-column: 1 / -1;
  }

  .te-card-slide.dual-split .te-content {
    grid-column: 1;
  }

  .te-card-slide.dual-split .te-secondary-show {
    grid-column: 2;
    border-left: 3px solid var(--loc-redroom);
    margin: 0;
  }
}

/* Tablet/Mobile: Stacked */
@media (max-width: 1023px) {
  .te-card-slide.dual-split {
    display: flex;
    flex-direction: column;
  }
}
```

---

### Phase 3: JavaScript Enhancement

#### 3.1 Update `slider.js` - Add Per-Card Rotation

```javascript
class TESlider {
    constructor(element) {
        // ... existing code ...
        
        // Initialize per-card slide rotation
        this.initCardSlides();
    }

    initCardSlides() {
        // Find all rotatable cards
        const rotatableCards = this.container.querySelectorAll('.te-card-rotatable');
        
        rotatableCards.forEach(card => {
            const slides = card.querySelectorAll('.te-card-slide');
            const dots = card.querySelectorAll('.te-card-slide-dot');
            
            if (slides.length <= 1) return; // Skip if only one slide
            
            let currentSlideIndex = 0;
            
            // Dot click handlers
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.goToCardSlide(card, index);
                });
            });
            
            // Auto-rotate every 5 seconds
            setInterval(() => {
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                this.goToCardSlide(card, currentSlideIndex);
            }, 5000);
        });
    }

    goToCardSlide(card, slideIndex) {
        const slides = card.querySelectorAll('.te-card-slide');
        const dots = card.querySelectorAll('.te-card-slide-dot');
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to target slide and dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }
}
```

#### 3.2 Accessibility Enhancements

```javascript
goToCardSlide(card, slideIndex) {
    // ... existing code ...
    
    // Update ARIA attributes
    slides.forEach((slide, index) => {
        slide.setAttribute('aria-hidden', index !== slideIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.setAttribute('aria-current', index === slideIndex ? 'true' : 'false');
    });
}
```

---

### Phase 4: Location-Specific Examples

#### 4.1 Dallas - Week Rotation

```javascript
const dallasSlides = [
  {
    primary: {
      artist: "LEARNMORE JONASI",
      credits: "AGT WINNER / COMEDY CENTRAL",
      showtimes: [
        { day: "FRI", date: "JAN 09", times: ["8:00PM", "10:00PM"] },
        { day: "SAT", date: "JAN 10", times: ["7:00PM", "9:30PM"] }
      ]
    }
  },
  {
    primary: {
      artist: "NEXT WEEK HEADLINER",
      credits: "NETFLIX SPECIAL",
      showtimes: [
        { day: "FRI", date: "JAN 16", times: ["8:00PM", "10:00PM"] }
      ]
    }
  }
];
```

#### 4.2 Albuquerque - Week Rotation

```javascript
const albuquerqueSlides = [
  {
    primary: {
      artist: "SAM TALLENT",
      credits: "COMEDIAN / WRITER",
      showtimes: [
        { day: "FRI", date: "FEB 20", times: ["7:30PM", "9:30PM"] },
        { day: "SAT", date: "FEB 21", times: ["7:00PM", "9:30PM"] }
      ]
    }
  },
  {
    primary: {
      artist: "NEXT WEEK COMEDIAN",
      credits: "COMEDY CENTRAL",
      showtimes: [
        { day: "FRI", date: "FEB 27", times: ["8:00PM", "10:00PM"] }
      ]
    }
  }
];
```

#### 4.3 Fort Worth - Main Room + Red Room Rotation

```javascript
const fortworthSlides = [
  {
    primary: {
      artist: "DAVID KOECHNER",
      venue: "MAIN ROOM",
      showtimes: [...]
    },
    secondary: {
      artist: "NICK ROCHEFORT",
      venue: "RED ROOM",
      showtime: "THU NOV 20 · 7PM & 9PM"
    }
  },
  {
    primary: {
      artist: "NEXT WEEK MAIN ROOM",
      venue: "MAIN ROOM",
      showtimes: [...]
    },
    secondary: {
      artist: "NEXT WEEK RED ROOM",
      venue: "RED ROOM",
      showtime: "FRI JAN 16 · 9PM"
    }
  }
];
```

---

## 🧪 Testing & Validation

### Manual Test Scenarios

#### Desktop (1024px+)
- [ ] 3 cards visible simultaneously
- [ ] Each card rotates slides independently
- [ ] Global slider navigation works (← → buttons)
- [ ] Per-card slide dots work
- [ ] Auto-rotation doesn't interfere with global slider
- [ ] Hover states work correctly
- [ ] No layout jump during slide transitions

#### Tablet (768px - 1023px)
- [ ] 2 cards visible
- [ ] Slide rotation works
- [ ] Touch swipe for global slider works
- [ ] Per-card dots remain visible and functional

#### Mobile (< 768px)
- [ ] 1 card visible
- [ ] Slide rotation works
- [ ] Swipe for global slider works
- [ ] Per-card dots visible and tap-friendly (44px min)
- [ ] Text doesn't wrap awkwardly
- [ ] Secondary show callout readable

### Accessibility Checks
- [ ] Keyboard navigation (Tab, Arrow keys)
- [ ] Screen reader announces slide changes
- [ ] ARIA attributes update correctly
- [ ] Focus management during transitions
- [ ] Color contrast meets WCAG AA (4.5:1)

### Performance Checks
- [ ] No flicker during transitions
- [ ] Smooth animations (60fps)
- [ ] No memory leaks from intervals
- [ ] Pause auto-rotation when user interacts

---

## 📦 Deliverables

### 1. HTML Structure
- [ ] Updated `homepage.html` with rotatable card markup
- [ ] Sample slides for all 3 locations (Dallas, Fort Worth, Albuquerque)
- [ ] Proper semantic HTML and ARIA attributes

### 2. CSS Styles
- [ ] `.te-card-slides` container styles
- [ ] `.te-card-slide` transition animations
- [ ] `.te-card-slide-nav` dot navigation
- [ ] Responsive breakpoint adjustments
- [ ] Accessibility focus states

### 3. JavaScript
- [ ] Updated `slider.js` with `initCardSlides()` method
- [ ] `goToCardSlide()` function
- [ ] Auto-rotation logic (5-second intervals)
- [ ] Pause on user interaction
- [ ] ARIA attribute management

### 4. Sample Data
- [ ] Dallas: 2 slides (this week + next week)
- [ ] Fort Worth: 2 slides (Main Room + Red Room pairings)
- [ ] Albuquerque: 2 slides (this week + next week)

### 5. Documentation
- [ ] Update `design-system.md` with new card variant
- [ ] Add usage examples
- [ ] Document data structure format
- [ ] Update `HOMEPAGE-STRUCTURE.md` if needed

---

## 🚀 Implementation Order

1. **Phase 1**: Create HTML structure for rotatable cards (1-2 hours)
2. **Phase 2**: Add CSS for slide transitions and navigation (1-2 hours)
3. **Phase 3**: Update `slider.js` with per-card rotation logic (2-3 hours)
4. **Phase 4**: Create sample data for all locations (1 hour)
5. **Phase 5**: Test across all breakpoints (1-2 hours)
6. **Phase 6**: Accessibility audit and fixes (1 hour)
7. **Phase 7**: Documentation updates (1 hour)

**Total Estimated Time**: 8-12 hours

---

## 🎨 Design Decisions

### Why Per-Card Rotation?
- Allows each location to show multiple time periods (this week vs next week)
- Maintains visual consistency (all cards same size)
- Doesn't increase global slider complexity
- Users can explore each location's upcoming shows without leaving homepage

### Why 5-Second Auto-Rotation?
- Long enough to read content
- Short enough to feel dynamic
- Industry standard for carousel timing
- Can be paused on user interaction

### Why Dots Instead of Arrows?
- Minimal visual clutter
- Clear indication of slide count
- Touch-friendly on mobile
- Consistent with existing slider dots pattern

---

## 🔮 Future Enhancements

### Phase 2 (Optional)
- [ ] True side-by-side dual-show layout (split card vertically)
- [ ] Swipe gestures for per-card slides on mobile
- [ ] Pause auto-rotation on hover (desktop)
- [ ] Slide progress indicator (animated bar)
- [ ] Preload next slide images for smooth transitions

### Phase 3 (Advanced)
- [ ] Dynamic data loading from API
- [ ] User preference: auto-rotate on/off
- [ ] Analytics tracking for slide engagement
- [ ] A/B testing different rotation speeds

---

## ✅ Success Criteria

- ✅ Each homepage card can display multiple show pairs
- ✅ Slides rotate automatically every 5 seconds
- ✅ Users can manually navigate slides via dots
- ✅ No regressions to existing slider functionality
- ✅ Responsive across all breakpoints
- ✅ Accessible (keyboard, screen reader, WCAG AA)
- ✅ Smooth transitions with no layout shift
- ✅ Sample data for all 3 locations implemented

---

**Next Steps**: Review this plan, then proceed with Phase 1 implementation.
