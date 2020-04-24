<template>
  <div>
    <div v-if="isLoggedIn" id="gallery">
      <div v-for="image in allImages" :key="image.id" class="gallery-item">
        <img :src="image.link" alt="image.id" />
      </div>
    </div>
    <div v-else class="center">Please Login!</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Gallery",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: {
    ...mapActions(["fetchImages"]),
    autoGrid() {
      const gallery = document.querySelector("#gallery");
      const width = gallery.offsetWidth.toFixed(0);
      gallery.style.gridTemplateColumns = `repeat(3,calc((${width}px - 7rem) /3))`;
    }
  },
  created() {
    this.fetchImages();
  },
  mounted() {
    this.autoGrid();
    window.addEventListener("resize", this.autoGrid);
  }
};
</script>

<style scoped>
#gallery {
  display: grid;
  grid-template-rows: max-content;
  grid-column-gap: 10px;
  padding: 2rem;
}

.center {
  grid-template-columns: repeat(3, calc(459px - 2.33333rem));
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  color: var(--color-dark-1);
  background: var(--text-color-2);
  margin: 2rem;
  box-shadow: 1px 12px 10px #273042;
}

.gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 1px 12px 10px #273042;
  transition: all 0.2s;
}

.gallery-item:hover {
  transform: scale(1.1);
  z-index: 10;
}

.gallery-item img {
  width: auto;
  height: 25rem;
}
</style>