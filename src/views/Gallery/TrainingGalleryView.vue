<template>
  <swiper
    class="swiper mySwiper"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :loop="true"
    :centeredSlides="true"
  >
    <!-- :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" -->
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
  <div id="masonry" v-for="section in sections" :key="section.title">
    <h1>{{ section.title }}</h1>
    <masonry-wall :items="section.items" :gap="12" :column-width="300">
      <template v-slot:default="{ item }">
        <div class="Item">
          <img :src="item.image" />
          <div class="Content" v-if="item.title || item.description">
            <h5 class="text-ellipsis-1l">{{ item.title }}</h5>
            <p class="text-ellipsis-2l">{{ item.description }}</p>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, {
  // Autoplay,
  Lazy,
  Pagination,
  Navigation,
  Thumbs,
} from "swiper";

// TODO: Change to custom swiper component

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
  Pagination,
  Navigation,
  Thumbs,
  //  Autoplay
]);

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TrainingGallery",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
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
    ]);

    const sections = ref([
      {
        title: "私人教授課程圖片（私人會所/體育館/室外地方上課）",
        items: [
          {
            title: "坑口 私人兒童散手自衛術課程（會所上課",
            description: "The first item.",
            image:
              "https://hksanda.com/images/Screenshot_20211204-113504_Gallery.jpg",
          },
          {
            title: "Second",
            description: "The second item.",
            image:
              "https://hksanda.com/images/Screenshot_20211204-114237_Gallery.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20211113-102332_Gallery.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20211113-132705_Gallery.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20211113-102227_Gallery.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20211113-133353_Video%20Editor.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20210808-174024_Gallery.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20210725-214711_Gallery.jpg",
          },
          {
            image: "https://hksanda.com/images/20201107_183812.jpg",
          },
          {
            title: "紅磡區  私人散手自衛術課程（室外上課）",
            image: "https://hksanda.com/images/IMG-20200909-WA0006.jpg",
          },
          {
            image:
              "https://hksanda.com/images/Screenshot_20210719-101136_Gallery.jpg",
          },
        ],
      },
      {
        title: "本會學員報考 全港武術散手章別公開考核試",
        items: [
          {
            image: "https://hksanda.com/images/%E5%8F%AF%EF%BC%96.jpg",
          },
          {
            image: "https://hksanda.com/images/IMG_20181104_230726.jpg",
          },
          {
            image: "https://hksanda.com/images/%E5%8F%AF%EF%BC%98.jpg",
          },
          {
            image: "https://hksanda.com/images/IMG_20181104_230704.jpg",
          },
          {
            image: "https://hksanda.com/images/IMG_20181104_230809.jpg",
          },
          {
            image: "https://hksanda.com/images/%E5%8F%AF%EF%BC%91.jpg",
          },
        ],
      },
    ]);
    return { images, sections };
  },
  methods: {
    setThumbsSwiper(swiper): void {
      this.thumbsSwiper = swiper;
    },
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  height: 75vh;
  max-width: 80vw;

  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

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
      width: -webkit-fill-available;

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
}

#masonry {
  .Item {
    overflow: hidden;
    border-radius: 4px;
    width: 100%;
    background: #f5f5f5;
  }
  .Content {
    padding: 20px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    line-height: 0;
    display: block;
  }
}
</style>
