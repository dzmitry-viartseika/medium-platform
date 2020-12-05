import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  getUserInfo() {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get('/user');
  },
  createNewUser(user) {
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    return instWithCred.post('/users', { user });
  },
  loginUser(user) {
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    return instWithCred.post('/users/login', { user });
  },
};
