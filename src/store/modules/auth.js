const state = {
  token: null,
};

const getters = {
  isLoggedIn(state) {
    //converting intp boolean
    return !!state.token;
  },
};

const mutation = {
  setToken(state, token) {
    state.token = token;
  },
};

const action = {};
