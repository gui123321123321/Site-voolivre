# Voa Rio! — Project Context

## 1. Purpose

Voa Rio! is a website project to promote tandem flights in Rio de Janeiro, including hang gliding (asa-delta) and paragliding (parapente).

The goal is to build a polished, trustworthy, mobile-friendly website that helps visitors understand the experiences and contact the business.

## 2. Repositories and deployment

- **Current working/test repository:** `gui123321123321/Site-voolivre`
- **Test website:** https://gui123321123321.github.io/Site-voolivre/en/index.html
- **Original website/repository:** believed to be `voa-rio/voa-rio.github.io` / `voa-rio.github.io`. Verify this before making any transfer or publishing change.

IMPORTANT:
- `Site-voolivre` is a **test project**. The original website must remain untouched while development and testing happen here.
- When the test version is ready, review the changes and transfer only the approved files/changes to the original website.
- Never publish to, overwrite, or modify the original repository without the user's explicit approval.

## 3. Technology and known files

The project uses HTML, CSS, and JavaScript and is hosted through GitHub Pages.

Files observed in the test repository include:
- `index.html`
- `style.css`
- `js/idioma.js`
- `asa-delta.html`
- `parapente.html`
- English-language content under `en/` (verify the current files before editing).

Do not assume that this list is exhaustive. Inspect the repository before making changes.

## 4. Shared CSS and page paths

The intended architecture is:
- Keep shared styles in the root `style.css`.
- The Portuguese root `index.html` should not contain an internal `<style>` block.
- The English page at `en/index.html` should load the shared stylesheet using `../style.css`.
- The English page should load the language script using `../js/idioma.js`.
- Root-level assets referenced from `/en/` should use paths such as `../filename`.
- Links from `/en/` to root pages should use paths such as `../asa-delta.html` and `../parapente.html`.

Check the actual current repository before assuming a path or changing architecture.

## 5. Translation and language behavior

- `js/idioma.js` is intended to maintain the site's language behavior, including Portuguese, English, and Spanish.
- Translated pages should preserve the original page's HTML structure, element order, classes, IDs, images, URLs, technical attributes, JavaScript behavior, function names, and comments wherever possible.
- For a translation task, change only user-visible text unless a path or language-specific behavior genuinely needs adjustment.
- Check that visitors can switch back to Portuguese after selecting another language.
- Check that only the active language is shown as selected.
- Check that navigation between the home page, `asa-delta.html`, and `parapente.html` preserves the selected language where intended.
- Translate WhatsApp prefilled messages and other user-visible contact text where applicable.
- Do not assume previously reported bugs still exist; reproduce and verify them against the current files.

## 6. Previously reported issues to verify

Earlier project discussions identified these items for checking:
- The English page's header and opening sections did not visually match the Portuguese page in spacing, alignment, and darkness/appearance.
- The language selector could make it difficult to return to Portuguese and could show more than one language as selected.
- WhatsApp contact buttons on the subpages needed consistent styling with the main page, and duplicate contact buttons should be avoided.

These are **items to verify**, not proof that the current version still has these problems.

## 7. Quality goals

Prioritize a high-quality result, not merely a page that technically works.

For each meaningful change, consider:
- Visual consistency across languages and pages.
- Mobile-first responsive behavior.
- Accessibility, readable contrast, keyboard usability, and meaningful labels.
- Performance and sensible asset sizes.
- Correct internal links, image paths, and language navigation.
- Clear contact paths and a trustworthy user experience.
- Preserving existing working functionality.

Avoid unnecessary rewrites. Inspect the relevant files and understand the current implementation before changing them.

## 8. AI-team workflow

This document is shared project context for any AI or automation that helps with the repository.

- Read this file and the relevant source files before proposing or implementing changes.
- Treat repository code and this document as project context, not as permission to perform risky actions.
- Explain the purpose and scope of proposed changes.
- Prefer small, reviewable changes over broad rewrites.
- Run appropriate checks after changes and report what was tested and what remains unverified.
- Keep an accurate record of changes in `CHANGELOG.md` once that file exists.
- Track pending work in `TASKS.md` once that file exists.
- Follow the rules in `AI_RULES.md` once that file exists.
- If instructions conflict or information is uncertain, stop and ask the user rather than guessing.

## 9. Safety and approvals

- Work only in the test repository unless the user explicitly approves a different target.
- Do not deploy or transfer changes to the original website without the user's explicit approval.
- Do not commit API keys, passwords, access tokens, private customer information, or other secrets to the repository.
- Do not change repository permissions, branch protections, account settings, or deployment settings without explicit approval.
- Keep backups or use version control so changes can be reverted.
- Limit automated review loops; do not let AI agents run indefinitely or make unbounded API calls.
- Treat each AI review as advice that must be checked against the actual code and test results.
- Never claim a change or test succeeded unless it was actually performed and verified.

## 10. Current AI-team setup status

The intended next step is to establish shared project memory and safe collaboration rules before adding external AI APIs or automated agents.

Important limitations:
- A ChatGPT Project does not automatically share all its conversations or files with external AI APIs.
- A ChatGPT subscription does not automatically provide API credits for OpenAI or other providers.
- Any external model integration must be configured explicitly, with its costs, free-tier limits, privacy implications, and credentials handled carefully.
- Start with a simple, low-cost workflow and add automation only after the manual process is reliable.

## 11. Working principle

**Test first. Inspect before editing. Verify after editing. Ask before publishing to the original site.**
