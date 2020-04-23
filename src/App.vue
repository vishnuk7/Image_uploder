<template>
  <div class="app">
    <Nav></Nav>
    <div class="main">
      <Sidebar v-if="isLoggedIn" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Nav,
    Sidebar
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
:root {
  --bg-color: #2f3542;
  --text-color-1: #ffffff;
  --text-color-2: #f1f2f6;
  --color-dark-1: #2ed573;
  --color-light-1: #5ad08b;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

body {
  background: var(--bg-color);
}

.main {
  display: grid;
  grid-template-columns: 14rem 1fr;
}
</style>