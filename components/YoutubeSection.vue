<template>
  <section>
    <div class="container my-4">
      <TitleRefType v-bind="$props.titleRef" />

      <div class="columns-2xs lg:columns-2 xl:columns-3">
        <!-- <SanityContent :blocks="$props.videos" :serializers="serializers" /> -->
        <YoutubeType v-for="video in $props.videos" :url="video.url" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type SanityTitleRef, type SanityVideoGroup } from "~/utils/types";
import YoutubeType from "./YoutubeType.vue";
interface Props {
  titleRef: SanityTitleRef;
  videos: SanityVideoGroup[];
}

defineProps<Props>();
</script>
