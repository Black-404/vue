import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';   //UI库需要引入css

import { Card } from 'vant';
import { AddressEdit } from 'vant';//编辑地址

Vue.use(AddressEdit);//编辑地址
Vue.use(Card);
Vue.use(Vant);//安装
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip=false

new Vue({
  render:h => h(App),
  router
}).$mount('#app')
