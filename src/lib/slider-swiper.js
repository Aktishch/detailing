import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const feedbackQuiz = () => {

  const quizSlider = new Swiper('.quiz-slider .quiz-swiper', {

    navigation: {

      prevEl: '.quiz-slider .quiz-prev',
      nextEl: '.quiz-slider .quiz-next'

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    watchSlidesProgress: true,
    grabCursor: true,

    on: {

      slideChange: (swiper) => {

        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

        } else {

          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

        }

      }

    }

  })

  const transportSlider = new Swiper('.transport-slider .transport-swiper', {

    navigation: {

      prevEl: '.transport-slider .swiper-button-prev',
      nextEl: '.transport-slider .swiper-button-next'

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,

    on: {

      slideChange: (swiper) => {

        const slide = swiper.visibleSlides[0]
        const slider = slide.closest('[data-quiz]')
        const input = slider.querySelector('*[data-quiz-input]')

        input.value = String(slide.dataset.slideActive)
      }

    }

  })

}

const init = () => {

  const mainSlider = new Swiper('.main-slider .swiper', {

    slidesPerView: 'auto',
    spaceBetween: 16,
    spaceBetween: 40,
    speed: 10000,
    loop: true,
    allowTouchMove: false,
    watchSlidesProgress: true,

    autoplay: {

      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const reviewsSlider = new Swiper('.reviews-slider .swiper', {

    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 2

      },

      [media.md]: {

        slidesPerView: 3,
        spaceBetween: 40

      },

      [media.xl]: {

        slidesPerView: 4,
        allowTouchMove: false

      }

    }

  })

  window.Swiper = Swiper

}

export default { init, feedbackQuiz }