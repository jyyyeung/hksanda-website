<template>
  <section>
    <div v-if="pending">Loading</div>
    <div v-else class="container">
      <div class="columns-1 lg:columns-2">
        <div v-for="video in videoGroup.videos" :key="video._key" class="my-2">
          <YoutubeEmbed :url="video.url" :pending="pending" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityVideoGroup } from '~/utils/types';

defineProps({
  videoGroup: {
    type: Object as () => SanityVideoGroup,
    required: true
  },
  pending: Boolean
})
</script>
