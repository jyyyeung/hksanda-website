<template>
  <h1>常規課程及地點</h1>
  <div class="container">
    <class-info-card
      :session="session"
      v-for="session in getClasses"
      :key="session.id"
    />
  </div>
</template>

<script>
import ClassInfoCard from "@/components/class/ClassInfoCard.vue";
import { GET_CLASSES } from "@/apollo/class";
import { useMeta } from "vue-meta";

export default {
  components: { ClassInfoCard },
  name: "ClassInfo",
  apollo: {
    getClasses: { query: GET_CLASSES },
    //TODO: function to add, remove,update class
  },
  setup() {
    useMeta({
      title: "常規課程",
    });
  },
};
</script>
