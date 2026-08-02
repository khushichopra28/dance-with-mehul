const reelVideos = [
  ['reels/IMG_7630.mp4','after class'], ['reels/IMG_7631.mp4','on stage'], ['reels/IMG_7632.mp4','the warm up'], ['reels/IMG_7633.mp4','full out'], ['reels/IMG_7634.mp4','one more run'], ['reels/IMG_7635.mp4','dance break'], ['reels/IMG_7636.mp4','after class'], ['reels/IMG_7637.mp4','on stage'], ['reels/IMG_7638.mp4','the warm up'], ['reels/IMG_7678.mp4','line up'], ['reels/IMG_7679.mp4','count it out'], ['reels/IMG_7680.mp4','side by side'], ['reels/IMG_7681.mp4','the dip'], ['reels/IMG_7682.mp4','freeze frame'], ['reels/IMG_9181.mp4','sneak peek']
];
const galleryImages = [
  ['images/IMG_1298.JPG.jpeg','sangeet prep'], ['images/IMG_2569.JPG.jpeg','family dance'], ['images/IMG_6114.JPG.jpeg','the big day'], ['images/IMG_6621.JPG.jpeg','stage ready'], ['images/Screenshot 2026-08-02 002030.jpg','all smiles'], ['images/Screenshot 2026-08-02 002042.jpg','dancing together'], ['images/IMG_1257.jpg','getting ready'], ['images/IMG_1390.jpg','golden hour'], ['images/IMG_4602.jpg','on the floor'], ['images/IMG_4693.jpg','candid moment'], ['images/IMG_5385.jpg','happy tears'], ['images/IMG_5349.jpg','family circle'], ['images/IMG_8896.jpg','dressed up'], ['images/IMG_8897.jpg','full circle'], ['images/IMG_9019.jpg','the countdown'], ['images/IMG_9116.jpg','spotlight'], ['images/IMG_9138.jpg','lift off'], ['images/IMG_9265.jpg','sweet finale'], ['images/IMG_9275.jpg','hands up'], ['images/IMG_9394.jpg','curtain call']
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
  { src: 'images/IMG_1298.JPG.jpeg', title: 'Sangeet Prep' },
  { src: 'images/IMG_2569.JPG.jpeg', title: 'Family Dance' },
  { src: 'images/IMG_6114.JPG.jpeg', title: 'The Big Day' },
  { src: 'images/IMG_6621.JPG.jpeg', title: 'Stage Ready' },
  { src: 'images/Screenshot 2026-08-02 002030.jpg', title: 'All Smiles' },
  { src: 'images/Screenshot 2026-08-02 002042.jpg', title: 'Dancing Together' }
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

focusWrapEl.addEventListener('mouseenter', () => {
  focusRowEl.classList.add('js-paused');
});

focusWrapEl.addEventListener('mouseleave', () => {
  focusRowEl.classList.remove('js-paused');
  focusRowEl.querySelectorAll('.focus-card.card-active').forEach(card => card.classList.remove('card-active'));
});

focusRowEl.querySelectorAll('.focus-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    clearTimeout(focusHoverTimeout);
    focusHoverTimeout = setTimeout(() => card.classList.add('card-active'), 60);
  });
  card.addEventListener('mouseleave', () => {
    clearTimeout(focusHoverTimeout);
    card.classList.remove('card-active');
  });
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

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  const whatsappText = `Hi Mehul! I'd love to plan a wedding dance.%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AVision: ${encodeURIComponent(message)}`;
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  form.querySelector('.form-message').textContent = 'Opening WhatsApp — just hit send!';
  window.open(whatsappURL, '_blank');
  form.reset();
});
let lastSparkle = 0;
document.addEventListener('pointermove', event => { if (event.pointerType === 'touch' || Date.now() - lastSparkle < 110) return; lastSparkle = Date.now(); const sparkle = document.createElement('span'); sparkle.className = 'sparkle'; sparkle.textContent = Math.random() > .5 ? '✦' : '·'; sparkle.style.left = `${event.clientX}px`; sparkle.style.top = `${event.clientY}px`; document.body.append(sparkle); sparkle.addEventListener('animationend', () => sparkle.remove()); });

const reelVideoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(() => {});
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
});

const scatterItems = [
  { src: 'images/IMG_1298.JPG.jpeg', label: 'sangeet prep', style: 'top:5%;left:6%;--r:-6deg' },
  { src: 'images/IMG_2569.JPG.jpeg', label: 'family dance', style: 'top:12%;left:34%;--r:4deg' },
  { src: 'images/IMG_6114.JPG.jpeg', label: 'the big day', style: 'top:2%;left:60%;--r:-3deg' },
  { src: 'images/IMG_6621.JPG.jpeg', label: 'stage ready', style: 'top:20%;left:80%;--r:7deg' },
  { src: 'mehul.jpeg', label: 'mehul', style: 'top:32%;left:16%;--r:5deg' },
  { src: 'images/Screenshot 2026-08-02 002030.jpg', label: 'all smiles', style: 'top:30%;left:48%;--r:-8deg' }
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
    velX = (event.clientX - lastX) / dt;
    velY = (event.clientY - lastY) / dt;
    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = now;

    currentX += event.movementX;
    currentY += event.movementY;
    card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r)) scale(1.05)`;
  };

  const onPointerUp = event => {
    if (!isDragging) return;
    isDragging = false;
    card.style.zIndex = 10;
    card.releasePointerCapture(event.pointerId);

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
  card.addEventListener('pointerup', onPointerUp);
  card.addEventListener('pointerleave', event => { if (!isDragging) card.style.transform = `translate(${currentX}px,${currentY}px) rotate(var(--r))`; });
});

const pathItemsData = [
  'images/IMG_1298.JPG.jpeg',
  'images/IMG_2569.JPG.jpeg',
  'images/IMG_6114.JPG.jpeg',
  'images/IMG_6621.JPG.jpeg',
  'mehul.jpeg',
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
      item.releasePointerCapture(event.pointerId);
      draggedItem = null;
      item.style.zIndex = '';
    }
  });
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
