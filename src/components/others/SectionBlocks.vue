<template>
  <el-row :class="classes" :gutter="gutter">
    <el-col
      v-for="(section, i) in sections"
      :key="generateId(i)"
      :span="col"
      :class="section.classes"
    >
      <el-row>
        <el-col>
          <hr v-if="section.startLine" />
        </el-col>

        <el-col v-if="section.text">
          <h1 v-if="section.text.h1">{{ section.text.h1 }}</h1>
        </el-col>

        <image-section
          v-if="section.images && section.images.onLeft"
          :images="section.images"
        />
        <el-col
          v-if="section.text"
          :class="section.text.classes"
          :span="section.text.col || 24"
        >
          <h2 v-if="section.text.h2">{{ section.text.h2 }}</h2>
          <h3 v-if="section.text.h3">{{ section.text.h3 }}</h3>
          <paragraph
            v-if="section.text.paragraphs"
            :paragraphs="section.text.paragraphs"
          />
          <list v-if="section.text.list" :list="section.text.list" />
          <el-row v-if="section.text.buttons">
            <el-col>
              <ink-button />
            </el-col>
          </el-row>
        </el-col>
        <image-section
          v-if="section.images && !section.images.onLeft"
          :images="section.images"
        />
        <el-col>
          <hr v-if="section.endLine" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import generateId from "@/helpers/generateId";
import { Section } from "types/Blocks/SectionBlock";

import { defineComponent, defineAsyncComponent } from "vue";

import List from "./List.vue";
import ImageSection from "./ImageSection.vue";
import InkButton from "./InkButton.vue";
import Paragraph from "./Paragraph.vue";

const SectionBlocks = defineComponent({
  name: "SectionBlocks",
  components: {
    // Paragraph: defineAsyncComponent(() => import("./Paragraph.vue")),
    // Paragraph,
    List,
    ImageSection,
    InkButton,
  },
  props: {
    sections: {
      type: Array as () => Array<Section>,
      required: true,
    },
    classes: { type: String, required: false, default: "" },
    col: {
      type: Number,
      required: false,
      default: ({ sections }: { sections: Section[] }): number =>
        24 / sections.length,
    },
    gutter: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  methods: {
    generateId,
  },
});

export default SectionBlocks;
</script>

<style lang="scss" scoped></style>
