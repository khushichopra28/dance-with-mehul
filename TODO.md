# TODO — Responsive Audit & Fixes (desktop >850px, tablet 560–850px, mobile <560px)

Only styles.css + script.js are edited. No colors, fonts, animations, or content changed.

## styles.css
- [x] STEP 1: Global safeguards — `html{overflow-x:hidden}`, `.path-item{touch-action:none}`, `.team,.path-marquee{overflow:hidden}` for full-bleed sections
- [x] STEP 2: Header/nav — off-canvas `.main-nav` panel at ≤850px, 44px hamburger, 44px link tap targets, hide `.header-note` at ≤560px
- [x] STEP 3: Hero — `.hero-grid` single column, `.hero-arrow` hidden, hero copy/h1 scaling at ≤560px
- [x] STEP 4: About — `.about-layout` collapse, `.letter-card` padding/font scaling, `.journey{display:none}` at ≤560px
- [x] STEP 5: Dance services — `.class-notes` single column, `.note-2` translateY reset to avoid overlap
- [x] STEP 6: Reels — `.reel` sizing at 850px/560px, caption scaling, `pointer-events:none` on overlay for tap-to-toggle
- [x] STEP 7: Gallery — `.gallery-board` 2-col at 850px, 1-col at 560px, uniform row spans
- [x] STEP 8: Testimonials — 2-col at 850px, 1-col at 560px, padding/quote scaling
- [x] STEP 9: Focus marquee — card sizing already OK; touch handled in JS
- [x] STEP 10: Contact — card stacks to 1 column, padding reduced, inputs 16px (no iOS zoom), full-width 50px button
- [x] STEP 11: Scatter — safe `left` positions for off-screen cards at 375px/320px (nth-child overrides)
- [x] STEP 12: Path marquee — `overflow:hidden`, viewport-scaled offset-path (JS) so circles don't cluster off-screen
- [x] STEP 13: Section headings — column stack at ≤850px; footer nav touch padding at ≤560px
- [x] STEP 14: Final horizontal-scroll safety (html/body overflow-x hidden, all vw/negative-margin parents clipped)

## script.js
- [x] STEP 15: Scatter drag — replace `movementX/movementY` (0 on iOS Safari touch) with `clientX` deltas
- [x] STEP 16: Add `pointercancel` to scatter cards and path items (reset stuck drag state)
- [x] STEP 17: Focus cards — tap-to-pause + caption toggle for touch (hover handlers gated to fine-pointer devices)
- [x] STEP 18: Reels — tap-to-toggle play/pause on the video element (suppresses native toggle), respects `data-user-paused`
- [x] STEP 19: Path marquee — JS scales the offset-path to the live viewport so circles follow the dashed line at every width

