# SEO and Accessibility Follow-up TODO

## Multilingual crawlable pages

The current site uses Georgian as the canonical content language. English and Russian labels exist in the interface, but full crawlable `/en/...` and `/ru/...` pages should be added only after the corresponding page copy is reviewed and approved.

Recommended next structure:

- `/en/` and `/ru/` for the homepage
- `/en/psychotherapist-tbilisi` and `/ru/psihoterapevt-tbilisi` for services
- `/en/about` and `/ru/about` for the about page
- Keep Georgian blog posts only in `/blog/...` until real translations are approved

When those pages are created:

- add `hreflang` links on Georgian, English, and Russian page variants
- use translated canonical URLs for each language
- update `sitemap.xml`
- avoid creating translated blog URLs without reviewed translations

## Privacy policy review

The privacy policy now includes the data controller, a practical retention period, and a direct emergency call link. Before publishing, review whether the wording should be checked by a local legal professional.
