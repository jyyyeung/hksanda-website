<template>
  <!-- Array of Sections -->
  <el-row :class="classes" :gutter="gutter">
    <!-- TODO: Change index to id  -->
    <!-- A Section -->
    <el-col
      :span="col"
      v-for="(section, i) in sections"
      :key="generateId() + i"
    >
      <!-- <base-block :section="section" /> -->
    </el-col>
  </el-row>
</template>

<script>
import generateId from "@/helpers/generateId";
// import BaseBlock from "../Blocks/BaseBlock.vue";

export default {
  name: "GenerateBlocks",
  props: {
    // Array of Section Blocks
    sections: Array,
    classes: { type: [String, null], required: false, default: () => null },
    col: {
      type: Number,
      required: false,
      default: ({ sections }) => 24 / sections.length,
    },
    gutter: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  methods: { generateId },
  // components: { BaseBlock },
};
</script>

<style lang="scss" scoped></style>
