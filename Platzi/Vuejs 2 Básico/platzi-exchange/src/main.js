import Vue from "vue";
import App from "./App.vue";
import { VueSpinners } from "@saeris/vue-spinners";

import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filter";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.use(VueSpinners);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
