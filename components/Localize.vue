<template>
    <section>
        <!--<button id="dropdownLanguage" data-dropdown-toggle="dropdown"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ignore-opencc"
            type="button">{{ languages.find((language) => (language.code == lang))?.name }} <svg class="w-4 h-4 ml-2"
                aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg></button>

        <div id="dropdown" class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLanguage">
                <li v-for="language in languages" :key="language.code">
                    <button @click="lang = language.code"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        type="button">{{ language.name }}
                    </button>
                </li>

            </ul>
        </div>
        -->
    </section>
</template>

<script setup lang="ts">
const store = useMainStore();
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
