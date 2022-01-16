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
      title: "關於我們",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
  data() {
    return {
      source: `## 關於我們\n「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。 \n本會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散手自衛術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的課程(包括私人及小組教授)，本會教練持有國家認可之防身自衛術專業資格證書和政府認可註冊持牌武術散手教練及裁判的專業資格。 \n我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。為提高學員在武術技能方面的認受性，本會亦推薦合資格學員考取國家認可防身自衛術證書，政府認可之武術散手教練及裁判專業證書課程和青少年武術散手章別計劃全港公開考核試，考取認可武術章別資格證書。 \n\n---\n## 課程特色\n本會課程是按照國家體育總局製定的防身自衛術和香港政府認可之武術散手章別計劃一至十級內容作為教學大綱。我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。 \n為提高學員在武術技能方面的認受性，本會亦推薦合資格學員考取國家認可防身自衛術專業證書。報考政府認可之武術散手教練及裁判證書課程和青少年散手章別計劃一至十級全港公開考核試，考取認可武術章別資格證書。 \n### 晉升計劃\n\n- 學生達到一定水準後，本會安排升級試，合格者可頒發本會認可級、段證書。 \n- 推薦報考康樂及文化事務署認可及資助之散手章別計劃全港公開考核試，考取武術章別資格。 \n- 推薦報考中國武術協會主辦及國家認可之防身自衛術專業段位證書。 \n- 推薦報考香港武術聯會主辦及政府認可之武術散手教練及裁判專業證書。 \n\n---\n## 基本內容\n\n它包括熱身運動、柔韌素質訓練、力量素質訓練、步法訓練、拳腿組合擊靶、摔法及擒拿訓練等。 \n\n---\n## 訓練順序\n- 熱身\n- 跳繩\n- 拉筋\n- 基本動作\n- 組合動作\n- 空擊訓練\n- 自衛術技巧\n- 組合攻防對練\n- 放鬆動作\n\n---\n- 柔韌性訓練\n- 靈敏性訓練\n- 速度訓練\n- 力量訓練\n- 耐力訓練\n- 功力訓練\n- 抗打訓練`,
    };
  },
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
  font-family: "luxun";
  font-size: xxx-large;
}
</style>
