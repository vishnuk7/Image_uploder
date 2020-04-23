const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  fetchImages() {},
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
