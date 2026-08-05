const reelVideos = [
  ['reels/IMG_7630.mp4','after class'], ['reels/IMG_7631.mp4','on stage'], ['reels/IMG_7632.mp4','the warm up'], ['reels/IMG_7633.mp4','full out'], ['reels/IMG_7634.mp4','one more run'], ['reels/IMG_7635.mp4','dance break'], ['reels/IMG_7636.mp4','after class'], ['reels/IMG_7637.mp4','on stage'], ['reels/IMG_7638.mp4','the warm up'], ['reels/IMG_7678.mp4','line up'], ['reels/IMG_7679.mp4','count it out'], ['reels/IMG_7680.mp4','side by side'], ['reels/IMG_7681.mp4','the dip'], ['reels/IMG_7682.mp4','freeze frame'], ['reels/IMG_9181.mp4','sneak peek']
];
const galleryImages = [
  ['images/IMG_1298.JPG.jpeg','sangeet prep'], ['images/IMG_2569.JPG.jpeg','family dance'], ['images/IMG_6114.JPG.jpeg','the big day'], ['images/IMG_6621.JPG.jpeg','stage ready'], ['images/Screenshot 2026-08-02 002030.jpg','all smiles'], ['images/Screenshot 2026-08-02 002042.jpg','dancing together']
];
const testimonials = [
  ['“Mehul choreographed our entire sangeet — from my entry to the family number. Every single person felt included, even the ones with two left feet!”','Ananya & Rohan, wedding sangeet'],
  ['“We were so nervous about our first dance as a couple, but Mehul made it feel effortless. He took our song, our story, and turned it into something magical.”','Priya & Arjun, first dance'],
  ['“From the mehendi to the reception, Mehul helped us plan dance performances for every function. Our families are still talking about it months later!”','Neha & Vikram, full wedding']
];
const imageUrl = (id, width = 500) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
const reelMarkup = reelVideos.map(([src,label]) => `<article class="reel" data-label="${label}"><video src="${src}" muted loop playsinline preload="metadata" data-label="${label}" onerror="console.log('Reel video failed to load:', this.src, this.error)"></video></article>`).join('');
document.querySelector('#reelsOne').innerHTML = reelMarkup + reelMarkup;
document.querySelector('#reelsTwo').innerHTML = [...reelVideos].reverse().map(([src,label]) => `<article class="reel" data-label="${label}"><video src="${src}" muted loop playsinline preload="metadata" data-label="${label}" onerror="console.log('Reel video failed to load:', this.src, this.error)"></video></article>`).join('').repeat(2);
document.querySelector('#galleryBoard').innerHTML = galleryImages.map(([src,label], index) => `<figure class="gallery-item" style="--r:${[-3,2,-1,4,-4,2][index]}deg"><img loading="lazy" src="${src}" alt="${label}"><span>${label}</span></figure>`).join('');
document.querySelector('#testimonialGrid').innerHTML = testimonials.map(([quote, name], index) => `<article class="testimonial" style="--r:${[-2,2,-1][index]}deg"><blockquote>${quote}</blockquote><footer>— ${name}</footer></article>`).join('');

const focusItems = [
  { src: 'images/IMG_1257.jpg', title: 'Getting Ready' },
  { src: 'images/IMG_1390.jpg', title: 'Golden Hour' },
  { src: 'images/IMG_4602.jpg', title: 'On The Floor' },
  { src: 'images/IMG_4693.jpg', title: 'Candid Moment' },
  { src: 'images/IMG_5385.jpg', title: 'Happy Tears' },
  { src: 'images/IMG_5349.jpg', title: 'Family Circle' },
  { src: 'images/IMG_8896.jpg', title: 'Dressed Up' }
];

const focusMarkup = focusItems.map(item => `
  <article class="focus-card" data-label="${item.title}">
    <img loading="lazy" decoding="async" width="300" height="380" src="${item.src}" alt="${item.title}">
  </article>
`).join('');

const focusRow = document.querySelector('#focusRow');
focusRow.innerHTML = focusMarkup + focusMarkup;

const focusWrapEl = document.querySelector('.focus-wrap');
const focusRowEl = document.querySelector('#focusRow');
let focusHoverTimeout = null;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer) {
  focusWrapEl.addEventListener('mouseenter', () => {
    focusRowEl.classList.add('js-paused');
  });

  focusWrapEl.addEventListener('mouseleave', () => {
    focusRowEl.classList.remove('js-paused');
    focusRowEl.querySelectorAll('.focus-card.card-active').forEach(card => card.classList.remove('card-active'));
  });
}

focusRowEl.querySelectorAll('.focus-card').forEach(card => {
  if (finePointer) {
    card.addEventListener('mouseenter', () => {
      clearTimeout(focusHoverTimeout);
      focusHoverTimeout = setTimeout(() => card.classList.add('card-active'), 60);
    });
    card.addEventListener('mouseleave', () => {
      clearTimeout(focusHoverTimeout);
      card.classList.remove('card-active');
    });
  }
  if (!finePointer) {
    card.addEventListener('click', () => {
      clearTimeout(focusHoverTimeout);
      const wasActive = card.classList.contains('card-active');
      focusRowEl.querySelectorAll('.focus-card.card-active').forEach(c => c.classList.remove('card-active'));
      if (!wasActive) {
        card.classList.add('card-active');
        focusRowEl.classList.add('js-paused');
      } else {
        focusRowEl.classList.remove('js-paused');
      }
    });
  }
});

focusRow.querySelectorAll('img').forEach(img => {
  if (img.decode) img.decode().catch(() => {});
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#mainNav');
menuButton.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

const WHATSAPP_NUMBER = '918056707070';
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxhET8uf25yV6S2wtYYvlb7gI-AvpOj6fLTUFlSDkGNA2NRLLnLdzPJzh_W4w7D9FsF/exec';

const contactFormEl = document.querySelector('#contactForm');

if (contactFormEl) {
  contactFormEl.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;

    const nameField = form.querySelector('[name="name"]');
    const contactField = form.querySelector('[name="contact"]');
    const messageField = form.querySelector('[name="message"]');

    if (!nameField || !contactField || !messageField) {
      console.error('Contact form fields not found. Check name attributes match: name, contact, message.');
      form.querySelector('.form-message').textContent = 'Something went wrong — please try again.';
      return;
    }

    const name = nameField.value.trim();
    const contact = contactField.value.trim();
    const message = messageField.value.trim();

    fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, message })
    }).catch(err => console.error('Sheets webhook failed:', err));

    const whatsappText = `Hi Mehul! I'd love to plan a wedding dance.%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0A%0AVision: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

    form.querySelector('.form-message').textContent = 'Opening WhatsApp — just hit send!';
    window.open(whatsappURL, '_blank');
    form.reset();
  });
} else {
  console.error('#contactForm not found in the DOM.');
}
let lastSparkle = 0;
document.addEventListener('pointermove', event => { if (event.pointerType === 'touch' || Date.now() - lastSparkle < 110) return; lastSparkle = Date.now(); const sparkle = document.createElement('span'); sparkle.className = 'sparkle'; sparkle.textContent = Math.random() > .5 ? '✦' : '·'; sparkle.style.left = `${event.clientX}px`; sparkle.style.top = `${event.clientY}px`; document.body.append(sparkle); sparkle.addEventListener('animationend', () => sparkle.remove()); });

const reelVideoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      if (video.dataset.userPaused !== 'true') video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reel video').forEach(video => {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'auto';
  reelVideoObserver.observe(video);

  video.addEventListener('click', event => {
    event.preventDefault();
    if (video.paused) {
      video.dataset.userPaused = 'false';
      video.play().catch(() => {});
    } else {
      video.dataset.userPaused = 'true';
      video.pause();
    }
  });
});

const scatterItems = [
  { src: 'images/IMG_8897.jpg', label: 'Full Circle', style: 'top:2%;left:6%;--r:-6deg' },
  { src: 'images/IMG_9019.jpg', label: 'The Countdown', style: 'top:10%;left:32%;--r:4deg' },
  { src: 'images/IMG_9116.jpg', label: 'Spotlight', style: 'top:22%;left:58%;--r:-4deg' },
  { src: 'images/IMG_9138.jpg', label: 'Lift Off', style: 'top:3%;left:82%;--r:6deg' },
  { src: 'images/IMG_9265.jpg', label: 'Sweet Finale', style: 'top:36%;left:14%;--r:5deg' },
  { src: 'images/IMG_9275.jpg', label: 'Bow Down', style: 'top:42%;left:42%;--r:-8deg' },
  { src: 'images/IMG_9394.jpg', label: 'Curtain Call', style: 'top:30%;left:74%;--r:-2deg' }
];

const scatterBoard = document.querySelector('#scatterBoard');
scatterBoard.innerHTML = scatterItems.map((item, i) => `
  <figure class="scatter-card polaroid" data-index="${i}" style="${item.style}">
    <img src="${item.src}" alt="${item.label}" draggable="false">
    <figcaption>${item.label}</figcaption>
  </figure>
`).join('');

scatterBoard.querySelectorAll('.scatter-card').forEach(card => {
  let isDragging = false;
  let startX = 0, startY = 0, originX = 0, originY = 0;
  let currentX = 0, currentY = 0;
  let velX = 0, velY = 0;
  let lastX = 0, lastY = 0, lastTime = Date.now();
  let animFrame = null;

  const rect = () => card.getBoundingClientRect();

  const onPointerDown = event => {
    isDragging = true;
    card.style.zIndex = 50;
    card.style.transition = 'none';
    startX = event.clientX;
    startY = event.clientY;
    lastX = startX;
    lastY = startY;
    lastTime = Date.now();
    card.setPointerCapture(event.pointerId);
  };

  const onPointerMove = event => {
    if (!isDragging) {
      const box = rect();
      const centerX = box.left + box.width / 2;
      const centerY = box.top + box.height / 2;
      const dist = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      if (dist < 220) {
        const rotateY = (event.clientX - centerX) / 220 * 10;
        const rotateX = -(event.clientY - centerY) / 220 * 10;
        card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r)) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else {
        card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r))`;
      }
      return;
    }
    const now = Date.now();
    const dt = Math.max(now - lastTime, 1);
    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;
    velX = deltaX / dt;
    velY = deltaY / dt;
    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = now;

    currentX += deltaX;
    currentY += deltaY;
    card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r)) scale(1.05)`;
  };

  const endDrag = event => {
    if (!isDragging) return;
    isDragging = false;
    card.style.zIndex = 10;
    if (event && typeof event.releasePointerCapture === 'function') {
      try { card.releasePointerCapture(event.pointerId); } catch (e) {}
    }

    let flingX = currentX + velX * 120;
    let flingY = currentY + velY * 120;
    card.style.transition = 'transform 0.6s cubic-bezier(.2,0,0,1)';
    card.style.transform = `translate(${flingX}px,${flingY}px) rotate(var(--r))`;
    currentX = flingX;
    currentY = flingY;

    setTimeout(() => {
      card.style.transition = 'transform 0.4s ease';
      card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r))`;
    }, 600);
  };

  card.addEventListener('pointerdown', onPointerDown);
  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerup', endDrag);
  card.addEventListener('pointercancel', endDrag);
  card.addEventListener('pointerleave', event => { if (!isDragging) card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r))`; });
});

const pathItemsData = [
  'images/IMG_1298.JPG.jpeg',
  'images/IMG_2569.JPG.jpeg',
  'images/IMG_6114.JPG.jpeg',
  'images/IMG_6621.JPG.jpeg',
  'images/Screenshot 2026-08-02 002030.jpg',
  'images/Screenshot 2026-08-02 002042.jpg'
];

const pathItemsContainer = document.querySelector('#pathItems');
const pathStage = document.querySelector('#pathStage');

pathItemsContainer.innerHTML = pathItemsData.map((src, i) => `
  <div class="path-item" data-index="${i}" style="offset-distance:${(i * 100) / pathItemsData.length}%">
    <img loading="lazy" decoding="async" src="${src}" alt="dance moment ${i + 1}" onerror="this.onerror=null;this.src='images/IMG_1298.JPG.jpeg'">
  </div>
`).join('');

const allPathItems = Array.from(pathItemsContainer.querySelectorAll('.path-item'));
const pathProgress = allPathItems.map((_, i) => (i * 100) / pathItemsData.length);
let pathSpeed = 0.03;
let draggedItem = null;
let dragStartX = 0;

function animatePath() {
  allPathItems.forEach((item, i) => {
    if (item === draggedItem) return;
    pathProgress[i] = (pathProgress[i] + pathSpeed) % 100;
    item.style.offsetDistance = `${pathProgress[i]}%`;
  });
  requestAnimationFrame(animatePath);
}
animatePath();

function releasePathItem(item) {
  if (draggedItem === item) {
    draggedItem = null;
    item.style.zIndex = '';
  }
}

allPathItems.forEach((item, i) => {
  item.addEventListener('pointerdown', event => {
    draggedItem = item;
    dragStartX = event.clientX;
    item.setPointerCapture(event.pointerId);
    item.style.zIndex = 20;
  });
  item.addEventListener('pointermove', event => {
    if (draggedItem !== item) return;
    const deltaX = event.clientX - dragStartX;
    dragStartX = event.clientX;
    pathProgress[i] = (pathProgress[i] + deltaX * 0.08 + 100) % 100;
    item.style.offsetDistance = `${pathProgress[i]}%`;
  });
  item.addEventListener('pointerup', event => {
    if (draggedItem === item) {
      try { item.releasePointerCapture(event.pointerId); } catch (e) {}
      releasePathItem(item);
    }
  });
  item.addEventListener('pointercancel', () => releasePathItem(item));
});

// Scale the marquee path to the actual viewport so circles follow the
// visible dashed line (SVG stretches via preserveAspectRatio="none")
// and never render off-screen on narrow screens.
function scalePathString(d, sx, sy) {
  return d.replace(/([MCLC])([-\d. ]+)/g, (m, cmd, nums) => {
    const parts = nums.trim().split(/\s+/).map(Number);
    return cmd + parts.map((v, i) => (i % 2 === 0 ? v * sx : v * sy).toFixed(1)).join(' ');
  });
}

function applyScaledPath() {
  if (!pathStage) return;
  const w = pathStage.clientWidth || window.innerWidth || 1920;
  const h = pathStage.clientHeight || 260;
  const d = scalePathString(
    'M0 200 C160 60 320 260 480 160 C640 60 800 260 960 160 C1120 60 1280 260 1440 160 C1600 60 1760 200 1920 130',
    w / 1920,
    h / 260
  );
  allPathItems.forEach(item => { item.style.offsetPath = `path("${d}")`; });
}
applyScaledPath();
let pathResizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(pathResizeTimer);
  pathResizeTimer = setTimeout(applyScaledPath, 150);
});

// CSS offset-path is well supported in modern Chrome, Edge, Safari, and Firefox — no polyfill needed. If images appear static (not moving) in a very old browser, that's expected graceful degradation; the images will still display correctly, just without the path animation.

const teamMembers = [
  { id: 'deepali', name: 'Deepali', tagline: 'keeps every count on beat', src: 'team/deepali.png', r: -4, doodle: '✦' },
  { id: 'diya', name: 'Diya', tagline: 'makes the hardest steps look easy', src: 'team/diya.png', r: 3, doodle: '♡' },
  { id: 'khushi', name: 'Khushi', tagline: 'the calm before the chaos', src: 'team/khushi.png', r: -2, doodle: '♪' },
  { id: 'krishi', name: 'Krishi', tagline: 'always first on the floor', src: 'team/krishi.png', r: 5, doodle: '✦' },
  { id: 'pranav', name: 'Pranav', tagline: 'turns rehearsals into memories', src: 'team/pranav.png', r: -3, doodle: '♪' },
  { id: 'shreya', name: 'Shreya', tagline: 'the reason everyone smiles on cue', src: 'team/shreya.png', r: 4, doodle: '♡' }
];

const teamGridEl = document.querySelector('#teamGrid');
const teamCardMarkup = teamMembers.map((member, i) => `
  <div class="team-card" style="--r:${member.r}deg">
    <div class="team-card-photo">
      <span class="team-card-tape tape-${i % 2 === 0 ? 'solid' : 'ghost'}"></span>
      <span class="team-card-doodle">${member.doodle}</span>
      <div class="team-card-photo-inner"><img loading="lazy" decoding="async" src="${member.src}" alt="${member.name}"></div>
    </div>
    <div class="team-card-info">
      <span class="team-card-name">${member.name}</span>
      <span class="team-card-tagline">${member.tagline}</span>
    </div>
  </div>
`).join('');

teamGridEl.innerHTML = teamCardMarkup + teamCardMarkup;

const bgMusic = document.querySelector('#bgMusic');
const musicToggle = document.querySelector('#musicToggle');
const START_TIME = 35;

bgMusic.addEventListener('ended', () => {
  bgMusic.currentTime = START_TIME;
  bgMusic.play().catch(() => {});
});

bgMusic.addEventListener('error', () => {
  console.log('Audio failed to load. Error code:', bgMusic.error ? bgMusic.error.code : 'unknown', '— Error message:', bgMusic.error ? bgMusic.error.message : 'none');
});

bgMusic.addEventListener('canplaythrough', () => {
  console.log('Audio is ready to play, duration:', bgMusic.duration);
});

function tryAutoplay() {
  console.log('Audio readyState:', bgMusic.readyState);
  console.log('Audio duration:', bgMusic.duration);
  console.log('Audio src resolved to:', bgMusic.currentSrc);
  bgMusic.currentTime = START_TIME;
  bgMusic.muted = false;
  bgMusic.volume = 1;
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      console.log('Play promise resolved. Paused:', bgMusic.paused, 'Muted:', bgMusic.muted, 'Volume:', bgMusic.volume, 'CurrentTime:', bgMusic.currentTime);
      musicToggle.classList.remove('muted');
      musicToggle.setAttribute('aria-pressed', 'true');
    }).catch((err) => {
      console.log('Play promise rejected:', err);
      bgMusic.muted = true;
      bgMusic.play().catch((err2) => console.log('Muted play also failed:', err2));
      musicToggle.classList.add('muted');
      musicToggle.setAttribute('aria-pressed', 'false');
    });
  }
}

window.addEventListener('load', tryAutoplay);

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.currentTime = bgMusic.currentTime === 0 ? START_TIME : bgMusic.currentTime;
    bgMusic.muted = false;
    bgMusic.play().catch(() => {});
    musicToggle.classList.remove('muted');
    musicToggle.setAttribute('aria-pressed', 'true');
  } else if (bgMusic.muted) {
    bgMusic.muted = false;
    musicToggle.classList.remove('muted');
    musicToggle.setAttribute('aria-pressed', 'true');
  } else {
    bgMusic.muted = true;
    musicToggle.classList.add('muted');
    musicToggle.setAttribute('aria-pressed', 'false');
  }
});

document.addEventListener('click', function firstInteractionUnmute() {
  if (bgMusic.muted && !bgMusic.paused) {
    bgMusic.muted = false;
    musicToggle.classList.remove('muted');
    musicToggle.setAttribute('aria-pressed', 'true');
  }
  document.removeEventListener('click', firstInteractionUnmute);
}, { once: true });

const musicEmojis = ['🎵', '💃', '🎶', '✨', '🕺'];
let emojiFloatInterval = null;

function spawnFloatingEmoji() {
  const emoji = document.createElement('span');
  emoji.className = 'music-float-emoji';
  emoji.textContent = musicEmojis[Math.floor(Math.random() * musicEmojis.length)];
  const driftStart = (Math.random() * 20 - 10).toFixed(0) + 'px';
  const driftEnd = (Math.random() * 60 - 30).toFixed(0) + 'px';
  const rotStart = (Math.random() * 20 - 10).toFixed(0) + 'deg';
  const rotEnd = (Math.random() * 40 - 20).toFixed(0) + 'deg';
  emoji.style.setProperty('--drift-start', driftStart);
  emoji.style.setProperty('--drift-end', driftEnd);
  emoji.style.setProperty('--rot-start', rotStart);
  emoji.style.setProperty('--rot-end', rotEnd);
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 2700);
}

function startEmojiFloat() {
  if (emojiFloatInterval) return;
  spawnFloatingEmoji();
  emojiFloatInterval = setInterval(spawnFloatingEmoji, 700);
}

function stopEmojiFloat() {
  clearInterval(emojiFloatInterval);
  emojiFloatInterval = null;
}

function syncEmojiFloatState() {
  if (!bgMusic.paused && !bgMusic.muted) {
    startEmojiFloat();
  } else {
    stopEmojiFloat();
  }
}

bgMusic.addEventListener('play', syncEmojiFloatState);
bgMusic.addEventListener('pause', stopEmojiFloat);
bgMusic.addEventListener('volumechange', syncEmojiFloatState);
musicToggle.addEventListener('click', () => setTimeout(syncEmojiFloatState, 50));
window.addEventListener('load', () => setTimeout(syncEmojiFloatState, 300));

const nameGate = document.querySelector('#nameGate');
const nameGateInput = document.querySelector('#nameGateInput');
const nameGateSubmit = document.querySelector('#nameGateSubmit');
const customCursor = document.querySelector('#customCursor');
const cursorLabel = document.querySelector('#cursorLabel');

const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
let visitorName = sessionStorage.getItem('visitorName');

function activateCustomCursor(name) {
  if (isCoarsePointer) return;
  cursorLabel.textContent = name;
  customCursor.classList.add('active');
  document.body.style.cursor = 'none';

  let mouseX = -100, mouseY = -100;
  let arrowX = -100, arrowY = -100;
  let labelX = -100, labelY = -100;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    arrowX += (mouseX - arrowX) * 0.35;
    arrowY += (mouseY - arrowY) * 0.35;
    labelX += (mouseX - labelX) * 0.18;
    labelY += (mouseY - labelY) * 0.18;

    document.querySelector('#cursorArrow').style.transform = `translate(${arrowX}px, ${arrowY}px)`;
    cursorLabel.style.transform = `translate(${labelX + 22}px, ${labelY + 14}px)`;

    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

if (!isCoarsePointer) {
  if (visitorName) {
    activateCustomCursor(visitorName);
  } else {
    nameGate.classList.add('open');
  }
}

nameGateSubmit.addEventListener('click', () => {
  const name = nameGateInput.value.trim();
  if (!name) {
    nameGateInput.focus();
    return;
  }
  sessionStorage.setItem('visitorName', name);
  nameGate.classList.remove('open');
  activateCustomCursor(name);
});

nameGateInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') nameGateSubmit.click();
});

const statNumbers = document.querySelectorAll('.stat-number');

function animateCountUp(el, duration = 1600) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.forEach((el, i) => {
        setTimeout(() => animateCountUp(el), i * 150);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: .4 });

const statsGridEl = document.querySelector('#statsGrid');
if (statsGridEl) statsObserver.observe(statsGridEl);
