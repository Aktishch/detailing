const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(

  ({ addComponents, theme }) => {

    addComponents({

      '.input-cover': {
        display: 'flex',
        width: '100%',

        '& .input:first-child': {
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        },

        '& .input:last-child': {
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px'
        }
      },

      '.input': {
        flexGrow: 1,
        display: 'block',
        width: '100%',
        height: theme('size.md'),
        backgroundColor: theme('colors.white.DEFAULT'),
        padding: '16px 20px',
        border: `1px solid ${formatColor({ mode: 'rgba', color: parseColor(theme('colors.grey.DEFAULT')).color, alpha: 0.3 })}`,
        transition: '0.2s ease',
        userSelect: 'initial',

        '&--error': {
          borderColor: theme('colors.red.DEFAULT')
        },

        '&:not(&--error):focus': {
          borderColor: theme('colors.grey.DEFAULT')
        },

        '&::placeholder': {
          color: formatColor({ mode: 'rgba', color: parseColor(theme('colors.black.DEFAULT')).color, alpha: 0.5 })
        },

        '&[disabled]': {
          pointerEvents: 'none',
          opacity: 0.5
        }
      }

    })

  }

)