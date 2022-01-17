<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 17:15:26
 * @FilePath: /hksanda-website/src/views/Course/ClassInfoView.vue
 * @Description: View that lists all regular classes and location 
-->
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
  },
  setup() {
    useMeta({
      title: "常規課程",
    });
  },
};
</script>
