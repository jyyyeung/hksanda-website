<template>
  <div class="my-2 w-full max-w-2xl">
    <TitleRefType v-bind="$props.titleRef" />
    <LiteYouTubeEmbed
      :id="$props.url.substring($props.url.length - 11)"
      :title="
        $props.titleRef?.title || $props.url.substring($props.url.length - 11)
      "
      iframeClass="w-full rounded-lg"
      webp
    />
  </div>
</template>

<script setup lang="ts">
import { SanityYoutube } from "~/utils/types";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

defineProps<SanityYoutube>();
</script>
