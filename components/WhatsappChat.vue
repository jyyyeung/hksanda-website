<template>
    <div class="layout">
        <LazyClientOnly>
            <SocialChat :attendants="attendants" icon>
                <template #header>
                    <p>立即致電或whatsApp查詢有關開班詳情及確認上課時間</p>
                </template>
                <template #button>
                    <nuxt-img format=" webp" alt="icon whatsapp" aria-hidden="true" class="inline"
                        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg" />
                </template>
                <!-- <template #footer>
          <small>Opening hours: 8am to 6pm</small>
        </template> -->
            </SocialChat>
        </LazyClientOnly>
    </div>
</template>

<script setup lang="ts">
import { SocialChat } from "vue-social-chat";

const attendants = [
    {
        app: "whatsapp",
        label: "總教練",
        name: "傅潤車",
        number: "85297322082",
        avatar: {
            src: "https://upload.cc/i1/2022/01/15/2QaciX.png",
            alt: "傅潤車",
        },
    },
    // ...
];
</script>

<style lang="scss">
@import "vue-social-chat/dist/style.css";

:root {
    --vsc-bg-header: rgb(106, 189, 99);
    --vsc-bg-button: rgb(106, 189, 99);

    .vsc-popup-button img {
        display: inline;
    }
}
</style>
