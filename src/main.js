import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import router from './router';
import i18n from './i18n';
import store from './store/index'

import App from './App';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
