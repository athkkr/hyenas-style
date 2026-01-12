# 📐 Hyenas Comedy Club - Page Layouts Specification

**Version:** 1.0.0  
**Last Updated:** January 10, 2026  
**Companion Docs:** [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) | [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

This document provides detailed layout specifications for every page and collection template identified in the sitemap. Each layout follows the design system and spec established for Hyenas Comedy Club.

**Priority Pages:**
1. ✅ Homepage (Priority 1.0) - Has wireframe
2. 🔥 **Single Event Page** (Dynamic - Not in sitemap yet)
3. Search Events (Priority 0.9)
4. Venue Pages × 4 (Priority 0.8)
5. Subscribe Page (Priority 0.7)
6. Menu Pages × 3 (Priority 0.6)
7. Privacy Policy (Priority 0.3)

---

## Table of Contents

1. [Homepage Layout](#1-homepage-layout)
   - 📄 [View Wireframe](./HOMEPAGE-WIREFRAME.md)
2. [Single Event Page Layout](#2-single-event-page-layout) ⭐ KEY EXAMPLE
   - 📄 [View Wireframe](./SINGLE-EVENT-PAGE-WIREFRAME.md)
3. [Search Events Page Layout](#3-search-events-page-layout)
   - 📄 [View Wireframe](./SEARCH-EVENTS-PAGE-WIREFRAME.md)
4. [Venue Page Layout](#4-venue-page-layout)
   - 📄 [View Wireframe](./VENUE-PAGE-WIREFRAME.md)
5. [Subscribe Page Layout](#5-subscribe-page-layout)
   - 📄 [View Wireframe](./SUBSCRIBE-PAGE-WIREFRAME.md)
6. [Menu Page Layout](#6-menu-page-layout)
   - 📄 [View Wireframe](./MENU-PAGE-WIREFRAME.md)
7. [Privacy Policy Page Layout](#7-privacy-policy-page-layout)
   - 📄 [View Wireframe](./PRIVACY-POLICY-PAGE-WIREFRAME.md)
8. [Collection Templates](#8-collection-templates)
9. [Component Mapping](#9-component-mapping)
   - 📄 [View Matrix](./COMPONENT-MAPPING-MATRIX.md)

---

## 1. Homepage Layout

**URL:** `/`  
**Priority:** 1.0  
**Status:** ✅ Wireframe exists ([HOMEPAGE-WIREFRAME.md](./HOMEPAGE-WIREFRAME.md))

### Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ Hero Section                        │
│ - Background: Black                 │
│ - Tag + Title + CTA                 │
│ - Scanline overlay                  │
├─────────────────────────────────────┤
│ Featured Shows Section              │
│ - Interactive Slider (3-2-1 cols)   │
│ - Navigation hints                  │
├─────────────────────────────────────┤
│ Upcoming Shows Grid                 │
│ - Filter bar                        │
│ - Show cards (grouped variant)      │
├─────────────────────────────────────┤
│ Locations Showcase                  │
│ - 4 location cards                  │
├─────────────────────────────────────┤
│ Newsletter CTA                      │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Key Components
- Hero (black background, white text)
- Interactive slider with grouped show cards
- Filter bar for show browsing
- Location cards grid

**Reference:** See [HOMEPAGE-WIREFRAME.md](./HOMEPAGE-WIREFRAME.md) for complete specification.

---

## 2. Single Event Page Layout ⭐

**URL Pattern:** `/events/[event-slug]` or `/shows/[event-slug]`  
**Priority:** HIGH (Dynamic content)  
**Status:** 🆕 NEW - Key example requested

### Purpose
Dedicated landing page for each individual event/comedian show with all showtimes, venue details, and ticket purchasing options.

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Navigation (Sticky)                                 │
├─────────────────────────────────────────────────────┤
│ EVENT HERO SECTION                                  │
│ ┌─────────────┬─────────────────────────────────┐  │
│ │             │  [SOLD OUT Badge - if applicable]│  │
│ │   Event     │  Event Title                     │  │
│ │   Image     │  "The Comedian Name"             │  │
│ │   1:1       │  (Inter Black, 40px, uppercase)  │  │
│ │   Aspect    │                                  │  │
│ │   Ratio     │  Featured Credits                │  │
│ │   (500px)   │  "As seen on Netflix, HBO..."    │  │
│ │             │  (Roboto Mono, 12px, orange bar) │  │
│ │             │                                  │  │
│ │             │  [GET TICKETS - Primary CTA]     │  │
│ └─────────────┴─────────────────────────────────┘  │
│ Background: White or Off-white                      │
│ Padding: 48px (desktop), 24px (mobile)             │
├─────────────────────────────────────────────────────┤
│ SHOWTIMES SECTION                                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Section Title: "AVAILABLE SHOWS"                │ │
│ │ (Roboto Mono Bold, 14px, uppercase)             │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ ┌─────────────────────────────────────────────┐ │ │
│ │ │ FRI, JAN 10                                 │ │ │
│ │ │ ┌────────────┬──────────────────────┐       │ │ │
│ │ │ │ 7:00 PM    │ FORT WORTH          │ [BUY] │ │ │
│ │ │ │            │ Main Room           │       │ │ │
│ │ │ │ $25-$45    │ 150 seats available │       │ │ │
│ │ │ └────────────┴──────────────────────┘       │ │ │
│ │ │ ┌────────────┬──────────────────────┐       │ │ │
│ │ │ │ 9:30 PM    │ FORT WORTH          │ [BUY] │ │ │
│ │ │ │            │ Main Room           │       │ │ │
│ │ │ │ $25-$45    │ 75 seats available  │       │ │ │
│ │ │ └────────────┴──────────────────────┘       │ │ │
│ │ └─────────────────────────────────────────────┘ │ │
│ │ ┌─────────────────────────────────────────────┐ │ │
│ │ │ SAT, JAN 11                                 │ │ │
│ │ │ (Similar structure...)                      │ │ │
│ │ └─────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────┘ │
│ Border: 2px solid black                             │
│ Grouped by date                                     │
├─────────────────────────────────────────────────────┤
│ EVENT DETAILS SECTION                               │
│ ┌────────────────┬──────────────────────────────┐   │
│ │ ABOUT          │ VENUE INFORMATION            │   │
│ │                │                              │   │
│ │ Full event     │ [Location Map Preview]       │   │
│ │ description    │ Address                      │   │
│ │ Bio            │ Parking info                 │   │
│ │ Past shows     │ Contact                      │   │
│ │ Media links    │ Directions link              │   │
│ └────────────────┴──────────────────────────────┘   │
│ 2-column (desktop), stacked (mobile)                │
├─────────────────────────────────────────────────────┤
│ MORE SHOWS SECTION                                  │
│ "MORE UPCOMING SHOWS"                               │
│ ┌───────┬───────┬───────┬───────┐                  │
│ │ Card  │ Card  │ Card  │ Card  │                  │
│ └───────┴───────┴───────┴───────┘                  │
│ Horizontal slider (4-3-2-1 cards)                   │
├─────────────────────────────────────────────────────┤
│ Footer                                              │
└─────────────────────────────────────────────────────┘
```

### Component Specifications

#### Hero Section
**Container:**
- Max-width: `1280px` (`.container`)
- Padding: `48px` (desktop), `24px` (mobile)
- Background: `--te-off-white` (#F4F4F4)

**Layout Grid:**
- Desktop: 2 columns (500px image + flexible content)
- Mobile: Stacked (image on top, full width)
- Gap: `--space-8` (32px)

**Event Image:**
- Aspect ratio: `1:1`
- Width: `500px` (desktop), `100%` (mobile)
- Border: `1px solid --te-black`
- Scanline overlay: Applied via `.te-overlay-scan`
- Shadow: `--shadow-brutal-sm`

**Event Title:**
- Font: `Inter Black (900)`
- Size: `--text-3xl` (40px desktop), `--text-2xl` (32px mobile)
- Line-height: `0.95`
- Letter-spacing: `-1px`
- Transform: `uppercase`
- Color: `--te-black`
- Margin-bottom: `--space-4` (16px)

**Featured Credits:**
- Font: `Roboto Mono Regular (400)`
- Size: `--text-sm` (12px)
- Color: `--te-gray-dark`
- Border-left: `2px solid --te-orange`
- Padding-left: `--space-2` (8px)
- Margin-bottom: `--space-6` (24px)

**Sold Out Badge (Conditional):**
- Position: Absolute, top-right of image
- Background: `--te-red` (#FF0000)
- Color: `--te-white`
- Padding: `8px 16px`
- Font: `Roboto Mono Bold (700)`
- Size: `--text-xs` (10px)
- Transform: `uppercase`

**Primary CTA Button:**
- Class: `.btn .btn-primary .btn-lg`
- Width: `100%` (mobile), `auto` (desktop)
- Min-width: `280px` (desktop)

---

#### Showtimes Section

**Container:**
- Max-width: `960px` (`.container-sm`)
- Margin: `--space-12` (48px) vertical
- Padding: `--space-6` (24px)
- Border: `2px solid --te-black`
- Background: `--te-white`

**Section Title:**
- Font: `Roboto Mono Bold (700)`
- Size: `--text-base` (14px)
- Transform: `uppercase`
- Margin-bottom: `--space-6` (24px)
- Color: `--te-black`

**Date Groups:**
- Border-bottom: `1px dotted --te-gray-light` (between groups)
- Padding: `--space-5` (24px) vertical

**Date Header:**
- Font: `Inter Black (900)`
- Size: `--text-lg` (20px)
- Transform: `uppercase`
- Margin-bottom: `--space-4` (16px)
- Color: `--te-black`

**Showtime Card:**
```
┌──────────────────────────────────────┐
│ TIME    VENUE/ROOM          [BUTTON] │
│         Price • Availability         │
└──────────────────────────────────────┘
```

- Border: `1px solid --te-gray-light`
- Border-radius: `--radius-sm` (3px)
- Padding: `--space-4` (16px)
- Margin-bottom: `--space-3` (12px)
- Display: Grid (3 columns: time, details, button)
- Gap: `--space-4` (16px)
- Hover: Shadow lift (`.brutal-border` effect)

**Time Column:**
- Font: `Roboto Mono Bold (700)`
- Size: `--text-lg` (20px)
- Color: `--te-black`
- Width: `120px` (fixed)

**Venue/Details Column:**
- Venue: `Inter Bold (700)`, `--text-base` (14px), `uppercase`
- Room: `Roboto Mono`, `--text-sm` (12px), `--te-gray-dark`
- Price/Availability: `Roboto Mono`, `--text-xs` (10px), `--te-gray`
- Separator: `•` (orange)

**Buy Button:**
- Class: `.btn .btn-primary`
- Text: "BUY TICKETS"
- Width: `180px` (desktop), `100%` (mobile)
- Align: Right (desktop), full-width (mobile)

**Mobile Adjustments:**
- Stack layout (time on top, details below, button full-width bottom)
- Reduce padding to `--space-3` (12px)

---

#### Event Details Section

**Container:**
- Max-width: `1280px` (`.container`)
- Padding: `--space-12` (48px) vertical
- Background: `--te-white`

**Layout:**
- Desktop: 2 columns (60% content, 40% venue)
- Mobile: Stacked
- Gap: `--space-8` (32px)

**About Column:**
- **Title:** `Inter Black (900)`, `--text-xl` (24px), `uppercase`
- **Body:** `Inter Regular (400)`, `--text-base` (16px)
- **Line-height:** `1.7`
- **Paragraphs:** Margin-bottom `--space-4` (16px)
- **Links:** Border-bottom on hover, color `--te-orange`

**Venue Column:**
- **Map Preview:** 
  - Aspect ratio: `16:9`
  - Border: `2px solid --te-black`
  - Margin-bottom: `--space-4` (16px)
  - Clickable (opens maps)
- **Address Block:**
  - Font: `Roboto Mono`
  - Size: `--text-sm` (12px)
  - Line-height: `1.6`
  - Icon: Location pin (before text)
- **Info items:**
  - Parking, Phone, Website
  - Gap: `--space-3` (12px) between items

---

#### More Shows Section

**Container:**
- Max-width: `1280px` (`.container`)
- Padding: `--space-12` (48px) vertical
- Background: `--te-off-white`

**Section Title:**
- Font: `Inter Black (900)`
- Size: `--text-2xl` (32px)
- Transform: `uppercase`
- Margin-bottom: `--space-6` (24px)

**Slider:**
- Class: `.te-slider-container`
- Cards per view:
  - Desktop: 4
  - Tablet: 3
  - Mobile Small: 2
  - Mobile XS: 1
- Component: Grouped show cards (see DESIGN-SPEC.md §3.3)
- Navigation: Arrows (desktop), dots (mobile)

---

### SEO \& Meta

**Title Tag:**
```
{Artist Name} - {Date Range} | Hyenas Comedy Club
```

**Meta Description:**
```
See {Artist Name} live at Hyenas Comedy Club! {Brief bio snippet}. 
Multiple showtimes available. Get tickets now!
```

**Structured Data (JSON-LD):**
- Schema.org Event type
- Include: performer, location, offers, startDate, image
- Multiple `subEvent` for each showtime

**Open Graph:**
- `og:title`: Artist name + venue
- `og:description`: Short bio
- `og:image`: Event poster (1200×630)
- `og:type`: `event`

---

### Interactive Behavior

**Sticky Elements:**
1. Navigation (always)
2. "Get Tickets" button (scrolls past hero, shows sticky CTA bar)

**Scroll Triggers:**
- Hero image: Fade in up
- Showtimes: Stagger fade in (0.1s delay each)
- Details: Fade in on scroll to view

**Mobile Gestures:**
- Swipe on "More Shows" slider
- Tap to expand venue info (accordion on mobile)

---

### Accessibility

**ARIA Labels:**
- `<main>` landmark for content
- `<article>` for event details
- `role="region"` on showtimes with `aria-label="Available Showtimes"`
- Buy buttons: `aria-label="Buy tickets for {time} show"`

**Keyboard Navigation:**
- Tab through all showtime cards
- Focus indicators (3px orange outline)
- Skip link to main content

**Screen Readers:**
- Hidden date separators announced
- Price ranges clearly stated
- Sold out status announced first

---

## 3. Search Events Page Layout

**URL:** `/search-events`  
**Priority:** 0.9  
**Purpose:** Filterable, searchable directory of all events

### Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ PAGE HEADER                         │
│ "FIND YOUR SHOW"                    │
│ Tagline + Search bar                │
├─────────────────────────────────────┤
│ FILTER BAR (Sticky when scrolling)  │
│ ┌─────┬─────┬─────┬─────┬─────┐    │
│ │ All │ FW  │ DAL │ ABQ │ Red │    │
│ ├─────┴─────┴─────┴─────┴─────┤    │
│ │ Date Range Picker            │    │
│ │ Genre Filter                 │    │
│ └──────────────────────────────┘    │
├─────────────────────────────────────┤
│ RESULTS GRID                        │
│ ┌─────┬─────┬─────┐                │
│ │Card │Card │Card │ (3-2-1 cols)   │
│ ├─────┼─────┼─────┤                │
│ │Card │Card │Card │                │
│ └─────┴─────┴─────┘                │
│ [Load More Button]                  │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Component Specifications

#### Page Header
- **Background:** Black
- **Container:** `.container`, centered
- **Padding:** `--space-12` (48px) vertical
- **Title:** Inter Black, `--text-4xl` (56px), white, uppercase
- **Tagline:** Roboto Mono, `--text-md` (16px), gray-light

#### Search Bar
- **Width:** 100% (mobile), `600px` max (desktop)
- **Height:** `56px`
- **Border:** `2px solid --te-white`
- **Background:** Transparent
- **Font:** Roboto Mono, `--text-base` (14px)
- **Placeholder:** "Search by comedian name..."
- **Icon:** Magnifying glass (left, orange)
- **Focus:** Orange border, white background

#### Filter Bar (Sticky)
- **Background:** White
- **Border-bottom:** `2px solid --te-black`
- **Padding:** `--space-4` (16px) vertical
- **Position:** Sticky, `top: 70px` (below nav)
- **Z-index:** 100

**Location Buttons:**
- Class: `.btn .btn-secondary`
- State: Outlined default, filled when active
- Layout: Horizontal scroll (mobile), flex row (desktop)

**Additional Filters:**
- Date picker: Flatpickr or native input
- Genre dropdown: Custom select
- Sort by: Dropdown (Date, Popularity, Price)

#### Results Grid
- **Container:** `.container`
- **Grid:** `.grid-3` (3-2-1 responsive)
- **Gap:** `--space-6` (24px)
- **Cards:** Grouped show card variant

**Empty State:**
- Icon: Search with X
- Message: "No shows found. Try adjusting your filters."
- Button: "Clear all filters"

**Loading State:**
- Skeleton cards (pulsing gray boxes)
- Count: Same as current view (3-2-1)

#### Pagination
- **Type:** "Load More" button (infinite scroll optional)
- **Button:** `.btn .btn-accent .btn-lg`
- **Text:** "LOAD MORE SHOWS"
- **State:** Disabled when all loaded

---

### Filters \& Search Logic

**Search:**
- Real-time filtering as user types
- Debounced: 300ms
- Searches: Artist name, show description, venue name

**Filters:**
- **Location:** Multi-select (AND logic)
- **Date Range:** Start and end date
- **Genre:** Multi-select tags
- **Price:** Slider (min-max)

**URL State:**
- Query params for all filters
- Shareable filtered URLs
- Example: `/search-events?location=fort-worth&date=2026-01-15`

---

## 4. Venue Page Layout

**URLs:** 
- `/fort-worth` (Priority 0.8)
- `/dallas` (Priority 0.8)
- `/albuquerque` (Priority 0.8)
- `/hyenas-red-room` (Priority 0.8)

**Purpose:** Dedicated landing page for each venue with location-specific branding

### Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ VENUE HERO                          │
│ ┌─────────────────────────────────┐ │
│ │ [Venue Photo - Full-width]      │ │
│ │ Overlay: Venue Name + Location  │ │
│ │ [VIEW MENU] [GET TICKETS]       │ │
│ └─────────────────────────────────┘ │
│ Background: Location brand color    │
├─────────────────────────────────────┤
│ VENUE INFO SECTION                  │
│ ┌────────────┬──────────────────┐   │
│ │ About      │ Details          │   │
│ │ - History  │ - Address        │   │
│ │ - Capacity │ - Phone          │   │
│ │ - Features │ - Parking        │   │
│ │            │ - Map (embedded) │   │
│ └────────────┴──────────────────┘   │
├─────────────────────────────────────┤
│ UPCOMING SHOWS AT THIS VENUE        │
│ "SHOWS AT {VENUE NAME}"             │
│ ┌───────┬───────┬───────┐          │
│ │ Card  │ Card  │ Card  │          │
│ └───────┴───────┴───────┘          │
│ [VIEW ALL SHOWS →]                  │
├─────────────────────────────────────┤
│ VENUE HIGHLIGHTS                    │
│ ┌─────────────────────────────────┐ │
│ │ • Feature 1: Full bar           │ │
│ │ • Feature 2: VIP seating        │ │
│ │ • Feature 3: Dinner packages    │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ PHOTO GALLERY                       │
│ Grid of venue interior/exterior     │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Component Specifications

#### Venue Hero
- **Height:** `60vh` (desktop), `40vh` (mobile)
- **Min-height:** `400px`
- **Image:** Full-width background, parallax scroll
- **Overlay:** Dark gradient (bottom to top, rgba(0,0,0,0.7) to transparent)

**Venue Badge:**
- Position: Top-left overlay
- Background: Location brand color (Blue/Red/Orange)
- Padding: `--space-3` `--space-4`
- Font: Inter Black, `--text-sm`, uppercase
- Color: White
- Border: `2px solid --te-white`

**Venue Title:**
- Font: Inter Black (900)
- Size: `--text-4xl` (56px desktop), `--text-3xl` (40px mobile)
- Color: White
- Transform: Uppercase
- Text-shadow: `2px 2px 8px rgba(0,0,0,0.8)`
- Letter-spacing: `-2px`

**Location Subtitle:**
- Font: Roboto Mono
- Size: `--text-md` (16px)
- Color: `--te-gray-light`

**CTA Buttons:**
- Layout: Flex row, gap `--space-4`
- Mobile: Stacked, full-width
- Buttons: `.btn-primary` (Tickets), `.btn-secondary` (Menu)

---

#### Venue Info Section
- **Container:** `.container`
- **Grid:** 2 columns (desktop), stacked (mobile)
- **Gap:** `--space-8` (32px)
- **Padding:** `--space-12` vertical

**About Column:**
- Rich text content
- Subheadings: Inter Bold, `--text-lg`
- Paragraphs: Inter Regular, `--text-base`
- Bullet points: Orange bullets

**Details Column:**
- **Address:**
  - Icon: Location pin (orange)
  - Font: Roboto Mono, `--text-sm`
  - Clickable: Opens in maps app
  
- **Phone:**
  - Icon: Phone (orange)
  - Format: (XXX) XXX-XXXX
  - Clickable: `tel:` link

- **Map Embed:**
  - Aspect ratio: `16:9`
  - Border: `2px solid --te-black`
  - Margin-top: `--space-6`
  - Interactive Google Maps embed

---

#### Upcoming Shows
- **Section Title:** Inter Black, `--text-2xl`, uppercase
- **Grid:** `.grid-3` (3-2-1 responsive)
- **Cards:** Filtered to this venue only
- **Show All Link:** Styled as `.btn .btn-accent`, full-width (mobile)

---

#### Venue Highlights
- **Container:** Black background, white text
- **Padding:** `--space-12` vertical
- **Layout:** 3 columns (desktop), stacked (mobile)

**Feature Item:**
- Icon: Custom SVG (orange)
- Title: Inter Bold, `--text-lg`
- Description: Roboto Mono, `--text-sm`, gray-light
- Gap: `--space-4` between items

---

#### Photo Gallery
- **Layout:** Masonry grid or 4-column grid
- **Lightbox:** Modal popup on click
- **Images:** Border `1px solid --te-black`, hover lift effect

---

### Location-Specific Branding

Each venue page uses its designated color:

**Fort Worth (Blue - #0044FF):**
- Hero overlay tint: Blue at 20% opacity
- Accent elements: Blue
- Badges: Blue background

**Dallas (Red - #FF0000):**
- Hero overlay tint: Red at 20% opacity
- Accent elements: Red
- Badges: Red background

**Albuquerque (Orange - #FF4D00):**
- Hero overlay tint: Orange at 20% opacity
- Accent elements: Orange
- Badges: Orange background

**Red Room (Dark Red - #CC0000):**
- Hero overlay tint: Dark Red at 20% opacity
- Accent elements: Dark Red
- Badges: Dark Red background

---

## 5. Subscribe Page Layout

**URL:** `/subscribe`  
**Priority:** 0.7  
**Purpose:** Email newsletter signup with benefits

### Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ HERO SECTION                        │
│ "NEVER MISS A SHOW"                 │
│ Benefits list                        │
├─────────────────────────────────────┤
│ SIGNUP FORM (Centered)              │
│ ┌─────────────────────────────────┐ │
│ │ [Email Input]                   │ │
│ │ [Location Preference]           │ │
│ │ [Interests Checkboxes]          │ │
│ │ [SUBSCRIBE Button]              │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ SOCIAL PROOF                        │
│ "Join 10,000+ comedy fans"          │
│ Testimonials                        │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Component Specifications

#### Hero Section
- **Background:** Black
- **Container:** `.container-sm` (max 640px)
- **Padding:** `--space-16` (64px) vertical
- **Centered:** Text-align center

**Title:**
- Font: Inter Black (900)
- Size: `--text-4xl` (56px)
- Color: White
- Transform: Uppercase
- Margin-bottom: `--space-6`

**Benefits List:**
- Layout: Centered, max-width `500px`
- Icon: Checkmark (orange)
- Font: Roboto Mono, `--text-md`
- Color: Gray-light
- Gap: `--space-3` between items
- Items:
  - Weekly show lineups
  - Exclusive presale access
  - VIP discount codes
  - Behind-the-scenes content

---

#### Signup Form
- **Container:** `.container-sm`, white background
- **Padding:** `--space-8` (32px)
- **Border:** `2px solid --te-black`
- **Shadow:** `--shadow-brutal`
- **Max-width:** `500px`

**Email Input:**
- Height: `56px`
- Border: `2px solid --te-black`
- Font: Roboto Mono, `--text-base`
- Placeholder: "your.email@example.com"
- Focus: Orange border

**Location Preference:**
- Type: Radio buttons (horizontal)
- Options: All Locations | Fort Worth | Dallas | Albuquerque
- Styled: Custom radio with orange active state

**Interests:**
- Type: Checkboxes (grid, 2 columns)
- Options: Stand-up | Improv | Open Mic | Special Events
- Styled: Custom checkbox with orange check

**Privacy Note:**
- Font: Roboto Mono, `--text-xs`
- Color: Gray
- Link to privacy policy

**Submit Button:**
- Class: `.btn .btn-primary .btn-lg .btn-block`
- Text: "SUBSCRIBE NOW"
- Loading state: Spinner

---

#### Social Proof
- **Background:** Off-white
- **Padding:** `--space-12` vertical
- **Stat:** Large number (10,000+), Inter Black
- **Testimonials:** Carousel or grid (3-2-1)

---

### Form Behavior

**Validation:**
- Real-time email format check
- Required field indicators
- Error messages below fields (red, subtle)

**Success State:**
- Replace form with success message
- Confetti animation (optional)
- Message: "Welcome to the club! Check your email."
- CTA: "Browse upcoming shows"

**Error State:**
- Server error: Show friendly message
- Already subscribed: "You're already on the list!"

---

## 6. Menu Page Layout

**URLs:** 
- `/fort-worth-food-and-drink-menu-hyenas-comedy-club`
- `/dallas-food-and-drink-menu-at-hyenas-comedy-club`
- `/albuquerque-food-and-drink-menu-at-hyenas-comedy-club-copy` ⚠️ (Needs URL fix)

**Priority:** 0.6

### Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ PAGE HEADER                         │
│ "{VENUE} MENU"                      │
│ Tagline                             │
├─────────────────────────────────────┤
│ MENU SECTION NAVIGATION             │
│ [Food] [Drinks] [Desserts]          │
├─────────────────────────────────────┤
│ FOOD SECTION                        │
│ ┌─────────────────────────────────┐ │
│ │ Appetizers                      │ │
│ │ ├─ Item 1.........$12           │ │
│ │ ├─ Item 2.........$15           │ │
│ │                                 │ │
│ │ Entrees                         │ │
│ │ ├─ Item 1.........$20           │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ DRINKS SECTION                      │
│ (Similar structure)                 │
├─────────────────────────────────────┤
│ SPECIALS CALLOUT                    │
│ Happy hour, combo deals             │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Component Specifications

#### Page Header
- **Background:** Venue brand color (Blue/Red/Orange)
- **Text:** White
- **Container:** `.container`
- **Padding:** `--space-12` vertical

**Title:**
- Font: Inter Black, `--text-3xl`, uppercase
- Venue badge: Small pill above title

**Tagline:**
- Font: Roboto Mono, `--text-base`
- Example: "Full bar & kitchen open during all shows"

---

#### Menu Section Navigation
- **Style:** Sticky tabs (below header when scrolling)
- **Background:** White
- **Border-bottom:** `2px solid --te-black`
- **Buttons:** Full-width on mobile, auto on desktop
- **Active:** Black background, white text
- **Click:** Smooth scroll to section

---

#### Menu Sections

**Section Container:**
- Max-width: `960px` (`.container-sm`)
- Padding: `--space-8` vertical
- Background: White

**Section Title:**
- Font: Inter Black, `--text-2xl`, uppercase
- Border-bottom: `2px solid --te-black`
- Padding-bottom: `--space-3`
- Margin-bottom: `--space-6`

**Category Title:**
- Font: Inter Bold, `--text-xl`, uppercase
- Margin: `--space-6` top, `--space-4` bottom
- Color: Venue brand color

**Menu Item:**
```
┌─────────────────────────────────────┐
│ Item Name...................$12.99  │
│ Description (if any)                │
└─────────────────────────────────────┘
```

- **Name:** Roboto Mono Bold, `--text-base`, black
- **Price:** Roboto Mono Bold, `--text-base`, orange, right-aligned
- **Dots:** Auto-fill leader (CSS `border-bottom: dotted`)
- **Description:** Roboto Mono Regular, `--text-sm`, gray, italic
- **Spacing:** `--space-3` between items

**Dietary Icons:**
- 🌱 Vegetarian
- 🌾 Gluten-free
- 🌶️ Spicy
- Inline with item name, small size

---

#### Specials Callout
- **Background:** Off-white
- **Border:** `2px solid --te-orange`
- **Padding:** `--space-6`
- **Title:** "HAPPY HOUR SPECIALS"
- **Font:** Roboto Mono Bold
- **Details:** Pricing and times
- **Style:** Highlighted box, center-aligned

---

### PDF Download
- **Button:** Fixed bottom-right (desktop), bottom bar (mobile)
- **Text:** "DOWNLOAD MENU PDF"
- **Icon:** Download arrow
- **Style:** `.btn .btn-accent`
- **Action:** Opens PDF in new tab

---

## 7. Privacy Policy Page Layout

**URL:** `/privacy-policy`  
**Priority:** 0.3

### Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation (Sticky)                 │
├─────────────────────────────────────┤
│ PAGE HEADER                         │
│ "PRIVACY POLICY"                    │
│ Last updated: {date}                │
├─────────────────────────────────────┤
│ TABLE OF CONTENTS (Sticky sidebar)  │
│ ┌────────┬──────────────────────┐   │
│ │ TOC    │ Legal Content        │   │
│ │ Links  │ 1. Introduction      │   │
│ │        │ 2. Data Collection   │   │
│ │        │ 3. Usage             │   │
│ │        │ ...                  │   │
│ └────────┴──────────────────────┘   │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

### Component Specifications

#### Page Header
- **Background:** White
- **Border-bottom:** `2px solid --te-black`
- **Padding:** `--space-8` vertical
- **Container:** `.container`

**Title:**
- Font: Inter Black, `--text-3xl`, uppercase
- Margin-bottom: `--space-2`

**Last Updated:**
- Font: Roboto Mono, `--text-sm`
- Color: Gray

---

#### Layout Grid
- **Desktop:** Sidebar (25%) + Content (75%)
- **Mobile:** Stacked (sidebar becomes dropdown)
- **Container:** `.container`
- **Max-width:** `1280px`

**Table of Contents (Sidebar):**
- Position: Sticky, `top: 100px`
- Background: Off-white
- Border: `1px solid --te-gray-light`
- Padding: `--space-4`
- Font: Roboto Mono, `--text-sm`
- Links: Smooth scroll to sections
- Active: Orange text + border-left

**Content Area:**
- Max-width: `800px`
- Font: Inter Regular, `--text-base`
- Line-height: `1.7`
- Headings: Inter Bold, hierarchical sizes
- Margins: Comfortable (24px between sections)

---

## 8. Collection Templates

### Events Collection (CMS Template)

**Use Case:** Dynamically generated pages for all events

**CMS Fields:**
- Event Name (text)
- Slug (text, auto)
- Artist Image (image, 1:1)
- Description (rich text)
- Featured Credits (text)
- Category/Genre (multi-reference)
- Showtimes (multi-reference → Showtimes collection)

**Template:** Uses Single Event Page Layout (§2)

---

### Showtimes Collection (CMS Template)

**Use Case:** Individual showtime listings

**CMS Fields:**
- Event (reference → Events)
- Venue (reference → Venues)
- Date (date/time)
- Time (date/time)
- Price Range (number, number)
- Ticket Link (URL)
- Availability (number)
- Status (option: On Sale, Sold Out, Upcoming)

**Template:** Not standalone, embedded in Event pages

---

### Venues Collection (CMS Template)

**Use Case:** Venue landing pages

**CMS Fields:**
- Venue Name (text)
- Slug (text, auto)
- Location (option: Fort Worth, Dallas, Albuquerque, Red Room)
- Brand Color (color)
- Address (text)
- Phone (phone)
- Hero Image (image)
- About (rich text)
- Features (multi-text)
- Gallery (multi-image)
- Map Coordinates (text)

**Template:** Uses Venue Page Layout (§4)

---

## 9. Global Components

These components appear across multiple pages:

### Navigation (Global Header)
- **Specification:** See DESIGN-SPEC.md §2.1
- **Sticky:** Yes, always visible
- **Links:** Home, Locations dropdown, Shows, Subscribe
- **Mobile:** Hamburger menu, slide-in drawer

### Footer (Global)
- **Specification:** See DESIGN-SPEC.md §2.7
- **Sections:** Locations, Quick Links, Legal, Social
- **Newsletter:** Mini signup form (collapsed)

### Floating CTA Bar (Conditional)
- **Trigger:** Scroll past hero on event pages
- **Content:** "Get Tickets" button + Event name
- **Position:** Fixed bottom (mobile), top (desktop)
- **Dismissable:** Yes, close icon
- **Animation:** Slide up

---

## 10. SEO \& Accessibility Standards

All pages must implement:

### SEO
- ✅ Unique `<title>` tags (50-60 chars)
- ✅ Meta descriptions (150-160 chars)
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ XML Sitemap inclusion
- ✅ Semantic HTML5 elements

### Accessibility
- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation
- ✅ ARIA landmarks and labels
- ✅ Focus indicators (3px orange outline)
- ✅ Alt text on all images
- ✅ Color contrast ratios
- ✅ Screen reader testing

---

## 11. Performance Targets

**Page Load Times:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

**Optimization:**
- Lazy load images below fold
- Minified CSS/JS
- CDN for static assets
- Next-gen image formats (WebP)
- Critical CSS inlined

---

## 12. Implementation Checklist

For each page layout:

### Design Phase
- [ ] Wireframe created
- [ ] Component inventory documented
- [ ] Responsive breakpoints defined
- [ ] Content hierarchy established
- [ ] Design tokens applied

### Development Phase
- [ ] HTML semantic structure
- [ ] CSS follows design system
- [ ] JavaScript interactions tested
- [ ] Mobile-first responsive
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Content Phase
- [ ] Copy written and approved
- [ ] Images optimized and uploaded
- [ ] CMS fields configured
- [ ] Sample content populated

### QA Phase
- [ ] Accessibility audit passed
- [ ] Performance benchmarks met
- [ ] SEO checklist completed
- [ ] User testing conducted
- [ ] Analytics tracking verified

---

## Version History

**1.0.0** (January 10, 2026)
- Initial layout specifications for all sitemap pages
- Complete Single Event Page layout (key example)
- Collection template definitions
- SEO and accessibility standards
- Implementation checklist

---

**Next Steps:**
1. Review and approve Single Event Page layout (§2)
2. Create detailed wireframes for remaining pages
3. Build component library in Webflow/code
4. Populate CMS with sample data
5. Conduct user testing

**Questions or Feedback:** Contact design team for clarifications or adjustments to any layout specification.
