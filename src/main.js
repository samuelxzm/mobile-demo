import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/permission.js'
import store from './store'
import SvgIcon from '@/components/SvgIcon' // svg组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// register globally
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/icons', true, /\.svg$/);
requireAll(req);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
