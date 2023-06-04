<template>
    <div class="container">
        <div v-if="getIsAdmin">
            <!--<Chips v-model="youtubeList" separator="," />-->
            <button class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                type="button" @click="changeYoutubeList">
                儲存
            </button>
        </div>
        <div v-if="!pending" class="columns-1 lg:columns-2">
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
const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);

const { data, pending } = await useLazyAsyncQuery(GET_VIEW_BY_ROUTE, { route: '/gallery/videos' });
const getViewByRoute = data.value?.getViewByRoute;

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
