<template>
  <section>
    <div class="container">
      <div class="columns-1 lg:columns-2">
        <SanityContent :blocks="$props.videos" :serializers="serializers" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { SanityContent, YoutubeEmbed } from '~/.nuxt/components';
import { SanityVideoGroup } from '~/utils/types';
import YoutubeType from './YoutubeType.vue';

const serializers = {
  types: {
    youtube: YoutubeType
  },
}

// defineProps({
// videoGroup: {
//   type: Object as () => SanityVideoGroup,
//   required: true
// },
// pending: Boolean
// })
</script>
