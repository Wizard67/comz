import DefaultTheme from 'vitepress/dist/client/theme-default'

import '@comz/style'
import './styles/custom.css'
import './styles/highlight-theme.css'

import Demo from './components/demo.vue'

import GridUsage from '../../components/grid/usage.vue'
import GridBasic from '../../components/grid/basic.vue'
import GridGap from '../../components/grid/gap.vue'
import GridNested from '../../components/grid/nested.vue'

import ButtonBasic from '../../components/button/basic.vue'
import ButtonUsage from '../../components/button/usage.vue'
import ButtonIcons from '../../components/button/icons.vue'

import CardDefault from '../../components/card/default.vue'
import CardSlot from '../../components/card/slot.vue'
import CardShadow from '../../components/card/shadow.vue'

import ModalDefault from '../../components/modal/default.vue'
import ModalAsync from '../../components/modal/async.vue'

import AlertDefault from '../../components/alert/default.vue'
import AlertExtra from '../../components/alert/extra.vue'

import ToastBasic from '../../components/toast/basic.vue'
import ToastDuration from '../../components/toast/duration.vue'

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

import FlexUsage from '../../components/flex/usage.vue'
import FlexBasic from '../../components/flex/basic.vue'
import FlexInline from '../../components/flex/inline.vue'
import FlexWrap from '../../components/flex/wrap.vue'
import FlexVertical from '../../components/flex/vertical.vue'
import FlexPlace from '../../components/flex/place.vue'

import FormBasic from '../../components/form/basic.vue'

import PanelUsage from '../../components/panel/usage.vue'

import SwitchBasic from '../../components/switch/basic.vue'
import SwitchSlots from '../../components/switch/slots.vue'

import TooltipDefault from '../../components/tooltip/default.vue'

import SliderBasic from '../../components/slider/basic.vue'
import SliderRange from '../../components/slider/range.vue'
import SliderStep from '../../components/slider/step.vue'
import SliderSlots from '../../components/slider/slots.vue'

import LayoutDemo1 from '../../demo/layout/demo1.vue'
import LayoutDemo2 from '../../demo/layout/demo2.vue'
import LayoutDemo3 from '../../demo/layout/demo3.vue'
import LayoutDemo4 from '../../demo/layout/demo4.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)

    app.component('GridUsage', GridUsage)
    app.component('GridBasic', GridBasic)
    app.component('GridGap', GridGap)
    app.component('GridNested', GridNested)

    app.component('ButtonUsage', ButtonUsage)
    app.component('ButtonBasic', ButtonBasic)
    app.component('ButtonIcons', ButtonIcons)

    app.component('CardDefault', CardDefault)
    app.component('CardSlot', CardSlot)
    app.component('CardShadow', CardShadow)

    app.component('ModalDefault', ModalDefault)
    app.component('ModalAsync', ModalAsync)

    app.component('AlertDefault', AlertDefault)
    app.component('AlertExtra', AlertExtra)

    app.component('ToastBasic', ToastBasic)
    app.component('ToastDuration', ToastDuration)

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

    app.component('FlexUsage', FlexUsage)
    app.component('FlexBasic', FlexBasic)
    app.component('FlexInline', FlexInline)
    app.component('FlexWrap', FlexWrap)
    app.component('FlexVertical', FlexVertical)
    app.component('FlexPlace', FlexPlace)

    app.component('FormBasic', FormBasic)

    app.component('PanelUsage', PanelUsage)

    app.component('SwitchBasic', SwitchBasic)
    app.component('SwitchSlots', SwitchSlots)

    app.component('TooltipDefault', TooltipDefault)

    app.component('SliderBasic', SliderBasic)
    app.component('SliderRange', SliderRange)
    app.component('SliderStep', SliderStep)
    app.component('SliderSlots', SliderSlots)


    app.component('LayoutDemo1', LayoutDemo1)
    app.component('LayoutDemo2', LayoutDemo2)
    app.component('LayoutDemo3', LayoutDemo3)
    app.component('LayoutDemo4', LayoutDemo4)
  }
}
