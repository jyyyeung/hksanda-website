<template>
  <h1>香港极拳道武术协会</h1>
  <home-carousel />
  <markdown :source="source" />
  <div class="container-fluid">
    <div class="row">
      <figure
        class="figure col-auto col-lg-4 col-sm-6 fs-5"
        v-for="section in sections"
        :key="generateId(section.paragraph)"
      >
        <div
          :id="section.images[0]"
          class="carousel slide"
          data-bs-ride="carousel"
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
        <figcaption class="figure-caption">
          {{ section.paragraph }}
        </figcaption>
      </figure>
    </div>
  </div>
  <!-- <base-block :sections="sections" /> -->
</template>

<script>
// import BaseBlock from "@/components/Blocks/BaseBlock.vue";
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import generateId from "@/helpers/generateId";
import Markdown from "@/components/others/Markdown.vue";
export default {
  components: {
    //  BaseBlock
    HomeCarousel,
    Markdown,
  },
  name: "HomePage",
  data() {
    return {
      source:
        ":::.lead \n本會是政府認可註冊武術團體，為香港特別行政區政府及港協暨奧委會認可及資助之體育總會「香港武術聯會」及「香港泰拳理事會」認可屬會會員。\n## 散手自衛術簡介\n香港極拳道武術協會推廣『散手自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。\n\n---\n",
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
    generateId,
  },
};
</script>

<style lang="scss" scoped></style>
