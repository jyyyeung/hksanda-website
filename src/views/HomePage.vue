<template>
  <h1>香港极拳道武术协会</h1>
  <section-blocks :sections="sections" />
</template>

<script>
import SectionBlocks from "@/components/others/SectionBlocks.vue";
export default {
  components: { SectionBlocks },
  name: "HomePage",
  data() {
    return {
      sections: [
        {
          paragraph:
            "本會是政府認可註冊武術團體，為香港特別行政區政府及港協暨奧委會認可及資助之體育總會「香港武術聯會」及「香港泰拳理事會」認可屬會會員。",
        },
        {
          h2: "師資",
          paragraph:
            "擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。",
          images: {
            images: [
              "https://www.hksanda.com/images/2017-01-12%2022.25.26.jpg",
            ],
          },
        },
        {
          h2: "特點",
          paragraph:
            "此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。",
          images: { images: ["https://www.hksanda.com/images/%E5%8F%AF.jpg"] },
        },
        {
          paragraph:
            "香港極拳道武術協會推廣『散手自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。",
          h2: "散手自衛術簡介",
          endLine: true,
        },
        {
          paragraph:
            "康樂及文化事務署認可及資助之全港武術自衛散手章別1一10公開考核試，本會14名學員全部合格，取得自衛散手章別資格。",
          images: {
            images: [
              "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%91.jpg",
              "https://www.hksanda.com/images/%E5%8F%AF.jpg",
              "https://www.hksanda.com/images/%E5%8F%AF%EF%BC%96.jpg",
            ],
            onLeft: true,
            classes: "col-6",
          },
          classes: "col-6",
        },
        {
          paragraph: "2016 / 2018年香港金文泰中學（防身自衛術）教學及講座",
          images: {
            images: [
              "https://www.hksanda.com/images/IMG-20181126-WA0100.jpg",
              "https://www.hksanda.com/images/IMG-20181126-WA0111.jpg",
              "https://www.hksanda.com/images/2017-11-27%2016.34.23.jpg",
            ],
            onLeft: true,
            classes: "col-6",
          },
          classes: "col-6",
        },
        {
          paragraph:
            "2019年仁濟醫院嚴徐玉珊社區服務中心（防身自衛術）教學及講座",
          images: {
            images: [
              "https://www.hksanda.com/images/IMG-20191103-WA0012.jpg",
              "https://www.hksanda.com/images/IMG-20191103-WA0013.jpg",
              "https://www.hksanda.com/images/IMG-20191103-WA0014.jpg",
            ],
            onLeft: true,
            classes: "col-6",
          },
          classes: "col-6",
        },
        {
          paragraph: "2017年香港中文大學醫學院院會（防身自衛術）教學及講座",
          images: {
            images: [
              "https://www.hksanda.com/images/IMG_20180609_164252.jpg",
              "https://www.hksanda.com/images/IMG_20180609_164303.jpg",
              "https://www.hksanda.com/images/IMG_20180609_164826.jpg",
            ],
            onLeft: true,
            classes: "col-6",
          },
          classes: "col-6",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
