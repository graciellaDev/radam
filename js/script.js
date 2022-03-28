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
        let activeTabDescription = document.querySelector('.tab-description-active'),
            activeTarget = activeTabDescription.getAttribute('data-target'),
            newActivePath = this.getAttribute('data-path')
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
    if(prevTab && prevTab.classList.contains('tab-description')) {
        activeTab.classList.remove('tab-description-active')
        prevTab.classList.add('tab-description-active')
    }
})

arrowNext.addEventListener('click', () => {
    activeTab = document.querySelector('.tab-description-active')
    nextTab = activeTab.nextElementSibling
    if(nextTab && nextTab.classList.contains('tab-description')) {
        activeTab.classList.remove('tab-description-active')
        nextTab.classList.add('tab-description-active')
    }
})
