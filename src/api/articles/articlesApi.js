import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  deleteArticle(slug) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.delete(`articles/${slug}`);
  },
  getAuthorArticles(limit = 10, offset = 0, author) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get(`articles?author=${author}&limit=${limit}&offset=${offset}`);
  },
  getFavoritesArticles(limit = 10, offset = 0, favorited) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get(`articles?favorited=${favorited}&limit=${limit}&offset=${offset}`);
  },
  getAllGlobalArticles(limit = 10, offset = 0, slug, tag = '', author) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    if (slug) {
      return instWithCred.get(`articles/${slug}`);
    }
    if (tag) {
      return instWithCred.get(`articles?limit=${limit}&offset=${offset}&tag=${tag}`);
    }
    if (author) {
      return instWithCred.get(`articles?author=${author}&limit=${limit}&offset=${offset}`);
    }
    return instWithCred.get(`articles?limit=${limit}&offset=${offset}`);
  },
  getAllMyArticles(limit = 10, offset = 0) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.get(`articles/feed?limit=${limit}&offset=${offset}`);
  },
  createArticle(article) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.post('articles', { article });
  },
  updateArticle(slug, article) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.put(`articles/${slug}`, { article });
  },
  addToFavorite(slug) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.post(`articles/${slug}/favorite`);
  },
  removeFromFavorite(slug) {
    const jwtToken = localStorage.getItem('jwtToken');
    const instWithCred = axios.create({
      headers: {
        authorization: `Token ${jwtToken}`,
      },
      baseURL: domain.AUTH_API,
    });
    return instWithCred.delete(`articles/${slug}/favorite`);
  },
};
