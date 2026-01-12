/**
 * HYENAS COMEDY CLUB - FILTER SCRIPT
 * Handles show filtering by location and date
 */

(function () {
    'use strict';

    const filterButtons = document.querySelectorAll('.te-filter-btn');
    const showCards = document.querySelectorAll('.te-card[data-location]');
    const showCount = document.getElementById('show-count');

    let activeLocationFilter = 'all';
    let activeDateFilter = 'all';

    // Filter by Location
    const locationFilters = document.querySelectorAll('[data-filter]');
    locationFilters.forEach(button => {
        button.addEventListener('click', function () {
            // Update active state
            locationFilters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            activeLocationFilter = this.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Filter by Date
    const dateFilters = document.querySelectorAll('[data-date]');
    dateFilters.forEach(button => {
        button.addEventListener('click', function () {
            // Update active state
            dateFilters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            activeDateFilter = this.getAttribute('data-date');
            applyFilters();
        });
    });

    // Apply Filters Function
    function applyFilters() {
        let visibleCount = 0;

        showCards.forEach(card => {
            const cardLocation = card.getAttribute('data-location');
            let shouldShow = true;

            // Location filter
            if (activeLocationFilter !== 'all' && cardLocation !== activeLocationFilter) {
                shouldShow = false;
            }

            // Date filter (would need actual date data in production)
            // For demo purposes, we'll just show all for 'all' and filter randomly for others
            if (activeDateFilter !== 'all') {
                // In production, you would check actual dates here
                // For now, this is a placeholder
            }

            // Show/hide card with animation
            if (shouldShow) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Update count
        if (showCount) {
            showCount.textContent = `${visibleCount} EVENTS`;
        }
    }

    // Load More Button
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            // In production, this would load more shows from API
            console.log('Loading more shows...');

            // Visual feedback
            this.textContent = 'LOADING...';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = 'LOAD MORE SHOWS';
                this.disabled = false;
                // Here you would append new show cards
            }, 1000);
        });
    }

    // Search Functionality (if search input exists)
    const searchInput = document.getElementById('show-search');
    if (searchInput) {
        let searchTimeout;

        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            const searchTerm = this.value.toLowerCase();

            searchTimeout = setTimeout(() => {
                let visibleCount = 0;

                showCards.forEach(card => {
                    const artistName = card.querySelector('.te-artist-name').textContent.toLowerCase();
                    const artistCredits = card.querySelector('.te-artist-credits').textContent.toLowerCase();

                    if (artistName.includes(searchTerm) || artistCredits.includes(searchTerm) || searchTerm === '') {
                        card.style.display = 'flex';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (showCount) {
                    showCount.textContent = `${visibleCount} EVENTS`;
                }
            }, 300);
        });
    }

})();
