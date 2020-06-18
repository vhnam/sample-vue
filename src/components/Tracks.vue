<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Artist</th>
          <th class="text-left">Album</th>
          <th class="text-right">Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="track in tracks"
          :key="track.track.id"
          v-bind:class="{'grey--text text--darken-2': track.track.is_local}"
          v-show="track.track.name"
        >
          <td>{{ track.track.name }}</td>
          <td>{{ track.track.artists[0].name }}</td>
          <td>{{ track.track.album.name }}</td>
          <td class="text-right">{{ formatDuration(track.track.duration_ms) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    tracks() {
      return this.$store.state.playlist.tracks.items;
    },
  },
  methods: {
    formatDuration(ms) {
      var sec_num = parseInt(ms / 1000, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor(sec_num / 60) % 60;
      var seconds = sec_num % 60;

      return [hours, minutes, seconds]
        .map((v) => (v < 10 ? '0' + v : v))
        .filter((v, i) => v !== '00' || i > 0)
        .join(':');
    },
    loadNewTracks(id) {
      this.$store.dispatch('playlist/getPlaylistById', id);
    },
  },
  created() {
    this.loadNewTracks(this.id);
  },
  watch: {
    id() {
      this.loadNewTracks(this.id);
    },
  },
};
</script>
