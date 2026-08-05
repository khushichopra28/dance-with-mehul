# Intro Loader — Asset-Driven Rework

## Steps
- [x] Add a `loadImage` helper (decode/complete/load promise) inside the intro loader IIFE
- [x] Build `assetsReady` = Promise.all(fonts.ready, logo img, hero img)
- [x] Enforce MINIMUM display (~1.2s) via Promise.all with a 1200ms timer
- [x] Enforce MAXIMUM display (~2.8s) via Promise.race against a 2800ms timeout
- [x] Keep visual stages (logo-in 300ms, tagline 1500ms) unchanged
- [x] Trigger glow/logo-peak + fade-out/remove at the new resolution point
- [x] Ensure loader does NOT wait on reels/gallery/team/audio
