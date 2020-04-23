import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index";
import App from "./App.vue";
import AuthHandler from "./components/AuthHandler.vue";
import Gallery from "./components/Gallery.vue";
import UploadFrom from "./components/UploadForm.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Gallery },
    { path: "/uploadFrom", component: UploadFrom },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
