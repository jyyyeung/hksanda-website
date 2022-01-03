<template>
  <swiper
    class="swiper mySwiper"
    :slides-per-view="3"
    :space-between="50"
    :navigation="true"
    :centeredSlides="true"
  >
    <swiper-slide v-for="image in images" :key="image.src">
      <div class="swiper__image"><img :src="image.src" alt="" /></div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, { Lazy, Pagination, Navigation, Thumbs } from "swiper";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/thumbs/thumbs.min.css";

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation, Thumbs]);

export default {
  name: "TrainingGallary",
  components: {
    Swiper,
    SwiperSlide,
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
  data() {
    return {
      images: [
        {
          src: "https://hksanda.com/images/2017-01-12%2022.25.26.jpg",
          title: "香港散手代表隊總教練",
          caption: "張立功老師",
        },
        {
          src: "https://hksanda.com/images/IMG_20180427_082853.jpg",
          title: "2017年香港武術散手公開賽各裁判合照",
        },
        {
          src: "https://hksanda.com/images/IMG-20170113-WA0007.jpg",
          title: "香港武術散手裁判培訓班",
        },
        {
          src: "https://hksanda.com/images/2017-01-12%2022.59.45.png",
          title: "香港武術散手裁判培訓班",
        },
      ],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>

<style lang="scss">
.swiper {
  max-width: 80vw;
  max-height: 100vh;

  &__thumbnails {
    max-height: 100px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
