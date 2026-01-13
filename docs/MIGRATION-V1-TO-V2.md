# 🔄 Migration Guide: v1.0.0 → v2.1.0

**Hyenas Comedy Club Design System Migration**

---

## Overview

This document outlines the complete redesign migration from the original purple-based aesthetic (v1.0.0) to the Teenage Engineering-inspired design system (v2.0.0+).

**Migration Timeline:**
- **v1.0.0** (January 2, 2026) - Initial purple-based design
- **v2.0.0** (January 10, 2026) - Complete TE-inspired redesign
- **v2.1.0** (January 10, 2026) - Current version with slider component

---

## Major Design Changes

### 1. Color System Overhaul

#### v1.0.0 (OLD - Purple Aesthetic)
```css
/* Primary Brand */
--hyenas-purple: #8B5CF6
--hyenas-purple-dark: #6D28D9
--hyenas-purple-light: #A78BFA

/* Accents */
--accent-electric: #FBBF24 (Yellow)
--accent-neon-pink: #EC4899 (Pink)
--accent-cyan: #06B6D4 (Cyan)
--accent-lime: #84CC16 (Lime)
--accent-orange: #F97316 (Orange)
```

#### v2.1.0 (NEW - TE Aesthetic)
```css
/* Base Colors */
--te-black: #000000
--te-white: #FFFFFF
--te-off-white: #F4F4F4

/* Accent Colors (Location-Based) */
--te-orange: #FF4D00    (Primary accent)
--te-blue: #0044FF      (Fort Worth)
--te-red: #FF0000       (Dallas)
--te-green: #00AA00     (Success)

/* Location Badges */
--loc-fortworth: #0044FF
--loc-dallas: #FF0000
--loc-albuquerque: #FF4D00
--loc-redroom: #CC0000
```

**Breaking Change:** All purple color references must be replaced with black/white/orange TE colors.

---

### 2. Typography Changes

#### v1.0.0 (OLD)
```css
/* Fonts */
Display: Space Grotesk (400, 500, 600, 700)
Body: Inter (400, 500, 600, 700)
Mono: JetBrains Mono
```

#### v2.1.0 (NEW)
```css
/* Fonts */
Display/Headings: Inter (700, 900)
Body: Inter (400, 500, 600)
Technical: Roboto Mono (400, 500, 700)
```

**Breaking Change:** Space Grotesk completely removed. Inter is now used for both headings and body text.

**Google Fonts Import:**
```html
<!-- v1.0.0 OLD -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- v2.1.0 NEW -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

---

### 3. Component Class Naming

#### v1.0.0 (OLD)
```css
.btn-primary
.btn-secondary
.btn-accent
.grid-2, .grid-3, .grid-4
.show-card
```

#### v2.1.0 (NEW)
```css
.te-btn .te-btn-primary
.te-btn .te-btn-outline
.te-btn .te-btn-accent
.te-grid .te-grid-2, .te-grid-3, .te-grid-4
.te-card
```

**Breaking Change:** All classes now prefixed with `te-` (Teenage Engineering). Update all HTML templates.

---

### 4. Repository Structure Changes

#### v1.0.0 (OLD)
```
Repository: athkkr/hyenas-comedy-styles
File: hyenas-styles.css (single file)
CDN: https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css
```

#### v2.1.0 (NEW)
```
Repository: athkkr/hyenas-style
Files:
  - src/css/hyenas-te-system.css
  - src/js/navigation.js
  - src/js/filters.js
  - src/js/animations.js
  - src/js/slider.js
CDN: https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css
```

**Breaking Change:** Repository name changed. File structure reorganized into `/src` directory.

---

## Step-by-Step Migration

### Phase 1: Update Webflow Custom Code

**1. Update Head Code** (Site Settings → Custom Code → Head):

**REMOVE:**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css">
```

**ADD:**
```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Hyenas TE Design System v2.1.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css">
```

**2. Add Footer Code** (Site Settings → Custom Code → Footer):

```html
<!-- Hyenas TE Scripts v2.1.0 -->
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/slider.js"></script>
```

---

### Phase 2: Update HTML Classes

Use Webflow's "Find and Replace" feature:

| Find (v1.0.0) | Replace (v2.1.0) |
|---------------|------------------|
| `class="btn-primary"` | `class="te-btn te-btn-primary"` |
| `class="btn-secondary"` | `class="te-btn te-btn-outline"` |
| `class="btn-accent"` | `class="te-btn te-btn-accent"` |
| `class="grid-4"` | `class="te-grid te-grid-4"` |
| `class="show-card"` | `class="te-card"` |

---

### Phase 3: Update Navigation Component

**v1.0.0 Structure:**
- Basic navbar with no sticky behavior
- No defined logo specifications
- Generic menu links

**v2.1.0 Requirements:**
1. Add class `te-nav` to navbar element
2. Add logo with these specifications:
   - URL: `https://cdn.prod.website-files.com/626314d81c6e619157def12e/62634a8994907cbc6e923aa0_new-logo.png`
   - Alt text: "Hyenas Comedy Nightclub"
   - Height: 50px (auto width)
   - Wrapper class: `te-logo`
3. Menu structure (in order):
   - FORT WORTH → `/locations/fortworth`
   - DALLAS → `/locations/dallas`
   - RED ROOM → `/locations/redroom`
   - ABQ → `/locations/albuquerque`
   - SHOWS & TICKETS → `/shows`
4. Add mobile toggle with class `te-menu-toggle`
5. Menu list class: `te-nav-menu`
6. Individual link class: `te-nav-link`

---

### Phase 4: Update Show Cards

**v1.0.0 Card Structure:**
```html
<div class="show-card">
  <img src="...">
  <h3>Artist Name</h3>
  <p>Date/Time</p>
  <button class="btn-primary">Get Tickets</button>
</div>
```

**v2.1.0 Card Structure:**
```html
<article class="te-card" data-location="fortworth">
  <!-- Header with location badge -->
  <div class="te-card-header">
    <div class="te-location-badge fort-worth">
      <span class="loc-id">FW-TX</span>
      <span class="loc-name">FORT WORTH</span>
    </div>
    <div class="te-ui-dots">UPCOMING</div>
  </div>

  <!-- Image with overlay -->
  <a href="/event-url" class="te-image-container">
    <img src="image.jpg" alt="Artist Name">
    <div class="te-overlay-scan"></div>
  </a>

  <!-- Content -->
  <div class="te-content">
    <div class="te-artist-block">
      <h3 class="te-artist-name">ARTIST NAME</h3>
      <p class="te-artist-credits">CREDITS</p>
    </div>

    <!-- Grouped showtimes (NEW in v2.0) -->
    <div class="te-schedule-grouped">
      <div class="te-grouped-row">
        <div class="te-date-col">
          <span class="d-day">FRI</span>
          <span class="d-num">JAN 09</span>
        </div>
        <div class="te-times-col">
          <span class="te-time-pill">8:00PM</span>
          <span class="te-time-pill">10:00PM</span>
        </div>
      </div>
    </div>

    <a href="/tickets" class="te-main-cta">GET TICKETS</a>
  </div>
</article>
```

**Key Changes:**
- Semantic `<article>` instead of `<div>`
- `data-location` attribute for filtering
- Location badges with specific colors
- Grouped showtime display
- CRT scanline overlay effect
- Artist block with truncated text

---

### Phase 5: Add New v2.1.0 Features

#### Slider Component (NEW)
```html
<div class="te-slider-wrapper">
  <div class="te-slider-nav">
    <button class="te-slider-prev" aria-label="Previous">←</button>
    <button class="te-slider-next" aria-label="Next">→</button>
  </div>

  <div class="te-slider">
    <!-- Cards go here -->
  </div>

  <!-- Navigation hints -->
  <div class="te-nav-hint desktop-hint">
    <svg class="pulse-arrow" width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    <span>Use arrows to navigate</span>
  </div>

  <div class="te-nav-hint mobile-hint">
    <span>Swipe to view more shows →</span>
  </div>
</div>
```

---

## CSS Variable Mapping

Use this table to update custom styles:

| v1.0.0 Variable | v2.1.0 Equivalent |
|-----------------|-------------------|
| `--hyenas-purple` | `--te-black` |
| `--hyenas-purple-dark` | `--te-black` |
| `--hyenas-purple-light` | `--te-gray-light` |
| `--accent-electric` | `--te-orange` |
| `--accent-neon-pink` | `--te-red` |
| `--accent-cyan` | `--te-blue` |
| `--accent-lime` | `--te-green` |

---

## Testing Checklist

After migration, verify:

### Visual
- [ ] All purple colors replaced with TE colors (black/white/orange/blue/red)
- [ ] Space Grotesk font no longer loading
- [ ] Inter font displaying correctly for all text
- [ ] Roboto Mono used for technical elements
- [ ] Location badges showing correct colors
- [ ] Brutal shadows appearing on buttons
- [ ] CRT scanline overlay on images

### Functional
- [ ] Mobile menu opens/closes (new JS)
- [ ] Filter buttons work (new JS)
- [ ] Slider navigation works (new feature)
- [ ] Keyboard navigation works
- [ ] All links navigate correctly
- [ ] CMS data binding intact

### Responsive
- [ ] Mobile (320px-640px): 1 column
- [ ] Tablet (641px-1024px): 2 columns
- [ ] Desktop (1025px+): 4 columns
- [ ] Touch targets ≥ 44px on mobile

### Performance
- [ ] New CDN URLs load correctly
- [ ] jsDelivr caching working
- [ ] No 404 errors in console
- [ ] Page load < 3 seconds
- [ ] Lighthouse score > 85

---

## Rollback Plan

If issues occur, you can temporarily rollback:

### Quick Rollback (5 minutes)
1. In Webflow Custom Code → Head, change:
```html
<!-- Temporarily use v1.0.0 -->
<link rel="stylesheet" href="https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css?v=1.0.0">
```

2. Remove Footer Code scripts (v2.x only)
3. Publish site
4. Fix issues in development
5. Re-deploy v2.1.0

### Full Rollback (if needed)
- All v1.0.0 files archived in `/research/CHANGELOG.md`
- Contact development team to restore v1.0.0 codebase
- Note: CMS structure should remain compatible

---

## Breaking Changes Summary

**MUST UPDATE:**
1. ✅ Google Fonts URL (remove Space Grotesk, add Roboto Mono)
2. ✅ CSS file URL (new repository and path)
3. ✅ All class names (add `te-` prefix)
4. ✅ Color references in custom CSS (purple → TE colors)
5. ✅ Logo specifications in navigation
6. ✅ Show card HTML structure

**OPTIONAL (Enhanced Features):**
1. Slider component for homepage
2. Location-based filtering
3. Grouped showtime display
4. Navigation hints (mobile/desktop)

---

## Support & Resources

**Documentation:**
- Current Design System: `/docs/DESIGN-SYSTEM.md` (v2.1.0)
- Implementation Guide: `/docs/IMPLEMENTATION.md`
- Deployment Guide: `/docs/DEPLOYMENT.md`

**Code Repository:**
- New Repo: https://github.com/athkkr/hyenas-style
- Old Repo (archived): https://github.com/athkkr/hyenas-comedy-styles

**CDN:**
- jsDelivr (recommended): `https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/`
- GitHub Pages (fallback): `https://athkkr.github.io/hyenas-style/`

---

## Timeline & Phases

**Recommended Migration Schedule:**

### Week 1: Preparation
- [ ] Backup current Webflow site
- [ ] Test v2.1.0 on staging/dev site
- [ ] Review all breaking changes
- [ ] Update CMS structure if needed

### Week 2: Implementation
- [ ] Update Custom Code (fonts + CSS)
- [ ] Update navigation component
- [ ] Update show card templates
- [ ] Update CMS bindings

### Week 3: Testing & Launch
- [ ] Full QA testing
- [ ] Fix any issues
- [ ] Publish to production
- [ ] Monitor for errors

---

**Migration Complete!** 🎉

Your site now features the bold, technical Teenage Engineering-inspired aesthetic with improved performance, better mobile experience, and enhanced visual impact.

---

**Document Version:** 1.0
**Last Updated:** January 10, 2026
**Maintained By:** Hyenas Development Team
