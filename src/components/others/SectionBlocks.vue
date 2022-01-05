<template>
  <div v-for="(section, i) in sections" :key="generateId() + i">
    <!-- BUG: AOS doesn't work -->
    <div data-aoc="fade-up" :data-aos-id="generateId()" class="placeholder">
      <title-content-image v-if="section.h2 || section.h3" :section="section" />
      <image-content v-else :section="section" />
    </div>
  </div>
</template>

<script>
import TitleContentImage from "@/components/home/TitleContentImage.vue";
import ImageContent from "@/components/home/ImageContent.vue";
import { nanoid } from "nanoid";
export default {
  name: "SectionBlocks",
  components: { TitleContentImage, ImageContent },
  props: {
    sections: Array,
  },

  methods: {
    generateId() {
      return nanoid();
    },
  },
};
</script>

<style lang="scss" scoped></style>
