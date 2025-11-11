const LIGHT_BG = '#f9fafb'
const DARK_BG = '#486581'

const body = document.getElementsByTagName('body')[0]
const themeButton = document.getElementById('theme-button')

body.style.background = LIGHT_BG
body.setAttribute('data-theme', 'light')

themeButton.addEventListener('click', function () {
 const currentTheme = body.getAttribute('data-theme')

 if (currentTheme === 'light') {
  body.style.background = DARK_BG

  body.setAttribute('data-theme', 'dark')
  themeButton.innerText = '☀️'
 } else {
  body.style.background = LIGHT_BG

  body.setAttribute('data-theme', 'light')
  themeButton.innerText = '🌑'
 }
})
