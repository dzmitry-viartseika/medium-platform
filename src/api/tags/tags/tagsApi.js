import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  getTagsList() {
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get('/tags');
  },
};
