# Hyenas Comedy Club: Search Events Page Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

The **Search Events Page** (`/search-events`) allows users to browse the full calendar, filter by location or date, and search for specific comedians.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Header | --black | Title and global search input |
| 2 | Filter Bar | --white | Sticky filtering controls |
| 3 | Results Grid | --white | Grid of matching show cards |
| 4 | Footer | --black | Navigation and legal |

---

## Section 1: Page Header

### Layout
- **Background:** `--black`
- **Container:** `.container`
- **Padding:** `--space-12` (Vertical)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--black bg]                            │
│                                                             │
│                 FIND YOUR SHOW                              │
│                 ← H1 .text-4xl.text-white.uppercase         │
│                                                             │
│       ┌─────────────────────────────────────────────┐       │
│       │ 🔍 Search by comedian name...               │       │
│       └─────────────────────────────────────────────┘       │
│       ← Input .bg-transparent .border-2-white               │
│          .text-white .placeholder-gray                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 2: Filter Bar (Sticky)

### Layout
- **Background:** `--white`
- **Border-bottom:** `2px solid --black`
- **Position:** `Sticky` (below nav)
- **Z-Index:** 100

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  FILTERS:                                                   │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   ┌──────────────┐      │
│  │ ALL │  │ FW  │  │ DAL │  │ ABQ │  │ RR  │   │ Date Range ▼ │      │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘   └──────────────┘      │
│  Active   Outline  Outline  Outline   Native Picker         │
│  .btn-black                                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
*   **Location Buttons:** Toggle logic (Mutually exclusive or Multi-select).
*   **Mobile View:** Horizontal scroll container (`overflow-x: auto`), hide scrollbar.

---

## Section 3: Results Grid

### Layout
- **Background:** `--white`
- **Container:** `.container`
- **Padding:** `--space-8`

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  [Results Count: "12 Shows Found"]                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │              │  │              │  │              │       │
│  │   CARD 1     │  │   CARD 2     │  │   CARD 3     │       │
│  │              │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │              │  │              │  │              │       │
│  │   CARD 4     │  │   CARD 5     │  │   CARD 6     │       │
│  │              │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                             │
│                 [ LOAD MORE ]                               │
│                 ← .btn.btn-secondary                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### States
*   **Loading:** Display 6 skeleton cards (pulsing gray).
*   **Empty:** "No shows found matching your filters." + [Clear Filters] button.
*   **Card Variant:** Use the standard **Show Card** component.

---

## Implementation Checklist

- [ ] JavaScript filter logic (client-side for <100 items, server-side for more).
- [ ] Debounce search input (300ms).
- [ ] Sticky positioning for filter bar must handle mobile nav height.
