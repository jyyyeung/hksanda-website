<template>
  <section>
    <div v-if="pending">Loading</div>
    <div v-else :key="masonry._key">
      <h1>{{ masonry.title }}</h1>
      <div class="columns-3xs gap-3">
        <template v-for="item in masonry.images">
          <SanityImage class="w-full img-fluid my-2" :asset-id="item.image.asset._ref" auto="format" />
          <div v-if="item.alt || item.paragraph" class="Content">
            <h5 class="text-ellipsis">
              {{ item.alt }}
            </h5>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  masonry: {
    type: Object,
    required: true
  },
  pending: Boolean
})
</script>
