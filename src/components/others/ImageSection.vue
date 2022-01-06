<template>
  <div :class="images.classes || `col-3`">
    <Image
      v-if="images.images.length == 1"
      preview
      :src="images.images[0]"
      alt=""
    />
    <image-carousel v-else :images="images.images" />
  </div>
</template>

<script>
import ImageCarousel from "./ImageCarousel.vue";
export default {
  components: { ImageCarousel },
  name: "ImageSection",
  props: {
    images: {
      images: Array,
      onLeft: Boolean,
      classes: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
