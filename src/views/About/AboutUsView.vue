<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 14:54:48
 * @FilePath: /hksanda-website/src/views/About/AboutUsView.vue
 * @Description: ABout us View to display the basics of our org
-->
<template>
  <div class="container-fluid">
    <h1>關於我們</h1>
    <markdown :source="source" />
  </div>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { useMeta } from "vue-meta";

export default {
  components: { Markdown },
  name: "AboutUsView",
  setup() {
    useMeta({
      title: "關於我們"
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
  data() {
    return {
      source: `「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。 \n本會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散手自衛術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的課程(包括私人及小組教授)，本會教練持有國家認可之防身自衛術專業資格證書和政府認可註冊持牌武術散手教練及裁判的專業資格。 \n我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。為提高學員在武術技能方面的認受性，本會亦推薦合資格學員考取國家認可防身自衛術證書，政府認可之武術散手教練及裁判專業證書課程和青少年武術散手章別計劃全港公開考核試，考取認可武術章別資格證書。 \n\n---\n`
    };
  }
};
</script>

<style lang="scss">
p {
  margin-top: 0 !important;
}

.p-panel {
  margin: 10px auto;
  .p-panel-header {
    border: none;
    background: transparent;
  }

  .p-panel-content {
    background: transparent;
    border: none;
  }
}

.p-panel-title {
  font-family: "FZLuXun";
  font-size: xxx-large;
}
</style>
