import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueUeditorWrp from 'vue-ueditor-wrap'

import './plugins/element.js'
import './assets/css/base.css'
import Storage from "./network/http/Storage";

import api from "./network";

Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.component('vue-ueditor-wrap', VueUeditorWrp)

/**给vuex赋值数据*/
if (Storage.getItem('token') && Storage.getItem('username')) {
  store.dispatch('seUserInfoActions', {
    username: Storage.getItem('username'),
    token: Storage.getItem('token')
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
