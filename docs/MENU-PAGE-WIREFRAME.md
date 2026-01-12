# Hyenas Comedy Club: Menu Page Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

The **Menu Page** displays the food and drink offerings for a specific location. It acts as a digital menu for guests before or during shows.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Menu Header | Location Color | Clear venue identification & simple nav |
| 2 | Tab Navigation| --white | Sticky tabs for quick access |
| 3 | Menu Content | --white | Categorized list of items |
| 4 | PDF Download | --black | "Take it with you" option |
| 5 | Footer | --black | Global footer |

---

## Section 1: Menu Header

### Layout
- **Background:** Venue-specific Brand Color
- **Container:** `.container`
- **Padding:** `--space-10`

### Components

```
┌─────────────────────────────────────────────────────────────┐
│  [Navigation Sticky]                                        │
├─────────────────────────────────────────────────────────────┤
│                    [ Dynamic Brand Color Bg ]                │
│                                                             │
│                FORT WORTH MENU                              │
│                ← H1 .text-4xl.white.uppercase               │
│                                                             │
│       Full bar & kitchen open during all shows              │
│       ← p .text-lg.mono-light                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 2: Tab Navigation (Sticky)

### Layout
- **Background:** `--white`
- **Border-bottom:** `2px solid --black`
- **Position:** `Sticky` (below global nav)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│    [ FOOD ]    [ DRINKS ]    [ DESSERTS ]                   │
│    ← Buttons .w-full (mobile) .w-auto (desktop)             │
│      Active: .bg-black .text-white                          │
│      Inactive: .bg-white .text-black .hover:bg-gray-100     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 3: Menu Content

### Layout
- **Background:** `--white`
- **Container:** `.container-sm` (960px)
- **Padding:** `--space-8`

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  APPETIZERS                                                 │
│  ← H2 .text-2xl.border-b-2.mb-4                             │
│                                                             │
│  Nachos Supreme ........................... $14.00          │
│  ← .flex.justify-between.w-full.mono-bold                   │
│    .border-b-dotted (for dots)                              │
│                                                             │
│  Loaded with queso, jalapeños, and beef.                    │
│  ← .text-sm.gray.italic.mb-4                                │
│                                                             │
│  Fried Pickles ............................ $10.00          │
│  Served with ranch.                                         │
│                                                             │
│  [ Repeat for all items ]                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Specials Callout
Can be inserted between sections:
```html
<div class="border-2-orange bg-off-white p-6 text-center">
  <h3 class="mono-bold text-orange">HAPPY HOUR (5-7PM)</h3>
  <p>$5 Wells & Domestics</p>
</div>
```

---

## Section 4: PDF Download

### Layout
- **Position:** Fixed bottom-right (Desktop) or Static bottom (Mobile)
- **Style:** Floating Action Button (FAB) style on desktop

### Components

```
┌─────────────────────────────────────────────────────────────┐
│  [ ⬇ DOWNLOAD PDF MENU ]                                    │
│  ← .btn.btn-accent.shadow-brutal                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Checklist
- [ ] **CMS Structure:** Create 'Menu Items' collection with Category, Price, Desc.
- [ ] **PDF Asset:** Ensure accessible PDF is uploaded to CMS.
- [ ] **Anchors:** Tab navigation links to section IDs (`#food`, `#drinks`).
