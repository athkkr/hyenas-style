# Claude CSS Review Prompt Template

Save this as a text snippet for quick CSS reviews. Just paste your CSS at the bottom!

---

## 🔍 COMPREHENSIVE CSS REVIEW REQUEST

Hi Claude! Please review the CSS file below against these criteria:

### 1️⃣ DESIGN CONSISTENCY ✨

**Brand Alignment:**
- [ ] All colors use CSS variables from `:root` (no hardcoded hex codes in components)
- [ ] Color palette matches Teenage Engineering aesthetic (purple, electric yellow, neon pink, cyan)
- [ ] Spacing follows 8px grid system (multiples of 8: 8px, 16px, 24px, 32px...)
- [ ] Typography uses defined type scale (no random font sizes)
- [ ] Font families match: Space Grotesk (headings), Inter (body)

**Component Consistency:**
- [ ] Similar components share base classes (DRY principle)
- [ ] Naming conventions are consistent (BEM-style: `.component__element--modifier`)
- [ ] Border radius values use defined tokens (sm, md, lg, xl)
- [ ] Shadows use brutal/TE style where appropriate

**Red Flags to Report:**
- Any `color: #ABC123` not using a CSS variable
- Spacing values that aren't multiples of 4 or 8
- Font sizes not in the type scale
- Inconsistent naming patterns

---

### 2️⃣ RESPONSIVE DESIGN 📱

**Mobile-First Approach:**
- [ ] Base styles work on mobile (320px+)
- [ ] Media queries use `max-width` for overrides
- [ ] Breakpoints are logical: 640px (mobile), 768px (tablet), 1440px (desktop large)
- [ ] Grid layouts collapse appropriately (4 cols → 2 cols → 1 col)

**Touch & Interaction:**
- [ ] All interactive elements minimum 44px height (accessibility)
- [ ] Touch targets don't overlap on mobile
- [ ] Hover states gracefully degrade on touch devices
- [ ] Text remains readable at all breakpoints (minimum 14px on mobile)

**Common Issues to Check:**
- Fixed widths that break on small screens
- Overflow issues (text/images exceeding containers)
- Navigation breaking on mobile
- Buttons too small to tap comfortably

**Red Flags to Report:**
- Any element with `height: 30px` for interactive elements
- `font-size < 14px` on mobile breakpoints
- Horizontal scrolling on mobile
- Missing responsive behavior for new components

---

### 3️⃣ ACCESSIBILITY ♿

**WCAG AA Compliance:**
- [ ] Color contrast ratios minimum 4.5:1 for normal text
- [ ] Color contrast ratios minimum 3:1 for large text (18px+)
- [ ] Focus states clearly visible (3px purple outline, 2px offset)
- [ ] Skip-to-content link present and functional
- [ ] No color-only information conveyance

**Interactive Elements:**
- [ ] All buttons/links have visible focus states
- [ ] Focus states use `:focus-visible` to avoid mouse outlines
- [ ] Tab order is logical (follows visual flow)
- [ ] No keyboard traps (can tab through entire page)

**Semantic Structure:**
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skipping)
- [ ] Proper use of semantic elements (nav, main, article, aside)
- [ ] Form labels associated with inputs

**Motion Sensitivity:**
- [ ] `@media (prefers-reduced-motion)` respects user preference
- [ ] Animations are subtle and purposeful
- [ ] Critical content doesn't rely on animation

**Red Flags to Report:**
- Low contrast color combinations (purple text on pink background)
- Missing focus states on buttons/links
- `outline: none` without custom focus indicator
- Animations that can't be disabled

---

### 4️⃣ TECHNICAL QUALITY 🔧

**Code Organization:**
- [ ] CSS is well-organized (variables → reset → base → components → utilities)
- [ ] Related rules are grouped together
- [ ] Comments explain complex sections
- [ ] No commented-out code (remove old experiments)

**Specificity Management:**
- [ ] Specificity is minimal and consistent
- [ ] No overly specific selectors (`.page .section .container .card .title`)
- [ ] `!important` used sparingly (ideally 0-3 times, only for utilities/accessibility)
- [ ] Class-based styling (not relying on element selectors)

**Performance:**
- [ ] No duplicate rules (same property defined multiple times)
- [ ] No redundant selectors
- [ ] Efficient use of shorthand properties
- [ ] Universal selector `*` used minimally

**Browser Compatibility:**
- [ ] No experimental CSS without fallbacks
- [ ] Vendor prefixes where needed (for older browsers)
- [ ] Progressive enhancement approach (works without latest features)

**Red Flags to Report:**
- Multiple `!important` declarations (>5 is concerning)
- Deeply nested selectors (>3 levels)
- Duplicate properties (same rule defined in multiple places)
- Unused CSS (dead code)

---

### 5️⃣ PERFORMANCE OPTIMIZATION ⚡

**File Size:**
- [ ] CSS file under 100kb unminified (target: 20-50kb)
- [ ] No excessively long selectors
- [ ] Efficient use of CSS variables (reduces repetition)

**Rendering:**
- [ ] No layout thrashing (avoid complex calc() in critical paths)
- [ ] Transforms used for animations (better GPU performance)
- [ ] Will-change used sparingly (only for frequent animations)

**Opportunities:**
- Consolidate similar rules
- Remove unused styles
- Minify for production
- Consider critical CSS extraction (future)

**Red Flags to Report:**
- File size >100kb (needs optimization)
- Overuse of expensive properties (box-shadow on every element)
- Inefficient selectors

---

### 6️⃣ TEENAGE ENGINEERING AESTHETIC CHECK 🎨

**TE Design Principles:**
- [ ] Bold, high-contrast colors (not muted/pastel)
- [ ] Brutal borders and shadows (thick borders, offset box-shadows)
- [ ] Playful but functional (not overdone)
- [ ] Clean spacing (generous whitespace)
- [ ] Sharp, geometric shapes (not overly rounded)

**Specific TE Elements:**
- [ ] Brutal box-shadow effect: `8px 8px 0 var(--black)`
- [ ] Electric accent colors (yellow, pink, cyan, lime)
- [ ] Bold typography with tight letter-spacing
- [ ] Pill-shaped dividers/badges
- [ ] Neon glow effects on special elements

**Red Flags to Report:**
- Muted colors that look "corporate"
- Overly subtle shadows (needs more punch)
- Too many rounded corners (conflicts with TE aesthetic)
- Timid hover effects (should be bold)

---

### 7️⃣ COMPONENT-SPECIFIC CHECKS 🧩

**Buttons:**
- [ ] All 4 variants work: primary, secondary, accent, ghost
- [ ] 3 sizes work: sm, default, lg
- [ ] Hover/active states are satisfying
- [ ] Loading/disabled states (if applicable)

**Show Cards:**
- [ ] Image aspect ratio maintained (3:2)
- [ ] Badge overlay positioned correctly
- [ ] Hover lift effect works smoothly
- [ ] Content area flexible (adapts to varying text lengths)

**Grid System:**
- [ ] `.grid-auto` adjusts columns responsively
- [ ] `.grid-2`, `.grid-3`, `.grid-4` collapse properly
- [ ] Gap utilities work correctly

**Badges:**
- [ ] All color variants render correctly
- [ ] Text is readable on all background colors
- [ ] Pill shape is consistent

---

## 📋 REVIEW CHECKLIST

Go through each section and provide:

1. **✅ PASSED** items (things that look good)
2. **⚠️ WARNINGS** (not critical but worth noting)
3. **❌ CRITICAL ISSUES** (must fix before production)
4. **💡 SUGGESTIONS** (optional improvements)

**Format your response like this:**

```
## DESIGN CONSISTENCY
✅ All colors use CSS variables correctly
✅ Spacing follows 8px grid system
⚠️ Found 2 instances of hardcoded spacing (lines 234, 567)
❌ `.show-card__title` uses font-size: 22px (not in type scale)
💡 Consider consolidating similar button variants

## RESPONSIVE DESIGN
✅ Mobile-first approach implemented well
✅ Breakpoints are logical
❌ `.grid-4` doesn't collapse on tablet (stays 4 cols)
💡 Add more granular breakpoint at 480px for small phones

... (continue for all sections)
```

---

## 🎯 PRIORITY LEVELS

**Before First Commit (Day 1):**
- Design Consistency
- Responsive Design basics
- Accessibility focus states

**Before Production Deploy (Day 3):**
- All accessibility checks
- Technical quality
- Performance optimization

**Monthly Maintenance:**
- Code organization
- Performance review
- Remove unused CSS

---

## 📝 ADDITIONAL CONTEXT

**Project:** Hyenas Comedy Club Website  
**Design System:** Teenage Engineering-inspired (bold, playful, brutal)  
**Priority Pages:** Homepage, Venue Pages, Single Event Listings  
**Target Audience:** Comedy fans across Texas & New Mexico  
**Webflow Integration:** Yes (external stylesheet via GitHub Pages)  

**Known Constraints:**
- Must work with Webflow's existing structure
- Can't use CSS-in-JS or preprocessors
- Mobile traffic is 60%+ (mobile-first is critical)
- Users range from 18-65 (accessibility is important)

---

## 🔗 REFERENCE FILES

If reviewing alongside other files, consider:
- `component-examples.html` - Shows intended usage
- `README.md` - Documents component specifications
- `CHANGELOG.md` - Previous changes and rationale

---

## ⚡ PASTE YOUR CSS BELOW

```css
[PASTE YOUR hyenas-styles.css FILE HERE]
```

---

## 🎯 EXPECTED OUTPUT

After review, please provide:

1. **Executive Summary** (2-3 sentences: overall quality, major issues)
2. **Detailed Findings** by category (use ✅⚠️❌💡 format)
3. **Priority Action Items** (top 3-5 things to fix immediately)
4. **Optional Improvements** (nice-to-haves for future)
5. **Overall Grade** (A/B/C/D/F with brief justification)

**Example:**

```
EXECUTIVE SUMMARY:
Overall strong implementation of TE aesthetic. CSS is well-organized and 
responsive. Found 3 critical accessibility issues and 5 minor technical 
improvements needed before production.

PRIORITY ACTION ITEMS:
1. Fix button contrast ratio (currently 3.2:1, needs 4.5:1)
2. Add focus states to .show-card links
3. Collapse .grid-4 to 2 columns on tablet breakpoint

OVERALL GRADE: B+
Clean code, good organization, needs minor accessibility fixes before launch.
```

---

**Ready for review!** Paste your CSS and let's make it perfect! 🚀
