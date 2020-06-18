<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <Playlists v-bind:items="playlists"></Playlists>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <AppBar></AppBar>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Playlists from './components/Playlists';

export default {
  computed: {
    playlists() {
      return this.$store.state.playlists.items;
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$store.dispatch('playlists/getPlaylists');
  },
  components: {
    AppBar,
    Playlists,
  },
};
</script>