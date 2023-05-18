<template>
    <render-view :view="getViewByRoute('/course/session')"/>
</template>


<script setup>
import {RenderView} from "#components"

const store = useMainStore();
const {getViewByRoute} = store;

</script>
