# 🎭 Hyenas Comedy Club - Complete Website Redesign

**Teenage Engineering-Inspired Design System**

A bold, technical, and energetic complete website redesign for Hyenas Comedy Clubs featuring a Teenage Engineering-inspired aesthetic with brutal shadows, high contrast, and industrial typography.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://athkkr.github.io/hyenas-style/)
[![Version](https://img.shields.io/badge/Version-2.0.0-purple)](.)
[![License](https://img.shields.io/badge/License-Proprietary-red)](.)

---

## 🎨 Design Philosophy

**Teenage Engineering Aesthetic:**
- ✨ Bold, punchy colors with maximum contrast
- 🎯 Brutal borders and offset shadows
- 🔧 Industrial, technical typography
- ⚡ Energetic interactions and micro-animations
- 📱 Mobile-first responsive design
- ♿ WCAG AA accessible

---

## 🚀 Quick Start

### For Webflow Integration

Add to **Site Settings → Custom Code → Head**:

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Hyenas TE Design System -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css">
```

Add to **Site Settings → Custom Code → Footer**:

```html
<!-- Hyenas TE Scripts -->
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/navigation.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/filters.js"></script>
<script src="https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/js/animations.js"></script>
```

---

## 📁 Project Structure

```
hyenas-styling/
├── src/
│   ├── css/
│   │   └── hyenas-te-system.css       # Complete design system (1,200+ lines)
│   ├── js/
│   │   ├── navigation.js              # Mobile menu & navigation
│   │   ├── filters.js                 # Show filtering & search
│   │   └── animations.js              # Scroll animations & effects
│   └── templates/
│       └── homepage.html              # Complete homepage template
├── docs/
│   ├── DEPLOYMENT.md                  # Deployment guide
│   └── IMPLEMENTATION.md              # Implementation guide
└── README.md                          # This file
```

---

## 🎨 Design System

### Color Palette

```css
/* Base Colors */
--te-black: #000000       /* Primary text, borders */
--te-white: #FFFFFF       /* Backgrounds, light text */
--te-off-white: #F4F4F4   /* Subtle backgrounds */
--te-gray-light: #E0E0E0  /* Borders, dividers */

/* Accent Colors */
--te-orange: #FF4D00      /* Primary accent, CTAs */
--te-blue: #0044FF        /* Fort Worth location */
--te-red: #FF0000         /* Dallas location */
--te-green: #00AA00       /* Success states */
```

### Typography

**Fonts:**
- **Display/Headings**: Inter (700, 900 weight)
- **Body**: Inter (400, 500, 600 weight)
- **Technical**: Roboto Mono (400, 500, 700 weight)

**Type Scale:**
```css
--text-xs: 10px    /* Labels, meta */
--text-sm: 12px    /* Captions */
--text-base: 14px  /* Body text */
--text-md: 16px    /* Subheadings */
--text-lg: 20px    /* Card titles */
--text-xl: 24px    /* Section titles */
--text-2xl: 32px   /* Page titles */
--text-3xl: 40px   /* Hero titles */
--text-4xl: 56px   /* Large hero */
```

### Spacing (8px Grid)

```css
--space-1: 4px     --space-2: 8px      --space-3: 12px
--space-4: 16px    --space-5: 20px     --space-6: 24px
--space-8: 32px    --space-10: 40px    --space-12: 48px
--space-16: 64px   --space-20: 80px    --space-24: 96px
```

### Effects

**Brutal Shadows:**
```css
--shadow-brutal-sm: 4px 4px 0px rgba(0, 0, 0, 0.1)
--shadow-brutal: 6px 6px 0px rgba(0, 0, 0, 0.15)
--shadow-brutal-lg: 8px 8px 0px rgba(0, 0, 0, 0.2)
```

**Border Radius:**
```css
--radius-none: 0px
--radius-sm: 3px
--radius-md: 6px
--radius-lg: 12px
```

---

## 🧩 Components

### 1. Navigation
- Sticky header with shadow on scroll
- Mobile hamburger menu
- Smooth scroll to sections
- Active link highlighting

### 2. Hero Section
- Full-width with scanline effect
- Dual CTA buttons
- Responsive typography
- Parallax scroll effect

### 3. Show Cards (Grouped Variant)
- Location-specific color badges
- Grouped showtimes by date
- Hover lift effect
- Scanline overlay on images
- Single "Get Tickets" CTA

### 4. Filter Bar
- Location filtering
- Date filtering
- Active state indicators
- Smooth transitions

### 5. Buttons
- Primary (Black)
- Accent (Orange)
- Outline (Transparent)
- Multiple sizes (sm, default, lg)
- Full-width option

### 6. Footer
- 4-column grid (responsive)
- Social links
- Location links
- Legal links

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px (1 column)
- **Tablet**: 641px - 1024px (2 columns)
- **Desktop**: 1025px+ (4 columns)

### Mobile Features
- Hamburger menu
- Touch-optimized (44px min targets)
- Stacked layouts
- Full-width buttons

---

## 🎯 Key Features

### Performance
- ✅ Lightweight CSS (~21KB unminified)
- ✅ Optimized JavaScript
- ✅ Lazy loading images
- ✅ CDN delivery
- ✅ Mobile-first approach

### Accessibility
- ✅ WCAG AA compliant
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Reduced motion support
- ✅ Semantic HTML

### SEO
- ✅ Semantic markup
- ✅ Proper heading hierarchy
- ✅ Meta tag support
- ✅ Schema.org structured data
- ✅ Fast page loads

---

## 📚 Documentation

- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Complete deployment guide
- **[IMPLEMENTATION.md](docs/IMPLEMENTATION.md)** - Component implementation guide
- **[homepage.html](src/templates/homepage.html)** - Full homepage template

---

## 🔧 Development Workflow

### Local Development

```bash
# Navigate to project
cd /Users/art/Desktop/Hyenas/hyenas-styling

# Open homepage in browser
open src/templates/homepage.html

# Edit files
# - CSS: src/css/hyenas-te-system.css
# - JS: src/js/*.js
# - HTML: src/templates/*.html
```

### Deploy to GitHub

```bash
# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Wait 2 minutes for GitHub Pages/CDN to update
```

### Update Webflow

1. Bump version in CDN URL: `?v=2.0.1`
2. Or wait 5 minutes for cache to clear
3. Hard refresh (Cmd+Shift+R)
4. Publish Webflow site

---

## 🎬 Usage Examples

### Basic Show Card

```html
<article class="te-card" data-location="fortworth">
    <div class="te-card-header">
        <div class="te-location-badge fort-worth">
            <span class="loc-id">FW-TX</span>
            <span class="loc-name">FORT WORTH</span>
        </div>
        <div class="te-ui-dots">UPCOMING</div>
    </div>
    
    <a href="/event" class="te-image-container">
        <img src="comedian.jpg" alt="Comedian Name">
        <div class="te-overlay-scan"></div>
    </a>
    
    <div class="te-content">
        <div class="te-artist-block">
            <h3 class="te-artist-name">COMEDIAN NAME</h3>
            <p class="te-artist-credits">CREDITS / SHOWS</p>
        </div>
        
        <div class="te-schedule-grouped">
            <div class="te-grouped-row">
                <div class="te-date-col">
                    <span class="d-day">FRI</span>
                    <span class="d-num">JAN 10</span>
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

### Button Variants

```html
<!-- Primary -->
<button class="te-btn te-btn-primary">GET TICKETS</button>

<!-- Accent -->
<button class="te-btn te-btn-accent">FEATURED SHOW</button>

<!-- Outline -->
<button class="te-btn te-btn-outline">LEARN MORE</button>

<!-- Large -->
<button class="te-btn te-btn-primary te-btn-lg">LARGE BUTTON</button>
```

---

## 🧪 Testing

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

### Testing Checklist
- [ ] All fonts load
- [ ] Colors match design
- [ ] Mobile menu works
- [ ] Filters work
- [ ] Animations smooth
- [ ] Links work
- [ ] Responsive at all breakpoints
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🚨 Troubleshooting

### CSS Not Loading?
1. Check CDN URL is correct
2. Wait 2 minutes after GitHub push
3. Hard refresh (Cmd+Shift+R)
4. Check browser console for errors

### JavaScript Not Working?
1. Verify scripts in Footer Code
2. Check console for errors
3. Ensure class names match exactly
4. Test in incognito mode

### Styles Look Wrong?
1. Check for Webflow inline style overrides
2. Verify CSS variables are defined
3. Use DevTools to inspect elements
4. Clear cache and republish

---

## 📈 Performance

### Optimization
- CSS: ~21KB unminified, ~15KB minified
- JavaScript: ~12KB total
- No external dependencies (except fonts)
- Efficient selectors
- Mobile-first reduces overrides

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## 🎓 Best Practices

### DO:
✅ Use CSS variables for all values  
✅ Follow 8px spacing grid  
✅ Test at all breakpoints  
✅ Bump version after changes  
✅ Use semantic HTML  
✅ Optimize images  

### DON'T:
❌ Use hardcoded colors/spacing  
❌ Override with `!important`  
❌ Add inline styles  
❌ Nest selectors > 3 levels  
❌ Forget mobile testing  
❌ Deploy without testing  

---

## 📞 Support & Resources

### Documentation
- [Webflow University](https://university.webflow.com/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [jsDelivr CDN](https://www.jsdelivr.com/)

### Design Inspiration
- [Teenage Engineering](https://teenage.engineering/)
- [Brutalist Websites](https://brutalistwebsites.com/)

---

## 🗺️ Roadmap

### ✅ Completed (v2.0.0)
- Complete design system CSS
- Navigation component
- Hero section
- Show cards (grouped variant)
- Filter system
- Footer component
- JavaScript functionality
- Homepage template
- Documentation

### 🔜 Coming Soon
- [ ] Location page template
- [ ] Event detail page template
- [ ] Calendar view
- [ ] Search functionality
- [ ] Newsletter signup
- [ ] Dark mode variant

---

## 📄 License

Proprietary - Hyenas Comedy Club  
© 2026 All Rights Reserved

---

## 🎉 Credits

**Design System**: Inspired by Teenage Engineering  
**Developer**: Anooj Krishnan  
**Fonts**: Inter & Roboto Mono (Google Fonts)  
**Hosted**: GitHub Pages + jsDelivr CDN  
**Integrated**: Webflow CMS  

---

## 🌟 Features Highlight

### What Makes This Design Special

1. **Teenage Engineering Aesthetic**
   - Industrial, technical design language
   - Bold typography and high contrast
   - Brutal shadows and sharp edges

2. **Grouped Showtime Cards**
   - Innovative date grouping
   - Multiple showtimes per date
   - Single CTA for better UX

3. **Location-Specific Branding**
   - Color-coded badges
   - Unique identifiers
   - Consistent across all pages

4. **Performance Optimized**
   - Lightweight and fast
   - Mobile-first approach
   - CDN delivery

5. **Fully Responsive**
   - Works on all devices
   - Touch-optimized
   - Accessible to all users

---

**Built with care for the funniest venues in Texas and New Mexico** 🎭✨

**Version 2.0.0** | Last Updated: January 10, 2026

---

## 🚀 Get Started Now

1. **Read**: [IMPLEMENTATION.md](docs/IMPLEMENTATION.md)
2. **Deploy**: [DEPLOYMENT.md](docs/DEPLOYMENT.md)
3. **View**: [Homepage Template](src/templates/homepage.html)
4. **Customize**: [Design System CSS](src/css/hyenas-te-system.css)

**Everything is ready to deploy!** 🎉
