import Axios from 'axios';

import config from '../config';

export default {
  getPlaylistById(playlistId) {
    const {method, url} = config.apis.getPlaylistById;

    return Axios({
      method,
      url: url(playlistId),
      headers: {
        Authorization: process.env.VUE_APP_TOKEN,
      },
    });
  },
};
