<template>
  <Message severity="info">備注：青少年武術章別動作將為主要考試項目。</Message>
  <TabView>
    <TabPanel
      v-for="syllabus in getAssessmentSyllabus"
      :key="syllabus.level"
      :header="'武術自衛散手 ' + syllabus.level"
    >
      <ol>
        <li v-for="item in syllabus.syllabus" :key="item">{{ item }}</li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script>
import { GET_SYLLABUS } from "../../apollo/assessment-syllabus";

export default {
  name: "SyllabusView",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
};
</script>

<style lang="scss" scoped></style>
