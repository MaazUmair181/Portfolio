// ==========================================================
// Header shadow on scroll
// ==========================================================
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==========================================================
// Mobile menu toggle
// ==========================================================
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', function () {
  nav.classList.toggle('open');
});

// close mobile menu when a link is clicked
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});

// ==========================================================
// Reveal elements on scroll
// ==========================================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) {
    io.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add('in');
  });
}

// ==========================================================
// Contact form (front-end only demo)
// ==========================================================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  status.textContent = 'Thanks! Your message has been queued — connect this form to a backend or a service like Formspree to actually send it.';
  form.reset();
});