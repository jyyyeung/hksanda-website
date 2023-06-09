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
import { SanityContent } from "#components";
import { SanityView } from "~/utils/types";
import TextSkeleton from "./TextSkeleton.vue";

defineProps({
  view: {
    type: Object as () => SanityView,
    required: true
  },
  pending: Boolean
})
</script>

