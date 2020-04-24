<template>
  <div id="gallery">
    <div v-for="image in allImages" :key="image.id" class="gallery-item">
      <img :src="image.link" alt="image.id" />
    </div>
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
    if (this.isLoggedIn) {
      this.fetchImages();
    }
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