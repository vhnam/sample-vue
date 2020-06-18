import Vue from 'vue';
import Vuex from 'vuex';

import moduleLanguages from './modules/languages';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    languages: moduleLanguages,
  },
});

export default store;
