<template>
  <div class="container">
    <h1>联络我们</h1>
    <div class="row justify-content-center">
      <div class="contact col-12 fs-4 col-xl-6">
        <h2>香港極拳道武術協會</h2>
        <dl class="row row-cols-1 row-cols-sm-2">
          <dt class="col">
            <svg-icon type="mdi" :path="contact"></svg-icon>聯絡人
          </dt>
          <dd class="col">傅教練</dd>
          <dt class="col">
            <svg-icon type="mdi" :path="hotline"></svg-icon>查詢熱線
          </dt>
          <dd class="col"><a href="tel:28983068">28983068</a></dd>
          <dt class="col">
            <svg-icon type="mdi" :path="phone"></svg-icon>手機
          </dt>
          <dd class="col"><a href="tel:97322082">97322082</a></dd>
          <dt class="col">
            <svg-icon type="mdi" :path="whatsapp"></svg-icon>WhatsApp
          </dt>
          <dd class="col">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=85297322082"
              >97322082</a
            >
          </dd>
          <dt class="col">
            <svg-icon type="mdi" :path="facebook"></svg-icon>Facebook
          </dt>
          <dd class="col">
            <a
              target="_blank"
              href="https://www.facebook.com/散手自衛術訓練班-172784523322461/"
              >散手自衛術訓練班</a
            >
          </dd>
          <dt class="col">
            <svg-icon type="mdi" :path="email"></svg-icon>本會電郵
          </dt>
          <dd class="col">
            <a target="_blank" href="mailto:hktwdmaa@gmail.com"
              >hktwdmaa@gmail.com</a
            >
          </dd>
          <dt class="col">
            <svg-icon type="mdi" :path="website"></svg-icon>本會網址
          </dt>
          <dd class="col">
            <a target="_blank" href="http://www.hksanda.com">www.hksanda.com</a>
          </dd>
        </dl>

        <p>請報名前致電或whatsApp有關開班詳情及確認上課時間</p>
      </div>
      <div
        class="col-12 col-xl-6 d-none d-md-block"
        style="height: 50vh; margin: auto"
      >
        <iframe
          id="facebook-frame"
          src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散手自衛術訓練班-172784523322461&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144&height=1000&width=500"
          height="100%"
          width="100%"
          style="border: none; overflow: hidden"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <!-- scrolling="no" -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiPhone,
  mdiWhatsapp,
  mdiAccount,
  mdiEmail,
  mdiLinkVariant,
  mdiCellphone,
  mdiPrinter,
} from "@mdi/js";
import { useMeta } from "vue-meta";

export default {
  name: "ContactsPage",
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
      whatsapp: mdiWhatsapp,
      facebook: mdiFacebook,
      phone: mdiCellphone,
      hotline: mdiPhone,
      contact: mdiAccount,
      email: mdiEmail,
      website: mdiLinkVariant,
      fax: mdiPrinter,
    };
  },
};
</script>

<style lang="scss" scoped>
// #facebook-frame {
//   border: none;
//   overflow: hidden;
//   max-height: 500px;
// }
</style>
