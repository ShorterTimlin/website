// Hero Header Scroll Behavior
// Adds/removes 'scrolled' class for smooth header shrinking

(function() {
  'use strict';

  // Configuration
  const SCROLL_DISTANCE = 180; // Pixels over which the header fully compacts
  const SCROLLED_CLASS_THRESHOLD = 12;
  let ticking = false;

  // Get elements
  const header = document.querySelector('.header');
  const body = document.body;
  const root = document.documentElement;

  if (!header) return;

  // Handle scroll with requestAnimationFrame for smooth performance
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = Math.max(0, Math.min(scrollTop / SCROLL_DISTANCE, 1));

    root.style.setProperty('--header-progress', progress.toFixed(4));

    if (scrollTop > SCROLLED_CLASS_THRESHOLD) {
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
