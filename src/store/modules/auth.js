import * as types from '../mutations-types';

export default {
  state: {
    isSubmitting: false,
    userInfo: {},
  },
  getters: {
    isSubmitting: (state) => state.isSubmitting,
    userInfo: (state) => state.userInfo,
  },
  actions: {
    setIsSumbitting({ commit }, data) {
      commit(types.SET_IS_SUBMITTING, { data });
    },
    setUserInfo({ commit }, data) {
      commit(types.SET_USER_INFO, data);
    },
  },
  mutations: {
    [types.SET_IS_SUBMITTING](state, { data }) {
      state.isSubmitting = data;
    },
    [types.SET_USER_INFO](state, data) {
      state.userInfo = data;
    },
  },
};
