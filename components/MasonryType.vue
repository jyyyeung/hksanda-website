<template>
  <section class="my-2">
    <div class="my-2">
      <h2>{{ $props.title }}</h2>
      <p class="text-lg">{{ $props.description }}</p>
    </div>
    <div class="columns-2xs gap-3">
      <div v-for="item in $props.images" class="inline-block w-full">
        <schema-org-image
          :url="$urlFor(item.image).url()"
          :caption="item.alt"
        />
        <!-- provider="sanity" -->
        <!-- :src="item.image.asset._ref" -->
        <nuxt-img
          :placeholder="
            $urlFor(item.image).ignoreImageParams().blur(90).width(400).url()
          "
          :src="$urlFor(item.image).width(400).url()"
          :alt="item.alt || item.image?.alt"
          width="400"
          loading="lazy"
          sizes="sm:100vw md:50vw lg:400px"
          class="img-fluid my-2 w-full rounded-lg"
        />
        <div v-if="item.alt && item.showAlt" class="Content">
          <h5 class="text-ellipsis">
            {{ item.alt }}
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SanityMasonry } from "~/utils/types";

defineProps<SanityMasonry>();
</script>
