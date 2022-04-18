// click on burger-menu
let burger = document.querySelector('.btn-burger'),
    spanBurger = document.querySelector('.span-burger'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body')
    

burger.addEventListener('click', () => {
    nav.classList.toggle('turn-left')
    spanBurger.classList.toggle('btn-burger-close')
    body.classList.toggle('hidden')
    let ariaLabelBurger = burger.getAttribute('aria-label')
    if(ariaLabelBurger == 'Разгарнуць меню') {
        burger.setAttribute('aria-label', 'Згарнуць меню')
    }
    else {
        burger.setAttribute('aria-label', 'Разгарнуць меню')
    }
})

// click on a tab in a block of services
let tabs = document.querySelectorAll('.tabs-nav__btn')

tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        let activeTabBtn = document.querySelector('.tabs-nav__btn_active')
            activeTabDescription = document.querySelector('.tab-description-active'),
            activeTarget = activeTabDescription.getAttribute('data-target'),
            newActivePath = this.getAttribute('data-path')
        if(!this.classList.contains('.tabs-nav__btn_active')) {
            activeTabBtn.classList.remove('tabs-nav__btn_active')
            this.classList.add('tabs-nav__btn_active')
        }
        if(activeTabDescription && activeTarget != newActivePath) {
            activeTabDescription.classList.remove('tab-description-active')
            document.querySelector(`[data-target = ${newActivePath}]`).classList.add('tab-description-active')
        }
    })
})

// add scrool for tab
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        let activeTabDescription = document.querySelector('.tab-description-active')
        if(activeTabDescription) {
            location.href = '#tab'
        }
    })
})

// click on a arrow in tabs
let arrowPrev = document.querySelector('.tab-prev'),
    arrowNext = document.querySelector('.tab-next')

arrowPrev.addEventListener('click', () => {
    activeTab = document.querySelector('.tab-description-active')
    prevTab = activeTab.previousElementSibling
    let activeBtnTab = document.querySelector('.tabs-nav__btn_active'),
        prevActiveTab = activeBtnTab.previousElementSibling

    if(prevTab && prevTab.classList.contains('tab-description')) {
        activeTab.classList.remove('tab-description-active')
        prevTab.classList.add('tab-description-active')
    }
    console.log(prevActiveTab)
    if(prevActiveTab && prevActiveTab.classList.contains('tabs-nav__btn')) {
        activeBtnTab.classList.remove('tabs-nav__btn_active')
        prevActiveTab.classList.add('tabs-nav__btn_active')
    }
})

arrowNext.addEventListener('click', () => {
    activeTab = document.querySelector('.tab-description-active')
    nextTab = activeTab.nextElementSibling
    let activeBtnTab = document.querySelector('.tabs-nav__btn_active'),
        nextActiveTab = activeBtnTab.nextElementSibling

    if(nextTab && nextTab.classList.contains('tab-description')) {
        activeTab.classList.remove('tab-description-active')
        nextTab.classList.add('tab-description-active')
    }
    if(nextActiveTab && nextActiveTab.classList.contains('tabs-nav__btn')) {
        activeBtnTab.classList.remove('tabs-nav__btn_active')
        nextActiveTab.classList.add('tabs-nav__btn_active')
    }
})

// hero swiper
const heroGallery = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 700,
    rewind: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'hero-bullet swiper-pagination-bullet',
      bulletActiveClass: 'hero-bullet_active swiper-pagination-bullet-active'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
      
    },
  
  });
  
  let galleryNavPrev = document.querySelector(".hero-button-prev"),
      galleryNavNext = document.querySelector(".hero-button-next")
  galleryNavPrev.setAttribute('aria-label', 'Пролистать слайдер назад')
  galleryNavNext.setAttribute('aria-label', 'Пролистать слайдер вперед')


  // partners swiper
const partnersGallery = new Swiper('.partners__swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 65,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 700,
    rewind: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.partners-button-next',
      prevEl: '.partners-button-prev',
    },

    breakpoints: {
        // when window width is >= 640px
        300: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        769: {
            spaceBetween: 65,
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
      }
  
  });
  
  let partnersNavPrev = document.querySelector(".partners-button-prev"),
      partnersNavNext = document.querySelector(".partners-button-next")
  partnersNavPrev.setAttribute('aria-label', 'Пролистать слайдер назад')
  partnersNavNext.setAttribute('aria-label', 'Пролистать слайдер вперед')
