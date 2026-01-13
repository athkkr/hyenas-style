# Hyenas Comedy Club: Privacy Policy Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

The **Privacy Policy Page** (`/privacy-policy`) communicates legal information clearly.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Header | --white | Title and Last Updated date |
| 2 | Content Body | --white | Legal text with sidebar nav |
| 3 | Footer | --black | Global footer |

---

## Section 1: Header

### Layout
- **Background:** `--white`
- **Border-bottom:** `2px solid --black`
- **Padding:** `--space-8`

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│                PRIVACY POLICY                               │
│                ← H1 .text-3xl.font-black                    │
│                                                             │
│                Last Updated: January 1, 2026                │
│                ← .text-sm.mono.gray                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 2: Content Body

### Layout
- **Background:** `--white`
- **Container:** `.container`
- **Grid:** Sidebar (25%) + Content (75%)

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--white bg]                            │
│                                                             │
│  ┌────────────────────────┐  ┌───────────────────────────┐  │
│  │ TABLE OF CONTENTS      │  │ 1. INTRODUCTION           │  │
│  │                        │  │                           │  │
│  │ 1. Introduction        │  │ We value your privacy...  │  │
│  │ 2. Data Collection     │  │                           │  │
│  │ 3. Usage               │  │ 2. DATA COLLECTION        │  │
│  │ 4. Cookies             │  │                           │  │
│  │                        │  │ We collect info when...   │  │
│  └────────────────────────┘  └───────────────────────────┘  │
│  ← Sticky Sidebar            ← Rich Text Block              │
│    .bg-off-white               .prose                       │
│    .p-4                        .prose-headings:font-black   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Checklist
- [ ] **Sticky Sidebar:** Sidebar stays fixed while scrolling long content.
- [ ] **Mobile:** Sidebar converts to a dropdown or top-link list.
