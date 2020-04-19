import api from "../../api/imgur";

const state = {
  token: null,
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
