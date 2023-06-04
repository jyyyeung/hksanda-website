<template>
    <div class="container">
        <div v-if="pending">
            <div role="status"
                class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" fill="currentColor" viewBox="0 0 384 512">
                    <path
                        d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else class="columns-1 lg:columns-2">
            <div v-for="url in youtubeList" :key="url">
                <div class="my-2">
                    <iframe :id="url.substring(url.length - 11)" class="aspect-video w-full"
                        :src="`//www.youtube.com/embed/${url.substring(url.length - 11)}?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0`"
                        :title="url.substring(url.length - 11)"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="1" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GET_VIEW_BY_ROUTE, UPDATE_VIEW } from "@/apollo/view";

const youtubeList = ref(null);
// const store = useMainStore();
// const { getIsAdmin } = storeToRefs(store);

const { data, pending, refresh } = await useLazyAsyncQuery(GET_VIEW_BY_ROUTE, { route: '/gallery/videos' });
const getViewByRoute = data.value?.getViewByRoute;
if (!data.value) {
    refresh()
}
const list = getViewByRoute && JSON.parse(getViewByRoute.content);
youtubeList.value = Object.assign([], list);

useSeoMeta({
    title: '本會訓練影片',
})


const changeYoutubeList = () => {
    const { mutate } = useMutation(UPDATE_VIEW, {
        details: {
            // contents: JSON.stringify(youtubeList.value),
            viewId: getViewByRoute.id,
        },
    })
}

</script>
