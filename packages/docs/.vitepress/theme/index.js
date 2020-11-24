import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'
import './styles/custom.css'
import './styles/highlight-theme.css'

import GridDefault from '../../components/grid/default.vue'
import GridGap from '../../components/grid/gap.vue'
import GridBorder from '../../components/grid/border.vue'
import GridNested from '../../components/grid/nested.vue'
import GridPlace from '../../components/grid/place.vue'

import ButtonDefault from '../../components/button/default.vue'
import ButtonDisabled from '../../components/button/disabled.vue'
import ButtonLoading from '../../components/button/loading.vue'
import ButtonLoadingDisabled from '../../components/button/loading-disabled.vue'

import CardDefault from '../../components/card/default.vue'
import CardSlot from '../../components/card/slot.vue'
import CardShadow from '../../components/card/shadow.vue'

import ModalDefault from '../../components/modal/default.vue'
import ModalAsync from '../../components/modal/async.vue'

import AlertDefault from '../../components/alert/default.vue'
import AlertExtra from '../../components/alert/extra.vue'

import ToastDefault from '../../components/toast/default.vue'

import InputDefault from '../../components/input/default.vue'
import InputDisabled from '../../components/input/disabled.vue'
import InputReadonly from '../../components/input/readonly.vue'
import InputClearable from '../../components/input/clearable.vue'

import TextareaDefault from '../../components/textarea/default.vue'
import TextareaDisabled from '../../components/textarea/disabled.vue'
import TextareaReadonly from '../../components/textarea/readonly.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('GridDefault', GridDefault)
    app.component('GridGap', GridGap)
    app.component('GridBorder', GridBorder)
    app.component('GridNested', GridNested)
    app.component('GridPlace', GridPlace)

    app.component('ButtonDefault', ButtonDefault)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('ButtonLoading', ButtonLoading)
    app.component('ButtonLoadingDisabled', ButtonLoadingDisabled)

    app.component('CardDefault', CardDefault)
    app.component('CardSlot', CardSlot)
    app.component('CardShadow', CardShadow)

    app.component('ModalDefault', ModalDefault)
    app.component('ModalAsync', ModalAsync)

    app.component('AlertDefault', AlertDefault)
    app.component('AlertExtra', AlertExtra)

    app.component('ToastDefault', ToastDefault)

    app.component('InputDefault', InputDefault)
    app.component('InputDisabled', InputDisabled)
    app.component('InputReadonly', InputReadonly)
    app.component('InputClearable', InputClearable)

    app.component('TextareaDefault', TextareaDefault)
    app.component('TextareaDisabled', TextareaDisabled)
    app.component('TextareaReadonly', TextareaReadonly)
  }
}
