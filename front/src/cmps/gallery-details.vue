<template>
  <section class="gallery-details">
    <img v-for="image in  images" :key="image" class="img-container clean-list" :src="image" />
  </section>
</template>

<script>
export default {
  name: "gallery-details",
  props: {
    stay: { type: Object },
  },
  data() {
    return {
      images: [
        `src/assets/Images/${this.stay.imgUrls[0]}`,
        `src/assets/Images/${this.stay.imgUrls[1]}`,
        `src/assets/Images/${this.stay.imgUrls[2]}`,
        `src/assets/Images/${this.stay.imgUrls[3]}`,
        `src/assets/Images/${this.stay.imgUrls[4]}`,
      ],
    };
  },
}
</script>

<style>
</style>