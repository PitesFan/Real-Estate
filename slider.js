const sliderWrapper = document.querySelector('.slider-wrapper')
const slides = document.querySelectorAll('.home-slide')
const leftArrow = document.querySelector('.arrows-container a:first-child')
const rightArrow = document.querySelector('.arrows-container a:last-child')

let currentIndex = 0

function updateSlider() {
 const slideWidth = slides[0].offsetWidth
 sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`
}

leftArrow.addEventListener('click', () => {
 currentIndex = (currentIndex - 1 + slides.length) % slides.length
 updateSlider()
})

rightArrow.addEventListener('click', () => {
 currentIndex = (currentIndex + 1) % slides.length
 updateSlider()
})

window.addEventListener('resize', updateSlider)
