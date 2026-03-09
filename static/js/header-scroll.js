// Hero Header Scroll Behavior
// Adds/removes 'scrolled' class for smooth header shrinking

(function() {
  'use strict';

  // Configuration
  const SCROLL_THRESHOLD = 50; // Pixels scrolled before header shrinks
  let ticking = false;

  // Get elements
  const header = document.querySelector('.header');
  const body = document.body;

  if (!header) return;

  // Handle scroll with requestAnimationFrame for smooth performance
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
      body.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      body.classList.remove('scrolled');
    }

    ticking = false;
  }

  // Throttle scroll events using requestAnimationFrame
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }

  // Add scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Check initial state (in case page loads scrolled)
  handleScroll();

  // Recalculate on window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleScroll, 100);
  }, { passive: true });

})();
