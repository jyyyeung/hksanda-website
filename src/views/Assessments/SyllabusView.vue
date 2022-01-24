<template>
  <h1>武術自衛散手 - 考试动作</h1>
  <DeferredContent>
    <TabView :scrollable="true">
      <TabPanel
        v-for="(syllabus, index) in getAssessmentSyllabus"
        :key="syllabus.id"
        :header="syllabus.level"
      >
        <ol class="list-group list-group-flush list-group-numbered">
          <li
            class="list-group-item"
            v-for="(item, i) in syllabus.syllabus"
            :key="item"
          >
            {{ item }}
            <button
              v-if="isAdmin"
              @click="edit(index, i)"
              type="submit"
              class="btn btn-primary mb-3"
            >
              編輯
            </button>
          </li>
        </ol>
      </TabPanel>
    </TabView>
  </DeferredContent>
</template>

<script>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SyllabusView",
  apollo: {
    // TODO: Change to vuex
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
  setup() {
    useMeta({
      title: "考試動作",
    });
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  methods: {
    ...mapActions(["toggleModel", "updateView"]),
    edit(index, i) {
      const modelDetails = {
        content: this.getAssessmentSyllabus[index].syllabus[i],
        submitFunction: this.submitChange,
      };
      this.toggleModel(modelDetails);
    },
    submitChange() {
      // id of view
      // TODO: Change to correct action
       this.updateView();
    },
  },
};
</script>
