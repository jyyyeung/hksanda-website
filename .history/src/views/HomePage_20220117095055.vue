<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:50:27
 * @FilePath: /hksanda-website/src/views/HomePage.vue
 * @Description: Shows the Home page of the website, includes scroll nav section of home page  
-->
<template>
  <h1 id="title">香港極拳道武術協會</h1>
  <h1 id="title">Hong Kong Top Win Do Martial Arts Association</h1>
  <div class="container">
    <!-- <div class="row"> -->
    <div class="row">
      <home-carousel />
      <!-- </div> -->

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
      <div
        data-bs-spy="scroll"
        data-bs-target="#homeList"
        data-bs-offset="0"
        class="col"
        tabindex="0"
      >
        <h2 id="summary">散手自衛術簡介</h2>
        <markdown :source="source" />
        <h2 id="images">照片</h2>
        <div class="container-fluid">
          <div
            class="row"
            v-for="(section, i) in sections"
            :key="generateId(section.paragraph)"
          >
            <div class="col-xl-4 col-lg-6 col-12 fs-5">
              <!-- <figure
              class="figure col-xl-4 col-lg-6 col-12 fs-5"
              v-for="section in sections"
              :key="generateId(section.paragraph)"
            > -->
              <div
                :id="'carousel' + i"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="1000"
              >
                <div class="carousel-inner">
                  <div
                    :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                    v-for="(image, i) in section.images"
                    :key="generateId(image)"
                  >
                    <img
                      :src="image"
                      class="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- <figcaption class="figure-caption">
                {{ section.paragraph }}
              </figcaption> -->
            <!-- </figure> -->
            <div class="col">
              <h6 class="h6">{{ section.paragraph }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <base-block :sections="sections" /> -->
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
    //  BaseBlock
    HomeCarousel,
    Markdown
  },
  setup() {
    useMeta({
      title: "主頁"
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
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
      sections: [
        {
          paragraph:
            "康樂及文化事務署認可及資助之全港武術自衛散手章別1一10公開考核試，本會14名學員全部合格，取得自衛散手章別資格。",

          images: [
            "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%91.jpg",
            "https://www.hksanda.com/images/%E5%8F%AF.jpg",
            "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%96.jpg"
          ]
        },
        {
          paragraph: "2016 / 2018年香港金文泰中學（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG-20181126-WA0100.jpg",
            "https://www.hksanda.com/images/IMG-20181126-WA0111.jpg",
            "https://www.hksanda.com/images/2017-11-27%2016.34.23.jpg"
          ]
        },
        {
          paragraph:
            "2019年仁濟醫院嚴徐玉珊社區服務中心（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG-20191103-WA0012.jpg",
            "https://www.hksanda.com/images/IMG-20191103-WA0013.jpg",
            "https://www.hksanda.com/images/IMG-20191103-WA0014.jpg"
          ]
        },
        {
          paragraph: "2017年香港中文大學醫學院院會（防身自衛術）教學及講座",

          images: [
            "https://www.hksanda.com/images/IMG_20180609_164252.jpg",
            "https://www.hksanda.com/images/IMG_20180609_164303.jpg",
            "https://www.hksanda.com/images/IMG_20180609_164826.jpg"
          ]
        }
      ]
    };
  },
  methods: {
    ...mapActions(["localizePage"]),
    generateId
  }
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
