import Vue from 'vue';
import VueRouter from 'vue-router';

import Playlist from './scenes/Playlist';

Vue.use(VueRouter);

const routes = [{path: '/playlists/:name', props: true, component: Playlist}];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
