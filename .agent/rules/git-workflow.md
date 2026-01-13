# Git Commit Cadence Rule

## MANDATORY COMMIT POLICY

You MUST commit changes to git regularly throughout every work session. This is a critical requirement.

### Commit Triggers (Commit When ANY of These Occur)

1. **After completing significant work:**
   - New page templates or components
   - CSS/design system updates  
   - JavaScript functionality
   - Documentation updates
   - Bug fixes

2. **After modifying 3-5 files** - Don't let uncommitted changes pile up

3. **Before switching tasks** - Always commit before moving to different work

4. **Before notify_user** - ALWAYS commit before requesting user review

5. **At natural breakpoints:**
   - End of planning phase
   - After verification/testing
   - After completing a task section

### Commit Message Format

```
<type>: <short summary>

<optional details>
```

**Types:** feat, fix, style, docs, refactor, test, chore

**Examples:**
- `feat: Add dual-show card display to homepage`
- `fix: Correct navigation highlighting on location page`  
- `style: Update event detail layout to 60/40 split`

### Commands to Run

From `/Users/art/Desktop/Hyenas/hyenas-styling`:

```bash
git add .                          # SafeToAutoRun: true
git commit -m "type: summary"      # SafeToAutoRun: true
git push origin main               # SafeToAutoRun: false (needs approval)
```

### Verification Checklist

After each commit:
- ✓ Changes staged with `git add .`
- ✓ Commit created with descriptive message
- ✓ Push successful to origin/main
- ✓ No uncommitted changes remain

### Status Checks

Run `git status` periodically to check for uncommitted work:
- Before ending work session
- After completing tasks
- When switching features

## NEVER SKIP COMMITS

Even small changes must be committed. Consistent version control is essential.
