<template>
  <PageType v-bind="view" />
</template>

<script setup lang="ts">
const route = useRoute();

const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && route == "${route.name}"][0]`;

const { data: view } = useSanityQuery(GET_VIEW_BY_ROUTE);
</script>
