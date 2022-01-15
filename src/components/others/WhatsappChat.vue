<template>
  <div class="layout">
    <SocialChat icon :attendants="attendants">
      <template #header>
        <p>立即致電或whatsApp查詢有關開班詳情及確認上課時間</p>
      </template>
      <template #button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        />
      </template>
      <!-- <template #footer>
        <small>Opening hours: 8am to 6pm</small>
      </template> -->
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from "vue-social-chat";
import "vue-social-chat/dist/style.css";
export default {
  name: "MyNameComponent",
  components: {
    SocialChat,
  },

  setup() {
    const attendants = [
      {
        app: "whatsapp",
        label: "總教練",
        name: "傅潤車",
        number: "85297322082",
        avatar: {
          // src: "/src/assets/images/avatar/wymanfu.png",
          src: "src/assets/images/avatar/wymanfu.png",
          alt: "傅潤車",
        },
      },
      // ...
    ];

    return { attendants };
  },
};
</script>
<style lang="scss">
:root {
  --vsc-bg-header: rgb(106, 189, 99);
  --vsc-bg-button: rgb(106, 189, 99);
}
</style>
