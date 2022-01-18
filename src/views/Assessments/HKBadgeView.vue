<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:40:11
 * @FilePath: /hksanda-website/src/views/Assessments/HKBadgeView.vue
 * @Description: Assessment syllabus for badge exams  
-->
<template>
  <div id="hk-badge">
    <div class="container-fluid">
      <h1>{{ view.title }}</h1>
      <markdown :source="view.content" />
    </div>
    <TabView>
      <TabPanel
        v-for="syllabus in syllabuses"
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
  </div>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";

export default {
  components: { Markdown },
  setup() {
    useMeta({
      title: "武術散手章別全港公開試",
    });
  },
  name: "HKBadge",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
  computed: {
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/assessments/hk-badge");
    },
    syllabuses() {
      console.log(this.getAssessmentSyllabus);
      const syllabuses = this.getAssessmentSyllabus
        ? this.getAssessmentSyllabus.map((level) => ({
            syllabus: level.syllabus.filter((syllabus) =>
              syllabus.includes("散手章別計劃規定動作")
            ),
            level: level.level,
          }))
        : [];

      return syllabuses;
    },
  },
};
</script>

<style lang="scss" scoped></style>
