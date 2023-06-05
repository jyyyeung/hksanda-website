<template>
    <render-view route="關於我們" />
</template>


<script setup lang="ts">
import { RenderView } from "#components"

useSeoMeta({
    title: '關於我們',
    description: '本會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散打自衛術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的武術課程(包括私人及小組教授)，本會教練持有國家認可之防身自衛術專業資格證書和政府認可註冊持牌武術散打教練及裁判的專業資格。我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。',
    // reactive example
    // ogImage: () => someData.value?.image
})

</script>

