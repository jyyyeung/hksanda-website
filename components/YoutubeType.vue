<template>
  <div class="my-2 w-full max-w-2xl">
    <TitleRefType v-bind="$props.titleRef" />
    <iframe
      :id="$props.url.substring($props.url.length - 11)"
      class="aspect-video w-full"
      :src="`//www.youtube.com/embed/${$props.url.substring(
        $props.url.length - 11
      )}?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0`"
      :title="$props.url.substring($props.url.length - 11)"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { SanityYoutube } from "~/utils/types";

defineProps<SanityYoutube>();
</script>
