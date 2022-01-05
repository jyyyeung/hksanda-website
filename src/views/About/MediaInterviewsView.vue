<template>
  <h1>傳媒專訪</h1>
  <Timeline :value="interviews" align="alternate" class="customized-timeline">
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
            <!-- FIXME: Images doesn't show -->
            <img
              v-for="image in slotProps.item.images"
              :key="image"
              :src="image"
              :alt="image"
              width="200"
            />
          </div>
          <p v-if="slotProps.item.text">
            {{ item.text }}
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
export default {
  name: "MediaInterviewsView",
  data() {
    return {
      interviews: [
        {
          source: "香港經濟日報訪問",
          date: "28/08/2015",
          images: [
            "src/assets/images/newspaper/0828LDphoto_1024.jpg",
            "src/assets/images/newspaper/2017-12-17.png",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
