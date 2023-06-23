<template>
  <section>
    <div class="container my-2">
      <TitleRefType v-bind="$props.titleRef" />

      <div class="columns-1 lg:columns-2 xl:columns-3">
        <!-- <SanityContent :blocks="$props.videos" :serializers="serializers" /> -->
        <YoutubeType v-for="video in $props.videos" :url="video.url" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityTitleRef, SanityVideoGroup } from "~/utils/types";
import YoutubeType from "./YoutubeType.vue";
interface Props {
  titleRef: SanityTitleRef;
  videos: SanityVideoGroup[];
}

defineProps<Props>();
</script>
