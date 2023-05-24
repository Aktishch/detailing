import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'
import '@fancyapps/ui/dist/fancybox.css'

import sliderSwiper from './slider-swiper'
import waved from '../ts/waved'

const init = () => {

  Fancybox.defaults.trapFocus = false
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.placeFocusBack = false
  Fancybox.defaults.l10n = ru
  Fancybox.defaults.template.spinner = '<div class="preloader"><div class="preloader-circle"></div></div>'

  Fancybox.bind('[data-fancybox-dialog]', {

    dragToClose: false,
    mainClass: 'fancybox-dialog'

  })

  Fancybox.bind('[data-fancybox-quiz]', {

    dragToClose: false,
    mainClass: 'fancybox-dialog',

    on: {

      done: (fancybox, slide) => {

        sliderSwiper.feedbackQuiz()
        waved.init()

      }

    }

  })

  window.Fancybox = Fancybox

}

export default { init }