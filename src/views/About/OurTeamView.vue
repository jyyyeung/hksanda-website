<template>
  <div class="container">
    <h1>專業教練團隊</h1>
    <div class="row">
      <div
        class="col-lg-6 my-2"
        v-for="instructor in getInstructors"
        :key="instructor.name"
      >
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">{{ instructor.name }}</h2>
            <h5 class="card-subtitle mb-2 text-muted">
              {{ instructor.strengths }}
            </h5>
            <p
              class="card-text"
              v-for="(cert, i) in instructor.certificates"
              :key="cert + i"
            >
              {{ cert }}
            </p>
          </div>
          <div v-if="instructor.experiences" class="card-footer">
            <p
              v-for="experience in instructor.experiences"
              :key="instructor + experience"
            >
              {{ experience }}
            </p>
          </div>
        </div>
      </div>
      <!-- <Card v-for="instructor in getInstructors" :key="instructor.name">
          <template #title>{{ instructor.name }}</template>
          <template #subtitle> {{ instructor.strengths }} </template>
          <template #content>
            <p v-for="(cert, i) in instructor.certificates" :key="cert + i">
              {{ cert }}
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
        </Card> -->

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
    <div v-for="rank in getRankings" :key="rank.name">
      <h2>{{ rank.name }}</h2>
      <div class="row">
        <div class="tag m-2" v-for="awardee in rank.awardees" :key="awardee">
          {{ awardee }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_INSTRUCTORS } from "@/apollo/instructor";
import { GET_RANKINGS } from "@/apollo/rank";

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
.card {
  background-color: transparent;
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
