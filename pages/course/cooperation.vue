<template>
    <render-view :view="getViewByRoute('/course/cooperation')"/>
</template>


<script setup>
import {RenderView} from "#components"

const store = useMainStore();
// const view = computed(()=>store.getViewByRoute)
const {getViewByRoute} = storeToRefs(store);

</script>
