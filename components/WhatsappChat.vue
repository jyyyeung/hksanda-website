<template>
  <div class="layout">
    <SocialChat :attendants="attendants" icon>
      <template #header>
        <p>立即致電或WhatsApp查詢有關開班詳情及確認上課時間</p>
      </template>
      <template #button>
        <img format="webp" alt="icon whatsapp" aria-hidden="true" class="inline" src="/svg/whatsapp.svg" />
      </template>
      <!-- <template #footer>
          <small>Opening hours: 8am to 6pm</small>
        </template> -->
    </SocialChat>
  </div>
</template>

<script setup lang="ts">
import { SocialChat } from "vue-social-chat";
import { GET_CONTACTS } from "~/utils/queries";
import { isWhatsappContact, normalizeWhatsappNumber } from "~/utils/whatsapp";

// The number is not stored here either: it follows the 聯絡資料 「WhatsApp」 row, so
// changing it in the Studio also updates the floating chat button.
const { data: contacts } = useSanityQuery(GET_CONTACTS);

const whatsappNumber = computed<string>(() => {
  const row = ((contacts.value ?? []) as { field?: string; to?: string; content?: string }[]).find(
    (contact) => isWhatsappContact(contact)
  );
  return normalizeWhatsappNumber(row?.content || row?.to);
});

const attendants = computed(() => [
  {
    app: "whatsapp",
    label: "總教練",
    name: "傅潤車",
    number: whatsappNumber.value,
    avatar: {
      src: "/images/2QaciX.png",
      alt: "傅潤車",
    },
  },
]);
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
