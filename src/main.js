// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '@/assets/css/all.css'
import 'element-ui/lib/theme-default/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
