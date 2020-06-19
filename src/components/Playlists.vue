<template>
  <fragment>
    <v-subheader class="mt-4 grey--text text--darken-1">{{ $t("common.playlists") }}</v-subheader>
    <v-list dense v-if="items.length">
      <v-list-item
        v-for="playlist in items"
        :key="playlist.id"
        :to="{name: 'Playlist', params: {name: _.kebabCase(playlist.name), id: playlist.id}}"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ playlist.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list v-else>
      <v-responsive>
        <v-skeleton-loader class="pb-2" type="list-item"></v-skeleton-loader>
        <v-skeleton-loader class="pb-2" type="list-item"></v-skeleton-loader>
        <v-skeleton-loader class="pb-2" type="list-item"></v-skeleton-loader>
      </v-responsive>
    </v-list>
  </fragment>
</template>

<script>
import _ from 'lodash';

export default {
  props: ['items'],
  computed: {
    _() {
      return _;
    },
  },
};
</script>