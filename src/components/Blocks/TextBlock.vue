<template>
  <el-col v-if="text" :class="text.classes || null" :span="text.col || 24">
    <h1 v-if="text.h1">{{ text.h1 }}</h1>
    <h2 v-if="text.h2">{{ text.h2 }}</h2>
    <h3 v-if="text.h3">{{ text.h3 }}</h3>
    <paragraph-block v-if="text.paragraphs" :paragraphs="text.paragraphs" />

    <list-block v-if="text.list" :list="text.list" />
    <el-row v-if="text.buttons">
      <el-col>
        <ink-button />
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
import ListBlock from "./ListBlock.vue";
import ParagraphBlock from "./ParagraphBlock.vue";

export default {
  components: { ListBlock, ParagraphBlock },
  name: "TextBlock",
  props: {
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
  },
};
</script>

<style lang="scss" scoped></style>
