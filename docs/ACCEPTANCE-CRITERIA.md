Below is a **practical, review-ready acceptance checklist** you can use to QA Claude’s output like a calm, well-caffeinated adult. This is not aspirational. This is pass/fail.

---

## Homepage Structure — Acceptance Criteria

### 1. Structural Clarity (Hard Fail if Missed)

* The homepage is presented as a **top-to-bottom section outline**
* Section names are **clear, descriptive, and non-generic**

  * No vague labels like “Experience,” “Discover,” or “What’s Happening”
* Each section has a **single, distinct purpose**
* No duplicated sections with overlapping intent

**Pass test:**
A designer or PM could sketch a wireframe from the outline alone.

---

### 2. Above-the-Fold Logic (Hard Fail if Weak)

* Events are visible **before** any brand manifesto or long intro
* There is a clear answer to:

  * “What is this site?”
  * “What can I do right now?”
* Primary CTA relates to **events or tickets**, not content or email

**Red flags**

* Email signup placed first
* Blog content above events
* Long brand explanation before utility

---

### 3. Event Discovery Quality

* Includes:

  * A **near-term upcoming events section**
  * A **per-location featured events section**
* Locations are clearly differentiated
* The structure makes it obvious that:

  * This is a multi-location brand
  * Each location has its own deeper page

**Pass test:**
A new visitor can find a show in under 5 seconds.

---

### 4. Location & Internal Linking Logic

* Homepage is treated as a **parent authority page**
* Location pages are positioned as **children**
* Events are positioned as **leaf nodes**
* Internal linking recommendations follow this hierarchy:

  * Homepage → Location → Event

**Fail conditions**

* Homepage competing with location pages for the same keywords
* Events treated as flat, ungrouped content

---

### 5. Trust & Credibility Signals

* Includes a **dedicated trust section**
* Trust signals are specific and verifiable:

  * Google Reviews
  * Social proof
  * Longevity or reputation cues
* Trust is placed **after** event discovery, not before

**Red flags**

* Generic claims like “Best comedy club in town”
* Trust content buried in the footer

---

### 6. Email Signup Placement & Purpose

* Email signup is:

  * Clearly visible
  * Not interruptive
  * Positioned after value is established
* Purpose is explained:

  * What users get
  * Why it’s worth signing up
* Not framed as a desperation capture

**Fail condition**

* “Sign up for our newsletter” with no value framing

---

### 7. Content / Blog Section Usefulness

* Blog or content section:

  * Supports SEO and authority
  * Is clearly secondary to events
* Content types are relevant to:

  * Comedy
  * Performers
  * Venue experience
* Placement does not distract from ticket conversion

**Pass test:**
Content feels like a credibility amplifier, not a side quest.

---

### 8. SEO & LLM Readability (Critical)

* Claude explains:

  * SEO intent per section
  * LLM summarization benefits
* Brand, locations, and events are treated as **distinct entities**
* No keyword-stuffing logic
* Clear semantic hierarchy is evident

**Fail condition**

* Vague mentions of “SEO best practices” without application

---

### 9. Style Guide Compliance

* Tone aligns with the provided style guide
* No invented brand traits
* No slang, gimmicks, or filler language
* Copy recommendations feel intentional, not cute

**Hard fail**

* Claude introduces new voice characteristics or brand values

---

### 10. Assumptions & Discipline

* Any assumptions are:

  * Explicitly labeled
  * Reasonable
* No hallucinated CMS features
* No technical implementation details

**Pass test:**
Output feels grounded in reality, not speculative fantasy.

---

## Final QA Verdict

You should be able to answer **yes** to all of these:

* Could this be handed to design without reinterpretation?
* Could SEO sign off without rewrites?
* Could engineering map this to real data?
* Would leadership understand the logic in one read?

If any answer is “no,” send it back to Claude with **one sentence**:

> “Revise only the sections that fail acceptance criteria X, Y, and Z. Do not expand scope.”
