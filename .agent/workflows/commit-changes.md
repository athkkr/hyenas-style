---
description: Commit and push changes to GitHub
---

# Commit Changes Workflow

This workflow commits and pushes your changes to the GitHub repository.

## Steps

// turbo-all

1. **Check status** - See what files have changed
```bash
cd /Users/art/Desktop/Hyenas/hyenas-styling
git status
```

2. **Stage all changes**
```bash
git add .
```

3. **Commit with message** - Replace the message with your actual commit message
```bash
git commit -m "type: brief description of changes"
```

4. **Push to GitHub**
```bash
git push origin main
```

## Commit Message Guidelines

Use this format: `<type>: <summary>`

**Types:**
- `feat` - New feature
- `fix` - Bug fix  
- `style` - CSS/styling changes
- `docs` - Documentation
- `refactor` - Code refactoring
- `test` - Testing
- `chore` - Maintenance

**Examples:**
- `feat: Add location-specific sliders to homepage`
- `fix: Correct navigation highlighting on location page`
- `style: Update event detail layout to 60/40 split`
- `docs: Update design system documentation`
