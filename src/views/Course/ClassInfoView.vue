<template>
  <h1>各區上課地點</h1>
  <el-space fill>
    <class-info-card
      :session="session"
      v-for="session in getClasses"
      :key="session.id"
    />
  </el-space>
</template>

<script lang="ts">
import ClassInfoCard from "@/components/class/ClassInfoCard.vue";
import { GET_CLASSES } from "@/apollo/class";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassInfo",
  data() {
    return {
      getClasses: null as Section | null,
    };
  },
  components: { ClassInfoCard },
  apollo: {
    getClasses: { query: GET_CLASSES },
  },
});
</script>
