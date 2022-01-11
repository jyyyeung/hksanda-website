<template>
  <div :class="images.classes || `col-3`">
    <template v-if="images.images.length == 1">
      <Image v-if="!images.noPreview" preview :src="images.images[0]" alt="" />
      <va-image contain v-else :src="images.images[0]" alt="" />
    </template>
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
      noPreview: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
