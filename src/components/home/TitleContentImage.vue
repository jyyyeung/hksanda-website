<template>
  <el-col>
    <hr v-if="section.startLine" />
  </el-col>

  <el-col>
    <h1 v-if="section.text.h1">{{ section.text.h1 }}</h1>
  </el-col>

  <image-section
    v-if="hasImage && section.images.onLeft"
    :images="section.images"
  />
  <el-col :class="section.text.classes" :span="section.text.col || 24">
    <h2 v-if="section.text.h2">{{ section.text.h2 }}</h2>
    <h3 v-if="section.text.h3">{{ section.text.h3 }}</h3>
    <paragraph
      v-if="section.text.paragraph || section.text.paragraphs"
      :paragraph="section.text.paragraph"
      :paragraphs="section.text.paragraphs"
    />
    <list v-if="section.text.list" :list="section.text.list" />
    <el-row v-if="section.text.buttons">
      <el-col>
        <ink-button />
      </el-col>
    </el-row>
  </el-col>
  <!--  -->
  <image-section
    v-if="hasImage && !section.images.onLeft"
    :images="section.images"
  />

  <el-col>
    <hr v-if="section.endLine" />
  </el-col>
</template>

<script>
import ImageSection from "../others/ImageSection.vue";
import List from "../others/List.vue";
import Paragraph from "../others/Paragraph.vue";
import InkButton from "../others/InkButton.vue";
export default {
  components: { Paragraph, List, ImageSection, InkButton },
  name: "TitleContentImage",
  props: {
    section: {
      endLine: Boolean,
      startLine: Boolean,
      text: {
        paragraph: String,
        paragraphs: Array,
        h1: String,
        h2: String,
        h3: String,
        list: Array,
        col: Number,
        buttons: Array,
      },
      images: {
        images: Array,
        onLeft: Boolean,
        classes: String,
        col: Number,
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
