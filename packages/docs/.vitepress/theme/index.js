import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'

import ButtonDefault from '../../components/button/default.vue'
import ButtonDisabled from '../../components/button/disabled.vue'
import ButtonLoading from '../../components/button/loading.vue'
import ButtonLoadingDisabled from '../../components/button/loading-disabled.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('ButtonDefault', ButtonDefault)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('ButtonLoading', ButtonLoading)
    app.component('ButtonLoadingDisabled', ButtonLoadingDisabled)
  }
}
