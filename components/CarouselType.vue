<template>
  <section>
    <carousel wrapAround :autoplay="3000" pauseAutoplayOnHover>
      <slide v-for="(slide, i) in $props.slides" :key="i">
        <div>
          <SanityImage
            :asset-id="slide.image.asset._ref"
            auto="format"
            class="object-cover"
            :alt="slide.title"
          />
          <div
            class="absolute bottom-0 hidden w-full bg-background bg-opacity-75 p-2 text-center sm:block"
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
import { SanityCarousel, SanitySlide } from "~/utils/types";
// import VueSlickCarousel from "vue-slick-carousel";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps<SanityCarousel>();
</script>
<!-- <style>
.slick-next:before,
.slick-prev:before {
  color: black;
}
</style> -->
<!-- 
<style lang="scss" scoped>
.swiper {
  // height: 60vh;

  .grid-item {
    position: relative;
  }

  div.carousel-inner,
  .carousel-item {
    height: inherit;
  }

  // img {
  //   display: block;
  //   width: 100%;
  //   max-height: 100%;
  //   object-fit: contain;
  // }
}
</style> -->
