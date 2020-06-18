import Vue from 'vue';
import Vuex from 'vuex';

import moduleLanguages from './modules/languages';
import modulePlaylist from './modules/playlist';
import modulePlaylists from './modules/playlists';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    languages: moduleLanguages,
    playlist: modulePlaylist,
    playlists: modulePlaylists,
  },
});

export default store;
