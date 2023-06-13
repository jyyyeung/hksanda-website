<template>
  <section>
    <div class="container">
      <!-- <h1 class="text-4xl text-center">
        {{ $props.title }} </h1> -->
      <SanityContent v-if="$props.content != null" :serializers="serializers" :blocks="$props.content" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityView } from "~/utils/types";
import serializers from "~/utils/serializers";

defineProps<SanityView>();
</script>

