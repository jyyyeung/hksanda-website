<template>
  <h1>武術自衛散手 - 考试动作</h1>
  <TabView :scrollable="true">
    <TabPanel
      v-for="syllabus in getAssessmentSyllabus"
      :key="generateId(syllabus.level)"
      :header="syllabus.level"
    >
      <ol>
        <li v-for="item in syllabus.syllabus" :key="generateId(item)">
          {{ item }}
        </li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script lang="ts">
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { defineComponent } from "vue";
import { Syllabus } from "@/types/Syllabus";
import generateId from "@/helpers/generateId";

export default defineComponent({
  name: "SyllabusView",
  setup() {
    const getAssessmentSyllabus = null as Syllabus[] | null;
    return { getAssessmentSyllabus };
  },
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
  methods: {
    generateId,
  },
});
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
    color: black;
  }

  .p-tabview-nav-btn.p-link {
    color: black;
    // background-color: transparent;
  }

  .p-tabview-nav {
    background: transparent;

    border: 0px solid black;
    border-width: 0 0 5px 0;

    li {
      &:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
        // TODO: change tab hover color
        background-color: var(--primary-color);
      }

      &.p-tabview-ink-bar {
        background-color: transparent;
      }

      .p-tabview-nav-link {
        background: transparent;
        border: none;

        border-top-right-radius: 0px;
        border-top-left-radius: 0px;

        padding: 0.7rem 1.7rem;

        &:not(.p-disabled):focus {
          box-shadow: none;
        }
      }

      margin-top: auto;
      margin-bottom: 0;

      &.p-highlight {
        .p-tabview-nav-link {
          background: transparent;
          border: 3px solid black;
          border-bottom: 0px;
          color: black;
        }
      }
    }
  }
}
</style>
