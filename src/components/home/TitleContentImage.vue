<template>
  <hr v-if="section.startLine" />
  <h1 v-if="section.h1">{{ section.h1 }}</h1>
  <div class="grid">
    <image-section
      v-if="hasImage && section.images.onLeft"
      :images="section.images"
    />
    <div class="col">
      <h2 v-if="section.h2">{{ section.h2 }}</h2>
      <h3 v-if="section.h3">{{ section.h3 }}</h3>
      <paragraph
        v-if="section.paragraph || section.paragraphs"
        :paragraph="section.paragraph"
        :paragraphs="section.paragraphs"
      />

      <list v-if="section.list" :list="section.list" />
    </div>
    <!--  -->
    <image-section
      v-if="hasImage && !section.images.onLeft"
      :images="section.images"
    />
  </div>
  <hr v-if="section.endLine" />
</template>

<script>
import ImageSection from "../others/ImageSection.vue";
import List from "../others/List.vue";
import Paragraph from "../others/Paragraph.vue";
export default {
  components: { Paragraph, List, ImageSection },
  name: "TitleContentImage",
  props: {
    section: {
      paragraph: String,
      paragraphs: Array,
      h1: String,
      h2: String,
      h3: String,
      list: Array,
      endLine: Boolean,
      startLine: Boolean,
      onLeft: Boolean,
      images: {
        images: Array,
        onLeft: Boolean,
        classes: String,
      },
    },
  },
  computed: {
    hasImage() {
      return "images" in this.section;
    },
  },
};
</script>

<style lang="scss" scoped></style>
