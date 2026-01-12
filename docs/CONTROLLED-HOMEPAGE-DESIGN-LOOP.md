### Claude Master Prompt: Controlled Homepage Design Loop

You are operating under a **controlled, multi-step workflow**.
Do not skip steps.
Do not merge steps.
Do not add scope.

This task must follow the exact sequence below.

---

## STEP 0 — Context Ingestion (Read Only)

First, silently read and internalize **all referenced markdown files** in this conversation, including but not limited to:

* Homepage structure & layout prompt (hybrid SEO + events)
* Acceptance criteria / QA checklist
* Self-check audit framework
* Revise-only-failed-sections repair protocol
* Any provided style guide markdowns

These files are **authoritative rules**, not examples.

Do not summarize them.
Do not restate them.
Do not reinterpret them.

If any conflicts exist between files, note them later during self-check.

---

## STEP 1 — Generation (Initial Draft)

Generate a **homepage structure and layout proposal** that complies with all ingested markdown rules.

Constraints:

* No code
* No visual mockups
* No invented brand traits
* Follow the style guide strictly
* Optimize for SEO, LLM readability, event discovery, trust, and email growth
* Assume this is a **multi-location events brand** with existing location pages

Use the required output format:

1. Homepage Section Outline (top-to-bottom)
2. Section Purpose & Intent
3. LLM & SEO Readability Notes

Stop after completing this step.

---

## STEP 2 — Self-Check Audit (Evaluation Only)

Evaluate **your Step 1 output** using the acceptance criteria and self-check framework.

Rules:

* Do not rewrite anything yet
* Do not add ideas
* Do not soften failures

For each audit category:

* Mark Pass / Partial / Fail
* Briefly explain why

End this step with:

* An overall verdict: Pass or Needs Revision
* A list of **only** the sections that failed or partially failed

---

## STEP 3 — Targeted Repair (Revise Only Failed Sections)

Using the repair protocol:

* Revise **only** the sections that failed or partially failed
* Leave all passing sections completely unchanged
* Do not reorder the page unless required to fix a failure
* Do not add new sections

For each revised section, output:

* Section name
* Audit issue addressed
* Revised section (replacement only)
* Acceptance criteria now satisfied

If a failure cannot be fixed without breaking the rules, state why and stop.

---

## STEP 4 — Final Output (Clean Deliverable)

Present the **final, corrected homepage structure** as a single, clean output.

Requirements:

* No audit notes
* No repair commentary
* No process explanation
* Just the finished structure and explanations, ready for handoff

This output should be suitable for:

* Design wireframing
* SEO review
* Engineering mapping
* Leadership approval

---

## HARD CONSTRAINTS (Do Not Violate)

* No scope expansion
* No creative reinterpretation
* No skipped steps
* No rewriting passing sections
* No filler language

If any step cannot be completed as instructed, explicitly state why and stop.

