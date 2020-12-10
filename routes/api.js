import axios from 'axios';

import { SCRAP_URL } from '@env';

export default {
  getMusic: async () => {
    const req = await axios.get(`${SCRAP_URL}/api`).then(({data}) => {
      console.log(data)
      return data
    });
    return req;
  },
}
