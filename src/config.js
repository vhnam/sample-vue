const config = {
  common: {
    lang: 'vi',
  },
  apis: {
    getPlaylists: {
      method: 'GET',
      url: (userId) => `https://api.spotify.com/v1/users/${userId}/playlists`,
    },
  },
};

export default config;
