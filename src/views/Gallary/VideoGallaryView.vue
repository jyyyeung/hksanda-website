<template>
  <YouTube
    src="https://www.youtube.com/watch?v=sMTIzDk6ZEw"
    @ready="onReady"
    ref="youtube"
    :vars="vars"
    width="50%"
  />
</template>

<script>
import "vue3-video-play/dist/style.css";

import YouTube from "vue3-youtube";

export default {
  name: "VideoGallary",
  components: { YouTube },
  data() {
    return {
      vars: {
        autoplay: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        enablejsapi: 1,
        cc_load_policy: 0,
      },
    };
  },

  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
};
</script>

<style lang="scss" scoped></style>
