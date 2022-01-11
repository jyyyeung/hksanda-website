<template>
  <div>
    <h1>私人亲子功夫班</h1>
    <p>
      親子武術班為家長和12歲以下子女一起練習武藝的課程，宗旨是令家長安心而又一起強身的課餘活動。在這個科技年代，人與人親身溝通和相處機會愈來愈少，若爸媽再加上長時間工作，與孩子的關係就更見疏離。此課程可讓親子之間可以達到良好的互動默契及健康的效果，以及和孩子除了言語對話，更可以用肢體來表達，讓親子之間關係可以更加密切。
    </p>
    <div class="list">
      <p>
        課程目的：鼓勵父母與孩子一同學習，從而增進親子感情及溝通。歡迎家庭成員自組上課。
      </p>
      <p>
        課程特點：父母亦透過與兒女的親密身體接觸，享盡天倫，令孩兒更能感受父母的關愛，極有效促進和諧親子關係。協助改善子女的不良行為、建立良好的親子互動關係。
      </p>
      <p>教練：本會由全職專業註册教練任教，全日任揀時段預约上課。</p>
    </div>
    <h2>習武對孩子的好處：</h2>
    <ol>
      <li>協助兒童協調性、節奏感和肌肉控制力的發展。</li>
      <li>學習與同年齡兒童互動的人際關係處理能力。</li>
      <li>學習武術增強保護自我的能力。</li>
      <li>藉由武術來感受身體和能力。</li>
      <li>舒緩身心，紓解壓力又健康。</li>
      <li>增進肌力，提升身體協調性。</li>
    </ol>
    <professional-coach />
    <class-info-notes />
  </div>
</template>

<script lang="ts">
import ProfessionalCoach from "@/components/others/ProfessionalCoach.vue";
import ClassInfoNotes from "@/components/others/ClassInfoNotes.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ClassInfoNotes, ProfessionalCoach },
  name: "PrivateFamilyKungFu",
});
</script>

<style lang="scss" scoped></style>
