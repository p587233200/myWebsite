/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  themes: {
    light: {
      dark: false,
      colors: {
        primary: colors.blue.lighten4, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
      }
    },
  },
})
