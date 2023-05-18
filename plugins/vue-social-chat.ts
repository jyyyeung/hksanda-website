import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSocialChat);
})
