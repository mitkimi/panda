import Vue from 'vue'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Antd)

const appInfo = {
  appId: 'cli_9dbc613a9d7f510c',
  appSecret: 'sYd8DoGq26o5oSJEdyXKLd6fcfD1Qi2A'

}
Vue.prototype.$appInfo = appInfo

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
