<template>
  <section class="my-2">
    <h2>{{ $props.title }}</h2>
    <p>{{ $props.description }}</p>
    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
      <div v-for="item in $props.images" class="inline-block h-auto">
        <SanityImage class="w-full img-fluid my-2 rounded-lg" :asset-id="item.image.asset._ref" auto="format" />
        <div v-if="item.alt || item.paragraph" class="Content">
          <h5 class="text-ellipsis">
            {{ item.alt }}
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityMasonry } from '~/utils/types';

defineProps<SanityMasonry>();
</script>
