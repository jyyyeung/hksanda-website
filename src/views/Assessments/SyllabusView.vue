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

export default {
  name: "SyllabusView",
  apollo: {
    getAssessmentSyllabus: { query: GET_SYLLABUS },
  },
};
</script>

<style lang="scss">
.p-tabview {
  background: transparent;
  .p-tabview-panels {
    background: transparent;
    color: var(--text-color);
  }

  .p-tabview-nav-btn.p-link {
    // color: black;
    color: var(--text-color);

    // background-color: transparent;
  }

  .p-tabview-nav {
    background: transparent;

    border: 0px solid var(--text-color);
    border-width: 0 0 5px 0;

    width: 100%;
    // width: -webkit-fill-available;
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

      // margin-top: auto;
      // margin-bottom: 0;
      margin: auto 0;

      &.p-highlight {
        .p-tabview-nav-link {
          background: transparent;
          border: 3px solid var(--text-color);
          border-bottom: 0px;
          // color: black;
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
