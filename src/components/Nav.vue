<template>
  <div class="app">
    <div class="nav">
      <div class="brand">
        <img src="../assets/photo.svg" alt="photo" />
      </div>

      <div class="nav-items__login">
        <a @click="login" href="#" class="nav-item__login">Login</a>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <div class="nav-items">
          <div class="nav-item">
            <a href>Gallery</a>
          </div>
          <div class="nav-item">
            <a href>Upload</a>
          </div>
          <div class="nav-item">
            <a href>Logout</a>
          </div>
        </div>
      </div>
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
.main {
  display: grid;
  grid-template-columns: 14rem 1fr;
}

.nav {
  display: grid;
  grid-template-columns: 10rem 1fr;
  color: var(--text-color-1);
  background: #273042;
  box-shadow: 2px 3px 4px #262626;
  padding: 2rem 4rem;
}

.sidebar {
  height: calc(100vh - 61px);
}

.brand img {
  width: 5rem;
  /* height: 2rem; */
}

.nav-items {
  height: 100%;
  background: #273042;
}

.nav-item {
  width: 100%;
  height: calc(100% / 8);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item a {
  color: var(--text-color-2);
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

.nav-item a:hover {
  width: 100%;
  height: 100%;
  background: var(--color-dark-1);
  /* transform: scale(1.2); */
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
