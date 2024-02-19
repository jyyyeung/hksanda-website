<template>
  <div class="container">
    <h1>專業教練團隊</h1>
    <div v-if="!getInstructorsPending" class="columns-1 md:columns-2 xl:columns-3">
      <div v-for="instructor in getInstructorsResponse" :key="instructor._id" class="my-2 inline-block w-full">
        <div class="rounded-sm border-4 border-primary p-6 shadow">
          <div class="card-body">
            <h2 class="mb-2 text-2xl font-semibold tracking-tight">
              {{ instructor.name }}
            </h2>
            <h5 class="card-subtitle text-muted mb-2">
              {{ instructor.strengths }}
            </h5>
            <p v-for="(cert, i) in instructor.certificates" :key="cert + i" class="mb-1 font-normal">
              {{ cert }}
            </p>
          </div>
          <div v-if="instructor.experiences">
            <p v-for="experience in instructor.experiences" :key="instructor.id + experience">
              {{ experience }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1>持有認可實用自衛散打段位證書</h1>

    <div v-if="!getRankingsPending" v-for="rank in ranks" :key="rank._id">
      <h2>{{ rank.name }}</h2>
      <div class="flex flex-wrap">
        <div v-for="awardee in rank.awardees" :key="awardee" class="tag m-2 w-auto">
          {{ awardee }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_INSTRUCTORS, GET_RANKINGS } from "~/utils/queries";

const {
  data: getInstructorsResponse,
  refresh: getInstructorsRefresh,
  pending: getInstructorsPending,
} = useSanityQuery(GET_INSTRUCTORS);
if (!getInstructorsResponse.value) {
  getInstructorsRefresh();
}

const {
  data: ranks,
  pending: getRankingsPending,
  refresh: getRankingsRefresh,
} = useSanityQuery(GET_RANKINGS);

if (!ranks.value) {
  getRankingsRefresh();
}

useSeoMeta({
  title: "專業教練團隊",
});
</script>

<style lang="scss">
.instructor {
  &__image {
    width: 100%;
  }
}

.card {
  background-color: transparent;
}

.tag {
  background-image: url("@/assets/images/wood.jpeg");
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
