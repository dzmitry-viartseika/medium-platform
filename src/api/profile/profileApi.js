import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  getUserProfile(slug) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get(`profiles/${slug}`);
  },
};
