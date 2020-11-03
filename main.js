import Vue from 'vue'
import App from './App'
import api from '@/common/vmeitime-http/'
import global from '@/common/global';


Vue.prototype.$api = api
Vue.prototype.$global = global

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()