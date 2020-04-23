<template>
  <div class="app">
    <div class="nav">
      <div class="brand">
        <img src="../assets/photo.svg" alt="photo" />
      </div>

      <div class="nav-items__login">
        <a v-if="!isLoggedIn" @click="login" href="#" class="nav-item__login">Login</a>
        <a v-else @click="login" href="#" class="nav-item__login">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Nav",
  methods: {
    /*... if there are more than one properties then you have 
    to use this way otherwise simply method:mapAction(["login"])
    */
    ...mapActions(["login"])
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style lang="css" scoped>
.nav {
  display: grid;
  grid-template-columns: 10rem 1fr;
  color: var(--text-color-1);
  background: #273042;
  box-shadow: 2px 3px 4px #262626;
  padding: 2rem 4rem;
}

.brand img {
  width: 5rem;
  /* height: 2rem; */
}

.nav-items__login {
  justify-self: end;
}

.nav-items__login a {
  appearance: none;
  display: block;
  text-align: center;
  background: var(--color-dark-1);
  padding: 0.7rem 2rem;
  color: var(--text-color-2);
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  font-size: 1.7rem;
}

.nav-items__login a:hover {
  background: var(--color-light-1);
  transform: scale(1.1);
}
</style>
