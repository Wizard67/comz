import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'
import './styles/custom.css'
import './styles/highlight-theme.css'

import Demo from './components/demo.vue'

import GridBasic from '../../components/grid/basic.vue'
import GridGap from '../../components/grid/gap.vue'
import GridNested from '../../components/grid/nested.vue'

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

import InputBasic from '../../components/input/basic.vue'
import InputState from '../../components/input/state.vue'
import InputSlots from '../../components/input/slots.vue'
import InputClearable from '../../components/input/clearable.vue'

import TextareaDefault from '../../components/textarea/default.vue'
import TextareaDisabled from '../../components/textarea/disabled.vue'
import TextareaReadonly from '../../components/textarea/readonly.vue'

import RadioBasic from '../../components/radio/basic.vue'
import RadioValue from '../../components/radio/value.vue'
import RadioLabel from '../../components/radio/label.vue'

import CheckboxBasic from '../../components/checkbox/basic.vue'
import CheckboxValue from '../../components/checkbox/value.vue'
import CheckboxLabel from '../../components/checkbox/label.vue'

import SelectBasic from '../../components/select/basic.vue'

import IconBasic from '../../components/icon/basic.vue'
import IconSpin from '../../components/icon/spin.vue'
import IconStyle from '../../components/icon/style.vue'

import FlexBasic from '../../components/flex/basic.vue'
import FlexInline from '../../components/flex/inline.vue'
import FlexWrap from '../../components/flex/wrap.vue'
import FlexVertical from '../../components/flex/vertical.vue'
import FlexPlace from '../../components/flex/place.vue'

import FormBasic from '../../components/form/basic.vue'

import PanelDefault from '../../components/panel/default.vue'

import SwitchBasic from '../../components/switch/basic.vue'
import SwitchSlots from '../../components/switch/slots.vue'

import TooltipDefault from '../../components/tooltip/default.vue'

import SliderBasic from '../../components/slider/basic.vue'
import SliderRange from '../../components/slider/range.vue'
import SliderStep from '../../components/slider/step.vue'
import SliderSlots from '../../components/slider/slots.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)

    app.component('GridBasic', GridBasic)
    app.component('GridGap', GridGap)
    app.component('GridNested', GridNested)

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

    app.component('InputBasic', InputBasic)
    app.component('InputState', InputState)
    app.component('InputSlots', InputSlots)
    app.component('InputClearable', InputClearable)

    app.component('TextareaDefault', TextareaDefault)
    app.component('TextareaDisabled', TextareaDisabled)
    app.component('TextareaReadonly', TextareaReadonly)

    app.component('RadioBasic', RadioBasic)
    app.component('RadioValue', RadioValue)
    app.component('RadioLabel', RadioLabel)

    app.component('CheckboxBasic', CheckboxBasic)
    app.component('CheckboxValue', CheckboxValue)
    app.component('CheckboxLabel', CheckboxLabel)

    app.component('SelectBasic', SelectBasic)

    app.component('IconBasic', IconBasic)
    app.component('IconSpin', IconSpin)
    app.component('IconStyle', IconStyle)

    app.component('FlexBasic', FlexBasic)
    app.component('FlexInline', FlexInline)
    app.component('FlexWrap', FlexWrap)
    app.component('FlexVertical', FlexVertical)
    app.component('FlexPlace', FlexPlace)

    app.component('FormBasic', FormBasic)

    app.component('PanelDefault', PanelDefault)

    app.component('SwitchBasic', SwitchBasic)
    app.component('SwitchSlots', SwitchSlots)

    app.component('TooltipDefault', TooltipDefault)

    app.component('SliderBasic', SliderBasic)
    app.component('SliderRange', SliderRange)
    app.component('SliderStep', SliderStep)
    app.component('SliderSlots', SliderSlots)
  }
}
