<template>
  <div id="hk-badge">
    <!-- <base-block :sections="sections" /> -->
    <markdown :source="source" />
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

export default {
  components: { Markdown },
  name: "HKBadge",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
  computed: {
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
  data() {
    return {
      source:
        "# 武術散手章别全港公開試\n:::.lead\n**香港武術散手自衛術一至十級青少年章別計劃是由香港政府康樂及文化事務署認可及資助之全港性公開武術項目考核試，本會學員可報考章別考核試，考取認可武術章別資格及證書。**\n**而成年學員亦可推薦報考政府認可之武術散手教練及裁判證書課程，考取認可專業資格。**",
    };
  },
};
</script>

<style lang="scss" scoped></style>
