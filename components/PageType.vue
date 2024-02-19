<template>
  <section>

    <Head>
      <Title>
        {{ $props.title }}
      </Title>
      <Meta name="description" :content="blocksToText($props.components)" />
    </Head>
    <SchemaOrgArticle :headline="$props.title" :datePublished="$props._createdAt" :dateModified="$props._updatedAt" />

    <!-- TODO: Convert all text to traditional Chinese -->
    <SanityContent :blocks="$props.components" :serializers="serializers" />
    <div class="noselect hidden">{{ $props.keywords }}</div>
  </section>
</template>

<script setup lang="ts">
import serializers from "~/utils/serializers";
import { type SanityPage } from "~/utils/types";

defineProps<SanityPage>();
</script>
