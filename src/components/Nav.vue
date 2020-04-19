<template>
  <div class="nav">
    <div class="brand">
      <img src="../assets/photo.svg" alt="photo" />
    </div>
    <div class="nav-items">
      <a @click="login" href="#" class="nav-item">Login</a>
    </div>
  </div>
</template>

<script>
import { mapAction } from "vuex";

export default {
  name: "Nav",
  methods: {
    /*... if there are more than one properties then you have 
    to use this way otherwise simply method:mapAction(["login"])
    */
    ...mapAction(["login"])
  }
};
</script>

<style lang="css" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
  color: var(--text-color-1);
  margin: 1rem 2rem;
}

.brand img {
  width: 5rem;
  /* height: 2rem; */
}

.nav-items a {
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

.nav-items a:hover {
  background: var(--color-light-1);
  transform: scale(1.1);
}
</style>
