import playlistsAPI from '../../apis/playlists';

const state = () => ({
  items: [],
  limit: 0,
  next: null,
  previous: null,
  offset: 0,
  total: 0,
});

const actions = {
  getPlaylists: async ({commit}) => {
    let {data} = await playlistsAPI.getPlaylists();
    commit('setPlaylists', data);
  },
};

const mutations = {
  setPlaylists(state, playlists) {
    Object.assign(state, playlists);
  },
};

const modulePlaylists = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default modulePlaylists;
