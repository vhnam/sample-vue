import Axios from 'axios';

import config from '../config';

export default {
  getPlaylists() {
    const {method, url} = config.apis.getPlaylists;

    return Axios({
      method,
      url: url(process.env.VUE_APP_USER_ID),
      headers: {
        Authorization: process.env.VUE_APP_TOKEN,
      },
    });
  },
};
