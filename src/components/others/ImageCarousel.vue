<template>
  <swiper
    :loop="true"
    :centeredSlides="true"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="(image, i) in images" :key="generateId(i)">
      <div class="swiper__image">
        <Image preview :src="image.src || image" />
        <div v-show="image.caption || image.title" class="caption">
          <h4>{{ image.title }}</h4>
          <p v-show="image.caption">{{ image.caption }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Autoplay,
  Lazy,
  // Pagination,
  // Navigation,
  // Thumbs,
} from "swiper";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/thumbs/thumbs.min.css";

// install Swiper modules
SwiperCore.use([
  Lazy,
  // Pagination,
  // Navigation,
  //  Thumbs,
  Autoplay,
]);

import { defineComponent } from "vue";
import generateId from "@/helpers/generateId";

export default defineComponent({
  name: "ImageCarousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: [Object, Array, String],
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    generateId,
  },
});
</script>

<style lang="scss"></style>
