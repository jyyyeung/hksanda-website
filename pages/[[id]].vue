<template>
  <section>
    <Head>
      <Title>
        {{ `${view?.title} | 香港極拳道武術協會 | 中國武術散打、功夫、自衛術` }}
      </Title>
      <Meta name="description" :content="blocksToText(view?.content)" />
    </Head>
    <!-- TODO: p tag base text too small -->
    <!-- TODO: Convert all text to traditional Chinese -->
    <SanityContent :blocks="view?.components" :serializers="serializers" />
    <div class="noselect hidden">{{ view?.keywords }}</div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
import serializers from "~/utils/serializers";
import chinese from "s2t-chinese";

const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && route == "${
  route.params.id.length == 0 ? "index" : route.params.id
}"][0]`;

const { data: view } = useSanityQuery(GET_VIEW_BY_ROUTE);

// definePageMeta({
//   breadcrumbTitle: '媒體專訪',
// })
</script>
