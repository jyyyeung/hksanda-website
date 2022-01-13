<template>
  <el-col v-if="section.startLine">
    <hr />
  </el-col>
  <!-- Header -->
  <text-block :text="section.header" />

  <!-- Image on Left -->
  <image-section
    v-if="section.images && section.images.onLeft"
    :images="section.images"
  />

  <!-- Body Text next to Image -->

  <text-block :text="section.text" />

  <!-- Image on Right -->
  <image-section
    v-if="section.images && !section.images.onLeft"
    :images="section.images"
  />
  <el-col>
    <hr v-if="section.endLine" />
  </el-col>
</template>

<script>
import ImageSection from "../Blocks/ImageBlock.vue";
import TextBlock from "../Blocks/TextBlock.vue";
export default {
  components: {
    ImageSection,
    TextBlock,
  },
  name: "TitleContentImage",
  props: {
    section: {
      endLine: Boolean,
      startLine: Boolean,
      footer: {
        paragraphs: Array,
        h1: String,
        h2: String,
        h3: { type: String, required: false },
        list: Array,
        col: Number,
        buttons: Array,
        classes: [String, null],
      },
      text: {
        paragraphs: Array,
        h1: String,
        h2: String,
        h3: { type: String, required: false },
        list: Array,
        col: Number,
        buttons: Array,
        classes: [String, null],
      },
      images: {
        images: Array,
        onLeft: Boolean,
        classes: [String, null],
        col: Number,
      },
      classes: { type: [String, null], required: false, default: null },
      col: Number,
    },
  },
};
</script>

<style lang="scss" scoped></style>
