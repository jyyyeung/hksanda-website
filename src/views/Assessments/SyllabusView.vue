<template>
  <h1>武術自衛散手 - 考试动作</h1>
  <TabView :scrollable="true">
    <TabPanel
      v-for="syllabus in getAssessmentSyllabus"
      :key="syllabus.id"
      :header="syllabus.level"
    >
      <ol class="list-group list-group-flush list-group-numbered">
        <li
          class="list-group-item"
          v-for="item in syllabus.syllabus"
          :key="item"
        >
          {{ item }}
        </li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { useMeta } from "vue-meta";

export default {
  name: "SyllabusView",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
  setup() {
    useMeta({
      title: "考試動作",
    });
  },
};
</script>
