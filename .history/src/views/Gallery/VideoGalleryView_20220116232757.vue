<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-11 10:37:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:27:56
 * @Description: file content
 * @FilePath: /hksanda-website/src/views/Gallery/VideoGalleryView.vue
-->
<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-11 10:37:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:24:55
 * @Description: file content
-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 my-2" v-for="url in youtubeList" :key="url">
        <div class="ratio ratio-16x9">
          <iframe
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            :src="`https://www.youtube.com/embed/${url.substring(
              url.length - 11
            )}?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0&origin=http://Flocalhost:3000&widgetid=1`"
            id="widget2"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "VideoGallery",
  setup() {
    useMeta({
      title: "影片",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
  data() {
    return {
      youtubeList: [
        "https://www.youtube.com/watch?v=sMTIzDk6ZEw",
        "https://youtu.be/bY7BpyOmTTs",
        "https://youtu.be/QLIy3_YWhTs",
        "https://youtu.be/vdmZSdksAgk",
        "https://youtu.be/uuckXG3itGA",
        "https://youtu.be/3x2hktzVGLk",
        "https://youtu.be/FB522ATIjuY",
        "https://youtu.be/vNqqS05WAO0",
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
