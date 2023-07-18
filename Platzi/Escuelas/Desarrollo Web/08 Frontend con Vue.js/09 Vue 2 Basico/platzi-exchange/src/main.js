import Vue from 'vue';
import App from './App.vue';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { VueSpinners } from '@saeris/vue-spinners';
import '@/assets/css/tailwind.css';

import router from '@/router';
import { dollarFilter, percentFilter } from '@/filters';

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
