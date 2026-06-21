# HANDOFF

## v45 handoff

Status: live QA passed after Vercel deploy.

What changed:
- Home IA now starts with search, category chips, then the step guide.
- Tourism and food are first-class home categories.
- Fortune is separated into the Fun tab and a small home fun card.
- Quiz entry is visible from the home category strip and Fun tab.
- Food labels avoid unverifiable claims and keep source/operation checks visible.

Do not change:
- `verified` must not be assigned to newly added data without source review.
- Food venues remain `partial` unless two-source verification is completed.
- All surname tracks stay equal; no prestige, purity, or hierarchy wording.
- OpenStreetMap and local Hanzi Writer assets remain free/no-key.

Verified:
- Live `index.html` contains `?v=45`.
- Live service worker contains `const BUILD = '45'`.
- Home click QA passed against `https://korean-roots-journey.vercel.app/`.
- Reinstall-condition cache test deleted seeded `josang-v43` and kept `josang-v45`.
