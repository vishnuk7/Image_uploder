<template>
  <div class="nav">
    <div class="sidebar">
      <div class="brand">
        <img src="../assets/photo.svg" alt="photo" />
      </div>
      <div class="nav-items">
        <div class="nav-item">
          <a href>Gallery</a>
        </div>
      </div>
    </div>
    <div class="nav-items__login">
      <a @click="login" href="#" class="nav-item">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Nav",
  methods: {
    /*... if there are more than one properties then you have 
    to use this way otherwise simply method:mapAction(["login"])
    */
    ...mapActions(["login"])
  }
};
</script>

<style lang="css" scoped>
.nav {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr 100vh;
  font-size: 1.7rem;
  color: var(--text-color-1);
  margin: 1rem 2rem;
}

.sidebar {
  grid-row: 1/-1;
}

.brand img {
  width: 5rem;
  /* height: 2rem; */
}

.nav-item a {
  color: var(--text-color-2);
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
  font-weight: 500;
  transition: all 0.3s;
}

.nav-items__login a:hover {
  background: var(--color-light-1);
  transform: scale(1.1);
}
</style>
