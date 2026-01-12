# Hyenas Comedy Club: Subscribe Page Wireframe

**Version:** 1.0.0
**Created:** January 10, 2026
**Status:** Ready for Implementation
**Reference:** [DESIGN-SPEC.md](./DESIGN-SPEC.md)

---

## Overview

The **Subscribe Page** (`/subscribe`) allows users to sign up for the newsletter. It is a high-conversion page focused on capturing email addresses and user preferences.

## Section Summary

| Order | Section | Background | Purpose |
|-------|---------|------------|---------|
| 1 | Hero / Form | --black | Primary conversion area |
| 2 | Social Proof | --te-off-white | Trust indicators |
| 3 | Footer | --black | Global footer |

---

## Section 1: Hero / Signup Form

### Layout
- **Background:** `--black`
- **Container:** `.container-sm` (640px max)
- **Alignment:** Centered vertical stack

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                      [--black bg]                            │
│                                                             │
│                 NEVER MISS A SHOW                           │
│                 ← H1 .text-4xl.white.uppercase              │
│                                                             │
│      ┌───────────────────────────────────────────────┐      │
│      │  ✓ Weekly Lineups                             │      │
│      │  ✓ Exclusive Presale Access                   │      │
│      │  ✓ Free Ticket Giveaways                      │      │
│      └───────────────────────────────────────────────┘      │
│      ← List .text-gray-light .mono .centered                │
│                                                             │
│      ┌───────────────────────────────────────────────┐      │
│      │                                               │      │
│      │  [ Email Address Input ]                      │      │
│      │                                               │      │
│      │  PREFERRED LOCATION:                          │      │
│      │  (o) All  ( ) Dallas  ( ) FW  ( ) ABQ  ( ) RR │      │
│      │                                               │      │
│      │  INTERESTS (Optional):                        │      │
│      │  [ ] Stand-up   [ ] Improv   [ ] Open Mic     │      │
│      │                                               │      │
│      │  [ SUBSCRIBE NOW ]                            │      │
│      │  ← .btn.btn-primary.btn-block                 │      │
│      │                                               │      │
│      └───────────────────────────────────────────────┘      │
│      ← Form Card .bg-white .brutal-border            │      │
│                                                             │
│      🔒 We respect your privacy. Unsubscribe anytime.       │
│      ← .text-xs.gray-dark                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Form Specifications
*   **Email Input:** Needs real-time validation (regex).
*   **Radio Buttons:** Custom styling using brand colors (Orange/Purple).
*   **Success State:** Replace form with "Welcome to the club!" message and confetti animation.

---

## Section 2: Social Proof

### Layout
- **Background:** `--te-off-white`
- **Container:** `.container`

### Components

```
┌─────────────────────────────────────────────────────────────┐
│                  [--te-off-white bg]                         │
│                                                             │
│           JOIN 15,000+ COMEDY FANS IN TEXAS                 │
│           ← H2 .text-xl.mono.uppercase                      │
│                                                             │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ "Best way to     │  │ "Love the weekly │                 │
│  │ know who's       │  │ updates!"        │                 │
│  │ coming!"         │  │                  │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Checklist
- [ ] **Mailchimp/Provider Integration:** Ensure form action points to correct endpoint.
- [ ] **Spam Protection:** Add hidden honeypot field or Recaptcha.
- [ ] **Mobile Optimization:** Input fields must call correct keyboard type (`type="email"`).
