<template>
  <v-container>
    <v-banner single-line sticky color="#121212" class="banner">
      <section class="overview">
        <div v-if="playlistOverview">
          <div class="d-flex">
            <img v-bind:src="cover.url" v-bind:alt="title" height="110" width="110" />
            <div class="d-flex flex-column justify-end">
              <div class="pl-3">
                <h2 class="text-subtitle-1">{{ $t("playlist.title") }}</h2>
                <h1 class="text-h2">{{title}}</h1>
                <h1 class="text-subtitle-2">{{totalTracks}} {{ $t("playlist.songs") }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="d-flex">
            <v-skeleton-loader width="110" height="110" type="image"></v-skeleton-loader>
            <div class="d-flex flex-column justify-end">
              <div class="pl-3">
                <v-responsive width="500">
                  <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
                </v-responsive>
              </div>
            </div>
          </div>
        </div>
      </section>
    </v-banner>
    <section class="pt-3">
      <div v-if="playlistOverview">
        <Tracks v-bind:id="id"></Tracks>
      </div>
      <div v-else>
        <v-responsive>
          <v-skeleton-loader
            type="table"
            :types="{'table-heading': '', 'table-thead': 'heading@4', 'table-row': 'table-cell@4',  'table-tfoot': ''}"
          ></v-skeleton-loader>
        </v-responsive>
      </div>
    </section>
  </v-container>
</template>

<script>
import Tracks from '../components/Tracks';

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
            width: 110,
            height: 110,
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
  components: {
    Tracks,
  },
};
</script>

<style scoped>
.overview {
  padding-top: 48px;
}
.banner {
  margin-left: -24px;
}
</style>