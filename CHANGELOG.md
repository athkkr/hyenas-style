# Changelog

All notable changes to the Hyenas Comedy Club styling project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added - 2026-01-10

#### Dual-Venue Card Component
- **Combined Fort Worth card** merging Main Room and Red Room shows into single slider card
- **Split location badge** with dual-color display (blue Fort Worth | red Red Room)
- **Secondary show callout** component for displaying Red Room show as compact element
- **Reduced homepage slider** from 4 cards to 3 cards (Fort Worth combined, Dallas, Albuquerque)
- **Enhanced CTA strategy**: Primary button links to Fort Worth location page, secondary text link to Red Room
- **Dual-venue CSS classes**: Added ~115 lines of CSS for `.te-location-badge-dual`, `.te-secondary-show`, and related components

#### Slider Component
- **Interactive card slider** for "Upcoming Shows" section with touch/swipe support
- **CSS scroll-snap** implementation for smooth native scrolling
- **Navigation controls**: Desktop arrow buttons (← →) and mobile dot indicators
- **Keyboard navigation** support (Arrow Left/Right keys)
- **Auto-responsive layout**: 3 cards visible (desktop), 2 cards (tablet), 1 card (mobile)
- **JavaScript controller** (`/src/js/slider.js`) with accessibility features
- **6 show cards** total in homepage slider (2 pages of 3 cards each on desktop)
  - Page 1: Fort Worth combined, Dallas, Albuquerque
  - Page 2: Fort Worth, Dallas, Albuquerque (additional upcoming shows)

#### Navigation Hints
- **Subtle guidance system** to help users discover slider functionality
- **Desktop hints**: Pulsing animation on next button with orange pointer arrow
- **Mobile hints**: "Swipe to view more" message with animated arrows (⟷)
- **Auto-hide behavior**: Hints fade after 5 seconds or first user interaction
- **Non-intrusive design**: `aria-hidden` for screen reader compatibility

#### Design System Enhancements
- **Utility classes**: Added comprehensive set to `/src/css/hyenas-te-system.css`
  - Display utilities (`.block`, `.hidden`, `.flex`)
  - Position utilities (`.relative`, `.absolute`)
  - Sizing utilities (`.w-full`, `.h-full`)
  - Responsive utilities (`.md:flex`, `.md:block`)
  - Hover/focus states (`.hover:bg-orange`)
- **Grid system**: Added `.te-grid-auto` for responsive auto-fit grids
- **Slider components**: Complete CSS for slider, navigation buttons, and dots

### Fixed - 2026-01-10

#### Typography & Layout
- **Artist name truncation**: Limited to 2 lines maximum with ellipsis (`...`)
  - Prevents cards from breaking layout with extremely long names
  - Added `line-clamp: 2` with webkit prefix and standard property
  - Added `overflow-wrap: break-word` for long unbreakable words
- **Path corrections**: Fixed CSS and JS file paths in location page template
  - Changed `../src/css/hyenas-te-system.css` → `../css/hyenas-te-system.css`
  - Changed `../src/js/navigation.js` → `../js/navigation.js`

#### Card Formatting
- **Grid layout fix**: Show cards now display in proper responsive grid
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column (full width)
- **Word-break handling**: Long words break gracefully without overflowing card boundaries

### Changed - 2026-01-10

#### File Structure
- **Created** `/src/templates/location-page.html` - Unified template using only main CSS
- **Created** `/src/js/slider.js` - Slider component controller
- **Created** `/docs/UNIFIED-SYSTEM.md` - Design system usage guide
- **Created** `/docs/IMPLEMENTATION-SUMMARY.md` - Session summary document
- **Updated** `/src/css/hyenas-te-system.css` - Added 245+ lines of new CSS (slider utilities + dual-venue components)
- **Updated** `/src/templates/homepage.html` - Merged Fort Worth cards, added 3 placeholder cards for functional slider (6 total cards)

#### Architecture
- **Single source of truth**: All pages now use `/src/css/hyenas-te-system.css` exclusively
- **Eliminated inline CSS**: Removed redundant utility classes from page templates
- **Consistent naming**: All design system classes use `.te-` prefix

### Technical Details

#### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS features**: 
  - Scroll-snap for slider
  - Line-clamp for text truncation
  - Grid and Flexbox for layout
  - CSS animations for hints

#### Performance
- **Optimized scrolling**: Native scroll-snap for 60fps performance
- **Minimal JavaScript**: Slider controller is ~200 lines, hints auto-remove
- **CSS-first approach**: Animations handled by CSS, not JS

#### Accessibility
- **ARIA labels**: All interactive elements properly labeled
- **Keyboard navigation**: Full keyboard support for slider
- **Screen readers**: Hints hidden from assistive technology
- **Focus management**: Proper focus indicators on all controls

---

---

## [2.1.0] - 2026-01-10

### Added
- Interactive slider component with touch/swipe support and keyboard navigation
- Navigation hints (desktop pulsing arrow, mobile swipe message) with auto-hide
- Comprehensive utility classes for layout and styling
- Text truncation for artist names (2-line max with ellipsis)
- Slider JavaScript controller (`/src/js/slider.js`)

### Fixed
- Artist name overflow in show cards
- CSS and JS file path corrections in templates
- Grid layout responsiveness across breakpoints

### Changed
- Single CSS file architecture (`hyenas-te-system.css` as source of truth)
- Added 130+ lines of new CSS for slider and utilities
- Created unified location page template

---

## [2.0.0] - 2026-01-10

### 🎨 MAJOR REDESIGN - Teenage Engineering Aesthetic

**Breaking Changes:**
- **Complete color system overhaul**: Removed purple-based palette, implemented TE-inspired black/white/orange design
- **Typography change**: Removed Space Grotesk, now using Inter for all text
- **Repository migration**: `athkkr/hyenas-comedy-styles` → `athkkr/hyenas-style`
- **File structure reorganization**: Moved to `/src` directory structure
- **Class naming**: All classes now prefixed with `te-` (Teenage Engineering)

### Added
- **TE-inspired design system**: Black/white base with vibrant accent colors (orange, blue, red, green)
- **Location-based color coding**:
  - Fort Worth: Blue (#0044FF)
  - Dallas: Red (#FF0000)
  - Albuquerque: Orange (#FF4D00)
  - Red Room: Dark Red (#CC0000)
- **Roboto Mono** font for technical elements
- **Brutal shadow effects** for TE aesthetic
- **CRT scanline overlay** on images
- **Enhanced navigation component**:
  - Hyenas logo integration (50px height)
  - Defined menu structure (FW, Dallas, Red Room, ABQ, Shows)
  - Mobile hamburger menu
  - Sticky positioning
- **Grouped showtime display** in show cards
- **Location badges** with color coding
- **Filter bar** for location and date filtering
- **JavaScript modules**:
  - `navigation.js` - Mobile menu behavior
  - `filters.js` - Show filtering logic
  - `animations.js` - Scroll animations

### Changed
- **CDN delivery**: Switched to jsDelivr for faster, cached delivery
- **Font loading**: Updated Google Fonts import (Inter 400-900, Roboto Mono 400-700)
- **Component structure**: Complete redesign of show cards with semantic HTML
- **Grid system**: Enhanced responsive behavior (4→2→1 columns)
- **Button styles**: Updated to TE aesthetic with brutal shadows

### Removed
- Space Grotesk font family
- Purple color palette (`--hyenas-purple` and variants)
- Old repository structure
- Generic show card design

**Migration Guide:** See `/docs/MIGRATION-V1-TO-V2.md`

---

## [1.0.0] - 2026-01-02

### Added - Initial Release 🎉

**Design System Foundation:**
- CSS Variables system with purple-based color palette
  - Primary: Hyenas Purple (#8B5CF6)
  - Accents: Electric Yellow, Neon Pink, Cyan, Lime, Orange
- Typography scale using Major Third ratio (1.250)
  - Display font: Space Grotesk
  - Body font: Inter
  - Mono font: JetBrains Mono
- Spacing system based on 8px grid (4px - 160px)
- Border radius tokens
- Shadow system including brutal TE-style shadows

**Components:**
- Button system (primary, secondary, accent, ghost)
- Show card component with hover lift effect
- Badge component (5 color variants)
- Brutal border effect component
- Gradient text effect
- Neon glow effect

**Layout System:**
- Container classes (sm, default, lg)
- Responsive grid system (auto-responsive, 2-4 columns)
- Flexbox utilities

**Responsive Design:**
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1440px
- Auto-collapse grids on mobile

**Accessibility:**
- WCAG AA compliant color contrasts
- Visible focus states (3px purple outline)
- 44px minimum touch targets
- Keyboard navigation support
- Reduced motion support

**Repository:**
- Initial deployment to `athkkr/hyenas-comedy-styles`
- GitHub Pages hosting
- Single file: `hyenas-styles.css`

**Documentation:**
- README.md with component library
- CHANGELOG.md template
- DEPLOYMENT-GUIDE.md (now archived as v1.0.0-LEGACY)

**Design Decisions:**
- Purple as primary to match existing Hyenas brand (later changed in v2.0.0)
- 8px spacing grid for consistent rhythm
- Mobile-first for 60%+ mobile traffic
- Brutal shadows for playful brand personality

**Performance:**
- Initial file size: ~21kb unminified
- Zero external dependencies (except Google Fonts)

**Note:** This version was completely redesigned in v2.0.0 with TE aesthetic. See `/docs/MIGRATION-V1-TO-V2.md` for migration details.

---

## Version History Summary

| Version | Date | Description | Breaking Changes |
|---------|------|-------------|------------------|
| **2.1.0** | 2026-01-10 | Slider component & navigation hints | No |
| **2.0.0** | 2026-01-10 | TE aesthetic redesign | Yes - See migration guide |
| **1.0.0** | 2026-01-02 | Initial purple-based design | N/A |

---

## Links

- **Current Repository**: https://github.com/athkkr/hyenas-style
- **Legacy Repository** (v1.0.0): https://github.com/athkkr/hyenas-comedy-styles
- **Live Stylesheet**: https://cdn.jsdelivr.net/gh/athkkr/hyenas-style@main/src/css/hyenas-te-system.css
- **Migration Guide**: `/docs/MIGRATION-V1-TO-V2.md`
- **Design System**: `/docs/DESIGN-SYSTEM.md`
- **Implementation Guide**: `/docs/IMPLEMENTATION.md`

---

**Maintained by:** Hyenas Development Team
**Current Version:** 2.1.0
**Last Updated:** January 10, 2026
