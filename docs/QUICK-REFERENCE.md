# 🎭 Hyenas TE Design System - Quick Reference

## 🎨 Colors

```css
/* Base */
--te-black: #000000
--te-white: #FFFFFF
--te-off-white: #F4F4F4
--te-gray-light: #E0E0E0

/* Accents */
--te-orange: #FF4D00    /* Primary CTA */
--te-blue: #0044FF      /* Fort Worth */
--te-red: #FF0000       /* Dallas */
--te-green: #00AA00     /* Albuquerque */
```

## 📝 Typography

```css
/* Fonts */
--font-display: 'Inter'        /* Headings */
--font-body: 'Inter'           /* Body */
--font-mono: 'Roboto Mono'     /* Technical */

/* Sizes */
--text-xs: 10px
--text-sm: 12px
--text-base: 14px
--text-md: 16px
--text-lg: 20px
--text-xl: 24px
--text-2xl: 32px
--text-3xl: 40px
--text-4xl: 56px
```

## 📏 Spacing (8px Grid)

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-20: 80px
```

## 🎯 Common Classes

### Layout
```html
<div class="te-container">           <!-- Max-width container -->
<div class="te-grid te-grid-4">      <!-- 4-column grid -->
<div class="te-flex">                <!-- Flexbox -->
<div class="te-flex-col">            <!-- Flex column -->
```

### Buttons
```html
<button class="te-btn te-btn-primary">Primary</button>
<button class="te-btn te-btn-accent">Accent</button>
<button class="te-btn te-btn-outline">Outline</button>
<button class="te-btn te-btn-lg">Large</button>
<button class="te-btn te-btn-block">Full Width</button>
```

### Show Card
```html
<article class="te-card" data-location="fortworth">
    <div class="te-card-header">
        <div class="te-location-badge fort-worth">
            <span class="loc-id">FW-TX</span>
            <span class="loc-name">FORT WORTH</span>
        </div>
        <div class="te-ui-dots">UPCOMING</div>
    </div>
    <a href="#" class="te-image-container">
        <img src="..." alt="...">
        <div class="te-overlay-scan"></div>
    </a>
    <div class="te-content">
        <div class="te-artist-block">
            <h3 class="te-artist-name">NAME</h3>
            <p class="te-artist-credits">CREDITS</p>
        </div>
        <div class="te-schedule-grouped">
            <div class="te-grouped-row">
                <div class="te-date-col">
                    <span class="d-day">FRI</span>
                    <span class="d-num">JAN 10</span>
                </div>
                <div class="te-times-col">
                    <span class="te-time-pill">8:00PM</span>
                </div>
            </div>
        </div>
        <a href="#" class="te-main-cta">GET TICKETS</a>
    </div>
</article>
```

### Location Badges
```html
<div class="te-location-badge fort-worth">...</div>  <!-- Blue -->
<div class="te-location-badge dallas">...</div>      <!-- Red -->
<div class="te-location-badge albuquerque">...</div> <!-- Orange -->
<div class="te-location-badge red-room">...</div>    <!-- Dark Red -->
```

### Navigation
```html
<nav class="te-nav">
    <div class="te-container">
        <div class="te-nav-inner">
            <a href="/" class="te-logo">HYENAS</a>
            <button class="te-menu-toggle">
                <span></span><span></span><span></span>
            </button>
            <ul class="te-nav-menu">
                <li><a href="#" class="te-nav-link">LINK</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### Hero
```html
<section class="te-hero">
    <div class="te-container">
        <div class="te-hero-content">
            <div class="te-hero-tag">TAG</div>
            <h1 class="te-hero-title">TITLE</h1>
            <p class="te-hero-subtitle">Subtitle</p>
            <div class="te-hero-actions">
                <a href="#" class="te-btn te-btn-accent te-btn-lg">CTA</a>
            </div>
        </div>
    </div>
</section>
```

### Filter Bar
```html
<div class="te-filter-bar">
    <div class="te-filter-group">
        <span class="te-filter-label">LABEL:</span>
        <button class="te-filter-btn active" data-filter="all">ALL</button>
        <button class="te-filter-btn" data-filter="value">VALUE</button>
    </div>
</div>
```

### Interactive Slider (Added 2026-01-10)
```html
<div class="te-slider-container">
    <div class="te-slider">
        <div class="te-slider-track">
            <!-- Show cards here -->
        </div>
    </div>
    <!-- Desktop: Arrow buttons -->
    <button class="te-slider-btn te-slider-btn-prev">←</button>
    <button class="te-slider-btn te-slider-btn-next">→</button>
    <!-- Mobile: Dot indicators -->
    <div class="te-slider-dots"></div>
</div>
```

**Features:**
- CSS scroll-snap for smooth scrolling
- Desktop: Arrow navigation (← →)
- Mobile: Dot indicators
- Keyboard: Arrow Left/Right keys
- Auto-hide navigation hints
- Touch/swipe enabled

## 📱 Breakpoints

```css
/* Mobile First */
Default: 320px+

/* Tablet */
@media (max-width: 1024px) {
    /* 2 columns */
}

/* Mobile */
@media (max-width: 640px) {
    /* 1 column */
}
```

## 🚀 CDN Links

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css">
```

### JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js"></script>
```

### Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

### Interactive Slider (Added 2026-01-10)
```html
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/slider.js"></script>
```

## 🔧 Utility Classes

```html
<!-- Margin -->
<div class="mt-4">    <!-- margin-top: 16px -->
<div class="mb-6">    <!-- margin-bottom: 24px -->

<!-- Text -->
<p class="text-center">     <!-- text-align: center -->
<p class="text-uppercase">  <!-- text-transform: uppercase -->
<p class="font-bold">       <!-- font-weight: 700 -->

<!-- Display -->
<div class="hidden">   <!-- display: none -->
<div class="block">    <!-- display: block -->
<div class="flex">     <!-- display: flex -->
<div class="grid">     <!-- display: grid -->

<!-- Position (Added 2026-01-10) -->
<div class="relative">  <!-- position: relative -->
<div class="absolute">  <!-- position: absolute -->

<!-- Sizing (Added 2026-01-10) -->
<div class="w-full">    <!-- width: 100% -->
<div class="h-full">    <!-- height: 100% -->

<!-- Text (Enhanced 2026-01-10) -->
<p class="line-clamp-2">  <!-- max 2 lines with ellipsis -->

<!-- Responsive (Added 2026-01-10) -->
<div class="md:flex">    <!-- flex on medium+ screens -->
<div class="md:hidden">   <!-- hide on medium+ screens -->

<!-- Interactive States (Added 2026-01-10) -->
<button class="hover:bg-orange">  <!-- orange bg on hover -->
```

## 📊 Effects

```css
/* Shadows */
--shadow-brutal-sm: 4px 4px 0px rgba(0, 0, 0, 0.1)
--shadow-brutal: 6px 6px 0px rgba(0, 0, 0, 0.15)
--shadow-brutal-lg: 8px 8px 0px rgba(0, 0, 0, 0.2)

/* Borders */
--border-width: 1px
--border-thick: 2px
--border-heavy: 3px

/* Radius */
--radius-sm: 3px
--radius-md: 6px
--radius-lg: 12px
```

## ✅ Checklist

### Before Deployment
- [ ] All fonts loaded
- [ ] Colors correct
- [ ] Spacing consistent
- [ ] Mobile menu works
- [ ] Filters functional
- [ ] Slider navigation works (Added 2026-01-10)
- [ ] Navigation hints auto-hide (Added 2026-01-10)
- [ ] Links work
- [ ] Images optimized
- [ ] No console errors

### Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari
- [ ] 320px width
- [ ] 768px width
- [ ] 1440px width

### SEO
- [ ] Meta tags
- [ ] Alt text
- [ ] Heading hierarchy
- [ ] Schema markup
- [ ] Page speed

## 🐛 Common Issues

**CSS not loading?**
- Check CDN URL
- Wait 2 minutes
- Hard refresh (Cmd+Shift+R)

**JS not working?**
- Check Footer Code placement
- Verify class names
- Check console errors

**Styles wrong?**
- Check Webflow overrides
- Verify CSS variables
- Clear cache

## 📞 Quick Links

- **Homepage**: `src/templates/homepage.html`
- **Showcase**: `src/templates/component-showcase.html`
- **CSS**: `src/css/hyenas-te-system.css`
- **Docs**: `docs/IMPLEMENTATION.md`

---

**Version 2.1.0** | Last Updated: January 10, 2026

**Latest Changes (2026-01-10):**
- Interactive slider component
- Navigation hints (auto-hide)
- Enhanced utility classes
- Text truncation support
