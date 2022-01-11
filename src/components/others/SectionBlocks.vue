<template>
  <!-- <div :class="`${classes} grid`"> -->
  <el-row :class="classes" :gutter="gutter">
    <el-col
      v-for="(section, i) in sections"
      :key="generateId() + i"
      :span="col"
      :class="section.classes"
    >
      <!-- <div
          :class="section.classes || `col-12 grid`"
          v-for="(section, i) in sections"
          :key="generateId() + i"
        > -->
      <el-row>
        <title-content-image :section="section" />
      </el-row>
      <!-- <image-content v-else :section="section" /> -->
      <!-- </div> -->
    </el-col>
  </el-row>
  <!-- </div> -->
</template>

<script lang="ts">
import TitleContentImage from "@/components/home/TitleContentImage.vue";
import { nanoid } from "nanoid";

import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionBlocks",
  components: { TitleContentImage },
  props: {
    sections: Array,
    classes: { type: String, required: false, default: "" },
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
  methods: {
    generateId() {
      return nanoid();
    },
  },
});
</script>

<style lang="scss" scoped></style>
