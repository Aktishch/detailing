// Libraries
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import formSubmit from './ts/form-submit'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import quiz from './ts/quiz'
import compare from './ts/compare'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  sliderSwiper.init()
  scrollHeader.init()
  waved.init()
  listing.init()
  formSubmit.init()
  formInputs.init()
  maskTel.init()
  quiz.init()
  compare.init()

})

window.addEventListener('load', () => {

  preloader.init()
  animation.init()

})