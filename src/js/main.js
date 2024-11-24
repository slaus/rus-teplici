/** Мобильное меню бургер */
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    }
  });
}
// burgerMenu();


/** Megamenu */
const menu = document.querySelector("#menu");
const megamenu = document.querySelector("#megamenu");

menu.querySelector(".menu__link").addEventListener("click", (e) => {
  e.preventDefault();
  megamenu.classList.toggle("open");
  menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const isClickInsideMegamenu = megamenu.contains(e.target);
  const isClickOnMenu = menu.contains(e.target);

  if (!isClickInsideMegamenu && !isClickOnMenu) {
    megamenu.classList.remove("open");
    menu.classList.remove("open");
  }
});


/** Bestseller block */
const lengthBlock = document.querySelectorAll(".best__params--length-block");
lengthBlock.forEach((item) => {
  const spans = item.querySelectorAll("span");
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      spans.forEach(all => all.classList.remove("active"));
      span.classList.add("active");
    });
  });
});


/** Модальное окно */
function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.visibility = 'hidden';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function bindModal(trigger, modal, close) {
  trigger = document.querySelectorAll(trigger);
  modal = document.querySelector(modal);
  close = document.querySelector(close);

  const body = document.body;

  const applyPaddingForScrollbar = () => {
    const scrollbarWidth = getScrollbarWidth();
    body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const removePaddingForScrollbar = () => {
    body.style.paddingRight = '';
  };

  trigger.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      body.classList.add('locked');
      applyPaddingForScrollbar();
    });
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('locked');
    removePaddingForScrollbar();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
      removePaddingForScrollbar();
    }
  });
}

bindModal('.callback', '#callback-modal', '#callback-close');
bindModal('.choose-city', '#city-modal', '#city-close');


/** Swiper slider */
const swiperSlider = new Swiper('.swiper-slider', {
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  grabCursor: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

const swiperCert = new Swiper('.swiper-cert', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  mousewheel: false,
  grabCursor: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
});

const swiperEquipment = new Swiper('.swiper-equipment', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  mousewheel: false,
  grabCursor: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
});

const swiperTerms = new Swiper('.swiper-terms', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  mousewheel: false,
  grabCursor: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  }
});

/** Mobile swiper */
function initSwipers(swiperSelectors) {
  const isMobile = window.innerWidth <= 992;

  swiperSelectors.forEach((selector) => {
    const swiperEl = document.querySelector(selector);

    if (!swiperEl) return;

    if (isMobile) {
      if (!swiperEl.classList.contains('swiper-initialized')) {
        swiperEl.classList.add('swiper');
        const swiper = new Swiper(selector, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          mousewheel: false,
          grabCursor: true,
          autoplay: {
            delay: 15000,
            disableOnInteraction: false,
          },
          pagination: {
            el: `${selector} .swiper-pagination`,
          },
          navigation: {
            nextEl: `${selector} .swiper-button-next`,
            prevEl: `${selector} .swiper-button-prev`,
          },
          keyboard: {
            enabled: true,
          },
          scrollbar: {
            el: `${selector} .swiper-scrollbar`,
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            577: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });

        swiperEl.swiperInstance = swiper;
      }
    } else {
      if (swiperEl.classList.contains('swiper-initialized')) {
        swiperEl.swiperInstance.destroy(true, true);
        swiperEl.classList.remove('swiper');
        delete swiperEl.swiperInstance;
      }
    }
  });
}

const swiperClasses = ['.swiper-best', '.swiper-green', '.swiper-other', '.swiper-articles', '.swiper-testimonials'];

window.addEventListener('load', () => initSwipers(swiperClasses));
window.addEventListener('resize', () => initSwipers(swiperClasses));
