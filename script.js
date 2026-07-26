const reelImages = [
  ['1504609813442-a8924e83f76e','after class'], ['1547153760-18fc86324498','on stage'], ['1518834107812-67b0b7c58434','the warm up'], ['1508700115892-45ecd05ae2ad','full out'], ['1545128485-c400e7702796','one more run'], ['1515886657613-9f3515b0c78f','dance break']
];
const galleryImages = [
  ['1518834107812-67b0b7c58434','the studio'], ['1545128485-c400e7702796','take five'], ['1504609813442-a8924e83f76e','rehearsal'], ['1547153760-18fc86324498','lights on'], ['1515886657613-9f3515b0c78f','in motion'], ['1508700115892-45ecd05ae2ad','happy feet']
];
const testimonials = [
  ['“You never feel like you have to be good before you belong in the room.”','Ananya, weekly class'],
  ['“The kind of teacher who gives you a count, a laugh, and the confidence to go for it.”','Karthik, workshop'],
  ['“Every routine feels like a tiny little story. I leave with the biggest grin.”','Priya, private session']
];
const imageUrl = (id, width = 500) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
const reelMarkup = reelImages.map(([id,label]) => `<article class="reel" data-label="${label}"><img loading="lazy" src="${imageUrl(id,400)}" alt="Dance ${label}"></article>`).join('');
document.querySelector('#reelsOne').innerHTML = reelMarkup + reelMarkup;
document.querySelector('#reelsTwo').innerHTML = [...reelImages].reverse().map(([id,label]) => `<article class="reel" data-label="${label}"><img loading="lazy" src="${imageUrl(id,400)}" alt="Dance ${label}"></article>`).join('').repeat(2);
document.querySelector('#galleryBoard').innerHTML = galleryImages.map(([id,label], index) => `<figure class="gallery-item" style="--r:${[-3,2,-1,4,-4,2][index]}deg"><img loading="lazy" src="${imageUrl(id)}" alt="${label}"><span>${label}</span></figure>`).join('');
document.querySelector('#testimonialGrid').innerHTML = testimonials.map(([quote, name], index) => `<article class="testimonial" style="--r:${[-2,2,-1][index]}deg"><blockquote>${quote}</blockquote><footer>— ${name}</footer></article>`).join('');

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#mainNav');
menuButton.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

document.querySelector('#contactForm').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.querySelector('.form-message').textContent = 'Note received — see you on the dance floor!'; event.currentTarget.reset(); });
let lastSparkle = 0;
document.addEventListener('pointermove', event => { if (event.pointerType === 'touch' || Date.now() - lastSparkle < 110) return; lastSparkle = Date.now(); const sparkle = document.createElement('span'); sparkle.className = 'sparkle'; sparkle.textContent = Math.random() > .5 ? '✦' : '·'; sparkle.style.left = `${event.clientX}px`; sparkle.style.top = `${event.clientY}px`; document.body.append(sparkle); sparkle.addEventListener('animationend', () => sparkle.remove()); });
