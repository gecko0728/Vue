import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;// 设置为 false 以阻止 vue 在启动时生成生产提示。

import './assets/css/base.css';//全局样式
import './assets/js/font.js'; //字体比值

new Vue({
  render: h => h(App),
}).$mount('#app')
