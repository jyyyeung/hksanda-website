<template>
    <div class="container">
        <div class="columns-1 lg:columns-2">
            <div v-for="component in data?.components" :key="url">
                <YoutubeEmbed :url="component.url" :pending="pending" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { YoutubeEmbed } from "#components";

const GET_VIEW_BY_ROUTE = groq`*[_type == "page" && title == "videos-gallery"][0]`

const { data, pending, refresh } = useSanityQuery(GET_VIEW_BY_ROUTE);

if (!data.value) {
    refresh()
}

useSeoMeta({
    title: '本會訓練影片',
})



</script>
