import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import router from './router';

import App from './App';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  components: {App},
}).$mount('#app');
