import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import { createPopper } from '@popperjs/core';

Vue.use(VueResource);
Vue.use(createPopper);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
