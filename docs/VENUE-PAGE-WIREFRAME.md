# Hyenas Comedy Club: Venue Page Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

The **Venue Page** serves as the dedicated landing page for each physical location (Dallas, Fort Worth, Albuquerque, Red Room). It features location-specific branding and content.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Venue Hero | Location Brand Color | Immersive intro with venue photo |
| 2 | Venue Info | --white | Address, map, and description |
| 3 | Upcoming Shows | --white | Filtered list of shows at this venue |
| 4 | Highlights | --black | Key features (Full Bar, VIP, etc.) |
| 5 | Photo Gallery | --white | Grid of venue interior shots |
| 6 | Footer | --black | Global footer |

---

## Section 1: Venue Hero

### Layout
- **Background:** Dynamic Brand Color (e.g., Dallas = Red, FW = Blue)
- **Container:** Full width with `.container` overlay
- **Height:** 60vh (desktop), 40vh (mobile)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│  [Navigation Sticky]                                        │
├─────────────────────────────────────────────────────────────┤
│                    [ Dynamic Brand Color Bg ]                │
│                    [ Parallax Image Overlay ]                │
│                                                             │
│       ┌───────────────────────────────┐                     │
│       │ ┌─────┐                       │                     │
│       │ │ DALLAS (Badge)              │                     │
│       │ └─────┘                       │                     │
│       │                               │                     │
│       │ HYENAS DALLAS                 │                     │
│       │ ← H1 .text-5xl.white          │                     │
│       │                               │                     │
│       │ Mockingbird Station           │                     │
│       │ ← H2 .text-xl.mono-white      │                     │
│       │                               │                     │
│       │ [ VIEW MENU ]  [ GET TICKETS ]│                     │
│       │ .secondary     .primary       │                     │
│       └───────────────────────────────┘                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Brand Colors
*   **Fort Worth (Main Room):** `--te-blue` (#0044FF)
*   **Dallas:** `--te-red` (#FF0000)
*   **Albuquerque:** `--te-orange` (#FF4D00)
*   **Red Room:** `--te-red-dark` (#CC0000)

---

## Section 2: Venue Info

### Layout
- **Background:** `--white`
- **Container:** `.container`
- **Grid:** 2 columns (About / Details)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ ABOUT THE VENUE       │  │ LOCATION                   │  │
│  │                       │  │                            │  │
│  │ Rich text desc...     │  │ 📍 5321 E Mockingbird Ln   │  │
│  │                       │  │    Dallas, TX 75206        │  │
│  │ History...            │  │                            │  │
│  │ Atmosphere...         │  │ 📞 (214) 823-5233          │  │
│  │                       │  │                            │  │
│  │                       │  │ [ Google Maps Embed ]      │  │
│  │                       │  │ Aspect Ratio 16:9          │  │
│  └───────────────────────┘  └────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 3: Upcoming Shows (at this Venue)

### Layout
- **Background:** `--white`
- **Container:** `.container`
- **Grid:** Responsive Grid (3-2-1)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│             SHOWS AT HYENAS DALLAS                          │
│             ← H2 .text-2xl.uppercase                        │
│                                                             │
│  ┌───────┐   ┌───────┐   ┌───────┐                          │
│  │ Card  │   │ Card  │   │ Card  │                          │
│  └───────┘   └───────┘   └───────┘                          │
│                                                             │
│                [ VIEW ALL SHOWS ]                           │
│                ← .btn.btn-accent (Brand Color)              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 4: Highlights

### Layout
- **Background:** `--black`
- **Text:** `--white`
- **Container:** `.container`
- **Grid:** 3 columns (Icon + Title + Desc)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--black bg]                            │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ 🍸           │  │ 🅿️            │  │ ♿️            │       │
│  │ FULL BAR     │  │ FREE PARKING │  │ ACCESSIBLE   │       │
│  │ Craft        │  │ Garage and   │  │ Elevator     │       │
│  │ cocktails... │  │ street...    │  │ access...    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 5: Photo Gallery

### Layout
- **Background:** `--white`
- **Layout:** Masonry or Simple Grid
- **Interaction:** Lightbox on click

---

## checklist
- [ ] **Dynamic Branding:** Ensure CSS variables for colors can be swapped based on venue slug.
- [ ] **Map Integration:** Embed correct Google Maps iframe.
- [ ] **CMS:** Ensure Venue Collection has all necessary fields (Coords, Phone, Hours, etc).
