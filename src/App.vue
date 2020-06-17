<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <v-subheader class="mt-4 grey--text text--darken-1">{{ $t("common.playlists") }}</v-subheader>
      <v-list dense>
        <v-list-item
          v-for="playlist in playlists"
          :key="playlist.text"
          link
          :to="{path: playlist.path}"
        >
          <v-list-item-content>
            <v-list-item-title>{{ playlist.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
          <v-list-item v-for="language in languages" :key="language.value" :value="language.value">
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
export default {
  data: () => ({
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
    playlists: [
      {
        path: '/playlists/bolero',
        text: 'Bolero',
      },
      {
        path: '/playlists/chinese',
        text: 'Chinese',
      },
      {
        path: '/playlists/french',
        text: 'French',
      },
      {
        path: '/playlists/instrumental-music',
        text: 'Instrumental Music',
      },
      {
        path: '/playlists/english',
        text: 'English',
      },
      {
        path: '/playlists/vietnamese',
        text: 'Vietnamese',
      },
      {
        path: '/playlists/others',
        text: 'Others',
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>