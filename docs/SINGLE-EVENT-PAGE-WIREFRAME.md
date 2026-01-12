# Hyenas Comedy Club: Single Event Page Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

This document provides detailed wireframe specifications for the **Single Event Page**, which serves as the landing page for individual shows. It features a dynamic layout that groups multiple showtimes by date and highlights the performer.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Event Hero | --te-off-white | Impactful intro, key details, immediate CTA |
| 2 | Showtimes | --white | Clear list of all available shows, grouped by date |
| 3 | Event Details | --white | Bio, description, and venue directions |
| 4 | More Shows | --gray-100 | "You might also like" slider |
| 5 | Footer | --black | Navigation and legal |

---

## Section 1: Event Hero

### Layout
- **Background:** `--te-off-white` (#F4F4F4)
- **Container:** `.container` (1280px max)
- **Grid:** 2 columns on desktop (50/50), stacked on mobile

### Components

```
┌─────────────────────────────────────────────────────────────┐
│  [Navigation Sticky]                                        │
├─────────────────────────────────────────────────────────────┤
│                    [--te-off-white bg]                       │
│                                                             │
│  ┌──────────────────────┐  ┌─────────────────────────────┐  │
│  │                      │  │ [SOLD OUT] ← .badge-red     │  │
│  │                      │  │ (If applicable)             │  │
│  │                      │  │                             │  │
│  │      EVENT           │  │ THE COMEDIAN                │  │
│  │      IMAGE           │  │ NAME                        │  │
│  │      (1:1)           │  │ ← H1 .text-4xl.uppercase    │  │
│  │                      │  │    .font-black              │  │
│  │   [Scanline]         │  │                             │  │
│  │   [Overlay]          │  │ ▌ As seen on Netflix...     │  │
│  │                      │  │ ← .border-l-orange          │  │
│  │                      │  │    .text-sm.mono            │  │
│  │                      │  │                             │  │
│  │                      │  │ [ GET TICKETS ]             │  │
│  │                      │  │ ← .btn.btn-primary.btn-lg   │  │
│  └──────────────────────┘  └─────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
*   **Image:** 500x500px on desktop, full-width on mobile. Includes `.te-overlay-scan` effect.
*   **Title:** `Inter Black`, 40px+ (desktop), 32px (mobile). Uppercase.
*   **Credits:** `Roboto Mono`, 12px, Gray Dark. Left border needs `2px solid var(--te-orange)`.
*   **CTA:** Smooth scroll to Section 2 (Showtimes).

### Responsive Behavior
| Breakpoint | Layout |
|------------|--------|
| Desktop | Side-by-side (Image Left, Content Right) |
| Tablet | Side-by-side (Image Left, Content Right) |
| Mobile | Stacked (Image Top, Content Bottom) |

---

## Section 2: Showtimes (The "Ticket Matrix")

### Layout
- **Background:** `--white`
- **Container:** `.container-sm` (960px max) - narrower for readability
- **Style:** Brutal list style

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│                AVAILABLE SHOWS                              │
│                ← H2 .text-base.mono.uppercase               │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ FRI, JAN 10                                           │  │
│  │ ← Date Header .text-xl.font-black                     │  │
│  │                                                       │  │
│  │ ┌───────────────────────────────────────────────────┐ │  │
│  │ │ 7:00 PM    FORT WORTH • Main Room         [BUY]   │ │  │
│  │ │            $25 • Selling Fast                     │ │  │
│  │ └───────────────────────────────────────────────────┘ │  │
│  │ ← .showtime-card .hover:brutal-shadow                 │  │
│  │                                                       │  │
│  │ ┌───────────────────────────────────────────────────┐ │  │
│  │ │ 9:30 PM    FORT WORTH • Main Room         [BUY]   │ │  │
│  │ │            $25                                    │ │  │
│  │ └───────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │ ..................................................... │  │
│  │ ← Dotted separator                                    │  │
│  │                                                       │  │
│  │ SAT, JAN 11                                           │  │
│  │ (Repeat structure)                                    │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Showtime Card Detail
*   **Grid:** 3 columns (Time | Details | Button) on Desktop.
*   **Time:** `Roboto Mono Bold`, 20px.
*   **Button:** `.btn-primary` (Desktop: standard, Mobile: full width).
*   **Mobile:** Flex column. Time top, details middle, button bottom.

---

## Section 3: Details & Venue

### Layout
- **Background:** `--white`
- **Container:** `.container` (1280px)
- **Grid:** 2 columns (Content 60% / Venue 40%)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  ┌────────────────────────┐  ┌───────────────────────────┐  │
│  │ ABOUT THE ARTIST       │  │ VENUE INFORMATION         │  │
│  │                        │  │                           │  │
│  │ Paragraph text...      │  │ [ Map Image/Embed ]       │  │
│  │                        │  │                           │  │
│  │ Paragraph text...      │  │ 📍 123 Main St            │  │
│  │                        │  │    Fort Worth, TX         │  │
│  │ [Share Links]          │  │                           │  │
│  │                        │  │ 🅿️ Parking Info           │  │
│  └────────────────────────┘  └───────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 4: More Shows Slider

### Layout
- **Background:** `--gray-100` (#E0E0E0)
- **Component:** Reuses the **Interactive Slider** from Homepage.

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                    [--gray-100 bg]                           │
│                                                             │
│                  MORE UPCOMING SHOWS                        │
│                  ← H2 .text-2xl.font-black                  │
│                                                             │
│  [Interactive Slider Component]                             │
│  • 3 Cards View (Desktop)                                   │
│  • 1 Card View (Mobile)                                     │
│  • Same logic/code as Homepage slider                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Behavior Checklist

- [ ] **Sticky CTA:** On mobile, when scrolling past the hero, a bottom bar appears with "Get Tickets" button.
- [ ] **Sold Out:** If a showtime is sold out, button changes to gray disabled state with text "SOLD OUT".
- [ ] **External Links:** Map opens in Google Maps new tab.

## Accessibility

- [ ] **Heading Order:** H1 (Event Title) -> H2 (Available Shows) -> H2 (About) -> H2 (More Shows).
- [ ] **Keyboard Nav:** "Buy" buttons must be focusable.
- [ ] **Alt Text:** Event image must describe the performer.
