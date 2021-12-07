import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import axios from 'axios'
import router from './router/index'
import VueAxios from 'vue-axios'
import Toasted from 'vue-toasted'
import TailablePagination from 'tailable-pagination';

Vue.use(TailablePagination);
Vue.use(VueAxios, axios)
Vue.use(Toasted)
Vue.config.productionTip = false;


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
