import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";

//This is this connection between Vue and Vuex
//Telling Vue use this library
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
});
