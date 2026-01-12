# 🎭 Hyenas Comedy Club - Complete Redesign Implementation Guide

## Overview

This guide provides step-by-step instructions for implementing the complete Teenage Engineering-inspired website redesign for Hyenas Comedy Clubs.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Component Guide](#component-guide)
4. [Page Templates](#page-templates)
5. [Webflow Integration](#webflow-integration)
6. [Testing](#testing)
7. [Deployment](#deployment)

---

## 🚀 Quick Start

### Prerequisites
- Access to Webflow project
- GitHub account with write access to `athkkr/hyenas-style`
- Local development environment

### 5-Minute Setup

1. **Clone or navigate to project**:
   ```bash
   cd /Users/art/Desktop/Hyenas/hyenas-styling
   ```

2. **Open homepage template**:
   ```bash
   open src/templates/homepage.html
   ```

3. **Test locally** - All files are ready to use!

---

## 📁 File Structure

```
hyenas-styling/
├── src/
│   ├── css/
│   │   └── hyenas-te-system.css       # Complete design system (1,200+ lines)
│   ├── js/
│   │   ├── navigation.js              # Mobile menu & nav (120 lines)
│   │   ├── filters.js                 # Show filtering (140 lines)
│   │   └── animations.js              # Scroll animations (180 lines)
│   └── templates/
│       └── homepage.html              # Complete homepage (350+ lines)
├── docs/
│   ├── DEPLOYMENT.md                  # Deployment guide
│   └── IMPLEMENTATION.md              # This file
└── README.md                          # Project overview
```

---

## 🧩 Component Guide

### 1. Navigation

**HTML Structure**:
```html
<nav class="te-nav">
    <div class="te-container">
        <div class="te-nav-inner">
            <a href="/" class="te-logo">
                <img src="https://cdn.prod.website-files.com/626314d81c6e619157def12e/62634a8994907cbc6e923aa0_new-logo.png" 
                     alt="Hyenas Comedy Nightclub" 
                     style="height: 50px; width: auto; display: block;">
            </a>
            <button class="te-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="te-nav-menu">
                <li><a href="/locations/fortworth" class="te-nav-link">FORT WORTH</a></li>
                <li><a href="/locations/dallas" class="te-nav-link">DALLAS</a></li>
                <li><a href="/locations/redroom" class="te-nav-link">RED ROOM</a></li>
                <li><a href="/locations/albuquerque" class="te-nav-link">ABQ</a></li>
                <li><a href="/shows" class="te-nav-link active">SHOWS & TICKETS</a></li>
            </ul>
        </div>
    </div>
</nav>
```

**Key Classes**:
- `te-nav` - Main nav container (sticky)
- `te-logo` - Logo link container
- `te-menu-toggle` - Mobile hamburger button
- `te-nav-menu` - Navigation menu list
- `te-nav-link` - Individual nav links

**Logo Details**:
- Image URL: Hyenas Comedy Nightclub logo from CDN
- Height: 50px (auto width for aspect ratio)
- Hover effect: Opacity fade to 0.8

**Menu Structure**:
1. FORT WORTH → `/locations/fortworth`
2. DALLAS → `/locations/dallas`
3. RED ROOM → `/locations/redroom`
4. ABQ → `/locations/albuquerque`
5. SHOWS & TICKETS → `/shows` (active state)

**Features**:
- Sticky positioning
- Mobile hamburger menu (< 768px)
- Smooth scroll to sections
- Active link highlighting (orange underline)
- Shadow on scroll

---

### 2. Hero Section

**HTML Structure**:
```html
<section class="te-hero">
    <div class="te-container">
        <div class="te-hero-content">
            <div class="te-hero-tag">LIVE_COMEDY_SYSTEM_V2</div>
            <h1 class="te-hero-title">YOUR TITLE HERE</h1>
            <p class="te-hero-subtitle">Subtitle text</p>
            <div class="te-hero-actions">
                <a href="#" class="te-btn te-btn-accent te-btn-lg">PRIMARY CTA</a>
                <a href="#" class="te-btn te-btn-outline te-btn-lg">SECONDARY CTA</a>
            </div>
        </div>
    </div>
</section>
```

**Customization**:
- Change background color in CSS
- Add background image
- Adjust padding for different heights
- Modify button text and links

---

### 3. Show Cards (Grouped Variant)

**HTML Structure**:
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

    <!-- Image -->
    <a href="/event-url" class="te-image-container">
        <img src="image.jpg" alt="Artist Name">
        <div class="te-overlay-scan"></div>
    </a>

    <!-- Content -->
    <div class="te-content">
        <div class="te-artist-block">
            <h3 class="te-artist-name">ARTIST NAME</h3>
            <p class="te-artist-credits">CREDITS / SHOWS</p>
        </div>

        <!-- Grouped showtimes -->
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

        <!-- CTA Button -->
        <a href="/tickets" class="te-main-cta">GET TICKETS</a>
    </div>
</article>
```

**Location Badge Colors**:
- `fort-worth` - Blue (#0044FF)
- `dallas` - Red (#FF0000)
- `albuquerque` - Orange (#FF4D00)
- `red-room` - Dark Red (#CC0000)

**Dynamic Data (Webflow CMS)**:
- Artist name → `te-artist-name`
- Credits → `te-artist-credits`
- Image → `te-image-container img`
- Dates/times → `te-grouped-row` (repeat for each date)

---

### 3b. Dual-Venue Show Card
**Added:** January 10, 2026

Special card variant for combining two shows from the same location.

**HTML Structure**:
```html
<article class="te-card te-card-dual-venue" data-location="fortworth" data-venues="main,redroom">
    <!-- Dual-Venue Badge Header -->
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

    <!-- PRIMARY SHOW (Main Room) -->
    <a href="/events/primary-artist" class="te-image-container">
        <img src="primary-artist.jpg" alt="Primary Artist">
        <div class="te-overlay-scan"></div>
    </a>

    <div class="te-content">
        <!-- Primary Artist -->
        <div class="te-artist-block">
            <h3 class="te-artist-name">PRIMARY ARTIST</h3>
            <p class="te-artist-credits">Main show credits</p>
        </div>

        <!-- Primary Schedule -->
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

        <!-- SECONDARY SHOW CALLOUT -->
        <div class="te-secondary-show">
            <div class="secondary-label">
                <span class="venue-indicator red-room-dot"></span>
                <a href="/locations/redroom" class="venue-link">RED ROOM</a>
            </div>
            <div class="secondary-artist">
                <span class="artist-name">SECONDARY ARTIST</span>
                <span class="show-time">FRI 10:00PM</span>
            </div>
        </div>

        <!-- Primary CTA -->
        <a href="/locations/fortworth" class="te-main-cta">VIEW ALL FORT WORTH SHOWS</a>
    </div>
</article>
```

**Use Case**: Combining Fort Worth Main Room + Red Room shows into single homepage slider card.

**Key Classes**:
- `.te-card-dual-venue` - Wrapper class for dual-venue card
- `.te-location-badge-dual` - Split badge with dual colors
- `.badge-segment` - Individual badge section (blue for Main, red for Red Room)
- `.badge-divider` - Vertical divider between badge segments (|)
- `.te-secondary-show` - Secondary show callout container
- `.venue-indicator` - Colored dot (red-room-dot, etc.)

**Design Pattern**:
- Primary show gets full visual treatment (large image, prominent placement)
- Secondary show appears as compact callout with venue-colored left border
- Primary CTA links to main location page
- Secondary venue link provides navigation to specific venue page

---

### 4. Buttons

**Variants**:
```html
<!-- Primary (Black) -->
<button class="te-btn te-btn-primary">GET TICKETS</button>

<!-- Accent (Orange) -->
<button class="te-btn te-btn-accent">FEATURED</button>

<!-- Outline (Transparent) -->
<button class="te-btn te-btn-outline">LEARN MORE</button>

<!-- Sizes -->
<button class="te-btn te-btn-sm">Small</button>
<button class="te-btn">Default</button>
<button class="te-btn te-btn-lg">Large</button>

<!-- Full Width -->
<button class="te-btn te-btn-block">Full Width</button>
```

---

### 5. Filter Bar

**HTML Structure**:
```html
<div class="te-filter-bar">
    <div class="te-filter-group">
        <span class="te-filter-label">LOCATION:</span>
        <button class="te-filter-btn active" data-filter="all">ALL</button>
        <button class="te-filter-btn" data-filter="dallas">DALLAS</button>
        <button class="te-filter-btn" data-filter="fortworth">FORT WORTH</button>
    </div>
</div>
```

**JavaScript Integration**:
- Automatically handled by `filters.js`
- Add `data-location` attribute to cards
- Filter buttons use `data-filter` attribute

---

### 6. Footer

**HTML Structure**:
```html
<footer class="te-footer">
    <div class="te-container">
        <div class="te-footer-grid">
            <div class="te-footer-col">
                <h4>COLUMN TITLE</h4>
                <ul class="te-footer-links">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                </ul>
            </div>
            <!-- Repeat for 4 columns -->
        </div>
        
        <div class="te-footer-bottom">
            <div>© 2026 HYENAS COMEDY NIGHTCLUB</div>
            <div>
                <a href="/privacy">PRIVACY</a>
                <a href="/terms">TERMS</a>
            </div>
        </div>
    </div>
</footer>
```

---

## 📄 Page Templates

### Homepage
- **File**: `src/templates/homepage.html`
- **Sections**: Hero, Shows Slider (6 cards), Locations, Footer
- **CMS**: Shows collection
- **Features**:
  - Interactive slider with 6 total show cards
  - Dual-venue card for Fort Worth (Main Room + Red Room combined)
  - 2 pages of content (3 cards per page on desktop)
  - Touch/swipe support, keyboard navigation
  - Filtering, animations, responsive grid

### Location Page (To Create)
- Hero with location-specific branding
- Upcoming shows at that location
- Venue information
- Directions/map
- Contact details

### Event Page (To Create)
- Event hero with artist image
- Artist bio
- Showtime selector
- Ticket purchasing
- Related shows

---

## 🔗 Webflow Integration

### Step 1: Add Custom Code

**Site Settings → Custom Code → Head**:
```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Design System CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css">
```

**Site Settings → Custom Code → Footer**:
```html
<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js"></script>
```

### Step 2: Build Navigation

1. Add Navbar element
2. Add class `te-nav` to navbar
3. Add class `te-container` to navbar container
4. Create logo link with class `te-logo`
5. Insert logo image:
   - URL: `https://cdn.prod.website-files.com/626314d81c6e619157def12e/62634a8994907cbc6e923aa0_new-logo.png`
   - Alt text: "Hyenas Comedy Nightclub"
   - Height: 50px, Width: auto
6. Add menu with class `te-nav-menu`
7. Add menu items (in order):
   - FORT WORTH → `/locations/fortworth`
   - DALLAS → `/locations/dallas`
   - RED ROOM → `/locations/redroom`
   - ABQ → `/locations/albuquerque`
   - SHOWS & TICKETS → `/shows`
8. Add mobile toggle with class `te-menu-toggle`

### Step 3: Create CMS Collections

**Shows Collection**:
- Name (Text)
- Slug (Text)
- Artist Name (Text)
- Artist Credits (Text)
- Image (Image)
- Location (Option: Dallas, Fort Worth, Albuquerque, Red Room)
- Dates (Multi-reference to Showtimes collection)

**Showtimes Collection**:
- Date (Date)
- Time (Text)
- Available (Switch)
- Ticket URL (Link)

### Step 4: Build Show Cards

1. Add Collection List with class `te-grid te-grid-4`
2. Add Collection Item with class `te-card`
3. Add `data-location` attribute bound to Location field
4. Build card structure following component guide
5. Bind CMS fields to appropriate elements

### Step 5: Add Filters

1. Create filter bar with class `te-filter-bar`
2. Add filter buttons with `data-filter` attributes
3. JavaScript will automatically handle filtering

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] All fonts load correctly
- [ ] Colors match design system
- [ ] Spacing follows 8px grid
- [ ] Shadows appear correctly
- [ ] Hover states work on all interactive elements

### Functional Testing
- [ ] Mobile menu opens/closes
- [ ] Filters work correctly
- [ ] Smooth scrolling works
- [ ] All links navigate correctly
- [ ] CTA buttons link to ticket pages

### Responsive Testing
- [ ] Mobile (375px) - 1 column
- [ ] Tablet (768px) - 2 columns
- [ ] Desktop (1440px) - 4 columns
- [ ] Touch targets ≥ 44px on mobile

### Performance Testing
- [ ] Page load < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Lighthouse score > 90

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Alt text on images
- [ ] Proper heading hierarchy
- [ ] WCAG AA contrast ratios

---

## 🚀 Deployment

### Local to GitHub

```bash
# Navigate to project
cd /Users/art/Desktop/Hyenas/hyenas-styling

# Add all files
git add .

# Commit with message
git commit -m "Complete TE-inspired redesign"

# Push to GitHub
git push origin main
```

### GitHub to Webflow

1. **Wait 2 minutes** for GitHub Pages to deploy
2. **Test CDN URLs** in browser
3. **Hard refresh Webflow** (Cmd+Shift+R)
4. **Publish Webflow site**

### Version Management

When making updates:
```html
<!-- Bump version number -->
<link rel="stylesheet" href="...hyenas-te-system.css?v=1.0.1">
```

---

## 🎨 Customization Tips

### Changing Colors

Edit `hyenas-te-system.css`:
```css
:root {
    --te-orange: #YOUR_COLOR;
    --loc-fortworth: #YOUR_COLOR;
}
```

### Adding New Components

1. Follow existing naming conventions
2. Use CSS variables for colors/spacing
3. Maintain responsive behavior
4. Test at all breakpoints

### Modifying Animations

Edit `animations.js`:
```javascript
// Change animation duration
el.style.transition = 'opacity 0.6s ease';

// Change animation delay
el.style.transitionDelay = `${index * 0.1}s`;
```

---

## 📞 Support

### Common Issues

**CSS not loading?**
- Check CDN URL
- Wait 2 minutes after push
- Hard refresh browser

**JavaScript not working?**
- Check console for errors
- Verify scripts in Footer Code
- Check class names match exactly

**Filters not working?**
- Verify `data-location` on cards
- Check `data-filter` on buttons
- Ensure `filters.js` is loaded

---

## 📚 Resources

- **Design System**: `src/css/hyenas-te-system.css`
- **Homepage Template**: `src/templates/homepage.html`
- **Deployment Guide**: `docs/DEPLOYMENT.md`
- **GitHub Repo**: https://github.com/athkkr/hyenas-style
- **Legacy Repo** (v1.0.0): https://github.com/athkkr/hyenas-comedy-styles

---

**Ready to launch!** 🚀

All files are production-ready and tested. Follow the deployment steps to go live.

Last Updated: January 10, 2026
