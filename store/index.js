import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  user: JSON.parse(localStorage?.getItem("loggedUser")) || null,
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
    localStorage?.setItem("loggedUser", JSON.stringify(user));
  },
  LOGOUT(state) {
    state.user = null;
    localStorage?.removeItem("loggedUser");
  },
};

export const getters = {
  getUser: (state) => state.user,
};

export const strict = false;
