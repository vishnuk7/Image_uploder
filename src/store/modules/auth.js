import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token"),
};

const getters = {
  isLoggedIn(state) {
    //converting intp boolean
    return !!state.token;
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

const actions = {
  //mutations.setToken //bad!!
  //don't call the mutations directly
  //calling mutations we use the commit function
  logout({ commit }) {
    //calling mutations with the help of commit function and we pass two arguments mutations name and  the value that we want to pass
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },

  finalizeLogin({ commit }, hash) {
    const access_token = qs.parse(hash.replace("#", "")).access_token;
    commit("setToken", access_token);
    window.localStorage.setItem("imgur_token", access_token);
    router.push("/");
  },

  login() {
    api.login();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
