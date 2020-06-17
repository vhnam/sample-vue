import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import router from './router';
import i18n from './i18n';

import App from './App';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
