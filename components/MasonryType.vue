<template>
  <div>
    <h1>{{ $props.title }}</h1>
    <div class="columns-3xs gap-3">
      <template v-for="item in $props.images">
        <SanityImage class="w-full img-fluid my-2" :asset-id="item.image.asset._ref" auto="format" />
        <div v-if="item.alt || item.paragraph" class="Content">
          <h5 class="text-ellipsis">
            {{ item.alt }}
          </h5>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SanityMasonry } from '~/utils/types';

defineProps<SanityMasonry>()
</script>
