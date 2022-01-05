<template>
  <div class="grid">
    <div class="col">
      <h2 v-show="section.h2">{{ section.h2 }}</h2>
      <h3 v-show="section.h3">{{ section.h3 }}</h3>
      <paragraph
        v-if="section.paragraph || section.paragraphs"
        :paragraph="section.paragraph"
        :paragraphs="section.paragraphs"
      />

      <list v-if="section.list" :list="section.list" />
    </div>
    <div v-if="section.image || section.images" class="col-3">
      <Image v-if="section.image" preview :src="section.image" alt="" />
      <image-carousel v-else :images="section.images" />
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
  name: "TitleContentImage",
  props: {
    section: {
      image: String,
      paragraph: String,
      paragraphs: Array,
      h2: String,
      h3: String,
      list: Array,
      endLine: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
