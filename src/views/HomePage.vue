<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:33:23
 * @FilePath: /hksanda-website/src/views/HomePage.vue
 * @Description: Shows the Home page of the website, includes scroll nav section of home page  
-->
<template>
  <h1 id="title">香港極拳道武術協會</h1>
  <h1 id="title">Hong Kong Top Win Do Martial Arts Association</h1>
  <div class="container">
    <div class="row">
      <home-carousel />
      <DeferredContent>
        <div id="homeList" class="list-group col-3 d-none d-md-flex">
          <a class="list-group-item list-group-item-action" href="#title"
            >香港極拳道武術協會</a
          >
          <a class="list-group-item list-group-item-action" href="#summary"
            >散手自衛術簡介</a
          >
          <a class="list-group-item list-group-item-action" href="#images"
            >照片</a
          >
        </div>
      </DeferredContent>
      <div
        data-bs-spy="scroll"
        data-bs-target="#homeList"
        data-bs-offset="0"
        class="col"
        tabindex="0"
      >
        <h2 id="summary">散手自衛術簡介</h2>
        <markdown :source="source" />
        <div class="" v-for="section in masonrySections" :key="section.title">
          <h2>{{ section.title }}</h2>
          <DeferredContent>
            <masonry-wall
              :items="section.images"
              :ssr-columns="1"
              :column-width="300"
              :gap="16"
            >
              <template #default="{ item }">
                <div class="ratio ratio-4x3">
                  <img
                    style="object-fit: cover"
                    class="img-fluid"
                    :src="item.image"
                  />
                </div>
              </template>
            </masonry-wall>
          </DeferredContent>
        </div>
        <h2 id="images">照片</h2>
        <div class="container-fluid">
          <DeferredContent>
            <div
              class="row my-3"
              v-for="(section, i) in sections"
              :key="generateId(section.paragraph)"
            >
              <div class="col-xl-4 col-lg-6 col-12 fs-5">
                <div
                  :id="'carousel' + i"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div class="carousel-inner">
                    <div
                      :class="`carousel-item ${
                        i == 0 ? 'active' : ''
                      } ratio ratio-16x9`"
                      v-for="(image, i) in section.images"
                      :key="generateId(image)"
                    >
                      <!-- TODO: Add image alt -->
                      <img
                        style="object-fit: cover"
                        :src="image"
                        class="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <h6 class="h6">{{ section.paragraph }}</h6>
              </div>
            </div>
          </DeferredContent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import generateId from "@/helpers/generateId";
import Markdown from "@/components/others/Markdown.vue";
import { useMeta } from "vue-meta";
import { Carousel } from "bootstrap";
import { mapActions } from "vuex";

export default {
  components: {
    HomeCarousel,
    Markdown,
  },
  setup() {
    useMeta({
      title: "主頁",
      htmlAttrs: {
        lang: "zh-HK",
        amp: true,
      },
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.localizePage();
    });
    this.sections.forEach((_, i) => {
      const carousel = document.querySelector("#carousel" + i);
      new Carousel(carousel).cycle();
    });
  },
  name: "HomePage",
  data() {
    return {
      source:
        "香港極拳道武術協會推廣『散手自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。 \n\n---\n",
      masonrySections: [
        {
          title: "全港武術散手公開賽裁判工作",
          images: [
            {
              image: "https://www.hksanda.com/images/IMG_20181028_225022.jpg",
            },
            {
              image: "https://www.hksanda.com/images/IMG_20181209_201130.jpg",
            },
            {
              image: "https://www.hksanda.com/images/IMG_20181209_201349.jpg",
            },
            {
              image: "https://www.hksanda.com/images/IMG_20181028_224910.jpg",
            },
          ],
        },
        //   {
        //     title: "全港武術散手公開賽裁判工作",
        //     images: [
        //       {
        //         image: "https://www.hksanda.com/images/IMG_20181028_225022.jpg",
        //       },
        //       {
        //         image: "https://www.hksanda.com/images/IMG_20181209_201130.jpg",
        //       },
        //       {
        //         image: "https://www.hksanda.com/images/IMG_20181209_201349.jpg",
        //       },
        //       {
        //         image: "https://www.hksanda.com/images/IMG_20181028_224910.jpg",
        //       },
        //     ],
        //   },
      ],
      sections: [
        {
          paragraph:
            "康樂及文化事務署認可及資助之全港武術自衛散手章別1一10公開考核試，本會14名學員全部合格，取得自衛散手章別資格。",

          images: [
            "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%91.jpg",
            "https://www.hksanda.com/images/%E5%8F%AF.jpg",
            "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%96.jpg",
          ],
        },
        {
          paragraph: "2016 / 2018年香港金文泰中學（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG-20181126-WA0100.jpg",
            "https://www.hksanda.com/images/IMG-20181126-WA0111.jpg",
            "https://www.hksanda.com/images/2017-11-27%2016.34.23.jpg",
          ],
        },
        {
          paragraph:
            "2019年仁濟醫院嚴徐玉珊社區服務中心（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG-20191103-WA0012.jpg",
            "https://www.hksanda.com/images/IMG-20191103-WA0013.jpg",
            "https://www.hksanda.com/images/IMG-20191103-WA0014.jpg",
          ],
        },
        {
          paragraph: "2017年香港中文大學醫學院院會（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG_20180609_164252.jpg",
            "https://www.hksanda.com/images/IMG_20180609_164303.jpg",
            "https://www.hksanda.com/images/IMG_20180609_164826.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    ...mapActions(["localizePage"]),
    generateId,
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  background-color: transparent;
  &.active {
    background-color: transparent;
    border-color: var(--primary-color);
  }
}
.p-scrollpanel-content {
  overflow-y: hidden;
}
</style>
