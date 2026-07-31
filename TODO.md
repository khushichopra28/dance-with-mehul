# TODO — Rewrite All Text Content for Mehul (Wedding Choreographer Brand)

## Plan

### Information Gathered
- Current site is a generic dance/choreography site titled "Dance With Mehul"
- Text is generic "bookization" style about dance classes, workshops, etc.
- Target brand: Mehul is a wedding/celebration dance choreographer specializing in sangeet, bride/groom entries, family choreography, pre-wedding training
- Tone should be warm, celebratory, personal, rooted in Indian wedding culture
- **No HTML structure, CSS, layout, images, or classes should be changed**
- **No fake specific numbers** — use general phrasing like "countless celebrations", "many happy couples"

---

## Plan of Changes

### FILE 1: `index.html` — All text content replacements

#### 1. HERO SECTION
| Current | New |
|---|---|
| `content="Dance With Mehul — movement, memories and choreography."` | `content="Dance With Mehul — wedding sangeet choreography, celebration dances, and wedding dance training."` |
| `<title>Dance With Mehul</title>` | `<title>Dance With Mehul — Wedding Sangeet & Celebration Choreographer</title>` |
| `"a little place for all things movement"` | `"bringing the rhythm of celebration to your wedding"` |
| h1: Keep structure — already says `MEHUL` and `Dance` | ✅ Keep as-is (name/brand) |
| `"Stories in eight counts, made with a whole lot of heart."` | `"Turning your wedding milestones into dance memories that last a lifetime."` |
| `"come on in →"` | `"start your wedding dance journey →"` |

#### 2. ABOUT SECTION
| Current | New |
|---|---|
| `"01 / the little story"` | `"01 / the story behind the dance"` |
| `"nice to meet you,"` `"I'm Mehul."` | ✅ Keep `"I'm Mehul."` — rewrite `"nice to meet you,"` → `"hello and welcome,"` |
| Paragraph 1: `"I believe dancing is less about getting every count perfect..."` | Rewrite to Mehul's wedding choreographer story |
| Paragraph 2: `"From packed studios to tiny bedroom rehearsals..."` | Rewrite to family/celebration dance focus |
| `"with rhythm, Mehul"` | `"with love and rhythm, Mehul"` |
| `"one more time!"` | `"sangeet rehearsal in progress!"` |

#### 3. DANCE WITH MEHUL (SERVICES) SECTION
| Current | New |
|---|---|
| `"02 / what we make"` | `"02 / wedding dance services"` |
| `"Find your own flow."` | `"Dance your <i>celebration.</i>"` |
| Heading paragraph: `"Classes are a friendly mix of technique, play, confidence..."` | Rewrite to wedding choreography intro |
| Note 1: `"Choreo classes"` → `"Sangeet Choreography"`, description → wedding sangeet focus |
| Note 2: `"Private sessions"` → `"Bride & Groom Special Dance"`, description → couple's first dance |
| Note 3: `"Workshops & events"` → `"Family & Group Performances"`, description → family choreography |

#### 4. PERFORMANCES SECTION
| Current | New |
|---|---|
| `"03 / on repeat"` | `"03 / wedding moments on film"` |
| `"Small clips, big feelings."` | `"Sangeet energy,<br><i>captured.</i>"` |
| `"hover to pause ↓"` | `"relive the celebration ↓"` |

#### 5. GALLERY SECTION
| Current | New |
|---|---|
| `"04 / our pinboard"` | `"04 / wedding album"` |
| `"Here for the memories."` | `"Moments from the<br><i>celebrations.</i>"` |
| Paragraph: `"A few favourite fragments from the studio, the stage and everything in-between."` | `"Snapshots from sangeet nights, wedding rehearsals, and family dance sessions."` |

#### 6. TESTIMONIALS SECTION
| Current | New |
|---|---|
| `"05 / sweet notes"` | `"05 / from the wedding floor"` |
| `"Words that stay with me."` | `"What couples & families<br><i>say about their dance.</i>"` |

#### 7. CONTACT SECTION
| Current | New |
|---|---|
| `"06 / your turn"` | `"06 / let's plan your dance"` |
| `"Shall we dance?"` | `"Choreograph your<br><i>big day.</i>"` |
| Paragraph: `"Ask about a class, a collaboration or your next favourite routine."` | `"Ready to create a wedding dance moment your family will never forget? Reach out and let's make it happen."` |
| `"mehulrbhandari@gmail.com ↗"` | Keep email but rewrite format: `"mehulrbhandari@gmail.com ↗"` (keep same) |
| Social links text: keep as-is | ✅ Keep |
| Button: `"send a little note →"` | `"send your wedding dance inquiry →"` |
| Placeholder `"what should I call you?"` | `"your name (or the couple's names!)"` |
| Placeholder `"I'm looking for..."` | `"tell me about your wedding dance vision..."` |

#### 8. FOOTER
| Current | New |
|---|---|
| `"made in the rhythm of things"` | `"wedding dances made with love & rhythm"` |

---

### FILE 2: `script.js` — Text in JS arrays

#### Reel image labels (wedding context):
| Current | New |
|---|---|
| `'after class'` | `'sangeet night'` |
| `'on stage'` | `'bride entry'` |
| `'the warm up'` | `'family rehearsal'` |
| `'full out'` | `'the big reveal'` |
| `'one more run'` | `'one more practice'` |
| `'dance break'` | `'celebrate!'` |

#### Gallery image labels:
| Current | New |
|---|---|
| `'the studio'` | `'sangeet prep'` |
| `'take five'` | `'family dance'` |
| `'rehearsal'` | `'the big day'` |
| `'lights on'` | `'stage ready'` |
| `'in motion'` | `'all smiles'` |
| `'happy feet'` | `'dancing together'` |

#### Testimonials:
| Current | New |
|---|---|
| `["“You never feel like you have to be good before you belong in the room.”", "Ananya, weekly class"]` | `["“Mehul choreographed our entire sangeet — from my entry to the family number. Every single person felt included, even the ones with two left feet!”", "Ananya & Rohan, wedding sangeet"]` |
| `["“The kind of teacher who gives you a count, a laugh, and the confidence to go for it.”", "Karthik, workshop"]` | `["“We were so nervous about our first dance as a couple, but Mehul made it feel effortless. He took our song, our story, and turned it into something magical.”", "Priya & Arjun, first dance"]` |
| `["“Every routine feels like a tiny little story. I leave with the biggest grin.”", "Priya, private session"]` | `["“From the mehendi to the reception, Mehul helped us plan dance performances for every function. Our families are still talking about it months later!”", "Neha & Vikram, full wedding"]` |

#### Form success message:
| Current | New |
|---|---|
| `'Note received — see you on the dance floor!'` | `'Message received — let's start planning your wedding dance!'` |

---

### Dependent Files
- `index.html` — text-only edits
- `script.js` — text content in JS arrays

### Follow-up Steps
1. Review changes in browser
2. Show user full before/after diff for review
3. User provides corrections based on Mehul's actual story

---

## Steps to Execute ✅

- [x] 1. Edit `index.html` — HEAD meta & title
- [x] SKIP HERO section (user requested no changes)
- [x] 2. Edit `index.html` — ABOUT section text
- [x] 3. Edit `index.html` — DANCE section text
- [x] SKIP PERFORMANCES section (user requested no changes)
- [x] 4. Edit `index.html` — GALLERY section text
- [x] 5. Edit `index.html` — TESTIMONIALS section text
- [x] 6. Edit `index.html` — CONTACT section text
- [x] 7. Edit `index.html` — FOOTER text
- [x] 8. Edit `script.js` — gallery labels, testimonials, form message (skip reel labels — tied to performances)
- [x] 9. Final review ✅

