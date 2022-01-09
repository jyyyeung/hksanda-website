<template>
  <h1>武術自衛散手 - 考试动作</h1>
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

        &:not(.p-disabled):focus {
          box-shadow: none;
        }
      }

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
