// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds: true,
  normalizeSlideIndex: false,
  grabCursor: true,
  loop: true,
  loopPreventsSliding: false,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 125,
    depth: 500,
    slideShadows: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
