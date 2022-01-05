<template>
  <swiper
    class="swiper mySwiper"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="image in images" :key="image.src">
      <div class="swiper__image">
        <img :src="image.src" alt="" />
        <div class="caption">
          <h4>{{ image.title }}</h4>
          <p v-show="image.caption">{{ image.caption }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, {
  Autoplay,
  Lazy,
  Pagination,
  Navigation,
  Thumbs,
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
SwiperCore.use([Lazy, Pagination, Navigation, Thumbs, Autoplay]);

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
  max-height: 100%;
  height: -webkit-fill-available;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

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

    height: 100%;

    margin-bottom: auto;
    margin-left: auto;

    .swiper__image {
      height: 100%;

      img {
        height: 100%;
        object-fit: scale-down;
      }
    }

    .caption {
      background-color: rgb(0, 0, 0, 0.6);
      color: #fff;
      z-index: 999;
      transform: translateY(-11vh);
      h4 {
        font-size: 1.3vw;
      }
      p {
        font-size: 0.8vw;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
