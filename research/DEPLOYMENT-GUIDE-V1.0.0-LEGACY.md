# ⚠️ LEGACY DOCUMENT - DO NOT USE

**This document is for historical reference only and references the deprecated v1.0.0 design system.**

---

## Migration Notice

This deployment guide references:
- ❌ **DEPRECATED:** `athkkr/hyenas-comedy-styles` repository (OLD)
- ❌ **DEPRECATED:** `hyenas-styles.css` (v1.0.0 purple-based design)
- ❌ **DEPRECATED:** Space Grotesk font family

**For current deployment instructions, see:**
- ✅ `/docs/DEPLOYMENT.md` (v2.1.0)
- ✅ `/docs/MIGRATION-V1-TO-V2.md` (migration guide)
- ✅ Repository: `athkkr/hyenas-style` (NEW)

---

# Hyenas Comedy Club - CSS Deployment Guide (v1.0.0 - ARCHIVED)

## 🚀 Quick Start (Day 1 - First 2 Hours)

### Step 1: Create GitHub Repository

1. Go to https://github.com/athkkr
2. Click "New Repository" (green button)
3. Repository name: `hyenas-comedy-styles`
4. Description: "Teenage Engineering-inspired CSS style system for Hyenas Comedy Club"
5. Public ✓
6. Initialize with README ✓
7. Click "Create repository"

### Step 2: Enable GitHub Pages

1. In your new repo, go to **Settings** tab
2. Scroll to **Pages** section (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Your CSS will be live at: `https://athkkr.github.io/hyenas-comedy-styles/`

### Step 3: Upload Your CSS File

**Option A: Via GitHub Web Interface (Easiest)**
1. In your repo, click "Add file" → "Upload files"
2. Drag `hyenas-styles.css` into the upload area
3. Commit message: "Initial CSS style system v1.0.0"
4. Click "Commit changes"

**Option B: Via Git Command Line (If you prefer)**
```bash
# Navigate to where you want the project
cd ~/Projects

# Clone your repo
git clone https://github.com/athkkr/hyenas-comedy-styles.git
cd hyenas-comedy-styles

# Copy your CSS file here
cp /path/to/hyenas-styles.css .

# Add, commit, push
git add hyenas-styles.css
git commit -m "Initial CSS style system v1.0.0"
git push origin main
```

### Step 4: Add to Webflow Development Site

1. Log into Webflow
2. Open your Hyenas project
3. Go to **Project Settings** (gear icon)
4. Click **Custom Code** tab
5. In the **Head Code** section, add:

```html
<!-- Hyenas Comedy Club Style System -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css?v=1.0.0">
```

6. Click **Save Changes**
7. **Publish to staging** to test

### Step 5: Test Your Setup

1. Open your dev site in browser
2. Right-click → Inspect → Network tab
3. Reload page
4. Look for `hyenas-styles.css` - should show status 200 ✓
5. Go to Console tab - no errors should appear

---

## 📁 Recommended Repository Structure

```
hyenas-comedy-styles/
├── README.md                    # Documentation (GitHub auto-creates this)
├── hyenas-styles.css           # Main stylesheet (PRODUCTION)
├── hyenas-styles.dev.css       # Development version (optional)
├── component-examples.html     # Reference examples
├── CHANGELOG.md                # Track all changes
└── .stylelintrc.json          # Linting config (optional)
```

---

## 🔄 Daily Workflow (After Initial Setup)

### Making Changes to CSS

1. **Edit locally** (use your preferred editor - VS Code, Sublime, etc.)
2. **Test in browser** (open component-examples.html locally)
3. **Commit to GitHub:**
   ```bash
   git add hyenas-styles.css
   git commit -m "Updated button hover states for better accessibility"
   git push origin main
   ```
4. **Wait ~30 seconds** for GitHub Pages to rebuild
5. **Test in Webflow dev site** (hard refresh: Cmd+Shift+R or Ctrl+Shift+R)
6. **If good → Publish to production**

### Version Bumping Strategy

**When you make changes:**
- Minor tweaks (colors, spacing) → Update query parameter: `?v=1.0.1`
- New components → `?v=1.1.0`
- Major redesign → `?v=2.0.0`

**Update in Webflow Custom Code:**
```html
<!-- Change this line when you deploy new version -->
<link rel="stylesheet" href="https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css?v=1.0.1">
```

**Why?** Query parameter forces browsers to download fresh CSS (cache-busting)

---

## 🛡️ Rollback Plan (If Something Breaks)

### Quick Rollback (5 minutes)

1. Go to Webflow Custom Code
2. Change version number back to previous working version:
   ```html
   <!-- From broken v1.1.0 back to working v1.0.0 -->
   <link rel="stylesheet" href="https://athkkr.github.io/hyenas-comedy-styles/hyenas-styles.css?v=1.0.0">
   ```
3. Publish to production
4. Fix the CSS issue locally
5. Test thoroughly
6. Deploy fixed version as v1.1.1

### Full Rollback (If you need previous CSS file)

GitHub keeps version history! To restore an old version:

1. Go to your repo on GitHub
2. Click on `hyenas-styles.css`
3. Click **History** button
4. Find the working version, click it
5. Click **Raw** button
6. Copy all CSS
7. Paste into your local file
8. Commit as new version

---

## 🧪 Testing Checklist (Before Every Deploy)

### Visual Testing
- [ ] Homepage looks good on desktop (1440px)
- [ ] Homepage looks good on tablet (768px)
- [ ] Homepage looks good on mobile (375px)
- [ ] Venue page layouts work
- [ ] Show card grid is responsive
- [ ] All buttons have hover states
- [ ] Colors match brand guide

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

### Accessibility Testing
- [ ] Run WAVE extension - no critical errors
- [ ] Tab through page - focus states visible
- [ ] Zoom to 200% - text readable
- [ ] Color contrast passes (use WAVE)

### Performance Testing
- [ ] CSS file under 50kb
- [ ] Loads in under 1 second
- [ ] No console errors

---

## 🔍 Automated Quality Checks (Optional - Set Up Day 2)

### Stylelint Setup (Free)

1. **Install Node.js** (if you don't have it): https://nodejs.org/

2. **Install Stylelint globally:**
   ```bash
   npm install -g stylelint stylelint-config-standard
   ```

3. **Create `.stylelintrc.json` in your repo:**
   ```json
   {
     "extends": "stylelint-config-standard",
     "rules": {
       "color-hex-length": "long",
       "declaration-block-no-duplicate-properties": true,
       "max-nesting-depth": 3,
       "selector-max-specificity": "0,4,0",
       "color-named": "never",
       "declaration-no-important": true
     }
   }
   ```

4. **Run linting before commits:**
   ```bash
   stylelint hyenas-styles.css
   ```

5. **Fix auto-fixable issues:**
   ```bash
   stylelint hyenas-styles.css --fix
   ```

### GitHub Actions (Automated Linting)

Create `.github/workflows/css-lint.yml`:

```yaml
name: CSS Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g stylelint stylelint-config-standard
      - run: stylelint "*.css"
```

Now every push automatically checks your CSS! ✨

---

## 📊 Claude Review Process (MCP Alternative)

Since you're working solo with limited budget, use Claude as your MCP reviewer:

### Create a Saved Prompt Template

Save this as a snippet in your notes app:

```
# CSS Review Request

Please review this CSS file against the following criteria:

## DESIGN CONSISTENCY
- Do all colors use CSS variables from :root?
- Is spacing consistent with 8px grid system?
- Are font sizes following the defined type scale?
- Do component styles match the TE-inspired aesthetic?

## RESPONSIVE DESIGN
- Are media queries mobile-first?
- Do breakpoints make sense (768px, 640px)?
- Are touch targets 44px+ on mobile?
- Does text remain readable at all sizes?

## ACCESSIBILITY
- Are all color contrasts WCAG AA compliant?
- Are focus states clearly visible?
- Is minimum font size 16px for body text?
- Are interactive elements keyboard accessible?

## TECHNICAL QUALITY
- Are there any !important declarations? (flag if >3)
- Is specificity reasonable (no overly nested selectors)?
- Are there duplicate or redundant rules?
- Is the file well-organized and commented?

## PERFORMANCE
- Is file size reasonable (<100kb)?
- Are there opportunities for optimization?

---

[PASTE YOUR CSS HERE]
```

### When to Review

1. **Before first commit** (Day 1)
2. **Before deploying to production** (Day 3)
3. **After adding major components** (ongoing)
4. **Monthly check-ins** (maintenance)

---

## 📝 CHANGELOG Template

Create `CHANGELOG.md` in your repo to track all changes:

```markdown
# Changelog

All notable changes to the Hyenas Comedy Club style system will be documented in this file.

## [1.0.0] - 2026-01-02

### Added
- Initial CSS style system with TE-inspired design
- CSS variables for colors, typography, spacing
- Button components (primary, secondary, accent, ghost)
- Show card component with hover effects
- Badge components
- Grid system with auto-responsive layout
- Responsive breakpoints (mobile-first)
- Accessibility features (focus states, skip links)
- Brutal border effects
- Animation utilities

### Design Tokens
- Primary purple: #8B5CF6
- Accent colors: Electric yellow, neon pink, cyan, lime, orange
- Typography: Space Grotesk (display), Inter (body)
- Spacing: 8px base grid
- Shadows: Brutal box-shadow effects

---

## [Unreleased]

### To Do
- [ ] Add navigation component styles
- [ ] Create calendar view styles
- [ ] Add loading state animations
- [ ] Optimize for performance
- [ ] Add dark mode support (future)
```

Update this every time you make changes!

---

## 🆘 Troubleshooting Common Issues

### CSS Not Loading

**Problem:** Webflow isn't showing your styles

**Solutions:**
1. Check Network tab - is CSS returning 404?
   - Wait 2 minutes for GitHub Pages to deploy
   - Check URL is correct: `athkkr.github.io` not `github.com/athkkr`
2. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Check Webflow Custom Code saved correctly
4. Try incognito/private window (bypasses cache)

### Styles Look Wrong

**Problem:** CSS is loading but looks broken

**Solutions:**
1. Check browser Console for errors
2. Verify CSS variables are defined in :root
3. Check Webflow hasn't overridden with inline styles
4. Inspect element - see what styles are applying
5. Test in different browser

### Changes Not Showing

**Problem:** Updated CSS but changes don't appear

**Solutions:**
1. Bump version number in Webflow: `?v=1.0.1`
2. Hard refresh browser
3. Clear Webflow's cache (republish site)
4. Check you pushed to GitHub: `git push origin main`
5. Verify GitHub Pages rebuilt (check commit time vs current time)

### Performance Issues

**Problem:** Site loading slowly

**Solutions:**
1. Check CSS file size: `ls -lh hyenas-styles.css`
2. Minify for production (see below)
3. Remove unused rules
4. Optimize images separately (not CSS issue)

---

## ⚡ Performance Optimization (Day 3)

### Minify CSS for Production

**Online Tool (Easiest):**
1. Go to https://www.minifier.org/
2. Paste your CSS
3. Click "Minify"
4. Save as `hyenas-styles.min.css`
5. Upload to GitHub
6. Update Webflow to use `.min.css` version

**Command Line (If you have Node.js):**
```bash
npm install -g clean-css-cli
cleancss -o hyenas-styles.min.css hyenas-styles.css
```

**Result:** File size drops ~40% for faster loading!

---

## 📈 Success Metrics to Track

### Week 1
- [ ] CSS successfully deployed to GitHub Pages
- [ ] Webflow dev site using external stylesheet
- [ ] All 3 priority pages styled (homepage, venue, show)
- [ ] Mobile responsive working
- [ ] No console errors

### Week 2
- [ ] Production site using new styles
- [ ] WAVE accessibility scan < 5 errors
- [ ] Lighthouse performance score > 85
- [ ] Can make + deploy change in < 15 minutes
- [ ] Documented 5+ reusable components

### Month 1
- [ ] Automated linting running
- [ ] CHANGELOG maintained
- [ ] 10+ shows using new design
- [ ] User feedback collected
- [ ] Performance optimized (minified CSS)

---

## 🎯 Day 1 Action Items

**Before you close your laptop tonight:**

1. ✅ Create GitHub repo `hyenas-comedy-styles`
2. ✅ Enable GitHub Pages
3. ✅ Upload `hyenas-styles.css`
4. ✅ Add Custom Code to Webflow dev site
5. ✅ Test CSS loads (check Network tab)
6. ✅ Apply classes to 1 homepage element as test
7. ✅ Create CHANGELOG.md file
8. ✅ Take "before" screenshots for comparison

**Estimated time:** 1-2 hours

---

## 📚 Resources

### Free Tools
- **GitHub Pages**: https://pages.github.com/
- **Stylelint**: https://stylelint.io/
- **WAVE Accessibility**: https://wave.webaim.org/extension/
- **CSS Minifier**: https://www.minifier.org/
- **BrowserStack (free trial)**: https://www.browserstack.com/

### TE Design Inspiration
- Teenage Engineering website: https://teenage.engineering/
- Bold colors, brutal borders, playful typography
- High contrast, clean spacing, fun interactions

### Fonts
- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- Inter: https://fonts.google.com/specimen/Inter

### Learning
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Accessibility: https://www.a11yproject.com/

---

## 🎉 You're Ready to Ship!

Your setup is production-ready and sustainable. The combination of GitHub + Webflow + Claude reviews gives you:

✅ Version control & history  
✅ Instant deployments  
✅ Easy rollbacks  
✅ Quality checks  
✅ Free hosting  
✅ Scalable workflow  

**Go build something awesome!** 🚀

---

Questions? Issues? Update this guide as you learn!
