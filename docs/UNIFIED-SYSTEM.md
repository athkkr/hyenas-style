# Unified Design System Guide

## 📐 Single Source of Truth

All pages now use **one unified CSS file**: `/src/css/hyenas-te-system.css`

This ensures:
- ✅ Consistent styling across all pages
- ✅ Easy maintenance (update once, apply everywhere)
- ✅ No conflicting styles
- ✅ Smaller file sizes
- ✅ Better performance

---

## 🎯 How It Works

### 1. Main CSS File (`/src/css/hyenas-te-system.css`)

This file contains **everything you need**:

#### Core System
- CSS Variables (colors, spacing, typography)
- Reset styles
- Layout system (container, grid, flex)
- Navigation component
- Hero sections
- Show cards
- Buttons
- Footer
- Animations

#### Utility Classes (NEW!)
- Display utilities (`.block`, `.hidden`)
- Position utilities (`.relative`, `.absolute`)
- Sizing utilities (`.w-full`, `.h-full`)
- Spacing utilities (via CSS variables)
- Hover states (`.hover\:bg-orange`)
- Responsive utilities (`.md\:flex`)

### 2. Page Templates (`/src/templates/`)

Each page template:
- ✅ Links to the main CSS file
- ✅ Uses only design system classes (`.te-*`)
- ✅ Contains minimal page-specific styles
- ❌ NO inline utility CSS
- ❌ NO duplicate styles

---

## 📄 Template Structure

### Standard Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- SINGLE SOURCE OF TRUTH -->
    <link rel="stylesheet" href="../src/css/hyenas-te-system.css">
    
    <style>
        /* ONLY page-specific styles here */
        /* Example: unique background images, special layouts */
    </style>
</head>
<body>
    <!-- Use .te-* classes from design system -->
</body>
</html>
```

---

## 🏗️ Available Templates

### 1. Homepage (`/src/templates/homepage.html`)
- Hero section
- Featured shows
- Location directory
- Email signup
- Footer

### 2. Component Showcase (`/src/templates/component-showcase.html`)
- Visual reference for all components
- Code examples
- Usage guidelines

### 3. Location Page (`/src/templates/location-page.html`) **NEW!**
- Location-specific hero
- Venue information
- Upcoming shows at that location
- Media gallery
- Contact info

---

## 🎨 Using the Design System

### Navigation

```html
<nav class="te-nav">
    <div class="te-nav-inner">
        <a href="/" class="te-logo">Hyenas</a>
        <ul class="te-nav-menu">
            <li><a href="/shows" class="te-nav-link">Shows</a></li>
            <li><a href="/dallas" class="te-nav-link active">Dallas</a></li>
        </ul>
        <button class="te-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>
```

### Hero Section

```html
<section class="te-hero">
    <div class="te-container">
        <div class="te-hero-content">
            <span class="te-hero-tag">Now Showing</span>
            <h1 class="te-hero-title">Hyenas Dallas</h1>
            <p class="te-hero-subtitle">The best comedy in Texas</p>
            <div class="te-hero-actions">
                <a href="#" class="te-btn te-btn-primary te-btn-lg">Get Tickets</a>
                <a href="#" class="te-btn te-btn-outline te-btn-lg">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

### Show Card

```html
<article class="te-card">
    <div class="te-card-header">
        <div class="te-location-badge dallas">Dallas</div>
        <div class="te-ui-dots">#HY-001</div>
    </div>
    <div class="te-image-container">
        <img src="comedian.jpg" alt="Comedian">
        <div class="te-overlay-scan"></div>
    </div>
    <div class="te-content">
        <div class="te-artist-block">
            <h3 class="te-artist-name">Comedian Name</h3>
            <p class="te-artist-credits">Netflix, HBO</p>
        </div>
        <div class="te-schedule-grouped">
            <div class="te-grouped-row">
                <div class="te-date-col">
                    <span class="d-day">FRI</span>
                    <span class="d-num">JAN 24</span>
                </div>
                <div class="te-times-col">
                    <span class="te-time-pill">7:00PM</span>
                    <span class="te-time-pill">9:30PM</span>
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="te-main-cta">Get Tickets</a>
</article>
```

### Grid Layouts

```html
<!-- 3-column grid (responsive) -->
<div class="te-grid te-grid-3 te-gap-8">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>

<!-- Auto-fit grid -->
<div class="te-grid te-grid-auto te-gap-6">
    <!-- Cards will automatically fit -->
</div>
```

### Buttons

```html
<!-- Primary button -->
<button class="te-btn te-btn-primary">Click Me</button>

<!-- Accent button -->
<button class="te-btn te-btn-accent te-btn-lg">Get Tickets</button>

<!-- Outline button -->
<button class="te-btn te-btn-outline">Learn More</button>

<!-- Small button -->
<button class="te-btn te-btn-sm">Details</button>
```

---

## 🔧 Customization

### Changing Colors

Edit `/src/css/hyenas-te-system.css`:

```css
:root {
    --te-orange: #YOUR_COLOR;
    --loc-dallas: #YOUR_COLOR;
}
```

All pages update automatically!

### Changing Spacing

```css
:root {
    --space-4: 20px;  /* Change from 16px */
}
```

All components adjust automatically!

### Adding New Components

1. Add to `/src/css/hyenas-te-system.css`
2. Follow naming convention: `.te-component-name`
3. Use CSS variables
4. Test at all breakpoints
5. Document in component showcase

---

## 📱 Responsive Design

All components are responsive by default:

- **Mobile** (< 768px): 1 column, hamburger menu
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 3-4 columns

### Responsive Utilities

```html
<!-- Hidden on mobile, flex on desktop -->
<div class="hidden md:flex">...</div>

<!-- Full width on mobile, half on desktop -->
<div class="w-full md:w-1/2">...</div>
```

---

## ✅ Best Practices

### DO:
- ✅ Use `.te-*` classes from the design system
- ✅ Use CSS variables for colors and spacing
- ✅ Keep page-specific styles minimal
- ✅ Test at all breakpoints
- ✅ Follow the component showcase examples

### DON'T:
- ❌ Add inline utility CSS to pages
- ❌ Duplicate styles across files
- ❌ Use hardcoded colors or spacing
- ❌ Override design system classes
- ❌ Mix different styling approaches

---

## 🚀 Creating a New Page

1. **Copy a template** from `/src/templates/`
2. **Link the main CSS**:
   ```html
   <link rel="stylesheet" href="../src/css/hyenas-te-system.css">
   ```
3. **Use design system classes** (`.te-*`)
4. **Add page-specific styles** only if needed
5. **Test responsiveness**
6. **Validate HTML**

---

## 📊 File Structure

```
hyenas-styling/
├── src/
│   ├── css/
│   │   └── hyenas-te-system.css    ← SINGLE SOURCE OF TRUTH
│   ├── js/
│   │   ├── navigation.js
│   │   ├── filters.js
│   │   └── animations.js
│   └── templates/
│       ├── homepage.html           ← Uses design system
│       ├── component-showcase.html ← Uses design system
│       └── location-page.html      ← Uses design system (NEW!)
└── docs/
    └── UNIFIED-SYSTEM.md          ← This file
```

---

## 🎓 Learning Path

1. **Study** `/src/templates/component-showcase.html`
2. **Review** available components in `/src/css/hyenas-te-system.css`
3. **Copy** structure from existing templates
4. **Customize** with CSS variables
5. **Test** at all breakpoints

---

## 🐛 Troubleshooting

### Styles not applying?
- Check CSS file path is correct
- Verify class names match exactly (`.te-btn` not `.btn`)
- Clear browser cache
- Check browser console for errors

### Layout breaking on mobile?
- Use responsive grid classes (`.te-grid-3`)
- Test at 375px, 768px, 1024px
- Check for hardcoded widths
- Use CSS variables for spacing

### Components look different?
- Ensure using latest CSS file
- Check for inline style overrides
- Verify CSS variables are defined
- Compare with component showcase

---

## 📞 Support

- **Quick Reference**: See `/docs/QUICK-REFERENCE.md`
- **Component Examples**: See `/src/templates/component-showcase.html`
- **Design Spec**: See `/docs/DESIGN-SPEC.md`

---

**Built for consistency, maintained with ease** 🎭✨
