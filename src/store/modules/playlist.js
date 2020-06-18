import playlistAPI from '../../apis/playlist';

const state = () => ({
  tracks: [],
});

const actions = {
  getPlaylistById: async ({commit}, playlistId) => {
    let {data} = await playlistAPI.getPlaylistById(playlistId);
    commit('setPlaylist', data);
  },
};

const mutations = {
  setPlaylist(state, playlist) {
    state.tracks = playlist.tracks;
  },
};

const modulePlaylist = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default modulePlaylist;
