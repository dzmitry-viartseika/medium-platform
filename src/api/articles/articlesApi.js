import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  getAllGlobalArticles(limit = 10, offset = 0) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get(`articles?limit=${limit}&offset=${offset}`);
  },
};
