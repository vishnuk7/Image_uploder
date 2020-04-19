const state = {
  token: null,
};

const getters = {
  isLoggedIn(state) {
    //converting intp boolean
    return !!state.token;
  },
};

const action = {};

const mutation = {};
