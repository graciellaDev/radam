let burger = document.querySelector('.btn-burger'),
    spanBurger = document.querySelector('.span-burger')
    nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
    nav.classList.toggle('turn-left')
    spanBurger.classList.toggle('btn-burger-close')
})