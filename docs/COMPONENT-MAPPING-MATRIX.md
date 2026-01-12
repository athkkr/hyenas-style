# Component Mapping Matrix

**Version:** 1.0.0
**Created:** January 10, 2026
**Purpose:** Map required design system components to each page layout to guide implementation and ensure reuse.

## Component Usage Table

| Component | Homepage | Single Event | Search | Venue | Subscribe | Menu | Privacy |
|-----------|:--------:|:------------:|:------:|:-----:|:---------:|:----:|:-------:|
| **Global Nav** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Global Footer** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Hero Section** | Standard | Event | Header | Venue | Simple | Menu | Simple |
| **Show Card** | Standard | Grouped | Standard | Venue | ❌ | ❌ | ❌ |
| **Slider** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Filter Bar** | ❌ | ❌ | ✅ | ❌ | ❌ | Tab | Sticky |
| **Location Badge**| ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| **Map Embed** | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Form** | Simple | ❌ | Search | ❌ | Complex | ❌ | ❌ |

## New Components Needed

| Component Name | Status | Description | Used On |
|----------------|--------|-------------|---------|
| **Event Hero** | 🆕 New | Split layout with large 1:1 image and scanline overlay | Single Event |
| **Showtime List** | 🆕 New | Grouped list by date with "Buy" buttons (Ticket Matrix) | Single Event |
| **Filter Bar** | 🆕 New | Sticky bar with location toggles and date picker | Search Events |
| **Venue Hero** | 🆕 New | Parallax header with dynamic brand color background | Venue Pages (incl. Red Room) |
| **Menu List** | 🆕 New | Text-heavy list with leader dots (e.g. "Item ....... $10") | Menu Pages |
| **Sidebar Nav** | 🆕 New | Sticky table of contents for long-form text | Privacy Policy |

## Existing Components to Reuse

| Component | Source | Notes |
|-----------|--------|-------|
| `.show-card` | Design System | Use "Grouped" variant for Showtimes list |
| `.btn` | Design System | Use all variants (Primary, Secondary, Accent) |
| `.te-slider` | Homepage | Reuse JS controller for "More Shows" slider |
| `.brutal-border` | Design System | Use on Venue and Subscribe forms |
| `.badge` | Design System | Use for "Sold Out" and status indicators |

## Implementation Priority

1. **Global Shell:** Navigation & Footer (Already exists, check for updates)
2. **Core Cards:** Show Card (Grouped & Standard)
3. **Complex Heroes:** Event Hero & Venue Hero
4. **Lists & Grids:** Showtime Matrix & Menu List
5. **Interactive:** Filter Bar & Slider
