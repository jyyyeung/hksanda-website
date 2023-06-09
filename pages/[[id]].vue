<template>
  <section>
    <div :key="component._key" v-for="component in (view as SanityPage)?.components">
      <carousel v-if="component._type == 'carousel'" :carousel="component" :pending="pending" />
      <masonry v-else-if="component._type == 'masonry'" :masonry="component" :pending="pending" />
      <YoutubeSection v-else-if="component._type == 'video-group'" :videoGroup="component" :pending="pending" />
      <View v-else-if="component._type == 'view'" :view="component" :pending="pending" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { View, YoutubeEmbed, Carousel, Masonry, YoutubeSection } from '#components';
import { SanityPage } from '~/utils/types';
const route = useRoute();

const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && route == "${route.params.id}"][0]`

console.log((GET_VIEW_BY_ROUTE))

const { data: view, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);
if (!view.value) {
  refresh()
}

useSeoMeta({
  title: () => view.title,
})
</script>
