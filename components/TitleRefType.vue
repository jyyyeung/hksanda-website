<template>
  <p v-if="$props.displayTitle">{{ $props.title }}</p>
</template>

<script setup lang="ts">
import { type SanityTitleRef } from "~/utils/types";

defineProps<SanityTitleRef>();
</script>
