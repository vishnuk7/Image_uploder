import api from "../../api/imgur";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState }) {
    const { token } = rootState.auth;
    const res = await api.fetchImage(token);
    console.log(token);
    console.log(res);
  },
};

const mutations = {
  setImgaes(state, images) {
    state.images = images;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
