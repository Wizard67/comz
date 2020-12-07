import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'
import './styles/custom.css'
import './styles/highlight-theme.css'

import Demo from './components/demo.vue'

import GridDefault from '../../components/grid/default.vue'
import GridGap from '../../components/grid/gap.vue'
import GridBorder from '../../components/grid/border.vue'
import GridNested from '../../components/grid/nested.vue'
import GridPlace from '../../components/grid/place.vue'

import ButtonBasic from '../../components/button/basic.vue'
import ButtonIcon from '../../components/button/icon.vue'

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

import RadioDefault from '../../components/radio/default.vue'
import RadioDisabled from '../../components/radio/disabled.vue'

import CheckboxDefault from '../../components/checkbox/default.vue'
import CheckboxDisabled from '../../components/checkbox/disabled.vue'

import SelectDefault from '../../components/select/default.vue'

import IconBasic from '../../components/icon/basic.vue'
import IconSpin from '../../components/icon/spin.vue'
import IconStyle from '../../components/icon/style.vue'

import FlexBasic from '../../components/flex/basic.vue'
import FlexInline from '../../components/flex/inline.vue'
import FlexWrap from '../../components/flex/wrap.vue'
import FlexFull from '../../components/flex/full.vue'
import FlexVerical from '../../components/flex/verical.vue'
import FlexPlace from '../../components/flex/place.vue'

import FormDefault from '../../components/form/default.vue'

import PanelDefault from '../../components/panel/default.vue'

import SwitchDefault from '../../components/switch/default.vue'
import SwitchDisabled from '../../components/switch/disabled.vue'

import RulerDefault from '../../components/ruler/default.vue'

import TooltipDefault from '../../components/tooltip/default.vue'

import SliderDefault from '../../components/slider/default.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)

    app.component('GridDefault', GridDefault)
    app.component('GridGap', GridGap)
    app.component('GridBorder', GridBorder)
    app.component('GridNested', GridNested)
    app.component('GridPlace', GridPlace)

    app.component('ButtonBasic', ButtonBasic)
    app.component('ButtonIcon', ButtonIcon)

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

    app.component('RadioDefault', RadioDefault)
    app.component('RadioDisabled', RadioDisabled)

    app.component('CheckboxDefault', CheckboxDefault)
    app.component('CheckboxDisabled', CheckboxDisabled)

    app.component('SelectDefault', SelectDefault)

    app.component('IconBasic', IconBasic)
    app.component('IconSpin', IconSpin)
    app.component('IconStyle', IconStyle)

    app.component('FlexBasic', FlexBasic)
    app.component('FlexInline', FlexInline)
    app.component('FlexWrap', FlexWrap)
    app.component('FlexVerical', FlexVerical)
    app.component('FlexFull', FlexFull)
    app.component('FlexPlace', FlexPlace)

    app.component('FormDefault', FormDefault)

    app.component('PanelDefault', PanelDefault)

    app.component('SwitchDefault', SwitchDefault)
    app.component('SwitchDisabled', SwitchDisabled)

    app.component('RulerDefault', RulerDefault)

    app.component('TooltipDefault', TooltipDefault)

    app.component('SliderDefault', SliderDefault)
  }
}
