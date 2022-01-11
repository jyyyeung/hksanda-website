<template>
  <el-row :gutter="20" class="class">
    <el-col :span="12" class="class__info">
      <p class="text-2xl">{{ session.title }} （{{ session.type }}）</p>
      <p v-show="session.classroom">教室：（{{ session.classroom }}）上课</p>
      <p>时间：逢{{ session.time }}</p>
      <p>對象：{{ session.students }}</p>
      <p v-show="session.location">地点：{{ session.location }}</p>
    </el-col>
    <el-col :span="12" v-show="session.mapQuery">
      <!-- https://maps.google.com/maps?f=q&source=s_q&hl=zh-TW&geocode=&q=香港仔市政大廈體育館&aq=&sll=22.26485,114.240204&sspn=0.001735,0.00327&ie=UTF8&hq=仔市政大廈體育館&hnear=香港&t=m&ll=22.249293,114.154623&spn=0.001986,0.003476&z=17&output=embed -->
      <iframe
        :src="`https://maps.google.com/maps?f=q&source=s_q&hl=zh-HK&geocode=&q=${session.mapQuery}&aq=&ie=UTF8&t=m&z=17&output=embed`"
        height="100%"
        width="90%"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassInfoCard",
  props: {
    session: Object,
  },
});
</script>

<style lang="scss" scoped>
.class {
  .class__info {
    // margin: 10px;
    & > p {
      line-height: 2em !important;
    }
  }
}
</style>
