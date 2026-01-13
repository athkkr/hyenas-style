# Hyenas Comedy Club: Homepage Wireframe Specification

**Version:** 1.0.0
**Created:** January 3, 2026
**Status:** Ready for Implementation

---

## Overview

This document provides detailed wireframe specifications for each homepage section, translating the approved homepage structure into implementable designs using the Hyenas Design System.

---

## Section Summary

| Order | Section | Background | Height Est. |
|-------|---------|------------|-------------|
| 1 | Hero | --hyenas-purple | 400-500px |
| 2 | Upcoming Events | --white | Auto |
| 3 | Featured by Location | --gray-100 | Auto |
| 4 | Location Directory | --white | Auto |
| 5 | Trust & Social Proof | --hyenas-purple-pale | 300-400px |
| 6 | Email Signup | --black | 250-300px |
| 7 | Content Hub | --white | Auto |
| 8 | Footer | --black | Auto |

---

## Section 1: Hero - Brand Identity + Immediate Event Access

### Layout
- **Background:** --hyenas-purple (full-width)
- **Container:** .container (1280px max-width, centered)
- **Alignment:** Centered (flex-col, items-center, text-center)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                    [--hyenas-purple bg]                      │
│                                                             │
│                    ┌─────────────┐                          │
│                    │ NOW SHOWING │  ← .badge.badge-yellow   │
│                    └─────────────┘     .animate-bounce      │
│                                                             │
│              Laugh Until It Hurts                           │
│              ← H1 .text-4xl .gradient-text                  │
│                                                             │
│         Four legendary venues. Endless laughs.              │
│         The best comedy in Texas and New Mexico.            │
│         ← p .text-xl (max-width: 600px)                     │
│                                                             │
│         ┌──────────────┐  ┌──────────────┐                  │
│         │ Find Shows   │  │ Our Venues   │                  │
│         └──────────────┘  └──────────────┘                  │
│         ← .btn.btn-accent   .btn.btn-secondary              │
│           .btn-lg           .btn-lg (white border)          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding (vertical) | --space-10 | 64px |
| Badge to H1 | --space-4 | 16px |
| H1 to subtitle | --space-4 | 16px |
| Subtitle to CTAs | --space-6 | 32px |
| Between CTAs | --space-4 | 16px |

### Responsive Behavior
| Breakpoint | Changes |
|------------|---------|
| Desktop (1024px+) | As specified above |
| Tablet (768px) | Padding reduces to --space-8 |
| Mobile (<640px) | H1 → .text-2xl, CTAs stack vertically (.btn-block), padding → --space-6 |

---

## Section 2: Upcoming Events - Next 7 Days

### Layout
- **Background:** --white
- **Container:** .container (1280px max-width)
- **Grid:** .grid.grid-auto (min 280px columns)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│                    Upcoming Shows                           │
│                    ← H2 .text-3xl (centered)                │
│                                                             │
│     The funniest people on the planet, coming soon          │
│     ← p .text-base.text-gray (centered)                     │
│                                                             │
│  [← Interactive Slider with Navigation Hints →]            │
│  ┌────────────────────────────────────────────────────┐    │
│  │ [←]  ┌─────────┐  ┌─────────┐  ┌─────────┐  [→]  │    │
│  │      │ Show    │  │ Show    │  │ Show    │       │    │
│  │      │ Card    │  │ Card    │  │ Card    │       │    │
│  │      │   1     │  │   2     │  │   3     │       │    │
│  │      └─────────┘  └─────────┘  └─────────┘       │    │
│  │  ← Desktop: 3 visible cards, arrow navigation     │    │
│  │  ← Mobile: 1 card per view, dot indicators        │    │
│  │  ← Touch/swipe enabled, keyboard arrow support    │    │
│  │  ← 9 show cards total in demonstration slider     │    │
│  └────────────────────────────────────────────────────┘    │
│  ← .te-slider-container with CSS scroll-snap               │
│                                                             │
│  [💡 Navigation Hints - Auto-hide after 5s]                │
│  • Desktop: Pulsing arrow on next button                   │
│  • Mobile: "Swipe to view more ⟷" message                 │
│                                                             │
│                  ┌────────────────┐                         │
│                  │ View All Shows │                         │
│                  └────────────────┘                         │
│                  ← .btn.btn-secondary.btn-lg                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Updated Show Card Component (2026-01-10)
**Enhancements:**
* Artist name truncation: 2-line max with ellipsis
* Word-break handling for long names
* Improved responsive grid layout

```html
<article class="show-card">
  <div class="show-card__image">
    <img src="..." alt="Comedian Name">
    <span class="show-card__badge">SOLD OUT</span>
  </div>
  <div class="show-card__content">
    <div class="show-card__date">FRI, JAN 10 • 8:00 PM</div>
    <h3 class="show-card__title">Comedian Name</h3>
    <div class="show-card__venue">📍 Hyenas Dallas</div>
    <div class="show-card__footer">
      <span class="show-card__price">$25</span>
      <a href="#" class="btn btn-primary btn-sm">Get Tickets</a>
    </div>
  </div>
</article>
```

### Slider Implementation Details
**Features Added:** January 10, 2026

* **Scroll Behavior:** CSS scroll-snap for native smooth scrolling
* **Desktop Navigation:** Arrow buttons (← →) with hover effects  
* **Mobile Navigation:** Dot indicators below slider
* **Keyboard Support:** Left/Right arrow keys
* **Responsive Columns:** 
  - Desktop (1024px+): 3 cards visible
  - Tablet (768px): 2 cards visible  
  - Mobile (<640px): 1 card visible
* **JavaScript:** `/src/js/slider.js` controller (~200 lines)
* **Accessibility:** ARIA labels, keyboard navigation, screen reader support

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to grid | --space-8 | 48px |
| Grid gap | --space-6 | 32px |
| Grid to CTA | --space-8 | 48px |

### Responsive Behavior
| Breakpoint | Slider Columns | Card Grid |
|------------|----------------|------------|
| Desktop (1024px+) | 3 visible cards | 4 columns (fallback) |
| Tablet (768px) | 2 visible cards | 2 columns |
| Mobile (<640px) | 1 visible card | 1 column |

---

## Section 3: Featured Events by Location

### Layout
- **Background:** --gray-100
- **Container:** .container (1280px max-width)
- **Structure:** Stacked location groups

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                    [--gray-100 bg]                           │
│                                                             │
│                  Featured by Venue                          │
│                  ← H2 .text-3xl (centered)                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Hyenas Dallas                    See All Dallas →   │   │
│  │ ← H3 .text-2xl                   ← text link        │   │
│  │                                                     │   │
│  │  ┌───────────────┐  ┌───────────────┐              │   │
│  │  │  Show Card    │  │  Show Card    │              │   │
│  │  │  (Dallas)     │  │  (Dallas)     │              │   │
│  │  └───────────────┘  └───────────────┘              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Hyenas Fort Worth               See All Fort Worth →│   │
│  │  ┌───────────────┐  ┌───────────────┐              │   │
│  │  │  Show Card    │  │  Show Card    │              │   │
│  │  └───────────────┘  └───────────────┘              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [Repeat for Albuquerque and Red Room]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Location Header Row
```
┌─────────────────────────────────────────────────────────────┐
│  ●  Hyenas Dallas                        See All Dallas →   │
│  ↑                                                          │
│  Color dot (--hyenas-purple)                                │
└─────────────────────────────────────────────────────────────┘
```

### Venue Color Coding
| Venue | Color Token | Hex |
|-------|-------------|-----|
| Dallas | --hyenas-purple | #8B5CF6 |
| Fort Worth | --accent-electric | #FBBF24 |
| Albuquerque | --accent-neon-pink | #EC4899 |
| Red Room | --accent-cyan | #06B6D4 |

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to first group | --space-8 | 48px |
| Between location groups | --space-8 | 48px |
| Location header to cards | --space-5 | 24px |
| Card grid gap | --space-6 | 32px |

### Responsive Behavior
| Breakpoint | Cards per Location |
|------------|-------------------|
| Desktop | 2 cards side-by-side |
| Tablet | 2 cards side-by-side |
| Mobile | 1 card, stacked |

---

## Section 4: Location Directory

### Layout
- **Background:** --white
- **Container:** .container (1280px max-width)
- **Grid:** .grid.grid-2 with --space-8 gap

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│                      Our Venues                             │
│                      ← H2 .text-3xl (centered)              │
│                                                             │
│     Four iconic locations across Texas and New Mexico       │
│     ← p .text-base.text-gray (centered)                     │
│                                                             │
│  ┌────────────────────────┐  ┌────────────────────────┐    │
│  │ ┌────┐                 │  │ ┌────┐                 │    │
│  │ │ ▓▓ │ Hyenas Dallas   │  │ │ ▓▓ │ Hyenas FW      │    │
│  │ └────┘ Dallas, TX      │  │ └────┘ Fort Worth, TX  │    │
│  │                        │  │                        │    │
│  │ The flagship venue...  │  │ Comedy in Cowtown...   │    │
│  │                        │  │                        │    │
│  │ [Explore] [See Shows]  │  │ [Explore] [See Shows]  │    │
│  └────────────────────────┘  └────────────────────────┘    │
│  ← .brutal-border cards                                     │
│                                                             │
│  ┌────────────────────────┐  ┌────────────────────────┐    │
│  │ Hyenas Albuquerque     │  │ The Red Room          │    │
│  │ ...                    │  │ ...                    │    │
│  └────────────────────────┘  └────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Venue Card Structure
```html
<div class="brutal-border" style="background: white; padding: var(--space-6); border-radius: var(--radius-lg);">
  <div class="flex items-start gap-4 mb-4">
    <div style="width: 80px; height: 80px; background: var(--hyenas-purple); border-radius: var(--radius-md);"></div>
    <div>
      <h3 class="text-xl mb-2">Hyenas Dallas</h3>
      <p class="text-sm text-gray mb-0">The flagship venue in Dallas</p>
    </div>
  </div>
  <p class="mb-4">Description text...</p>
  <div class="flex gap-3">
    <a href="/venues/dallas" class="btn btn-primary">Explore Venue</a>
    <a href="/venues/dallas#shows" class="btn btn-ghost">See Shows</a>
  </div>
</div>
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to grid | --space-8 | 48px |
| Grid gap | --space-8 | 48px |
| Card padding | --space-6 | 32px |
| Card internal gap | --space-4 | 16px |

### Responsive Behavior
| Breakpoint | Grid |
|------------|------|
| Desktop | 2x2 grid |
| Tablet | 2x2 grid (narrower) |
| Mobile | 1 column stack |

---

## Section 5: Trust & Social Proof

### Layout
- **Background:** --hyenas-purple-pale
- **Container:** .container (1280px max-width)
- **Structure:** Header + 3-column stats grid

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                  [--hyenas-purple-pale bg]                   │
│                                                             │
│                   Why Hyenas?                               │
│                   ← H2 .text-3xl (centered)                 │
│                                                             │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐│
│  │      ⭐⭐⭐⭐⭐     │ │      15+        │ │     5,000+      ││
│  │      4.8/5      │ │    Years        │ │     Shows       ││
│  │                 │ │                 │ │                 ││
│  │  Google Reviews │ │ of live comedy  │ │    hosted       ││
│  │  (1,200+ reviews)│ │                 │ │                 ││
│  └─────────────────┘ └─────────────────┘ └─────────────────┘│
│  ← .grid.grid-3                                             │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ "Best comedy club in Dallas! Great atmosphere..."   │   │
│  │                              — John D., Google      │   │
│  └─────────────────────────────────────────────────────┘   │
│  ← Optional testimonial (centered)                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Stats Block Structure
```html
<div class="text-center">
  <div class="text-4xl font-bold text-purple mb-2">4.8/5</div>
  <div class="text-sm text-gray">Google Reviews</div>
  <div class="text-xs text-gray">(1,200+ reviews)</div>
</div>
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to stats | --space-8 | 48px |
| Stats grid gap | --space-8 | 48px |
| Stats to testimonial | --space-8 | 48px |

### Responsive Behavior
| Breakpoint | Layout |
|------------|--------|
| Desktop | 3-column grid |
| Tablet | 3-column grid |
| Mobile | Stack vertically, centered |

---

## Section 6: Email Signup - Show Alerts

### Layout
- **Background:** --black or --gray-900
- **Container:** .container.container-sm (640px max-width)
- **Alignment:** Centered

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--black bg]                            │
│                                                             │
│                  Never Miss a Show                          │
│                  ← H2 .text-2xl.text-white (centered)       │
│                                                             │
│         Get presale access and show alerts                  │
│         delivered to your inbox                             │
│         ← p .text-base (--gray-400)                         │
│                                                             │
│         ┌─────────────────────────┐ ┌────────────┐         │
│         │ Enter your email...     │ │ Subscribe  │         │
│         └─────────────────────────┘ └────────────┘         │
│         ← input (70% width)          .btn.btn-accent        │
│                                                             │
│         We respect your inbox. Unsubscribe anytime.         │
│         ← .text-xs (--gray-400)                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Form Structure
```html
<form class="flex gap-3">
  <input type="email"
         placeholder="Enter your email"
         class="flex-1"
         style="padding: var(--space-4); border-radius: var(--radius-md); border: 2px solid var(--gray-700);">
  <button type="submit" class="btn btn-accent">Subscribe</button>
</form>
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to subtitle | --space-3 | 12px |
| Subtitle to form | --space-6 | 32px |
| Form elements gap | --space-3 | 12px |
| Form to privacy text | --space-4 | 16px |

### Responsive Behavior
| Breakpoint | Form Layout |
|------------|-------------|
| Desktop | Horizontal (input + button inline) |
| Mobile | Stacked (input above button, both full width) |

---

## Section 7: Content Hub - Comedy Blog

### Layout
- **Background:** --white
- **Container:** .container (1280px max-width)
- **Grid:** .grid.grid-3

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│                    From the Blog                            │
│                    ← H2 .text-3xl (centered)                │
│                                                             │
│        Stories, spotlights, and behind the scenes           │
│        ← p .text-base.text-gray (centered)                  │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │         │
│  │ │  Image  │ │  │ │  Image  │ │  │ │  Image  │ │         │
│  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │         │
│  │ [Spotlight] │  │ [News]      │  │ [Tips]      │         │
│  │             │  │             │  │             │         │
│  │ Post Title  │  │ Post Title  │  │ Post Title  │         │
│  │ Here...     │  │ Here...     │  │ Here...     │         │
│  │             │  │             │  │             │         │
│  │ Excerpt     │  │ Excerpt     │  │ Excerpt     │         │
│  │ text...     │  │ text...     │  │ text...     │         │
│  │             │  │             │  │             │         │
│  │ Read More → │  │ Read More → │  │ Read More → │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│                   ┌────────────────┐                        │
│                   │  View All Posts │                        │
│                   └────────────────┘                        │
│                   ← .btn.btn-secondary                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Blog Card Structure
```html
<article class="blog-card">
  <div class="blog-card__image" style="aspect-ratio: 16/9;">
    <img src="..." alt="Post title">
  </div>
  <div class="blog-card__content">
    <span class="badge badge-purple">Spotlight</span>
    <h3 class="text-lg font-bold mt-3 mb-2">Post Title Here</h3>
    <p class="text-sm text-gray mb-4">Brief excerpt of the post content goes here...</p>
    <a href="#" class="text-purple font-semibold">Read More →</a>
  </div>
</article>
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Section padding | --space-10 | 64px |
| Header to grid | --space-8 | 48px |
| Grid gap | --space-6 | 32px |
| Grid to CTA | --space-8 | 48px |
| Card internal | --space-4 | 16px |

### Responsive Behavior
| Breakpoint | Grid |
|------------|------|
| Desktop | 3 columns |
| Tablet | 2 columns |
| Mobile | 1 column |

---

## Section 8: Footer - Contact, Locations, Legal

### Layout
- **Background:** --black
- **Container:** .container (1280px max-width)
- **Structure:** 4-column grid + bottom bar

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--black bg]                            │
│                                                             │
│  Venues          Shows           Info           Follow Us   │
│  ───────         ───────         ───────        ───────     │
│  Dallas          All Shows       About Us       [FB] [IG]   │
│  Fort Worth      Upcoming        Contact        [TW]        │
│  Albuquerque     Calendar        Group Events               │
│  Red Room                        FAQ                        │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  ← .pill-divider or border-top                              │
│                                                             │
│        © 2026 Hyenas Comedy Club. All rights reserved.      │
│              Privacy Policy • Terms of Service              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Footer Column Structure
```html
<div>
  <h4 class="text-white mb-4">Venues</h4>
  <ul style="list-style: none; padding: 0;">
    <li class="mb-2"><a href="/venues/dallas" style="color: var(--gray-400);">Dallas</a></li>
    <li class="mb-2"><a href="/venues/fort-worth" style="color: var(--gray-400);">Fort Worth</a></li>
    <li class="mb-2"><a href="/venues/albuquerque" style="color: var(--gray-400);">Albuquerque</a></li>
    <li class="mb-2"><a href="/venues/red-room" style="color: var(--gray-400);">Red Room</a></li>
  </ul>
</div>
```

### Spacing
| Element | Token | Value |
|---------|-------|-------|
| Main footer padding | --space-10 | 64px |
| Grid gap | --space-8 | 48px |
| Column heading mb | --space-4 | 16px |
| List item mb | --space-2 | 8px |
| Bottom bar padding-top | --space-6 | 32px |

### Responsive Behavior
| Breakpoint | Grid |
|------------|------|
| Desktop | 4 columns |
| Tablet | 2x2 grid |
| Mobile | 1 column, centered |

---

## Visual Rhythm Summary

| Section | Background | Purpose |
|---------|------------|---------|
| 1. Hero | --hyenas-purple | Brand identity, high impact |
| 2. Upcoming Events | --white | Clean, focused on content |
| 3. Featured by Location | --gray-100 | Differentiate from Section 2 |
| 4. Location Directory | --white | Clean venue cards |
| 5. Trust | --hyenas-purple-pale | Subtle brand tint |
| 6. Email | --black | High contrast, focused CTA |
| 7. Blog | --white | Clean content area |
| 8. Footer | --black | Close, navigation |

---

## Implementation Checklist

- [ ] Create Section 1: Hero
- [x] **Create Section 2: Interactive Slider** (Completed 2026-01-10)
  - [x] CSS scroll-snap implementation
  - [x] Arrow button navigation (desktop)
  - [x] Dot indicator navigation (mobile)
  - [x] Navigation hints (auto-hide)
  - [x] Keyboard support
  - [x] Artist name truncation fix
- [ ] Create Section 3: Featured by Location groups
- [ ] Create Section 4: Location Directory cards
- [ ] Create Section 5: Trust stats section
- [ ] Create Section 6: Email signup form
- [ ] Create Section 7: Blog cards grid
- [ ] Create Section 8: Footer
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
- [ ] Verify touch targets (44px minimum)
- [ ] Run accessibility audit
- [ ] Validate against acceptance criteria

---

## Next Steps

1. **localtest** create a local test environment and develop an example using the wireframe
2. **CSS Additions:** Add any new component styles (blog-card, email form)
3. **Content Population:** Add real content, images, and links
4. **Testing:** Cross-browser and responsive testing
