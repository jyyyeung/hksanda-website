<template>
  <section>
    <div v-if="pending">
      <TextSkeleton />
    </div>
    <div v-else class="container">
      <h1 class="text-center text-4xl">
        {{ view?.title }}
      </h1>
      <SanityContent v-if="view?.content != null" :blocks="view?.content" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityContent } from "#components";
import TextSkeleton from "./TextSkeleton.vue";

interface Props {
  route: string;
}

const props = defineProps<Props>();

const GET_VIEW_BY_ROUTE = groq`*[_type == "view" && title == "${props.route}"][0]`;
const { data: view, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);
if (!view.value) {
  refresh();
}
</script>
