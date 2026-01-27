// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========== LIGHTBOX FUNCTIONALITY ==========
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightboxImg');
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}

// Close lightbox when clicking outside image
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

// ========== TESTIMONIALS SLIDER ==========
let currentSlideIndex = 1;

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
  updateDots();
}

function currentSlide(n) {
  showSlide(currentSlideIndex = n);
  updateDots();
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n > slides.length) {
    currentSlideIndex = 1;
  } else if (n < 1) {
    currentSlideIndex = slides.length;
  }
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex - 1) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Initialize slider
showSlide(currentSlideIndex);
updateDots();

// Auto-advance slider every 6 seconds
setInterval(() => {
  changeSlide(1);
}, 6000);

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const animatedItems = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
);

animatedItems.forEach(item => observer.observe(item));
