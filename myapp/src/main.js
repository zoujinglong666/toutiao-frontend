import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'//vant组件自带字体
import VueFuse from 'vue-fuse'
// import createPersistedState from 'vuex-persistedstate'


import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Vant)
Vue.use(VueFuse)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
