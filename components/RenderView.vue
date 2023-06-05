<template>
    <section>
        <div v-if="pending">
            <TextSkeleton />
        </div>
        <div v-else class="container">
            <h1 class="text-4xl text-center">
                {{ view?.title }} </h1>
            <SanityContent v-if="view?.content != null" :blocks="view?.content" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { Markdown, SanityContent } from "#components";
import TextSkeleton from "./TextSkeleton.vue";

const props = defineProps({
    route: String
})

const GET_VIEW_BY_ROUTE = groq`*[_type == "view" && title == "${props.route}"][0]`
const { data: view, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);
if (!view.value) {
    refresh()
}
</script>

