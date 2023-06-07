<template>
    <section>
        <div v-for="component in data?.components">
            <carousel v-if="component._type == 'carousel'" :carousel="component" :pending="pending" />
            <masonry v-else-if="component._type == 'masonry'" :masonry="component" :pending="pending" />
        </div>
    </section>
</template> 

<script setup lang="ts">
const GET_PAGE = groq`*[_type == "page" && title == 'training-gallery' ][0]`;
const { data, pending } = useSanityQuery(GET_PAGE);

useSeoMeta({
    title: '本會訓練相簿',
})
</script>

