import {
  Button,
  Switch,
  Tooltip,
  Badge,
  Select,
  Input,
  Pagination,
  Row,
  Popover,
  Tabs,
  TabPane,
  Icon,
  Option,
  Carousel,
  CarouselItem,
  Divider,
  Collapse,
  Card,
  Radio,
  Checkbox
} from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Switch)
    Vue.use(Tooltip)
    Vue.use(Badge)
    Vue.use(Select)
    Vue.use(Input)
    Vue.use(Pagination)
    Vue.use(Option)
    Vue.use(Row)
    Vue.use(Popover)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Icon)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Divider)
    Vue.use(Collapse)
	    Vue.use(Checkbox)
		    Vue.use(Card)
    Vue.use(Radio)
  },
}
export default element
