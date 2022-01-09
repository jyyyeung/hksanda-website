<template>
  <div>
    <h1>联络我们</h1>
    <div class="grid" style="height: 100%">
      <div class="contact col">
        <h2>香港極拳道武術協會</h2>
        <p><svg-icon type="mdi" :path="contact"></svg-icon>聯 絡 人 ：傅教練</p>
        <p>
          <svg-icon type="mdi" :path="hotline"></svg-icon>查詢熱線：
          <a href="tel:28983068">28983068</a>
        </p>
        <p>
          <svg-icon type="mdi" :path="phone"></svg-icon>手 機：
          <a href="tel:97322082">97322082</a>
        </p>
        <p>
          <svg-icon type="mdi" :path="whatsapp"></svg-icon>
          WhatsApp:
          <a href="https://api.whatsapp.com/send?phone=97322082">97322082</a>
        </p>
        <p>
          <svg-icon type="mdi" :path="facebook"></svg-icon> Facebook:
          <a href="https://www.facebook.com/散手自衛術訓練班-172784523322461/"
            >香港極拳道武術協會</a
          >
        </p>
        <p>
          <svg-icon type="mdi" :path="fax"></svg-icon>傳 真：<a
            href="fax:28983778"
            >28983778</a
          >
        </p>
        <p>
          <svg-icon type="mdi" :path="email"></svg-icon>本會電郵：
          <a href="mailto:hktwdmaa@gmail.com">hktwdmaa@gmail.com</a>
        </p>
        <p>
          <svg-icon type="mdi" :path="website"></svg-icon>本會網址：<a
            href="http://www.hksanda.com"
            >www.hksanda.com</a
          >
        </p>
        <p>請報名前致電或whatsApp有關開班詳情及確認上課時間</p>
      </div>
      <div class="col-6">
        <iframe
          id="facebook-frame"
          src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散手自衛術訓練班-172784523322461&tabs=timeline&width=1000&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144"
          width="100%"
          height="100%"
          style="border: none; overflow: hidden; max-height: 500px"
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
export default {
  name: "ContactsPage",
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
