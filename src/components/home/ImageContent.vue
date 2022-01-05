<template>
  <div class="grid">
    <div v-if="section.image || section.images" class="col-3">
      <Image
        v-if="section.image"
        preview
        class="max-w-full"
        :src="section.image"
      />
      <image-carousel v-else-if="section.images" :images="section.images" />
    </div>
    <div class="col">
      <paragraph
        v-if="section.paragraphs || section.paragraph"
        :paragraphs="section.paragraphs"
        :paragraph="section.paragraph"
      />
      <list :list="section.list" />
    </div>
  </div>
  <hr v-show="section.endLine" />
</template>

<script>
import ImageCarousel from "../others/ImageCarousel.vue";
import List from "../others/List.vue";
import Paragraph from "../others/Paragraph.vue";
export default {
  components: { Paragraph, ImageCarousel, List },
  name: "ImageContent",
  props: {
    section: {
      image: String,
      images: Array,
      paragraph: String,
      paragraphs: Array,
      endLine: Boolean,
      list: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
