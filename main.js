import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 挂载服务器地址
Vue.prototype.serverUrl = "http://10.1.173.94:8080";

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
