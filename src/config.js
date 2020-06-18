const config = {
  common: {
    lang: 'vi',
  },
  app: {
    homepage: '/',
    playlist: '/playlists/:name/:id',
  },
  apis: {
    getPlaylists: {
      method: 'GET',
      url: (userId) => `https://api.spotify.com/v1/users/${userId}/playlists`,
    },
    getPlaylistById: {
      method: 'GET',
      url: (playlistId) => `https://api.spotify.com/v1/playlists/${playlistId}`,
    },
  },
};

export default config;
