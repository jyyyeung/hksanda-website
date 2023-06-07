<template>
    <section>
        <div class="w-full">
            <section v-if="pending">
                <TextSkeleton />
            </section>
            <section v-else v-for="course in courseContents">
                <Markdown v-bind:source="'# ' + course?.name" />
                <SanityContent :blocks="course?.content" />
                <Markdown :source="footer" />
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GET_COURSE_CONTENTS } from '~/utils/queries';


const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`


const { data: courseContents, pending, refresh } = useSanityQuery(GET_COURSE_CONTENTS);

if (!courseContents.value) {
    refresh()
}
useSeoMeta({
    title: '學習內容',
})
</script>

