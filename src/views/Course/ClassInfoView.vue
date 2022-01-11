<template>
  <h1>各區上課地點</h1>
  <el-space fill>
    <class-info-card
      :session="session"
      v-for="session in getClasses"
      :key="generateId(session.id.toString())"
    />
  </el-space>
</template>

<script lang="ts">
import ClassInfoCard from "@/components/class/ClassInfoCard.vue";
import { GET_CLASSES } from "@/apollo/class";

import { defineComponent } from "vue";
import generateId from "@/helpers/generateId";
import { Session } from "@/types/Session";

export default defineComponent({
  name: "ClassInfo",
  setup() {
    const getClasses = null as Session[] | null;
    return { getClasses };
  },
  components: { ClassInfoCard },
  apollo: {
    getClasses: { query: GET_CLASSES },
  },
  methods: {
    generateId,
  },
});
</script>
