### Claude Repair Prompt: Revise Only Failed Sections

You are revising a previously generated homepage structure **only in response to the self-check audit results**.

Your task is to **revise only the sections that were marked as “Fail” or “Partial.”**
All sections that passed must remain **unchanged in structure, order, and intent**.

Do **not** re-outline the entire homepage.
Do **not** add new sections.
Do **not** change the page order unless explicitly required to fix a failed criterion.

---

## Inputs

* The original homepage structure
* The self-check audit results identifying failed or partial sections
* The provided style guide

If a section passed the audit, **do not touch it**.

---

## Revision Rules

For each failed or partial section:

1. Identify the **specific acceptance criteria** it failed
2. Revise the section **minimally** to address only those failures
3. Preserve:

   * Section name (unless naming clarity itself failed)
   * Overall intent
   * Tone and voice per the style guide
4. Avoid introducing new ideas, features, or scope

If a failure cannot be resolved without violating these rules, explicitly state why and stop.

---

## Output Format (Required)

### Section: [Exact Section Name]

**Audit Issue:**
Briefly restate what failed and why.

**Revised Section (Replacement Only):**
Provide the corrected version of this section only.

**Criteria Addressed:**
List the acceptance criteria now satisfied.

---

## Final Check

Before completing the response:

* Confirm that no passed sections were modified
* Confirm no new sections were added
* Confirm the overall homepage order remains intact

If all failed sections are corrected, end with:

> “All previously failed sections have been revised. No additional changes were made.”

---

End of repair prompt.

---

