# Changelog

All notable changes to the Hyenas Comedy Club Style System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### To Do
- [ ] Add navigation component styles
- [ ] Create calendar view component
- [ ] Add loading state animations
- [ ] Create modal/overlay component
- [ ] Add form element styles
- [ ] Performance optimization (minification)
- [ ] Consider dark mode support (future)

---

## [1.0.0] - 2026-01-02

### Added - Initial Release 🎉

**Design System Foundation:**
- CSS Variables system with Teenage Engineering-inspired color palette
  - Primary: Hyenas Purple (#8B5CF6)
  - Accents: Electric Yellow, Neon Pink, Cyan, Lime, Orange
  - Complete neutral grayscale (100-900)
- Typography scale using Major Third ratio (1.250)
  - Display font: Space Grotesk
  - Body font: Inter
  - Mono font: JetBrains Mono
- Spacing system based on 8px grid (4px - 160px)
- Border radius tokens (sm to full)
- Shadow system including brutal TE-style shadows
- Transition/animation variables

**Components:**
- Button system with 4 variants:
  - Primary (purple brand)
  - Secondary (outlined)
  - Accent (electric yellow with brutal shadow)
  - Ghost (minimal)
- Button sizes: sm (36px), default (44px), lg (56px)
- Show card component with:
  - 3:2 aspect ratio image container
  - Badge overlay support
  - Hover lift effect
  - Flexible content area
  - Price + CTA footer
- Badge component with 5 color variants
- Brutal border effect component
- Gradient text effect
- Neon glow effect
- Pill divider component

**Layout System:**
- Container classes (sm, default, lg)
- Responsive grid system:
  - Auto-responsive grid (min 280px columns)
  - Fixed column grids (2, 3, 4 columns)
  - Mobile-first collapse behavior
- Flexbox utilities

**Utilities:**
- Spacing utilities (margin, padding)
- Typography utilities (sizes, weights, alignment)
- Color utilities (text, background)
- Display utilities
- Flex/grid utilities

**Responsive Design:**
- Mobile-first approach
- Breakpoints:
  - Mobile: 640px and below
  - Tablet: 768px and below
  - Desktop: 1024px+
  - Large Desktop: 1440px+
- All grids auto-collapse on mobile
- Full-width buttons on mobile
- Responsive font sizing (14px mobile → 18px desktop)

**Accessibility:**
- WCAG AA compliant color contrasts
- Visible focus states (3px purple outline, 2px offset)
- 44px minimum touch targets
- Skip-to-content link
- Keyboard navigation support
- Semantic HTML structure
- Reduced motion support via `prefers-reduced-motion`

**Animations:**
- fadeIn (fade + translate)
- slideIn (slide from left)
- bounce (gentle loop)
- Smooth transitions on all interactive elements

**Documentation:**
- Complete README.md with component library
- Component examples in HTML
- Deployment guide
- Claude review template
- Quick reference cheat sheet

### Design Decisions
- Chose Teenage Engineering aesthetic for bold, energetic comedy club vibe
- Purple as primary to match existing Hyenas brand
- Electric yellow for high-attention CTAs (ticket purchases)
- 8px spacing grid for consistent rhythm
- Mobile-first to prioritize 60%+ mobile traffic
- Brutal shadows for playful, distinctive brand personality

### Technical Decisions
- Pure CSS (no preprocessors) for Webflow compatibility
- External stylesheet via GitHub Pages for version control
- CSS variables for maintainability and easy theming
- BEM-inspired naming for clarity
- Minimal use of !important (accessibility only)
- Progressive enhancement approach

### Performance
- Initial file size: ~21kb unminified
- Target minified: ~15kb
- Zero external dependencies (except Google Fonts)
- Optimized selectors for fast parsing

---

## Version History Summary

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-01-02 | Initial release with complete style system |

---

## How to Update This Changelog

### When Making Changes

1. Add items to `[Unreleased]` section as you work
2. When ready to release, move items to new version section
3. Use categories: Added, Changed, Deprecated, Removed, Fixed, Security
4. Include date in YYYY-MM-DD format
5. Update version in CSS file comment header
6. Update version in Webflow custom code (?v=X.X.X)

### Version Numbering

**MAJOR.MINOR.PATCH** (e.g., 2.1.3)

- **MAJOR** (2.0.0): Breaking changes, major redesign
- **MINOR** (1.1.0): New features, new components
- **PATCH** (1.0.1): Bug fixes, small tweaks

### Example Entry Format

```markdown
## [1.1.0] - 2026-01-15

### Added
- Navigation component with mobile hamburger menu
- Dropdown menu styles for venue selection
- Sticky header behavior on scroll

### Changed
- Increased button padding for better touch targets
- Updated show card hover effect to be more pronounced
- Refined purple shade for better contrast

### Fixed
- Grid-4 now properly collapses to 2 columns on tablet
- Badge text now readable on all background colors
- Focus states visible in Safari

### Performance
- Reduced CSS file size by 3kb through consolidation
- Optimized animation performance with transform
```

---

## Breaking Changes Log

Track any changes that require updates to HTML:

### None Yet
First version - no breaking changes

---

## Migration Guides

When breaking changes occur, add migration instructions here:

### None Yet
First version - no migrations needed

---

## Deprecation Notices

Track features being phased out:

### None Yet
All features are actively supported

---

## Links

- [GitHub Repository](https://github.com/athkkr/hyenas-comedy-styles)
- [Live Stylesheet](https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css)
- [Component Examples](component-examples.html)
- [Quick Reference](QUICK-REFERENCE.md)

---

**Maintained by:** Anooj Krishnan  
**Last Updated:** January 2, 2026
