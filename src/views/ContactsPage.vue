<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:21:50
 * @FilePath: /hksanda-website/src/views/ContactsPage.vue
 * @Description:  Contacts Page for company
-->
<template>
  <div class="container">
    <h1>联络我们</h1>
    <div class="row justify-content-center">
      <div class="contact col-12 fs-4 col-xl-6">
        <h2>香港極拳道武術協會</h2>
        <dl class="row row-cols-1 row-cols-sm-2">
          <template v-for="contact in contacts" :key="contact.id">
            <dt class="col">
              <mdicon :name="contact.icon" />{{ contact.field }}
            </dt>
            <dd class="col">
              <a target="_blank" v-if="contact.to" :href="contact.to">{{
                contact.content
              }}</a>
              <template v-else>{{ contact.content }}</template>
            </dd>
          </template>
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
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContactsPage",
  setup() {
    useMeta({
      title: "關於我們",
      htmlAttrs: {
        lang: "zh-HK",
        amp: true,
      },
    });
  },
  mounted() {
    this.getContacts();
    this.$nextTick(() => {
      this.localizePage();
    });
  },
  methods: {
    ...mapActions(["localizePage", "getContacts"]),
  },
  computed: {
    ...mapGetters({ contacts: "getContacts" }),
  },
};
</script>
