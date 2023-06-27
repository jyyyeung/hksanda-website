<template>
  <section>
    <carousel :autoplay="3000" wrap-around pause-autoplay-on-hover>
      <slide v-for="(slide, i) in $props.slides" :key="i">
        <div>
          <nuxt-img
            provider="sanity"
            :src="slide.image.asset._ref"
            :alt="slide.title || slide.paragraph || slide.image.alt"
            :max-w="1920"
            class="w-full rounded-lg object-cover"
          />
          <div
            class="absolute bottom-0 left-0 hidden w-full bg-background bg-opacity-75 p-2 text-center sm:block"
          >
            <h3 v-show="slide.title">{{ slide.title }}</h3>
            <p v-show="slide.paragraph">
              {{ slide.paragraph }}
            </p>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <p>{{ $props.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { SanityCarousel } from "~/utils/types";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps<SanityCarousel>();
</script>
