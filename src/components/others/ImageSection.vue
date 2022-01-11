<template>
  <el-col :class="images.classes" :span="images.col || 6">
    <template v-if="images.images.length == 1">
      <Image v-if="!images.noPreview" preview :src="images.images[0]" alt="" />
      <el-image fit="contain" v-else :src="images.images[0]" alt="" />
    </template>
    <image-carousel v-else :images="images.images" />
  </el-col>
</template>

<script lang="ts">
import ImageCarousel from "./ImageCarousel.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ImageCarousel },
  name: "ImageSection",
  props: {
    images: {
      images: Array,
      onLeft: Boolean,
      classes: String,
      col: Number,
      noPreview: Array,
    },
  },
});
</script>

<style lang="scss" scoped></style>
