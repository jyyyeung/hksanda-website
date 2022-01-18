<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 15:26:17
 * @FilePath: /hksanda-website/src/views/About/MediaInterviewsView.vue
 * @Description: Media Interviews Page: Lists all newspaper reports   
-->
<template>
  <h1>傳媒專訪</h1>
  <Timeline :value="interviews" align="left">
    <template #content="{ item }">
      <Card>
        <template #title> {{ item.title }} - {{ item.company }} </template>
        <template #subtitle>
          {{ moment(item.publishedDate).format("L") }}
        </template>
        <template #content>
          <div v-if="item.images.length > 0">
            <!-- FIXME: Images won't show -->
            <img
              v-for="image in item.images"
              :key="image._id"
              :src="image.path"
              :alt="image.filename"
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
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "MediaInterviewsView",
  setup() {
    useMeta({
      title: "傳媒專訪",
    });
  },

  computed: {
    ...mapGetters({ interviews: "getInterviews" }),
  },
  mounted() {
    this.getInterviews();
  },
  methods: {
    ...mapActions(["getInterviews"]),
    moment,
  },
};
</script>

<style lang="scss">
.p-timeline-event-opposite {
  width: 0;
  display: contents;
}
</style>
