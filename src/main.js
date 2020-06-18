import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import Fragment from 'vue-fragment';

import router from './router';
import i18n from './i18n';
import store from './store';

import App from './App';

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
