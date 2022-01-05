<template>
  <h1>武術自衛散手 - 考试动作</h1>
  <Message severity="info">備注：青少年武術章別動作將為主要考試項目。</Message>
  <TabView :scrollable="true">
    <TabPanel
      v-for="syllabus in getAssessmentSyllabus"
      :key="syllabus.level"
      :header="syllabus.level"
    >
      <ol>
        <li v-for="item in syllabus.syllabus" :key="item">{{ item }}</li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";

export default {
  name: "SyllabusView",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
};
</script>

<style lang="scss">
ol > li {
  margin: 10px auto;
  // font-family: SXSL-t, TYZ-s;
  font-size: 1.25em;
}

.p-tabview {
  background: transparent;
  .p-tabview-panels {
    background: transparent;
  }
}
</style>
