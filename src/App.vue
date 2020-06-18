<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <Playlists v-bind:items="playlists"></Playlists>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-icon class="mx-4" large>mdi-music-circle</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">{{ $t("common.app") }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined dark v-bind="attrs" v-on="on">{{ $t("common.languages") }}</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="language in languages"
            :key="language.value"
            :value="language.value"
            @click="dispatchSetLanguage(language.value)"
          >
            <v-list-item-title>{{ language.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


import Playlists from './components/Playlists';

export default {
  computed: {
    playlists() {
      return this.$store.state.playlists.items;
    },
  },
  methods: {
    dispatchSetLanguage(value) {
      this.$store.dispatch('languages/setLanguage', value);
    },
  },
  data: () => ({
    currentLang: null,
    languages: [
      {
        text: 'English',
        value: 'en',
      },
      {
        text: 'Tiếng Việt',
        value: 'vi',
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
    this.$store.dispatch('playlists/getPlaylists');
  },
  components: {
    Playlists,
  },
};
</script>