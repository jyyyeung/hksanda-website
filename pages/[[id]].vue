<template>
  <section>

    <Head>
      <Title>{{ view?.title }}</Title>
      <Meta name="description" :content="view?.title" />
    </Head>
    <!-- TODO: p tag base text too small -->
    <!-- TODO: Convert all text to traditional Chinese -->
    <SanityContent :blocks="view?.components" :serializers="serializers" />
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
import serializers from '~/utils/serializers';


const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && route == "${route.params.id.length == 0 ? 'index' : route.params.id}"][0]`

const { data: view, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);

</script>
