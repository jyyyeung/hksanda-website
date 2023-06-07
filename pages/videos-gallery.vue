<template>
    <div class="container">
        <div class="columns-1 lg:columns-2">
            <div v-for="component in data?.components" :key="url" class="my-2">
                <YoutubeEmbed :url="component.url" :pending="pending" />
                <!--<lite-youtube :videoid="component.url.substring(component.url.length - 11)"
                    params="controls=0&rel=0&enablejsapi=1&autoplay=0" />
                <ClientOnly>
                    <LazyYoutube
                        :src="`https://www.youtube.com/watch?v=${component.url.substring(component.url.length - 11)}`" />
                </ClientOnly>-->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { YoutubeEmbed } from "#components";
// import { LazyYoutube } from "vue-lazytube";

const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && title == "videos-gallery"][0]`

const { data, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);

if (!data.value) {
    refresh()
}

useSeoMeta({
    title: '本會訓練影片',
})



</script>
