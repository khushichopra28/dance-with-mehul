# TODO — Fix Path Marquee (#pathMarquee): broken image fallback + full-bleed width

## STEP 1 — script.js (blank circle fix)
- [x] 1. Verify `pathItemsData` filenames match actual project files exactly (incl. `mehul.jpeg` casing/extension)
- [x] 2. Add `onerror` fallback to path item `<img>` (falls back to images/IMG_1298.JPG.jpeg)

## STEP 2 — styles.css (full-bleed width)
- [x] 3. Replace `.path-stage` with `width:100vw; margin-left:calc(-50vw + 50%)` full-bleed rule
- [x] 4. Update `.path-item` `offset-path` to the new 1920-wide path

## STEP 3 — index.html (SVG viewBox + path d)
- [x] 5. Change `.path-guide` viewBox to `0 0 1920 260`
- [x] 6. Update `#marqueePath` d + dotted stroke path to the new 1920-wide path (keep stroke attrs)

## Follow-up
- [x] 7. Verify no other sections/files touched; no new files created
- [x] 8. Confirm in browser: full-bleed edge-to-edge + no blank circles

