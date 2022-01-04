<template>
  <div class="p-fluid">
    <h1>專業教練團隊</h1>
    <div class="p-grid">
      <div class="p-col">
        <Card v-for="instructor in getInstructors" :key="instructor.name">
          <template #title>{{ instructor.name }}</template>
          <template #subtitle> {{ instructor.strengths }} </template>
          <template #content>
            <p v-for="(cert, i) in instructor.certificates" :key="cert + i">
              {{ cert }}
              <!-- <Tag :value="cert.organization"></Tag> {{ cert.content }} -->
            </p>
          </template>
          <template #footer>
            <p
              v-for="experience in instructor.experiences"
              :key="instructor + experience"
            >
              {{ experience }}
            </p>
          </template>
        </Card>
      </div>
      <div class="p-col">
        <img
          class="instructor__image"
          src="https://www.hksanda.com/images/IMG_20181209_201349.jpg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <h2>持有認可實用自衛散手段位证書</h2>
    <Accordion>
      <AccordionTab
        v-for="rank in getRankings"
        :key="rank.name"
        :header="rank.name"
      >
        <Tag
          v-for="awardee in rank.awardees"
          :key="awardee"
          :value="awardee"
        ></Tag>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
import { GET_INSTRUCTORS } from "../../apollo/instructor";
import { GET_RANKINGS } from "../../apollo/rank";

export default {
  name: "OurTeamView",
  apollo: {
    getInstructors: { query: GET_INSTRUCTORS },
    getRankings: { query: GET_RANKINGS },
  },
};
</script>

<style lang="scss">
.instructor {
  &__image {
    width: 100%;
  }
}
</style>
