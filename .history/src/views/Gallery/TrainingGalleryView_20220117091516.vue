<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-11 10:37:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:15:16
 * @Description: 
 * @FilePath: /hksanda-website/src/views/Gallery/TrainingGalleryView.vue
-->
<template>
  <div
    id="galleryCarousel"
    class="swiper carousel slide mySwiper"
    data-bs-interval="1500"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        v-for="(image, i) in images"
        :key="generateId(image.title)"
        data-bs-target="#galleryCarousel"
        :data-slide-to="i"
        :data-bs-slide-to="i"
        :class="i == 0 ? 'active' : null"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    </div>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div
        :class="`carousel-item  ${i == 0 ? 'active' : ''}`"
        v-for="(image, i) in images"
        :key="image.src"
      >
        <img :src="image.src" class="img-fluid" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h3>{{ image.title }}</h3>
          <p v-show="image.caption">{{ image.caption }}</p>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <div class="carousel-dark">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="" v-for="section in sections" :key="section.title">
    <h1>{{ section.title }}</h1>
    <masonry-wall
      :items="section.items"
      :ssr-columns="1"
      :column-width="300"
      :gap="16"
    >
      <template #default="{ item }">
        <img class="img-fluid" :src="item.image" />
        <div class="Content" v-if="item.title || item.description">
          <h5 class="text-ellipsis-1l">{{ item.title }}</h5>
          <p class="text-ellipsis-2l">{{ item.description }}</p>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import generateId from "@/helpers/generateId";
import { useMeta } from "vue-meta";
import { Carousel } from "bootstrap";
export default defineComponent({
  name: "TrainingGallery",
  mounted() {
    const galleryCarousel = document.querySelector("#galleryCarousel");
    new Carousel(galleryCarousel).cycle();
  },

  setup() {
    useMeta({
      title: "訓練照片",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
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

    const sections = [
      {
        title: "私人教授課程圖片（私人會所/體育館/室外地方上課）",
        items: [
          {
            title: "坑口 私人兒童散手自衛術課程（會所上課）",
            // description: "The first item.",
            image:
              "https://hksanda.com/images/Screenshot_20211204-113504_Gallery.jpg",
          },
          {
            // title: "Second",
            // description: "The second item.",
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
    ];

    return { images, sections };
  },
  methods: {
    generateId,
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  height: 60vh;
  max-width: 80vw;

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
