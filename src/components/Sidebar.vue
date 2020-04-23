<template>
  <div class="sidebar">
    <div class="nav-items">
      <div class="nav-item">
        <router-link to="/">
          <img src="../assets/gallery.svg" class="nav-item-img" />Gallery
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/upload">
          <img src="../assets/camera.svg" class="nav-item-img" />Upload
        </router-link>
      </div>
      <div class="nav-item">
        <a href>Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  height: calc(100vh - 61px);
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

.nav-item-img {
  width: 3rem;
  margin-right: 1rem;
}
</style>