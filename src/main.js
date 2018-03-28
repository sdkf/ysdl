import Vue from 'vue'
//css reset
import 'normalize.css/normalize.css'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import router from './router'
import "babel-polyfill"

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
