const openMobileNavBtn = document.querySelector('.mobile-nav__btn')
const closeMobileNavBtn = document.querySelector('.mobile-nav__close-btn')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body

openMobileNavBtn.addEventListener('click', () => {
    mobileNav.parentElement.style.zIndex = 1000
    mobileNav.style.right = 0
    body.classList.add('noscroll')
})

closeMobileNavBtn.addEventListener('click', () => {
    mobileNav.style.right = "-100%"
    mobileNav.parentElement.style.zIndex = -1;
    body.classList.remove('noscroll')
})
