<template>
  <section>
    <Head>
      <Title>
        {{ $props.title }}
      </Title>
      <Meta name="description" :content="blocksToText($props.content)" />
    </Head>
    <!-- TODO: Convert all text to traditional Chinese -->
    <SanityContent :blocks="$props.components" :serializers="serializers" />
    <div class="noselect hidden">{{ $props.keywords }}</div>
  </section>
</template>

<script setup lang="ts">
import serializers from "~/utils/serializers";
import { SanityPage } from "~/utils/types";

defineProps<SanityPage>();
</script>
