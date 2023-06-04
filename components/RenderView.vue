<template>
    <section>
        <div v-if="pending">Loading</div>
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

const props = defineProps({
    route: String
})
const { data, pending } = await useLazyAsyncQuery(GET_VIEW_BY_ROUTE, { route: props.route });
</script>

