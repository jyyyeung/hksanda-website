<template>
  <div :class="`${classes} grid`">
    <div
      :class="section.classes || `col-12 grid`"
      v-for="(section, i) in sections"
      :key="generateId() + i"
    >
      <!-- BUG: AOS doesn't work -->
      <title-content-image :section="section" />
      <!-- <image-content v-else :section="section" /> -->
    </div>
  </div>
</template>

<script>
import TitleContentImage from "@/components/home/TitleContentImage.vue";
import { nanoid } from "nanoid";
export default {
  name: "SectionBlocks",
  components: { TitleContentImage },
  props: {
    sections: Array,
    classes: String,
  },

  methods: {
    generateId() {
      return nanoid();
    },
  },
};
</script>

<style lang="scss" scoped></style>
