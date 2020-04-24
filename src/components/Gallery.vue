<template>
  <div>
    Gallery
    {{ allImages.length }}
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