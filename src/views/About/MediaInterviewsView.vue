<template>
  <h1>傳媒專訪</h1>
  <Timeline :value="getInterviews" align="left">
    <template #content="{ item }">
      <Card>
        <template #title> {{ item.title }} - {{ item.company }} </template>
        <template #subtitle>
          {{ moment(item.publishedDate).format("L") }}
        </template>
        <template #content>
          <div v-if="item.images.length > 0">
            <img
              v-for="image in item.images"
              :key="image._id"
              :src="image.imgUrl"
              :alt="image.fileName"
              class="img-fluid"
            />
          </div>
          <p v-if="item.content">
            {{ item.content }}
          </p>
          <Button
            v-if="item.url"
            label="Read more"
            class="p-button-text"
          ></Button>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<script>
import { useMeta } from "vue-meta";
import moment from "moment";
import { GET_INTERVIEWS } from "@/apollo/interview.js";
export default {
  name: "MediaInterviewsView",
  setup() {
    useMeta({
      title: "傳媒專訪",
    });
  },
  apollo: {
    getInterviews: {
      query: GET_INTERVIEWS,
    },
  },
  methods: {
    moment,
    //TODO: add and update media
  },
};
</script>

<style lang="scss">
.p-timeline-event-opposite {
  width: 0;
  display: contents;
}
</style>
