<template>
  <div class="gallery">
    <div v-for="image in allImages" :key="image.id" class="gallery-item">
      <img :src="image.link" alt="image.id" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Gallery",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>