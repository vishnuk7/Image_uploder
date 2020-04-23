import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index";
import App from "./App.vue";
import AuthHandler from "./components/AuthHandler.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = VueRouter({
  routes: [{ path: "/oauth2/callback", component: AuthHandler }],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
