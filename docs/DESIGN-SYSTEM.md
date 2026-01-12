# ⚡ Hyenas Comedy Club: Design System
**Version:** 2.1.0
**Last Updated:** January 10, 2026
**Aesthetic:** Teenage Engineering-Inspired

---

## 1. Introduction

This document serves as the single source of truth for the Hyenas Comedy Club digital brand. It defines the core visual elements, component library, and technical implementation details based on the **Teenage Engineering-inspired aesthetic** implemented in v2.0.0.

**Design Philosophy:**
* **Bold & Technical:** High contrast, brutal shadows, industrial typography
* **Mobile-First:** All styles are base mobile and scale up
* **Accessibility:** Mandatory WCAG AA compliance (4.5:1 contrast, 44px touch targets)
* **8px Grid System:** All spacing and sizing aligns to an 8px scale
* **Token-Based:** Always use CSS variables, never hardcoded values

**Migration Note:** This replaces the v1.0.0 purple-based design system. See `/docs/MIGRATION-V1-TO-V2.md` for details.

---

## 2. Foundations

### 🎨 Color Palette

#### Base Colors (TE-Inspired)
High contrast black and white foundation for bold, technical aesthetic.

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--te-black` | `#000000` | **Primary.** Text, borders, backgrounds. |
| `--te-white` | `#FFFFFF` | **Secondary.** Backgrounds, light text on dark. |
| `--te-off-white` | `#F4F4F4` | **Subtle backgrounds.** Cards, sections. |
| `--te-gray-light` | `#E0E0E0` | **Borders, dividers.** Structural elements. |
| `--te-gray-dark` | `#333333` | **Secondary text.** Less prominent content. |

#### Accent Colors (Location-Based)
Vibrant accents for location identification and functional states.

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--te-orange` | `#FF4D00` | **Primary Accent.** CTAs, highlights, branding. |
| `--te-blue` | `#0044FF` | **Fort Worth.** Location badge, links. |
| `--te-red` | `#FF0000` | **Dallas.** Location badge, alerts. |
| `--te-green` | `#00AA00` | **Success.** Confirmations, available status. |

#### Location-Specific Colors
Each venue has a dedicated color for consistency across the brand.

| Token | Value | Location |
| :--- | :--- | :--- |
| `--loc-fortworth` | `#0044FF` | Fort Worth, TX |
| `--loc-dallas` | `#FF0000` | Dallas, TX |
| `--loc-albuquerque` | `#FF4D00` | Albuquerque, NM |
| `--loc-redroom` | `#CC0000` | Red Room (Dallas) |

---

### 🔤 Typography

**Font Families:**
* **Display/Headings:** `Inter` (700, 900 weight) - Bold, technical
* **Body Text:** `Inter` (400, 500, 600 weight) - Clean, readable
* **Technical Elements:** `Roboto Mono` (400, 500, 700 weight) - Monospaced

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

**Note:** Space Grotesk removed in v2.0.0. Inter now handles all text.

**Type Scale:**

| Class | Rem | Px | Usage |
| :--- | :--- | :--- | :--- |
| `text-4xl` | 3.052rem | 49px | Hero Headings |
| `text-3xl` | 2.441rem | 39px | Page Titles |
| `text-2xl` | 1.953rem | 31px | Section Headings |
| `text-xl` | 1.563rem | 25px | Card Titles |
| `text-lg` | 1.25rem | 20px | Subheadings |
| `text-base` | 1rem | 16px | **Body Text (Default)** |
| `text-sm` | 0.8rem | 13px | Captions, Badges |
| `text-xs` | 0.64rem | 10px | Fine Print |

---

### 📏 Spacing System
Based on an 8px grid. Use these variables for padding, margins, and gaps.

| Token | Size | Common Usage |
| :--- | :--- | :--- |
| `--space-1` | 4px | Minimal adjustments |
| `--space-2` | 8px | **Tiny Gap** (Icon + Text) |
| `--space-3` | 12px | Tight grouping |
| `--space-4` | 16px | **Default Gap** / Standard margin |
| `--space-5` | 24px | **Card Padding** |
| `--space-6` | 32px | Relaxed spacing |
| `--space-8` | 48px | Large separation |
| `--space-10` | 64px | **Section Spacing** |
| `--space-16` | 128px | Hero padding |

---

## 3. Component Library

### 🔘 Buttons (TE System)
All buttons have a minimum height of 44px for touch accessibility.

**Classes:**
* `.te-btn`: Base class (required)
* `.te-btn-primary`: Black background (Main CTA)
* `.te-btn-accent`: Orange with brutal shadow (Featured actions)
* `.te-btn-outline`: Transparent with border (Secondary actions)
* `.te-btn-ghost`: Minimal styling (Text links)

**Sizes:**
* `.te-btn-sm`: Small (36px min-height)
* `.te-btn`: Default (44px min-height)
* `.te-btn-lg`: Large (56px min-height)
* `.te-btn-block`: Full width

**Example:**
```html
<button class="te-btn te-btn-accent te-btn-lg">GET TICKETS</button>
<button class="te-btn te-btn-outline">LEARN MORE</button>
```

**Brutal Shadow Effect:**
```css
.te-btn-accent {
  box-shadow: 4px 4px 0 var(--te-black);
}
```

### 🏷️ Location Badges
Color-coded badges for venue identification.

**Variants:**
* `.te-location-badge.fort-worth`: Blue (#0044FF)
* `.te-location-badge.dallas`: Red (#FF0000)
* `.te-location-badge.albuquerque`: Orange (#FF4D00)
* `.te-location-badge.red-room`: Dark Red (#CC0000)

**Example:**
```html
<div class="te-location-badge fort-worth">
  <span class="loc-id">FW-TX</span>
  <span class="loc-name">FORT WORTH</span>
</div>
```

### 🎫 Show Card (TE System)
The primary component for displaying event information with TE aesthetic.

**Key Features (v2.1.0):**
* Location badge with color coding
* Artist name truncation (2-line max with ellipsis)
* Grouped showtime display by date
* CRT scanline overlay effect
* Word-break handling for long names
* Brutal border styling

**Example:**
```html
<article class="te-card" data-location="fortworth">
  <!-- Header with location badge -->
  <div class="te-card-header">
    <div class="te-location-badge fort-worth">
      <span class="loc-id">FW-TX</span>
      <span class="loc-name">FORT WORTH</span>
    </div>
    <div class="te-ui-dots">UPCOMING</div>
  </div>

  <!-- Image with CRT overlay -->
  <a href="/event" class="te-image-container">
    <img src="artist.jpg" alt="Artist Name">
    <div class="te-overlay-scan"></div>
  </a>

  <!-- Content -->
  <div class="te-content">
    <div class="te-artist-block">
      <h3 class="te-artist-name">ARTIST NAME</h3>
      <p class="te-artist-credits">As seen on Netflix</p>
    </div>

    <!-- Grouped showtimes -->
    <div class="te-schedule-grouped">
      <div class="te-grouped-row">
        <div class="te-date-col">
          <span class="d-day">FRI</span>
          <span class="d-num">JAN 09</span>
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

**CSS Features:**
```css
.te-artist-name {
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow-wrap: break-word;
  font-weight: 900;
  text-transform: uppercase;
}

.te-card {
  border: 2px solid var(--te-black);
  box-shadow: 4px 4px 0 var(--te-black);
}
```

### 🎫🎫 Dual-Venue Show Card
**Added:** January 10, 2026

Special card variant for displaying two shows from the same location (e.g., Fort Worth Main Room + Red Room).

**Key Features:**
* Split location badge with dual-color display
* Primary show with full card treatment
* Secondary show as compact callout
* Dual CTA strategy (primary button + text link)
* Maintains visual consistency with standard cards

**Example:**
```html
<article class="te-card te-card-dual-venue" data-location="fortworth" data-venues="main,redroom">
  <!-- Dual-Venue Badge Header -->
  <div class="te-card-header">
    <div class="te-location-badge-dual">
      <div class="badge-segment fort-worth">
        <span class="loc-id">FW-TX</span>
        <span class="loc-name">FORT WORTH</span>
      </div>
      <div class="badge-divider">|</div>
      <div class="badge-segment red-room">
        <span class="loc-id">FW-RR</span>
      </div>
    </div>
    <div class="te-ui-dots">UPCOMING</div>
  </div>

  <!-- PRIMARY SHOW (Main Room) -->
  <a href="/events/artist" class="te-image-container">
    <img src="artist.jpg" alt="Artist Name">
    <div class="te-overlay-scan"></div>
  </a>

  <div class="te-content">
    <!-- Primary Artist -->
    <div class="te-artist-block">
      <h3 class="te-artist-name">PRIMARY ARTIST</h3>
      <p class="te-artist-credits">Main show credits</p>
    </div>

    <!-- Primary Schedule -->
    <div class="te-schedule-grouped">
      <div class="te-grouped-row">
        <div class="te-date-col">
          <span class="d-day">FRI</span>
          <span class="d-num">JAN 09</span>
        </div>
        <div class="te-times-col">
          <span class="te-time-pill">8:00PM</span>
          <span class="te-time-pill">10:00PM</span>
        </div>
      </div>
    </div>

    <!-- SECONDARY SHOW CALLOUT (Red Room) -->
    <div class="te-secondary-show">
      <div class="secondary-label">
        <span class="venue-indicator red-room-dot"></span>
        <a href="/locations/redroom" class="venue-link">RED ROOM</a>
      </div>
      <div class="secondary-artist">
        <span class="artist-name">SECONDARY ARTIST</span>
        <span class="show-time">FRI 10:00PM</span>
      </div>
    </div>

    <!-- Primary CTA -->
    <a href="/locations/fortworth" class="te-main-cta">VIEW ALL FORT WORTH SHOWS</a>
  </div>
</article>
```

**CSS Classes:**
* `.te-card-dual-venue`: Wrapper class for dual-venue card
* `.te-location-badge-dual`: Split badge container
* `.badge-segment`: Individual badge section (colored by location)
* `.badge-divider`: Vertical divider between badge segments
* `.te-secondary-show`: Secondary show callout container
* `.secondary-label`: Venue label with colored dot indicator
* `.venue-link`: Clickable venue name link
* `.venue-indicator`: Colored dot (`.red-room-dot`, etc.)
* `.secondary-artist`: Artist name and show time container

**Design Pattern:**
* **Primary show** gets full visual hierarchy (large image, prominent placement)
* **Secondary show** uses compact callout with left border accent in venue color
* Badge shows both venues: "FW-TX FORT WORTH | FW-RR"
* Primary CTA links to main location page
* Secondary venue link provides navigation to specific venue

### 🎠 Interactive Slider
**Added:** January 10, 2026

Touch-enabled card slider with keyboard and navigation support.

**Features:**
* CSS scroll-snap for smooth native scrolling
* Desktop: Arrow button navigation (← →)
* Mobile: Dot indicator navigation
* Keyboard support (Arrow Left/Right keys)
* Auto-responsive: 3 cards (desktop), 2 (tablet), 1 (mobile)
* JavaScript controller: `/src/js/slider.js`
* **6 total cards** on homepage (2 pages of 3 cards each on desktop)

**Usage:**
```html
<div class="te-slider-container">
  <div class="te-slider">
    <div class="te-slider-track">
      <!-- Show cards here (6 total for functional slider) -->
    </div>
  </div>
  <!-- Navigation buttons (desktop) -->
  <button class="te-slider-btn te-slider-btn-prev">←</button>
  <button class="te-slider-btn te-slider-btn-next">→</button>
  <!-- Dot indicators (mobile) -->
  <div class="te-slider-dots"></div>
</div>
```

### 💡 Navigation Hints
**Added:** January 10, 2026

Subtle, auto-hiding guidance to help users discover slider functionality.

**Features:**
* Desktop: Pulsing animation on next button with orange pointer arrow
* Mobile: "Swipe to view more" message with animated arrows (⟷)
* Auto-hide after 5 seconds OR first user interaction
* `aria-hidden` for screen reader compatibility

**Implementation:**
* Hints automatically fade out after interaction
* CSS animations for visual appeal
* Non-intrusive, accessibility-friendly design

---

## 4. Layout System

### 📦 Containers
| Class | Max Width | Usage |
| :--- | :--- | :--- |
| `.container` | `1280px` | **Default.** Standard page content. |
| `.container-sm` | `640px` | Narrow content (Reading/Forms). |
| `.container-lg` | `1536px` | Wide content (Dashboards/Galleries). |

### 🏗️ Grid System
Responsive grid classes that adapt automatically.

* `.grid-auto`: Min 280px columns (Auto-responsive)
* `.te-grid-auto`: Enhanced auto-fit grid with responsive columns
* `.grid-2`: 2 columns (Desktop) → 1 column (Mobile)
* `.grid-3`: 3 columns (Desktop) → 2 (Tablet) → 1 (Mobile)
* `.grid-4`: 4 columns (Desktop) → 2 (Tablet) → 1 (Mobile)

### 📱 Responsive Breakpoints
| Breakpoint | Width | Query |
| :--- | :--- | :--- |
| **Mobile** | Default | Base styles |
| **Tablet** | < 768px | `@media (max-width: 768px)` |
| **Mobile Small** | < 640px | `@media (max-width: 640px)` |
| **Desktop Large** | > 1440px | `@media (min-width: 1440px)` |

---

## 5. Utilities & Effects

### ✨ Special Effects
* `.brutal-border`: Thick border + offset shadow (Neo-brutalist style).
* `.gradient-text`: Purple to pink text gradient.
* `.neon-glow`: Electric yellow glow effect.
* `.pill-divider`: Decorative pill element for section breaks.

### 🎭 Animation
* `.animate-fadeIn`: Fade in from below.
* `.animate-slideIn`: Slide in from left.
* `.animate-bounce`: Gentle looping bounce.

### 🛠️ Utility Classes
**Enhanced:** January 10, 2026

**Display:**
* `.block` - Display as block element
* `.hidden` - Hide element
* `.flex` - Display as flexbox
* `.grid` - Display as grid
* `.hide-mobile` - Hide on mobile devices

**Position:**
* `.relative` - Position relative
* `.absolute` - Position absolute

**Sizing:**
* `.w-full` - Width 100%
* `.h-full` - Height 100%

**Responsive:**
* `.md:flex` - Flex on medium+ screens
* `.md:block` - Block on medium+ screens
* `.md:hidden` - Hide on medium+ screens

**Interactive States:**
* `.hover:bg-orange` - Orange background on hover
* `.focus:outline-orange` - Orange outline on focus

**Text:**
* `.text-center` - Center align text
* `.uppercase` - Transform to uppercase
* `.font-bold` - Bold font weight
* `.line-clamp-2` - Truncate to 2 lines with ellipsis

**Spacing:**
* `.mt-4`, `.mb-8`, `.py-10` etc. (See spacing scale above)

---

## 6. Implementation Protocols

### 🔄 Cache Busting Strategy
When updating the stylesheet, increment the version query parameter to bust cache:

* `?v=1.0.0` → `?v=1.0.1` (Patch/Bug fix)
* `?v=1.0.0` → `?v=1.1.0` (New Feature)
