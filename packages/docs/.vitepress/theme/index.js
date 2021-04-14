import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'
import './styles/custom.css'
import './styles/highlight-theme.css'

import Demo from './components/demo.vue'

import { initCustomFormatter } from 'vue'
// formate chrome console info
initCustomFormatter()

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
  }
}
