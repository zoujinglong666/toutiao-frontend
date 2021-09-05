import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/icon.less'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './styles/index.less' 
import 'vant/lib/icon/local.css'//vant组件自带字体

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
