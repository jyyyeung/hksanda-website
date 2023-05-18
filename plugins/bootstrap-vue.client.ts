import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.provide('bootstrap', bootstrap)
})
