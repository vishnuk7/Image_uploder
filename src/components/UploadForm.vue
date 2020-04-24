<template>
  <div class="uploader">
    <div class="upload-droper">
      <input
        @change="uploadImages($event.target.files)"
        type="file"
        name="images"
        id="file"
        multiple
        accept="image/*"
      />
      <span>Drop files here!</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadFrom",
  methods: mapActions(["uploadImages"])
};
</script>

<style scoped>
.uploader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.upload-droper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 80vw;
  flex-direction: column;
  font-size: 2rem;
  color: var(--color-dark-1);
  border: 0.2rem dashed var(--text-color-2);

  transition: all 0.2s;
}

#file {
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  cursor: pointer;
}

.upload-droper span {
  position: absolute;
}

.upload-droper:hover {
  transform: scale(1.05);
  box-shadow: 1px 12px 10px #273042;
}
</style>