const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    title: 'Sunlit living room',
    location: 'Lisbon, Portugal',
    vibe: 'Earthy modern'
  },
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    title: 'Creative studio',
    location: 'Brooklyn, NY',
    vibe: 'Industrial calm'
  },
  {
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
    title: 'Garden dining',
    location: 'Cape Town, SA',
    vibe: 'Soft minimal'
  },
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    title: 'Wellness suite',
    location: 'Oslo, Norway',
    vibe: 'Nordic spa'
  }
];

const happyHomesSlides = [
  {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    quote: 'Our 3BHK now feels like a boutique hotel, but it still works for everyday family chaos. Storage, light, and colors are all spot on.',
    name: 'Singh Family',
    location: 'New Town, Kolkata'
  },
  {
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=900&q=80',
    quote: 'From kitchen layouts to kids’ rooms, everything was planned end-to-end. We only had to approve designs and enjoy the reveal day.',
    name: 'Ananya & Rahul',
    location: 'High-rise apartment'
  },
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    quote: 'They converted an old flat into a warm, modern home. Guests always ask who did our interiors.',
    name: 'Roy Residence',
    location: 'Family home makeover'
  }
];

const wardrobeSlides = [
  {
    image: './assets/Built-in sliding wardrobe.jpg',
    title: 'Built-in sliding wardrobe',
    subtitle: 'Full-height shutters with soft neutral finishes'
  },
  {
    image: './assets/Compact bedroom wardrobe.jpg',
    title: 'Compact bedroom wardrobe',
    subtitle: 'Smart vertical storage for tight footprints'
  },
  {
    image: './assets/Open niche wardrobe.jpg',
    title: 'Open niche wardrobe',
    subtitle: 'Integrated shelving with soft lighting'
  },
  {
    image: './assets/Suite walk-in wardrobe.jpeg',
    title: 'Suite walk-in wardrobe',
    subtitle: 'Island dresser and perimeter hanging zones'
  },
  {
    image: './assets/Textured panel wardrobe.jpeg',
    title: 'Textured panel wardrobe',
    subtitle: 'Grooved shutters with concealed handles'
  },
  {
    image: './assets/Work-from-home wardrobe wall.jpg',
    title: 'Work-from-home wardrobe wall',
    subtitle: 'Wardrobe plus concealed study nook'
  },
  {
    image: './assets/Glass-front display wardrobe.jpg',
    title: 'Glass-front display wardrobe',
    subtitle: 'Curated pieces behind softly lit glass'
  },
  {
    image: './assets/Minimal white wardrobe.jpg',
    title: 'Minimal white wardrobe',
    subtitle: 'Handle-less shutters for a calm backdrop'
  },
  {
    image: './assets/Loft wardrobe system.jpg',
    title: 'Loft wardrobe system',
    subtitle: 'Open and closed storage for studio living'
  },
  {
    image: './assets/Apartment entry wardrobe.jpeg',
    title: 'Apartment entry wardrobe',
    subtitle: 'Slim wardrobe with integrated bench'
  }
];

const livingSlides = [
  {
    image: './assets/Soft neutral living room.jpg',
    title: 'Soft neutral living room',
    subtitle: 'Layered textures with warm wood and linen',
    meta: ['Open-plan layout', 'Family-friendly fabrics', 'Hidden storage']
  },
  {
    image: './assets/Soft neutral living room.jpg',
    title: 'Sunlit city lounge',
    subtitle: 'Floor-to-ceiling windows with low seating',
    meta: ['City views', 'Low-profile sofa', 'Accent lighting']
  },
  {
    image: './assets/Indoor-outdoor living.jpg',
    title: 'Indoor-outdoor living',
    subtitle: 'Lounge that flows into a garden deck',
    meta: ['Sliding doors', 'Outdoor fabrics', 'Green accents']
  },
  {
    image: './assets/Soft neutral living room.jpg',
    title: 'Minimal gallery room',
    subtitle: 'Art-led space with sculptural lighting',
    meta: ['Gallery wall', 'Statement lighting', 'Neutral palette']
  },
  {
    image: './assets/Indoor-outdoor living.jpg',
    title: 'Cozy corner lounge',
    subtitle: 'Compact nook with built-in seating',
    meta: ['Corner seating', 'Reading lights', 'Storage bench']
  },
  {
    image: './assets/Soft neutral living room.jpg',
    title: 'Statement sofa living',
    subtitle: 'Bold centerpiece sofa with soft accents',
    meta: ['Accent color', 'Textured rug', 'Layered cushions']
  },
  {
    image: './assets/Indoor-outdoor living.jpg',
    title: 'Work-from-home lounge',
    subtitle: 'Integrated desk within living zone',
    meta: ['Hybrid space', 'Built-in desk', 'Cable management']
  },
  {
    image: './assets/Soft neutral living room.jpg',
    title: 'Warm modern apartment',
    subtitle: 'Soft woods and layered lighting in a compact flat',
    meta: ['Apartment layout', 'Wall-mounted storage', 'Zoned lighting']
  },
  {
    image: './assets/Indoor-outdoor living.jpg',
    title: 'Monochrome lounge',
    subtitle: 'Calm, tonal palette for focused relaxation',
    meta: ['Monochrome palette', 'Curated decor', 'Low contrast']
  },
  {
    image: './assets/Earthy retreat living.jpeg',
    title: 'Earthy retreat living',
    subtitle: 'Stone, timber, and linen for a grounded feel',
    meta: ['Earthy textures', 'Natural light', 'Layered textiles']
  }
];

const bedroomSlides = [
  {
    image: './assets/Calm neutral bedroom.jpg',
    title: 'Calm neutral bedroom',
    subtitle: 'Layered linens and warm timber headboard'
  },
  {
    image: './assets/Soft pastel bedroom.png',
    title: 'Suite-style master',
    subtitle: 'Soft lighting and integrated storage'
  },
  {
    image: './assets/Monochrome bedroom.jpeg',
    title: 'City-view bedroom',
    subtitle: 'Full-height drapery and tonal palette'
  },
  {
    image: './assets/Compact guest bedroom.png',
    title: 'Minimal platform bed',
    subtitle: 'Low profile bed with sculptural lighting'
  },
  {
    image: './assets/Calm neutral bedroom.jpg',
    title: 'Work & rest suite',
    subtitle: 'Bedroom with a quiet work corner'
  },
  {
    image: './assets/Soft pastel bedroom.png',
    title: 'Soft pastel bedroom',
    subtitle: 'Pastel tones and soft curves'
  },
  {
    image: './assets/Monochrome bedroom.jpeg',
    title: 'Textured retreat',
    subtitle: 'Wall panelling and layered fabrics'
  },
  {
    image: './assets/Compact guest bedroom.png',
    title: 'Compact guest bedroom',
    subtitle: 'Smart storage in a small footprint'
  },
  {
    image: './assets/Monochrome bedroom.jpeg',
    title: 'Monochrome bedroom',
    subtitle: 'Tonal layers with high comfort'
  },
  {
    image: './assets/Calm neutral bedroom.jpg',
    title: 'Earthy calm suite',
    subtitle: 'Stone, timber, and linen textures'
  }
];

const kitchenSlides = [
  {
    image: './assets/Sleek handle-less kitchen.jpg',
    title: 'Sleek handle-less kitchen',
    subtitle: 'Glossy white with warm timber island',
    meta: ['Ideal for 2-3 member families', 'Straight + island layout', 'Integrated lighting']
  },
  {
    image: './assets/Parallel modular kitchen.jpg',
    title: 'Parallel modular kitchen',
    subtitle: 'Optimized storage for compact apartments',
    meta: ['Parallel layout', 'Tall pantry units', 'Soft-close hardware']
  },
  {
    image: './assets/U-shaped entertainer kitchen.jpg',
    title: 'U-shaped entertainer kitchen',
    subtitle: 'Zoned for prep, cooking, and hosting',
    meta: ['U-shaped layout', 'Breakfast counter', 'Hidden appliances']
  },
  {
    image: './assets/warm wooden kitchen.jpg',
    title: 'Warm wood & stone kitchen',
    subtitle: 'Textured finishes with island seating',
    meta: ['L-shaped layout', 'Quartz countertop', 'Under-cabinet lighting']
  },
  {
    image: './assets/Studio-friendly modular kitchen.webp',
    title: 'Studio-friendly modular kitchen',
    subtitle: 'Compact yet high-storage cabinetry',
    meta: ['Single-wall layout', 'Loft storage', 'Built-in chimney']
  },
  {
    image: './assets/Open-plan family kitchen.jpg',
    title: 'Open-plan family kitchen',
    subtitle: 'Island dining for everyday hosting',
    meta: ['Island seating', 'Child-friendly finishes', 'Task + ambient lighting']
  },
  {
    image: './assets/Compact corner kitchen.jpg',
    title: 'Compact corner kitchen',
    subtitle: 'Smart storage in every inch',
    meta: ['Corner carousel units', 'Overhead cabinets', 'Dedicated appliance zone']
  },
  {
    image: './assets/Matte grey gourmet kitchen.jpg',
    title: 'Matte grey gourmet kitchen',
    subtitle: 'Understated palette with luxe details',
    meta: ['Matte finishes', 'Integrated hob & chimney', 'Deep drawers']
  },
  {
    image: './assets/Two-tone modular kitchen.jpg',
    title: 'Two-tone modular kitchen',
    subtitle: 'Upper light, lower deep tones for balance',
    meta: ['Two-tone cabinetry', 'Profile handles', 'Built-in oven tower']
  }
];

const API_BASE_URL = window.DECORMIND_API_BASE_URL || 'https://your-api-id.execute-api.us-east-1.amazonaws.com';
const CONTACT_ENDPOINT = `${API_BASE_URL.replace(/\/$/, '')}/contact`;

const styleConcepts = {
  urban: {
    eyebrow: 'Mood board · Urban Loft',
    title: 'Tailored serenity',
    timing: '8-12 weeks',
    description: 'Softened geometry, layered lighting, and artisan metalwork calm energetic floorplans.',
    details: ['Smoked oak', 'Oxidized brass', 'Gallery track', 'Acoustic drapery'],
    swatch: 'linear-gradient(120deg, rgba(214,40,40,0.8), rgba(234,226,183,0.7))'
  },
  retreat: {
    eyebrow: 'Mood board · Desert Retreat',
    title: 'Warm mineral calm',
    timing: '12-16 weeks',
    description: 'Sun-washed plaster, travertine edges, and shadow lines that stretch with the horizon.',
    details: ['Clay plaster', 'Honest stone', 'Shade garden', 'Plinth seating'],
    swatch: 'linear-gradient(120deg, rgba(214,40,40,0.6), rgba(0,48,73,0.6))'
  },
  coastal: {
    eyebrow: 'Mood board · Coastal Atelier',
    title: 'Breezy atelier',
    timing: '10-14 weeks',
    description: 'Bleached ash, handwoven fibers, and sculptural ceramics celebrating salt-air living.',
    details: ['Bleached ash', 'Curated ceramics', 'Linen voile', 'Sea-glass accents'],
    swatch: 'linear-gradient(120deg, rgba(234,226,183,0.9), rgba(0,48,73,0.5))'
  }
};

const galleryGrid = document.getElementById('galleryGrid');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const yearEl = document.getElementById('year');
const heroTypedEl = document.getElementById('heroTypedWord');
const happyTrack = document.getElementById('happyHomesTrack');
const happyDots = document.getElementById('happyHomesDots');
const happyPrev = document.querySelector('.happy-nav-prev');
const happyNext = document.querySelector('.happy-nav-next');
const styleButtons = document.querySelectorAll('[data-style]');
const styleEyebrow = document.getElementById('styleEyebrow');
const styleTitle = document.getElementById('styleTitle');
const styleDescription = document.getElementById('styleDescription');
const styleDetails = document.getElementById('styleDetails');
const styleTiming = document.getElementById('styleTiming');
const styleSwatch = document.getElementById('styleSwatch');
const faqToggles = document.querySelectorAll('[data-faq-toggle]');
const kitchenTrack = document.getElementById('kitchenCarouselTrack');
const kitchenDots = document.getElementById('kitchenCarouselDots');
const kitchenPrev = document.querySelector('.kitchen-nav-prev');
const kitchenNext = document.querySelector('.kitchen-nav-next');
const livingTrack = document.getElementById('livingCarouselTrack');
const livingDots = document.getElementById('livingCarouselDots');
const livingPrev = document.querySelector('.living-nav-prev');
const livingNext = document.querySelector('.living-nav-next');
const bedroomTrack = document.getElementById('bedroomCarouselTrack');
const bedroomDots = document.getElementById('bedroomCarouselDots');
const bedroomPrev = document.querySelector('.bedroom-nav-prev');
const bedroomNext = document.querySelector('.bedroom-nav-next');
const wardrobeTrack = document.getElementById('wardrobeCarouselTrack');
const wardrobeDots = document.getElementById('wardrobeCarouselDots');
const wardrobePrev = document.querySelector('.wardrobe-nav-prev');
const wardrobeNext = document.querySelector('.wardrobe-nav-next');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const drawerClose = document.querySelector('.drawer-close');
const navCta = document.querySelector('.nav-cta');
const heroSliders = document.querySelectorAll('[data-hero-slider]');
const leadPopup = document.getElementById('leadPopup');
const leadPopupClose = document.getElementById('leadPopupClose');
const leadPopupForm = document.getElementById('leadPopupForm');

const renderGallery = () => {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryItems.map(
    item => `
      <article class="gallery-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="meta">
          <p class="eyebrow">${item.vibe}</p>
          <h3>${item.title}</h3>
          <p>${item.location}</p>
        </div>
      </article>
    `
  ).join('');
};

const setYear = () => {
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

const showToast = (message, isError = false) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden', 'error');
  if (isError) toast.classList.add('error');
  setTimeout(() => toast.classList.add('hidden'), 3200);
};

const validatePayload = ({ name, email, scope }) => {
  return Boolean(name && email && scope);
};

const submitContact = async payload => {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data?.message || 'Unable to submit inquiry.');
  }

  return response.json();
};

const handleFormSubmit = () => {
  if (!contactForm) return;

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const payload = {
      name: formData.get('name')?.trim(),
      email: formData.get('email')?.trim(),
      scope: formData.get('scope'),
      message: formData.get('message')?.trim()
    };

    if (!validatePayload(payload)) {
      showToast('Please complete required fields.', true);
      return;
    }

    contactForm.classList.add('is-loading');

    try {
      await submitContact(payload);
      contactForm.reset();
      showToast('Inquiry sent. We will reply soon.');
    } catch (error) {
      console.error(error);
      showToast(error.message, true);
    } finally {
      contactForm.classList.remove('is-loading');
    }
  });
};

const initLeadPopup = () => {
  if (!leadPopup || !leadPopupForm) return;

  const STORAGE_KEY = 'decormind_lead_popup_seen';
  const hasSeen = window.localStorage.getItem(STORAGE_KEY);
  console.log('[leadPopup] initLeadPopup called, hasSeen =', hasSeen);
  if (!hasSeen) {
    setTimeout(() => {
      console.log('[leadPopup] opening from timer');
      leadPopup.classList.add('is-open');
      leadPopup.setAttribute('aria-hidden', 'false');
    }, 9000);
  }

  const closePopup = () => {
    console.log('[leadPopup] closePopup called');
    leadPopup.classList.remove('is-open');
    leadPopup.setAttribute('aria-hidden', 'true');
    window.localStorage.setItem(STORAGE_KEY, 'true');
  };

  leadPopupClose?.addEventListener('click', () => {
    closePopup();
  });

  leadPopup.addEventListener('click', event => {
    if (event.target === leadPopup) {
      closePopup();
    }
  });

  leadPopupForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('[leadPopup] submit handler');
    const formData = new FormData(leadPopupForm);
    const phone = String(formData.get('leadPhone') || '').trim();
    const property = String(formData.get('leadProperty') || '').trim();

    if (!phone || !property) {
      showToast('Please add your mobile number and property location.', true);
      return;
    }

    closePopup();
    showToast('Thanks! Our designer will connect with you shortly.');
  });
};

const enhanceServiceCards = () => {
  const cards = document.querySelectorAll('[data-service]');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('active'));
    card.addEventListener('mouseleave', () => card.classList.remove('active'));
  });
};

const setStyleConcept = key => {
  const concept = styleConcepts[key];
  if (
    !concept ||
    !styleDetails ||
    !styleEyebrow ||
    !styleTitle ||
    !styleDescription ||
    !styleTiming ||
    !styleSwatch
  ) {
    return;
  }

  styleEyebrow.textContent = concept.eyebrow;
  styleTitle.textContent = concept.title;
  styleDescription.textContent = concept.description;
  styleTiming.textContent = concept.timing;
  styleDetails.innerHTML = concept.details.map(item => `<li>${item}</li>`).join('');
  styleSwatch.style.background = concept.swatch;

  styleButtons.forEach(button => {
    const isActive = button.dataset.style === key;
    button.classList.toggle('active', isActive);
  });
};

const handleStyleTabs = () => {
  if (!styleButtons.length) return;
  styleButtons.forEach(button => {
    button.addEventListener('click', () => {
      setStyleConcept(button.dataset.style);
    });
  });
  setStyleConcept('urban');
};

const handleFaq = () => {
  if (!faqToggles.length) return;
  faqToggles.forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.closest('.faq-item');
      parent?.classList.toggle('open');
    });
  });
  faqToggles[0]?.closest('.faq-item')?.classList.add('open');
};

const initHeroTypedWord = () => {
  if (!heroTypedEl) return;

  const words = ['life', 'comfort', 'style', 'routine'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 50;
  const pauseBetweenWords = 1200;

  const tick = () => {
    const current = words[wordIndex];

    if (!isDeleting) {
      charIndex += 1;
      heroTypedEl.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, pauseBetweenWords);
        return;
      }
    } else {
      charIndex -= 1;
      heroTypedEl.textContent = current.slice(0, Math.max(charIndex, 0));

      if (charIndex <= 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    const delay = isDeleting ? 40 : typeSpeed;
    setTimeout(tick, delay);
  };

  tick();
};

let currentHappyIndex = 0;

const renderHappyCarousel = () => {
  if (!happyTrack || !happyDots) return;

  happyTrack.innerHTML = happyHomesSlides
    .map(
      slide => `
        <article class="happy-card">
          <div class="happy-image">
            <img src="${slide.image}" alt="${slide.name} home" loading="lazy" />
          </div>
          <div class="happy-copy">
            <p>“${slide.quote}”</p>
            <h4>${slide.name}</h4>
            <span>${slide.location}</span>
          </div>
        </article>
      `
    )
    .join('');

  const pageCount = Math.max(1, happyHomesSlides.length);

  happyDots.innerHTML = Array.from({ length: pageCount })
    .map(
      (_val, index) => `
        <button class="happy-dot ${index === 0 ? 'active' : ''}" type="button" data-happy-dot="${index}"></button>
      `
    )
    .join('');
};

const updateHappyActiveState = () => {
  if (!happyTrack || !happyDots) return;

  const dots = happyDots.querySelectorAll('.happy-dot');
  const slides = happyTrack.querySelectorAll('.happy-card');
  if (!slides.length) return;

  const maxIndex = slides.length - 1;
  currentHappyIndex = Math.min(Math.max(currentHappyIndex, 0), maxIndex);

  const targetSlide = slides[currentHappyIndex];
  const offsetLeft = targetSlide.offsetLeft;
  happyTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentHappyIndex);
  });
};

const handleHappyCarousel = () => {
  if (!happyTrack || !happyDots) return;

  renderHappyCarousel();
  updateHappyActiveState();

  const maxIndex = Math.max(0, happyHomesSlides.length - 1);

  const goNext = () => {
    currentHappyIndex = currentHappyIndex >= maxIndex ? 0 : currentHappyIndex + 1;
    updateHappyActiveState();
  };

  const goPrev = () => {
    currentHappyIndex = currentHappyIndex <= 0 ? maxIndex : currentHappyIndex - 1;
    updateHappyActiveState();
  };

  happyPrev?.addEventListener('click', goPrev);
  happyNext?.addEventListener('click', goNext);

  happyDots.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const indexAttr = target.getAttribute('data-happy-dot');
    if (indexAttr == null) return;
    const index = Number(indexAttr);
    if (Number.isNaN(index)) return;
    currentHappyIndex = index;
    updateHappyActiveState();
  });
};

let currentKitchenIndex = 0; // page index (0-based)
let kitchenAutoTimer;
const KITCHEN_VISIBLE = 3;

let currentLivingIndex = 0; // page index (0-based)
let livingAutoTimer;
const LIVING_VISIBLE = 3;

let currentBedroomIndex = 0; // page index (0-based)
let bedroomAutoTimer;
const BEDROOM_VISIBLE = 3;

let currentWardrobeIndex = 0; // page index (0-based)
let wardrobeAutoTimer;
const WARDROBE_VISIBLE = 3;

const renderKitchenCarousel = () => {
  if (!kitchenTrack || !kitchenDots) return;

  kitchenTrack.innerHTML = kitchenSlides
    .map(
      slide => `
        <article class="kitchen-slide">
          <div class="kitchen-image">
            <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
          </div>
          <div class="kitchen-copy">
            <p class="eyebrow">Modular Kitchen Design</p>
            <h3>${slide.title}</h3>
            <p>${slide.subtitle}</p>
            <div class="kitchen-actions">
              <a class="cta ghost" href="tel:+919831435314">Talk to designer</a>
              <button class="cta primary" type="button" data-kitchen-quote>Get quote</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const pageCount = Math.max(1, Math.ceil(kitchenSlides.length / KITCHEN_VISIBLE));
  const dotCount = pageCount;

  kitchenDots.innerHTML = Array.from({ length: dotCount })
    .map(
      (_val, index) => `
        <button class="kitchen-dot ${index === 0 ? 'active' : ''}" type="button" data-kitchen-dot="${index}"></button>
      `
    )
    .join('');
};

const updateKitchenActiveState = () => {
  if (!kitchenTrack || !kitchenDots) return;

  const dots = kitchenDots.querySelectorAll('.kitchen-dot');
  const pageCount = Math.max(1, Math.ceil(kitchenSlides.length / KITCHEN_VISIBLE));
  const maxIndex = pageCount - 1;
  const clampedIndex = Math.min(Math.max(currentKitchenIndex, 0), maxIndex);
  currentKitchenIndex = clampedIndex;

  const slides = kitchenTrack.querySelectorAll('.kitchen-slide');
  if (!slides.length) return;

  const firstIndex = Math.min(
    currentKitchenIndex * KITCHEN_VISIBLE,
    Math.max(0, slides.length - KITCHEN_VISIBLE)
  );
  const targetSlide = slides[firstIndex];
  const offsetLeft = targetSlide.offsetLeft;
  kitchenTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentKitchenIndex);
  });
};

const handleKitchenCarousel = () => {
  if (!kitchenTrack || !kitchenDots) return;

  renderKitchenCarousel();
  updateKitchenActiveState();
  const pageCount = Math.max(1, Math.ceil(kitchenSlides.length / KITCHEN_VISIBLE));
  const maxIndex = pageCount - 1;

  const goNext = () => {
    currentKitchenIndex = currentKitchenIndex >= maxIndex ? 0 : currentKitchenIndex + 1;
    updateKitchenActiveState();
  };

  const goPrev = () => {
    currentKitchenIndex = currentKitchenIndex <= 0 ? maxIndex : currentKitchenIndex - 1;
    updateKitchenActiveState();
  };

  kitchenPrev?.addEventListener('click', () => {
    goPrev();
    if (kitchenAutoTimer) {
      clearInterval(kitchenAutoTimer);
      kitchenAutoTimer = setInterval(goNext, 6000);
    }
  });

  kitchenNext?.addEventListener('click', () => {
    goNext();
    if (kitchenAutoTimer) {
      clearInterval(kitchenAutoTimer);
      kitchenAutoTimer = setInterval(goNext, 6000);
    }
  });

  kitchenDots.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const indexAttr = target.getAttribute('data-kitchen-dot');
    if (indexAttr == null) return;
    const index = Number(indexAttr);
    if (Number.isNaN(index)) return;
    currentKitchenIndex = index;
    updateKitchenActiveState();
  });

  kitchenTrack.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('[data-kitchen-quote]')) {
      if (leadPopup) {
        leadPopup.classList.add('is-open');
        leadPopup.setAttribute('aria-hidden', 'false');
      }
    }
  });

  kitchenAutoTimer = setInterval(goNext, 6000);
};

const renderLivingCarousel = () => {
  if (!livingTrack || !livingDots) return;

  livingTrack.innerHTML = livingSlides
    .map(
      slide => `
        <article class="living-slide">
          <div class="living-image">
            <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
          </div>
          <div class="living-copy">
            <p class="eyebrow">Living Room Design</p>
            <h3>${slide.title}</h3>
            <p>${slide.subtitle}</p>
            <div class="living-actions">
              <a class="cta ghost" href="tel:+919831435314">Talk to designer</a>
              <button class="cta primary" type="button" data-living-quote>Get quote</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const pageCount = Math.max(1, Math.ceil(livingSlides.length / LIVING_VISIBLE));
  const dotCount = pageCount;

  livingDots.innerHTML = Array.from({ length: dotCount })
    .map(
      (_val, index) => `
        <button class="living-dot ${index === 0 ? 'active' : ''}" type="button" data-living-dot="${index}"></button>
      `
    )
    .join('');
};

const updateLivingActiveState = () => {
  if (!livingTrack || !livingDots) return;

  const dots = livingDots.querySelectorAll('.living-dot');
  const pageCount = Math.max(1, Math.ceil(livingSlides.length / LIVING_VISIBLE));
  const maxIndex = pageCount - 1;
  const clampedIndex = Math.min(Math.max(currentLivingIndex, 0), maxIndex);
  currentLivingIndex = clampedIndex;

  const slides = livingTrack.querySelectorAll('.living-slide');
  if (!slides.length) return;

  const firstIndex = Math.min(
    currentLivingIndex * LIVING_VISIBLE,
    Math.max(0, slides.length - LIVING_VISIBLE)
  );
  const targetSlide = slides[firstIndex];
  const offsetLeft = targetSlide.offsetLeft;
  livingTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentLivingIndex);
  });
};

const handleLivingCarousel = () => {
  if (!livingTrack || !livingDots) return;

  renderLivingCarousel();
  updateLivingActiveState();
  const pageCount = Math.max(1, Math.ceil(livingSlides.length / LIVING_VISIBLE));
  const maxIndex = pageCount - 1;

  const goNext = () => {
    currentLivingIndex = currentLivingIndex >= maxIndex ? 0 : currentLivingIndex + 1;
    updateLivingActiveState();
  };

  const goPrev = () => {
    currentLivingIndex = currentLivingIndex <= 0 ? maxIndex : currentLivingIndex - 1;
    updateLivingActiveState();
  };

  livingPrev?.addEventListener('click', () => {
    goPrev();
    if (livingAutoTimer) {
      clearInterval(livingAutoTimer);
      livingAutoTimer = setInterval(goNext, 6000);
    }
  });

  livingNext?.addEventListener('click', () => {
    goNext();
    if (livingAutoTimer) {
      clearInterval(livingAutoTimer);
      livingAutoTimer = setInterval(goNext, 6000);
    }
  });

  livingDots.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const indexAttr = target.getAttribute('data-living-dot');
    if (indexAttr == null) return;
    const index = Number(indexAttr);
    if (Number.isNaN(index)) return;
    currentLivingIndex = index;
    updateLivingActiveState();
  });

  livingTrack.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('[data-living-quote]')) {
      if (leadPopup) {
        leadPopup.classList.add('is-open');
        leadPopup.setAttribute('aria-hidden', 'false');
      }
    }
  });

  livingAutoTimer = setInterval(goNext, 6000);
};

const renderBedroomCarousel = () => {
  if (!bedroomTrack || !bedroomDots) return;

  bedroomTrack.innerHTML = bedroomSlides
    .map(
      slide => `
        <article class="bedroom-slide">
          <div class="bedroom-image">
            <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
          </div>
          <div class="bedroom-copy">
            <p class="eyebrow">Bedroom Design</p>
            <h3>${slide.title}</h3>
            <p>${slide.subtitle}</p>
            <div class="bedroom-actions">
              <a class="cta ghost" href="tel:+919831435314">Talk to designer</a>
              <button class="cta primary" type="button" data-bedroom-quote>Get quote</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const pageCount = Math.max(1, Math.ceil(bedroomSlides.length / BEDROOM_VISIBLE));
  const dotCount = pageCount;

  bedroomDots.innerHTML = Array.from({ length: dotCount })
    .map(
      (_val, index) => `
        <button class="bedroom-dot ${index === 0 ? 'active' : ''}" type="button" data-bedroom-dot="${index}"></button>
      `
    )
    .join('');
};

const updateBedroomActiveState = () => {
  if (!bedroomTrack || !bedroomDots) return;

  const dots = bedroomDots.querySelectorAll('.bedroom-dot');
  const pageCount = Math.max(1, Math.ceil(bedroomSlides.length / BEDROOM_VISIBLE));
  const maxIndex = pageCount - 1;
  const clampedIndex = Math.min(Math.max(currentBedroomIndex, 0), maxIndex);
  currentBedroomIndex = clampedIndex;

  const slides = bedroomTrack.querySelectorAll('.bedroom-slide');
  if (!slides.length) return;

  const firstIndex = Math.min(
    currentBedroomIndex * BEDROOM_VISIBLE,
    Math.max(0, slides.length - BEDROOM_VISIBLE)
  );
  const targetSlide = slides[firstIndex];
  const offsetLeft = targetSlide.offsetLeft;
  bedroomTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentBedroomIndex);
  });
};

const handleBedroomCarousel = () => {
  if (!bedroomTrack || !bedroomDots) return;

  renderBedroomCarousel();
  updateBedroomActiveState();
  const pageCount = Math.max(1, Math.ceil(bedroomSlides.length / BEDROOM_VISIBLE));
  const maxIndex = pageCount - 1;

  const goNext = () => {
    currentBedroomIndex = currentBedroomIndex >= maxIndex ? 0 : currentBedroomIndex + 1;
    updateBedroomActiveState();
  };

  const goPrev = () => {
    currentBedroomIndex = currentBedroomIndex <= 0 ? maxIndex : currentBedroomIndex - 1;
    updateBedroomActiveState();
  };

  bedroomPrev?.addEventListener('click', () => {
    goPrev();
    if (bedroomAutoTimer) {
      clearInterval(bedroomAutoTimer);
      bedroomAutoTimer = setInterval(goNext, 6000);
    }
  });

  bedroomNext?.addEventListener('click', () => {
    goNext();
    if (bedroomAutoTimer) {
      clearInterval(bedroomAutoTimer);
      bedroomAutoTimer = setInterval(goNext, 6000);
    }
  });

  bedroomDots.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const indexAttr = target.getAttribute('data-bedroom-dot');
    if (indexAttr == null) return;
    const index = Number(indexAttr);
    if (Number.isNaN(index)) return;
    currentBedroomIndex = index;
    updateBedroomActiveState();
  });

  bedroomTrack.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('[data-bedroom-quote]')) {
      if (leadPopup) {
        leadPopup.classList.add('is-open');
        leadPopup.setAttribute('aria-hidden', 'false');
      }
    }
  });

  bedroomAutoTimer = setInterval(goNext, 6000);
};

const renderWardrobeCarousel = () => {
  if (!wardrobeTrack || !wardrobeDots) return;

  wardrobeTrack.innerHTML = wardrobeSlides
    .map(
      slide => `
        <article class="wardrobe-slide">
          <div class="wardrobe-image">
            <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
          </div>
          <div class="wardrobe-copy">
            <p class="eyebrow">Wardrobe Design</p>
            <h3>${slide.title}</h3>
            <p>${slide.subtitle}</p>
            <div class="wardrobe-actions">
              <a class="cta ghost" href="tel:+919831435314">Talk to designer</a>
              <button class="cta primary" type="button" data-wardrobe-quote>Get quote</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const pageCount = Math.max(1, Math.ceil(wardrobeSlides.length / WARDROBE_VISIBLE));
  const dotCount = pageCount;

  wardrobeDots.innerHTML = Array.from({ length: dotCount })
    .map(
      (_val, index) => `
        <button class="wardrobe-dot ${index === 0 ? 'active' : ''}" type="button" data-wardrobe-dot="${index}"></button>
      `
    )
    .join('');
};

const updateWardrobeActiveState = () => {
  if (!wardrobeTrack || !wardrobeDots) return;

  const dots = wardrobeDots.querySelectorAll('.wardrobe-dot');
  const pageCount = Math.max(1, Math.ceil(wardrobeSlides.length / WARDROBE_VISIBLE));
  const maxIndex = pageCount - 1;
  const clampedIndex = Math.min(Math.max(currentWardrobeIndex, 0), maxIndex);
  currentWardrobeIndex = clampedIndex;

  const slides = wardrobeTrack.querySelectorAll('.wardrobe-slide');
  if (!slides.length) return;

  const firstIndex = Math.min(
    currentWardrobeIndex * WARDROBE_VISIBLE,
    Math.max(0, slides.length - WARDROBE_VISIBLE)
  );
  const targetSlide = slides[firstIndex];
  const offsetLeft = targetSlide.offsetLeft;
  wardrobeTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentWardrobeIndex);
  });
};

const handleWardrobeCarousel = () => {
  if (!wardrobeTrack || !wardrobeDots) return;

  renderWardrobeCarousel();
  updateWardrobeActiveState();
  const pageCount = Math.max(1, Math.ceil(wardrobeSlides.length / WARDROBE_VISIBLE));
  const maxIndex = pageCount - 1;

  const goNext = () => {
    currentWardrobeIndex = currentWardrobeIndex >= maxIndex ? 0 : currentWardrobeIndex + 1;
    updateWardrobeActiveState();
  };

  const goPrev = () => {
    currentWardrobeIndex = currentWardrobeIndex <= 0 ? maxIndex : currentWardrobeIndex - 1;
    updateWardrobeActiveState();
  };

  wardrobePrev?.addEventListener('click', () => {
    goPrev();
    if (wardrobeAutoTimer) {
      clearInterval(wardrobeAutoTimer);
      wardrobeAutoTimer = setInterval(goNext, 6000);
    }
  });

  wardrobeNext?.addEventListener('click', () => {
    goNext();
    if (wardrobeAutoTimer) {
      clearInterval(wardrobeAutoTimer);
      wardrobeAutoTimer = setInterval(goNext, 6000);
    }
  });

  wardrobeDots.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const indexAttr = target.getAttribute('data-wardrobe-dot');
    if (indexAttr == null) return;
    const index = Number(indexAttr);
    if (Number.isNaN(index)) return;
    currentWardrobeIndex = index;
    updateWardrobeActiveState();
  });

  wardrobeTrack.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('[data-wardrobe-quote]')) {
      if (leadPopup) {
        leadPopup.classList.add('is-open');
        leadPopup.setAttribute('aria-hidden', 'false');
      }
    }
  });

  wardrobeAutoTimer = setInterval(goNext, 6000);
};

const initHeroSliders = () => {
  if (!heroSliders.length) return;

  heroSliders.forEach(slider => {
    const slides = slider.querySelectorAll('[data-hero-slide]');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === 0);
    });

    setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.remove('is-active');
      slides[nextIndex].classList.add('is-active');
      currentIndex = nextIndex;
    }, 5500);
  });
};

const handleNavToggle = () => {
  if (!nav || !navToggle) return;

  const setNavOpen = isOpen => {
    nav.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    setNavOpen(!isOpen);
  });

  drawerClose?.addEventListener('click', () => {
    setNavOpen(false);
  });

  nav.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName === 'A') {
      setNavOpen(false);
    }
  });
};

// Make the hero "Get Free Estimate" button open the lead popup
if (navCta && leadPopup) {
  navCta.addEventListener('click', () => {
    leadPopup.classList.add('is-open');
    leadPopup.setAttribute('aria-hidden', 'false');
  });
}

renderGallery();
setYear();
handleFormSubmit();
enhanceServiceCards();
handleStyleTabs();
handleFaq();
handleKitchenCarousel();
handleLivingCarousel();
handleBedroomCarousel();
handleWardrobeCarousel();
handleNavToggle();
initHeroTypedWord();
handleHappyCarousel();
initHeroSliders();
initLeadPopup();

