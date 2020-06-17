<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <v-subheader class="mt-4 grey--text text--darken-1">Playlists</v-subheader>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link :to="{path: item.path}">
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-icon class="mx-4" large>mdi-music-circle</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Vincent Entertainment</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
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