# 🎭 Hyenas Comedy Club - Complete Website Redesign

## Teenage Engineering-Inspired Design System

This is a complete website redesign for Hyenas Comedy Clubs featuring a bold, technical aesthetic inspired by Teenage Engineering's design language.

---

## 📁 Project Structure

```
hyenas-styling/
├── src/
│   ├── css/
│   │   └── hyenas-te-system.css    # Complete design system
│   ├── js/
│   │   ├── navigation.js           # Mobile menu & nav behavior
│   │   ├── filters.js              # Show filtering & search
│   │   ├── animations.js           # Scroll animations & effects
│   │   └── slider.js               # Interactive slider (v2.1.0)
│   └── templates/
│       ├── homepage.html           # Main homepage (6-card slider)
│       ├── location-page.html      # Location detail page
│       └── event-page.html         # Single event page
├── docs/
│   └── DEPLOYMENT.md               # This file
└── README.md
```

---

## 🎨 Design Features

### Visual Aesthetic
- **Teenage Engineering Inspired**: Bold colors, thick borders, brutal shadows
- **Technical Typography**: Roboto Mono for technical elements, Inter for headings
- **High Contrast**: Black & white base with vibrant accent colors
- **Scanline Effects**: CRT-inspired overlay on images
- **Brutal Shadows**: Offset box shadows for depth

### Color System
```css
--te-black: #000000
--te-white: #FFFFFF
--te-orange: #FF4D00  (Primary accent)
--te-blue: #0044FF    (Fort Worth)
--te-red: #FF0000     (Dallas)
--te-orange: #FF4D00  (Albuquerque)
```

### Components
1. **Navigation**: Sticky nav with Hyenas logo and location-based menu
2. **Hero Section**: Full-width with scanline effect
3. **Show Cards**: Grouped showtime variant with location badges
4. **Dual-Venue Card**: Combined Fort Worth Main Room + Red Room shows (v2.1.0)
5. **Interactive Slider**: 6-card slider with touch/swipe support (v2.1.0)
6. **Filter Bar**: Location and date filtering
7. **Footer**: Multi-column with links
8. **Buttons**: Multiple variants (primary, accent, outline)
9. **Badges**: Location and status indicators

### Navigation Details
- **Logo**: Hyenas Comedy Nightclub image (50px height)
- **Menu Items**: Fort Worth, Dallas, Red Room, ABQ, Shows & Tickets
- **Mobile**: Hamburger menu (< 768px)
- **Features**: Sticky positioning, active link indicators, smooth transitions

---

## 🚀 Implementation Steps

### Step 1: Local Development Setup

1. **Navigate to project directory**:
   ```bash
   cd /Users/art/Desktop/Hyenas/hyenas-styling
   ```

2. **Test locally**:
   - Open `src/templates/homepage.html` in your browser
   - Test all breakpoints (mobile: 320px, tablet: 768px, desktop: 1024px+)
   - Verify all interactions work

3. **Validate code**:
   ```bash
   # Optional: Run HTML validation
   # Optional: Run CSS linting
   ```

### Step 2: GitHub Repository Setup

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TE-inspired redesign"
   ```

2. **Push to GitHub** (if not already connected):
   ```bash
   git remote add origin https://github.com/athkkr/hyenas-style.git
   git branch -M main
   git push -u origin main
   ```

   **Note**: Repository renamed from `hyenas-comedy-styles` (v1.0.0) to `hyenas-style` (v2.0.0+)

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/src` or `/` (depending on your preference)
   - Save

### Step 3: CDN Setup for Webflow

Once GitHub Pages is deployed, your files will be available at:

**CSS File**:
```
https://athkkr.github.io/hyenas-style/src/css/hyenas-te-system.css
```

**JavaScript Files**:
```
https://athkkr.github.io/hyenas-style/src/js/navigation.js
https://athkkr.github.io/hyenas-style/src/js/filters.js
https://athkkr.github.io/hyenas-style/src/js/animations.js
https://athkkr.github.io/hyenas-style/src/js/slider.js
```

**Alternative CDN (jsDelivr)** - Faster with caching:
```
https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css
https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js
https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js
https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js
https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/slider.js
```

### Step 4: Webflow Integration

#### A. Add to Site-Wide Custom Code

1. **Go to Webflow Project Settings** → Custom Code → Head Code

2. **Add Fonts**:
   ```html
   <!-- Fonts -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">
   ```

3. **Add CSS**:
   ```html
   <!-- Hyenas TE Design System -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css">
   ```

4. **Go to Footer Code** and add JavaScript:
   ```html
   <!-- Hyenas TE Scripts -->
   <script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/slider.js"></script>
   ```

#### B. Build Pages in Webflow

1. **Homepage**:
   - Create sections matching `homepage.html` structure
   - Add class names exactly as shown (e.g., `te-nav`, `te-hero`, `te-card`)
   - Use Webflow CMS for dynamic show data

2. **Navigation**:
   - Add class `te-nav` to nav element
   - Add class `te-logo` to logo link
   - Insert logo image: `https://cdn.prod.website-files.com/626314d81c6e619157def12e/62634a8994907cbc6e923aa0_new-logo.png`
   - Logo should be 50px height with auto width
   - Add class `te-nav-menu` to menu list
   - Add class `te-menu-toggle` to mobile toggle button
   - Menu items (in order):
     * FORT WORTH → `/locations/fortworth`
     * DALLAS → `/locations/dallas`
     * RED ROOM → `/locations/redroom`
     * ABQ → `/locations/albuquerque`
     * SHOWS & TICKETS → `/shows`

3. **Show Cards**:
   - Create CMS collection for "Shows"
   - Add fields: artist_name, artist_credits, image, location, dates, times
   - Use collection list with class `te-slider-container`
   - Each item has class `te-card`
   - **Homepage slider**: Include 6 total cards (2 pages of 3 cards each on desktop)
     * Card 1: Fort Worth dual-venue (use `.te-card-dual-venue` class)
     * Cards 2-3: Dallas, Albuquerque
     * Cards 4-6: Additional upcoming shows

4. **Dual-Venue Cards** (v2.1.0):
   - Use `.te-card-dual-venue` wrapper class
   - Add `.te-location-badge-dual` for split badge
   - Primary show: Full card treatment
   - Secondary show: `.te-secondary-show` callout
   - Example: Fort Worth Main Room + Red Room combined

5. **Location Badges**:
   - Add conditional visibility based on location field
   - Classes: `fort-worth`, `dallas`, `albuquerque`, `red-room`

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px (1 column)
- **Tablet**: 641px - 1024px (2 columns)
- **Desktop**: 1025px+ (4 columns)

### Testing Checklist
- [ ] Test on iPhone SE (375px)
- [ ] Test on iPad (768px)
- [ ] Test on desktop (1440px)
- [ ] Test mobile menu toggle
- [ ] Test touch targets (min 44x44px)
- [ ] Test landscape orientation
- [ ] Test with slow 3G connection

---

## 🎯 SEO Implementation

### Meta Tags (Add to each page)

```html
<!-- Primary Meta Tags -->
<title>Hyenas Comedy Nightclub | Live Stand-Up Comedy</title>
<meta name="title" content="Hyenas Comedy Nightclub | Live Stand-Up Comedy">
<meta name="description" content="Experience the best live stand-up comedy at Hyenas Comedy Nightclub. Three locations in Dallas, Fort Worth, and Albuquerque.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://hyenascomedynightclub.com/">
<meta property="og:title" content="Hyenas Comedy Nightclub | Live Stand-Up Comedy">
<meta property="og:description" content="The funniest venues in Texas and New Mexico.">
<meta property="og:image" content="https://hyenascomedynightclub.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://hyenascomedynightclub.com/">
<meta property="twitter:title" content="Hyenas Comedy Nightclub">
<meta property="twitter:description" content="Live stand-up comedy in Dallas, Fort Worth & Albuquerque">
<meta property="twitter:image" content="https://hyenascomedynightclub.com/og-image.jpg">
```

### Structured Data (Schema.org)

Add to each event page:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ComedyEvent",
  "name": "David Koechner Live",
  "startDate": "2026-01-09T20:00",
  "endDate": "2026-01-09T22:00",
  "location": {
    "@type": "Place",
    "name": "Hyenas Comedy Nightclub - Fort Worth",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "604 Main St",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76102"
    }
  },
  "performer": {
    "@type": "Person",
    "name": "David Koechner"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://hyenascomedynightclub.com/events/david-koechner",
    "price": "25",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

---

## 🔧 Customization Guide

### Changing Colors

Edit `hyenas-te-system.css`:

```css
:root {
    --te-orange: #FF4D00;  /* Change primary accent */
    --loc-fortworth: #0044FF;  /* Change Fort Worth color */
    /* etc. */
}
```

### Adding New Components

1. Follow BEM naming convention
2. Use existing CSS variables
3. Maintain 8px spacing grid
4. Test at all breakpoints

### Updating Content

**Via Webflow CMS**:
1. Go to CMS Collections
2. Update "Shows" collection
3. Publish changes

**Via Code**:
1. Edit files locally
2. Commit to GitHub
3. Wait 1-2 minutes for CDN update
4. Hard refresh Webflow site (Cmd+Shift+R)

---

## 🧪 Testing Checklist

### Functionality
- [ ] Mobile menu opens/closes
- [ ] Location filter works
- [ ] Date filter works
- [ ] Smooth scroll to sections
- [ ] All links work
- [ ] CTA buttons link correctly
- [ ] Images load properly
- [ ] Hover states work

### Performance
- [ ] Page load < 3 seconds
- [ ] Images optimized
- [ ] CSS minified for production
- [ ] JavaScript loads async
- [ ] No console errors

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed
- [ ] Color contrast passes WCAG AA
- [ ] Screen reader tested

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🚨 Troubleshooting

### CSS Not Loading
1. Check CDN URL is correct
2. Wait 2 minutes after GitHub push
3. Hard refresh browser (Cmd+Shift+R)
4. Check browser console for 404 errors
5. Verify GitHub Pages is enabled

### JavaScript Not Working
1. Check console for errors
2. Verify scripts load in correct order
3. Ensure scripts are in Footer Code (not Head)
4. Check for Webflow class name conflicts

### Styles Look Wrong
1. Verify Webflow isn't overriding with inline styles
2. Check specificity conflicts
3. Use browser DevTools to inspect elements
4. Clear Webflow cache and republish

### Mobile Menu Not Working
1. Verify `te-menu-toggle` class exists
2. Check `navigation.js` is loaded
3. Test in incognito mode
4. Check for JavaScript errors

---

## 📈 Performance Optimization

### Production Checklist
- [ ] Minify CSS (use cssnano or similar)
- [ ] Minify JavaScript (use terser)
- [ ] Optimize images (WebP format, max 200KB)
- [ ] Enable CDN caching
- [ ] Use lazy loading for images
- [ ] Defer non-critical JavaScript
- [ ] Enable gzip compression

### Minification Commands

```bash
# CSS Minification
npx cssnano src/css/hyenas-te-system.css src/css/hyenas-te-system.min.css

# JavaScript Minification
npx terser src/js/navigation.js -o src/js/navigation.min.js
npx terser src/js/filters.js -o src/js/filters.min.js
npx terser src/js/animations.js -o src/js/animations.min.js
```

Then update Webflow to use `.min.css` and `.min.js` versions.

---

## 🔄 Update Workflow

### Making Changes

1. **Edit locally**:
   ```bash
   cd /Users/art/Desktop/Hyenas/hyenas-styling
   # Edit files
   ```

2. **Test locally**:
   - Open HTML in browser
   - Verify changes work

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

4. **Update Webflow** (if needed):
   - Bump version number in CDN URL: `?v=1.0.1`
   - Or wait 5 minutes for CDN cache to clear

5. **Test live site**:
   - Hard refresh (Cmd+Shift+R)
   - Test on multiple devices

---

## 📞 Support & Resources

### Documentation
- [Webflow University](https://university.webflow.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [jsDelivr CDN Docs](https://www.jsdelivr.com/)

### Design References
- [Teenage Engineering](https://teenage.engineering/)
- [Brutalist Web Design](https://brutalistwebsites.com/)

---

## 📄 License

Proprietary - Hyenas Comedy Club  
© 2026 All Rights Reserved

---

**Built with care for the funniest venues in Texas and New Mexico** 🎭✨

Last Updated: January 10, 2026 | Version 2.1.0
