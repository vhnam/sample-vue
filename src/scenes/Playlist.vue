<template>
  <v-container>
    <div v-if="playlistOverview">
      <div class="d-flex">
        <img v-bind:src="cover.url" v-bind:alt="title" height="200" width="200" />
        <div class="d-flex flex-column justify-end">
          <div class="pl-3">
            <h2 class="text-subtitle-1">{{ $t("common.playlists") }}</h2>
            <h1 class="text-h2">{{title}}</h1>
            <h1 class="text-subtitle-2">{{totalTracks}} {{ $t("playlist.songs") }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex">
        <v-skeleton-loader width="200" type="image"></v-skeleton-loader>
        <div class="d-flex flex-column justify-end">
          <div class="pl-3">
            <v-responsive width="500">
              <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
            </v-responsive>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    playlistOverview() {
      const playlistId = this.id;
      const playlist = this.$store.state.playlists.items.find(
        (playlist) => playlistId === playlist.id,
      );
      return playlist ? playlist : null;
    },
    title() {
      return this.playlistOverview ? this.playlistOverview.name : '';
    },
    cover() {
      return this.playlistOverview
        ? this.playlistOverview.images[0]
        : {
            url: '',
            width: 200,
            height: 200,
          };
    },
    totalTracks() {
      return this.playlistOverview
        ? this.playlistOverview.tracks
          ? this.playlistOverview.tracks.total
          : 0
        : 0;
    },
  },
};
</script>