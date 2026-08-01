const reelVideos = [
  ['reels/IMG_7630.mov','after class'], ['reels/IMG_7631.mov','on stage'], ['reels/IMG_7632.mov','the warm up'], ['reels/IMG_7633.mov','full out'], ['reels/IMG_7634.mov','one more run'], ['reels/IMG_7635.mov','dance break'], ['reels/IMG_7636.mov','after class'], ['reels/IMG_7637.mov','on stage'], ['reels/IMG_7638.mov','the warm up']
];
const galleryImages = [
  ['images/IMG_1298.JPG.jpeg','sangeet prep'], ['images/IMG_2569.JPG.jpeg','family dance'], ['images/IMG_6114.JPG.jpeg','the big day'], ['images/IMG_6621.JPG.jpeg','stage ready'], ['images/Screenshot 2026-08-02 002030.png','all smiles'], ['images/Screenshot 2026-08-02 002042.png','dancing together']
];
const testimonials = [
  ['“Mehul choreographed our entire sangeet — from my entry to the family number. Every single person felt included, even the ones with two left feet!”','Ananya & Rohan, wedding sangeet'],
  ['“We were so nervous about our first dance as a couple, but Mehul made it feel effortless. He took our song, our story, and turned it into something magical.”','Priya & Arjun, first dance'],
  ['“From the mehendi to the reception, Mehul helped us plan dance performances for every function. Our families are still talking about it months later!”','Neha & Vikram, full wedding']
];
const imageUrl = (id, width = 500) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
const reelMarkup = reelVideos.map(([src,label]) => `<article class="reel" data-label="${label}"><video src="${src}" muted loop playsinline preload="metadata"></video></article>`).join('');
document.querySelector('#reelsOne').innerHTML = reelMarkup + reelMarkup;
document.querySelector('#reelsTwo').innerHTML = [...reelVideos].reverse().map(([src,label]) => `<article class="reel" data-label="${label}"><video src="${src}" muted loop playsinline preload="metadata"></video></article>`).join('').repeat(2);
document.querySelector('#galleryBoard').innerHTML = galleryImages.map(([src,label], index) => `<figure class="gallery-item" style="--r:${[-3,2,-1,4,-4,2][index]}deg"><img loading="lazy" src="${src}" alt="${label}"><span>${label}</span></figure>`).join('');
document.querySelector('#testimonialGrid').innerHTML = testimonials.map(([quote, name], index) => `<article class="testimonial" style="--r:${[-2,2,-1][index]}deg"><blockquote>${quote}</blockquote><footer>— ${name}</footer></article>`).join('');

const focusItems = [
  { src: 'images/IMG_1298.JPG.jpeg', title: 'Sangeet Prep' },
  { src: 'images/IMG_2569.JPG.jpeg', title: 'Family Dance' },
  { src: 'images/IMG_6114.JPG.jpeg', title: 'The Big Day' },
  { src: 'images/IMG_6621.JPG.jpeg', title: 'Stage Ready' },
  { src: 'images/Screenshot 2026-08-02 002030.png', title: 'All Smiles' },
  { src: 'images/Screenshot 2026-08-02 002042.png', title: 'Dancing Together' }
];

const focusMarkup = focusItems.map(item => `
  <article class="focus-card" data-label="${item.title}">
    <img loading="lazy" decoding="async" width="300" height="380" src="${item.src}" alt="${item.title}">
  </article>
`).join('');

const focusRow = document.querySelector('#focusRow');
focusRow.innerHTML = focusMarkup + focusMarkup;

focusRow.querySelectorAll('img').forEach(img => {
  if (img.decode) img.decode().catch(() => {});
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#mainNav');
menuButton.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

document.querySelector('#contactForm').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.querySelector('.form-message').textContent = 'Message received — let\'s start planning your wedding dance!'; event.currentTarget.reset(); });
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
  { src: 'images/Screenshot 2026-08-02 002030.png', label: 'all smiles', style: 'top:30%;left:48%;--r:-8deg' }
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
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const dist = Math.hypot(dx, dy);
      if (dist < 220) {
        const rotateY = (dx / 220) * 10;
        const rotateX = -(dy / 220) * 10;
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
  'images/Screenshot 2026-08-02 002030.png',
  'images/Screenshot 2026-08-02 002042.png'
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
