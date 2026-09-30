# W3C TPAC hackathon 2026

A minimal event page for the Dublin hackathon on Monday 26 October 2026,
19:00–22:30 GMT, at Clayton Hotel Burlington Road, Leinster Suite, ground floor.

## Local preview

Run `bundle exec jekyll serve --host 127.0.0.1 --port 4010`, then open
<http://127.0.0.1:4010/2026/10/TPAC/hackathon/>.

## Content

Event details, challenges, the schedule, rules, projects, sponsors, and navigation
are in `_data/`. Set a challenge's `lit` field to `true` when its description is
ready. Registration appears only when `register_url` is filled in.

Sponsor names, website links, and local logo paths are in `_data/sponsors.yml`.
Logo files are kept in `assets/images/` and displayed without recoloring.

Keep the schedule, calendar file, and structured event metadata consistent when
changing the event time.

The sharing image is `assets/images/social-card.png` (1200 × 630), with an editable
SVG source alongside it. When event details change, update the SVG and image alt
text in `_includes/head.html`, then export the SVG as a 1200 × 630 PNG using an
SVG renderer such as Inkscape or Sharp (librsvg).

## Design and accessibility

The page uses one geometric three-leaf shamrock as its Irish identity, repeated
beside the title, in a small schedule divider, and in the footer. Forest-green
surfaces, cream rectangular panels, restrained orange accents, serif headlines,
and monospace event labels form the rest of the design.

The location panel names Dublin in English and Irish; the Irish label uses
`lang="ga"` for screen-reader pronunciation. Shamrocks are decorative and hidden
from assistive technology. No generated images, external fonts, or background
images are used.

Navigation and FAQ disclosures work without JavaScript. A small script closes the
mobile menu on selection or Escape. The page includes a skip link, visible focus
indicators, reduced-motion support, responsive layouts, and native HTML controls.

Check changes with `bundle exec jekyll build`.
