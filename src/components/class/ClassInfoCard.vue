<template>
  <div class="row class my-4">
    <div class="col-12 col-lg-6 class__info">
      <h3 class="h3">{{ session.title }} （{{ session.type }}）</h3>

      <!-- <p v-show="session.classroom">教室：（{{ session.classroom }}）上课</p> -->
      <!-- <p>时间：逢{{ session.time }}</p> -->
      <!-- <p>對象：{{ session.students }}</p> -->
      <!-- <p v-show="session.location">地点：{{ session.location }}</p> -->
      <div class="container">
        <dl class="row h5">
          <template v-if="session.classroom">
            <dt class="col-3">教室</dt>
            <dd class="col-9">（{{ session.classroom }}）上课</dd>
          </template>
          <dt class="col-3">时间：</dt>
          <dd class="col-9">逢{{ session.time }}</dd>
          <dt class="col-3">對象</dt>
          <dd class="col-9">{{ session.students }}</dd>
          <template v-if="session.location">
            <dt class="col-3">地点</dt>
            <dd class="col-9">{{ session.location }}</dd>
          </template>
        </dl>
      </div>
    </div>
    <div class="col-12 col-lg-6" v-show="session.mapQuery">
      <!-- https://maps.google.com/maps?f=q&source=s_q&hl=zh-TW&geocode=&q=香港仔市政大廈體育館&aq=&sll=22.26485,114.240204&sspn=0.001735,0.00327&ie=UTF8&hq=仔市政大廈體育館&hnear=香港&t=m&ll=22.249293,114.154623&spn=0.001986,0.003476&z=17&output=embed -->
      <iframe
        :src="`https://maps.google.com/maps?f=q&source=s_q&hl=zh-HK&geocode=&q=${session.mapQuery}&aq=&ie=UTF8&t=m&z=17&output=embed`"
        height="100%"
        width="90%"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassInfoCard",
  props: {
    session: {},
  },
};
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
