/**
* Template Name: Stratify (Adapted for IsenDev)
* Author: IsenDev Development Team
* License: Commercial / Proprietary
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle & state handling
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    const body = document.querySelector('body');
    if (!body || !mobileNavToggleBtn) return;
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x-lg');
  }

  function closeMobileNav() {
    const body = document.body;
    if (body) {
      body.classList.remove('mobile-nav-active');
      body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.add('bi-list');
        mobileNavToggleBtn.classList.remove('bi-x-lg');
        mobileNavToggleBtn.classList.remove('bi-x');
      }
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  /**
   * Close mobile nav on ANY link click (except dropdown parent toggle)
   */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', function(e) {
      const isToggle = this.classList.contains('toggle-dropdown');
      const isDropdownParent = this.parentElement &&
        this.parentElement.classList.contains('dropdown') &&
        this.parentElement.querySelector(':scope > ul') !== null;

      if (isToggle || isDropdownParent) {
        return;
      }

      if (document.body.classList.contains('mobile-nav-active')) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href.startsWith('#')) {
          closeMobileNav();
          return;
        }

        e.preventDefault();
        const targetUrl = this.href;
        closeMobileNav();
        window.location.assign(targetUrl);
      }
    });
  });

  /**
   * Close mobile nav when clicking backdrop outside menu list
   */
  const navmenuEl = document.querySelector('#navmenu');
  if (navmenuEl) {
    navmenuEl.addEventListener('click', (e) => {
      if (document.body.classList.contains('mobile-nav-active') && e.target === navmenuEl) {
        closeMobileNav();
      }
    });
  }

  /**
   * Close mobile nav with Escape key
   */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('mobile-nav-active')) {
      closeMobileNav();
    }
  });

  /**
   * Automatically close mobile nav when resizing to desktop viewport
   */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200 && document.body.classList.contains('mobile-nav-active')) {
      closeMobileNav();
    }
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(e) {
      if (document.body.classList.contains('mobile-nav-active') || window.innerWidth < 1200) {
        e.preventDefault();
        const parentLi = this.closest('.dropdown');
        if (parentLi) {
          parentLi.classList.toggle('active');
          const submenu = parentLi.querySelector('ul');
          if (submenu) {
            submenu.classList.toggle('dropdown-active');
          }
        }
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader (Instant removal)
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.remove();
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop, { passive: true });
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Init isotope layout and filters
   */
  if (typeof Isotope !== 'undefined') {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let container = isotopeItem.querySelector('.isotope-container');
      if (!container) return;

      let initIsotope;
      if (typeof imagesLoaded !== 'undefined') {
        imagesLoaded(container, function() {
          initIsotope = new Isotope(container, {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });
      } else {
        initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      }

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
          if (activeFilter) activeFilter.classList.remove('filter-active');
          this.classList.add('filter-active');
          if (initIsotope) {
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          }
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const configElem = swiperElement.querySelector(".swiper-config");
      if (!configElem) return;
      try {
        let config = JSON.parse(configElem.innerHTML.trim());
        new Swiper(swiperElement, config);
      } catch (err) {
        console.error("Swiper config error:", err);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function() {
    if (window.location.hash) {
      let section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || 0),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * WhatsApp Widget toggle
   */
  const waWidget = document.getElementById('waWidget');
  const waFab = document.getElementById('waFab');
  const waPopupClose = document.getElementById('waPopupClose');

  if (waFab && waWidget) {
    waFab.addEventListener('click', function() {
      waWidget.classList.toggle('open');
    });
  }

  if (waPopupClose && waWidget) {
    waPopupClose.addEventListener('click', function() {
      waWidget.classList.remove('open');
    });
  }

  document.addEventListener('click', function(e) {
    if (waWidget && waWidget.classList.contains('open') && !waWidget.contains(e.target)) {
      waWidget.classList.remove('open');
    }
  });

})();