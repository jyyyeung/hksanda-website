<template>
  <h1>傳媒專訪</h1>
  <Timeline :value="interviews" align="left">
    <template #content="slotProps">
      <Card>
        <template #title>
          {{ slotProps.item.source }}
        </template>
        <template #subtitle>
          {{ slotProps.item.date }}
        </template>
        <template #content>
          <div v-if="slotProps.item.images.length > 0">
            <img
              v-for="image in slotProps.item.images"
              :key="image"
              :src="image"
              :alt="image"
              class="img-fluid"
            />
          </div>
          <p v-if="slotProps.item.text">
            {{ slotProps.item.text }}
          </p>
          <Button
            v-if="slotProps.item.url"
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

export default {
  name: "MediaInterviewsView",
  setup() {
    useMeta({
      title: "傳媒專訪",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
  data() {
    return {
      interviews: [
        {
          source: "香港經濟日報訪問",
          date: "28/08/2015",
          images: [
            "/src/assets/images/newspaper/0828LDphoto_1024.jpg",
            "/src/assets/images/newspaper/2017-12-17.png",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.p-timeline-event-opposite {
  width: 0;
  display: contents;
}
</style>
