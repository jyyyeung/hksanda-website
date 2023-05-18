<template>
    <div v-if="props.view" class="container-fluid">
        <h1>{{ props.view.title }}</h1>
        <markdown :source="props.view.content"/>
        <button v-if="getIsAdmin" class="btn btn-primary mb-3" type="submit" @click="edit">
            編輯
        </button>
    </div>
</template>

<script setup>
import {Markdown} from "#components";

const store = useMainStore();
// const getViewByRoute = computed(() => store.getViewByRoute)
const {getIsAdmin} = storeToRefs(store);

const props = defineProps({
    view: {
        title: "",
        content: '',
        id: "",
        route: ""
    }
})

function edit() {
    const modelDetails = {
        content: props.view.content,
        submitFunction: submitChange,
    };
    store.toggleModel(modelDetails);
}

function submitChange(updatedContent) {
    store.updateView({
        viewId: props.view.id,
        content: updatedContent,
    });
}

onMounted(() => {
    // getViewByRoute(props.view.route);
    // store.getView();
})
</script>

