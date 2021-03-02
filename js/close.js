const closed = document.getElementById('close')
const overlay = document.getElementById('overlay')
const burger = document.getElementById('burger')
const body = document.body
let links = document.querySelectorAll('.overlay-menu__link')

burger.addEventListener('click', () => {
  overlay.classList.add('overlay--active')
  body.classList.add('body--active-menu');
})

closed.addEventListener('click', () => {
  overlay.classList.remove('overlay--active')
  body.classList.remove('body--active-menu');
})

links.forEach((element) => {
  element.addEventListener('click', toggleMenu)
})

function toggleMenu() {
  body.classList.toggle('body--active-menu');
  overlay.classList.remove('overlay--active')
}