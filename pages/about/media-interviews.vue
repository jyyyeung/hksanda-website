<template>
    <h1>傳媒專訪</h1>
    <Timeline :value="getInterviews" align="left">
        <template #content="{ item }">
            <Card>
                <template #title>
                    {{ item.title }} - {{ item.company }}
                </template>
                <template #subtitle>
                    {{ moment(item.publishedDate).format("L") }}
                </template>
                <template #content>
                    <div v-if="item.images.length > 0">
                        <img v-for="image in item.images" :key="image.imageUrl" :alt="image.alt" :src="image.imageUrl"
                            class="img-fluid">
                    </div>
                    <p v-if="item.content">
                        {{ item.content }}
                    </p>
                    <Button v-if="item.url" class="p-button-text" label="Read more" />
                </template>
            </Card>
        </template>
    </Timeline>
</template>

<script setup>
import { GET_INTERVIEWS } from "@/apollo/interview.js";

import moment from "moment";

const { data } = await useAsyncQuery(GET_INTERVIEWS);
const getInterviews = data.value?.getInterviews;
</script>

<style lang="scss">
.p-timeline-event-opposite {
    width: 0;
    display: contents;
}
</style>
