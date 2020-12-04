import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  getUserInfo() {
    const jwtToken = localStorage.getItem('jwtToken');
    console.log('token', jwtToken);
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get('/user');
  },
  createNewUser(user) {
    console.log('user', user);
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
  deleteMovie(id) {
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    return instWithCred.delete(`/deleteItem/?id=${id}`);
  },
  updateMovie(movie) {
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    return instWithCred.patch(`changeItem/?id=${movie._id}`, { movie });
  },
  getPaginatedMovies(page = 1, perPage = 2, search) {
    const sortQuery = '&sort={"createdAt": -1}';
    console.log('page', page);
    console.log('perPage', perPage);
    console.log('search', search);
    const instWithCred = axios.create({
      baseURL: domain.AUTH_API,
    });
    const searchQuery = search ? `&search=${search}` : '';
    return instWithCred.get(`getPaginatedMovies/?page=${page}&limit=${perPage}${searchQuery}${sortQuery}`);
  },
};
