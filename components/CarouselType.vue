<template>
  <section>
    <Swiper :loop="true" :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }" :slides-per-view="1" :space-between="50">
      <SwiperSlide v-for="(slide, i) in $props.slides" :key="i">
        <SanityImage :asset-id="slide.image.asset._ref" auto="format"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="slide.title" />
        <div class="absolute bottom-0 text-center bg-background p-2 bg-opacity-75 w-full hidden md:block">
          <h3>{{ slide.title }}</h3>
          <p v-show="slide.paragraph">
            {{ slide.paragraph }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    <p>{{ $props.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { SanityCarousel, SanitySlide } from '~/utils/types';

defineProps<SanityCarousel>()
</script>


<style lang="scss" scoped>
.swiper {
  height: 60vh;

  .grid-item {
    position: relative;
  }

  div.carousel-inner,
  .carousel-item {
    height: inherit;
  }

  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
