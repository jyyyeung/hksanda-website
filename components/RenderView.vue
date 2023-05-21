<template>
    <div v-if="view?.title != null" class="container">
        <h1 class="text-4xl text-center">{{ view?.title }}</h1>
        <markdown v-if="view?.content != null" :source="view?.content" />
        <button v-if="getIsAdmin"
            class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit"
            @click="edit">
            編輯
        </button>
    </div>
</template>

<script setup lang="ts">
import { Markdown } from "#components";
import { GET_VIEW_BY_ROUTE } from "~/apollo/view";

const store = useMainStore();

const props = defineProps({
    route: String
})
const { data } = await useAsyncQuery(GET_VIEW_BY_ROUTE, { route: props.route });
const view = data.value?.getViewByRoute;

const { toggleModel, updateView } = store;

const { getIsAdmin } = storeToRefs(store);

function edit() {
    const modelDetails = {
        content: view.content,
        submitFunction: submitChange,
    };
    toggleModel(modelDetails);
}

function submitChange(updatedContent) {
    updateView({
        viewId: view.id,
        content: updatedContent,
    });
}

</script>

