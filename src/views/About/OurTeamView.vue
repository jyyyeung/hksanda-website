<template>
  <div class="p-fluid">
    <h1>專業教練團隊</h1>
    <div class="grid">
      <div class="col">
        <Card
          v-for="instructor in getInstructors"
          :key="generateId(instructor.name)"
        >
          <template #title>{{ instructor.name }}</template>
          <template #subtitle> {{ instructor.strengths }} </template>
          <template #content>
            <p v-for="cert in instructor.certificates" :key="generateId(cert)">
              {{ cert }}
              <!-- <Tag :value="cert.organization"></Tag> {{ cert.content }} -->
            </p>
          </template>
          <template #footer>
            <p
              v-for="experience in instructor.experiences"
              :key="generateId(experience)"
            >
              {{ experience }}
            </p>
          </template>
        </Card>
      </div>
      <!-- <div class="col-4">
        <Image
          preview
          class="instructor__image"
          src="https://www.hksanda.com/images/IMG_20181209_201349.jpg"
          alt=""
        />
      </div> -->
    </div>
    <hr />
    <h1>持有認可實用自衛散手段位证書</h1>
    <div v-for="rank in getRankings" :key="generateId(rank.name)">
      <h2>{{ rank.name }}</h2>
      <div class="grid">
        <div
          class="tag m-2"
          v-for="awardee in rank.awardees"
          :key="generateId(awardee)"
        >
          {{ awardee }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GET_INSTRUCTORS } from "@/apollo/instructor";
import { GET_RANKINGS } from "@/apollo/rank";
import { defineComponent } from "vue";
import { Rank } from "@/types/Rank";
import { Instructor } from "@/types/Instructor";

import generateId from "@/helpers/generateId";

export default defineComponent({
  name: "OurTeamView",
  setup() {
    const getInstructors = null as Array<Instructor> | null;
    const getRankings = null as Array<Rank> | null;
    return { getInstructors, getRankings };
  },
  apollo: {
    getInstructors: { query: GET_INSTRUCTORS },
    getRankings: { query: GET_RANKINGS },
  },
  methods: {
    generateId,
  },
});
</script>

<style lang="scss">
.instructor {
  &__image {
    width: 100%;
  }
}
.p-card {
  box-shadow: none;
}

.tag {
  background-image: url("../../assets/images/wood.jpeg");
  background-repeat: repeat;
  background-size: contain;
  width: fit-content;
  writing-mode: vertical-lr;
  font-size: x-large;

  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);

  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);

  padding: 1%;
  text-align-last: justify;
}
</style>
