<template>
    <section>
        <div v-if="pending">
            <TextSkeleton />
        </div>
        <div v-else class="container">
            <h1 class="text-4xl text-center">
                {{ data?.getViewByRoute.title }} </h1>
            <markdown v-if="data?.getViewByRoute.content != null" :source="data?.getViewByRoute.content" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { Markdown } from "#components";
import { GET_VIEW_BY_ROUTE } from "~/apollo/view";
import TextSkeleton from "./TextSkeleton.vue";

const props = defineProps({
    route: String
})
const { data, pending, refresh } = await useLazyAsyncQuery(GET_VIEW_BY_ROUTE, { route: props.route });
if (!data.value) {
    refresh()
}
</script>

