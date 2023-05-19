<template>
    <ClientOnly>
        <Dropdown v-model="lang" class="ignore-opencc" :options="languages" option-label="name" style="z-index: 10000"
            option-value="code" />
    </ClientOnly>
</template>

<script setup>
const store = useMainStore();
// const view = computed(()=>store.getViewByRoute)
const { getLang } = storeToRefs(store);

const languages = [
    { name: "繁體中文", code: "zh-HK" },
    { name: "简体中文", code: "zh-CN" },
];
const lang = computed({
    get() {
        return store.getLang;
    },
    set(lang) {
        return store.setLang(lang);
    },
})
const { localizePage } = store;
// const lang = reactive(getLang);
watch(
    () => lang,
    () => {
        console.log(getLang);
        localizePage();
    }
)
</script>
