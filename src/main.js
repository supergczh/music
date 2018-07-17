import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Museui from 'muse-ui';
import Loading from 'muse-ui-loading';
import 'muse-ui/dist/muse-ui.css';
import ico from 'material-icons'
import 'muse-ui-loading/dist/muse-ui-loading.css';

Vue.use(Loading);
Vue.use(ico)
Vue.use(Museui)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
