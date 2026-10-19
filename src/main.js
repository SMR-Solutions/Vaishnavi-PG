import './style.css';

// ============================================================================
// PG REAL IMAGES SLIDESHOW LIST (Sequence: Building -> Entrance -> Beds -> ...)
// ============================================================================
const heroSlides = [
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Building.webp',
    title: 'Brand New Building (Near BGS Global)',
    badge: 'Brand New Building',
    alt: 'Vaishnavi Luxury Ladies PG Brand New Building Near BGS Global Medical & Nursing College'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Entrance.webp',
    title: 'Main Entrance & 24/7 Security',
    badge: 'Main Entrance',
    alt: 'Vaishnavi Luxury Ladies PG Main Entrance and Security Gate'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Beds.webp',
    title: 'Brand New Beds & Orthopedic Mattresses',
    badge: 'New Beds & Linen',
    alt: 'Brand New Beds and Mattresses at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Beds1.webp',
    title: 'Spacious & Comfortable Bed Setup',
    badge: 'Cozy Room Setup',
    alt: 'Spacious Bed Setup for Students and Working Women'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Beds2.webp',
    title: 'Fresh, Airy & Clean Rooms',
    badge: 'Clean & Well-Ventilated',
    alt: 'Fresh and Clean Room Setup at Vaishnavi PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_single_sharing.webp',
    title: 'Single Sharing Private Room',
    badge: 'Single Private Room',
    alt: 'Single Sharing Private Room at Vaishnavi Luxury Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_2_sharing.webp',
    title: '2-Sharing Luxury Room',
    badge: '2-Sharing Luxury',
    alt: '2-Sharing Twin Room at Vaishnavi Luxury Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_3_sharing.webp',
    title: '3-Sharing Cozy Room',
    badge: '3-Sharing Room',
    alt: '3-Sharing Economy Room at Vaishnavi Luxury Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_cupboard.webp',
    title: 'Personal Wooden Cupboard with Lock',
    badge: 'Private Storage',
    alt: 'Personal Cupboard Storage at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_cupboards.webp',
    title: 'Spacious Built-In Wardrobes',
    badge: 'Wardrobes with Lockers',
    alt: 'Spacious Wardrobes at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Bathroom.webp',
    title: 'Hygienic Modern Attached Bathroom',
    badge: 'Clean Attached Bath',
    alt: 'Modern Bathroom at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Bathrooms.webp',
    title: 'Tiled Bathrooms with 24/7 Geysers',
    badge: 'Hot Water Geyser',
    alt: 'Attached Tiled Bathrooms at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Dining.webp',
    title: 'Spacious & Clean Dining Hall',
    badge: 'Homely Dining Hall',
    alt: 'Homely Dining Hall at Vaishnavi Luxury Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Kitchen.webp',
    title: 'Hygienic Food Preparation Kitchen',
    badge: 'Hygienic Kitchen',
    alt: 'Clean Kitchen at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Lift.webp',
    title: 'Automatic Passenger Lift on All Floors',
    badge: 'Automatic Lift',
    alt: 'Passenger Lift at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_washing_Machine.webp',
    title: 'Fully Automatic Washing Machines',
    badge: 'Laundry Facility',
    alt: 'Automatic Washing Machines at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_Wifi_setup.webp',
    title: '100 Mbps High-Speed Wi-Fi Setup',
    badge: '100 Mbps Wi-Fi',
    alt: '100 Mbps Fiber Wi-Fi Setup at Vaishnavi Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_windows_in_rooms.webp',
    title: 'Bright Windows & Natural Ventilation',
    badge: 'Natural Sunlight & Air',
    alt: 'Bright Windows and Ventilation in Rooms'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_terrace.webp',
    title: 'Open Terrace Relaxing Zone',
    badge: 'Terrace Chill Zone',
    alt: 'Open Terrace at Vaishnavi Luxury Ladies PG'
  },
  {
    src: '/images/PG-Images/vaishnavi_luxury_ladies_PG_water_tanks.webp',
    title: '24/7 Continuous Water Supply & Backup',
    badge: '24/7 Water Supply',
    alt: '24/7 Water Supply Tanks at Vaishnavi Ladies PG'
  }
];

// ============================================================================
// INITIALIZE APPLICATION LOGIC
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initRoomFilters();
  initFaqAccordion();
  initMobileNav();
});

// ----------------------------------------------------------------------------
// 1. Hero Auto-Swiping Image Slider (Every 1 Second)
// ----------------------------------------------------------------------------
function initHeroSlider() {
  const sliderImg = document.getElementById('hero-main-image');
  const sliderBackdrop = document.getElementById('slider-backdrop');
  const captionTitleEl = document.getElementById('slider-caption-title');
  const counterEl = document.getElementById('current-slide-num');
  const sliderWrapper = document.getElementById('hero-slider-wrapper');
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');

  if (!sliderImg || heroSlides.length === 0) return;

  // Preload all 20 images in memory so transitions are buttery smooth
  heroSlides.forEach(slide => {
    const img = new Image();
    img.src = slide.src;
  });

  let currentIndex = 0;
  let intervalId = null;
  let isPlaying = true;

  function showSlide(index) {
    currentIndex = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentIndex];

    // Quick smooth crossfade
    sliderImg.style.opacity = '0.7';

    setTimeout(() => {
      sliderImg.src = slide.src;
      sliderImg.alt = slide.alt;
      sliderImg.style.opacity = '1';

      if (sliderBackdrop) {
        sliderBackdrop.style.backgroundImage = `url('${slide.src}')`;
      }

      if (captionTitleEl) {
        captionTitleEl.textContent = slide.title;
      }

      if (counterEl) {
        counterEl.textContent = (currentIndex + 1).toString();
      }
    }, 70);
  }

  function startAutoSwipe() {
    stopAutoSwipe();
    isPlaying = true;
    intervalId = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 1000); // Swipes every 1 second
  }

  function stopAutoSwipe() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function pauseAutoSwipe() {
    stopAutoSwipe();
    isPlaying = false;
  }

  // Prev / Next Navigation Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex - 1);
      pauseAutoSwipe();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex + 1);
      pauseAutoSwipe();
    });
  }

  // Tap on image to pause/resume auto-swipe so user can stop on any image to view
  if (sliderWrapper) {
    sliderWrapper.addEventListener('click', (e) => {
      if (e.target.closest('.slider-arrow')) return;
      if (isPlaying) {
        pauseAutoSwipe();
      } else {
        startAutoSwipe();
        showSlide(currentIndex + 1);
      }
    });
  }

  // Mobile Touch Gestures (Swipe Left for Next, Swipe Right for Prev)
  if (sliderWrapper) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isSwiping = false;

    sliderWrapper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchEndX = touchStartX;
        touchEndY = touchStartY;
        isSwiping = true;
      }
    }, { passive: true });

    sliderWrapper.addEventListener('touchmove', (e) => {
      if (!isSwiping || e.touches.length !== 1) return;
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
    }, { passive: true });

    sliderWrapper.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      isSwiping = false;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Ensure horizontal swipe is dominant and exceeds minimum threshold of 35px
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          // Swipe Left -> Next Image
          showSlide(currentIndex + 1);
        } else {
          // Swipe Right -> Previous Image
          showSlide(currentIndex - 1);
        }
        // Pause auto-swipe on user swipe so they can view the selected photo
        pauseAutoSwipe();
      }
    });
  }

  // Start auto-swipe on page load
  startAutoSwipe();
}

// ----------------------------------------------------------------------------
// 2. Room Filtering Logic (Single, 2-Sharing, 3-Sharing, All)
// ----------------------------------------------------------------------------
function initRoomFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const roomCards = document.querySelectorAll('.room-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      roomCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ----------------------------------------------------------------------------
// 3. FAQ Accordion Toggle
// ----------------------------------------------------------------------------
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open items
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 4. Mobile Navigation Drawer
// ----------------------------------------------------------------------------
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

