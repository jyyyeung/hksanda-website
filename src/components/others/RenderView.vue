<template>
    <div
        v-if="view"
        class="container-fluid"
    >
        <h1>{{ view.title }}</h1>
        <markdown :source="view.content" />
        <button
            v-if="isAdmin"
            type="submit"
            class="btn btn-primary mb-3"
            @click="edit"
        >
            編輯
        </button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Markdown from "./Markdown.vue";
export default {
    name: "RenderView",
    components: { Markdown },
    props: {
        //view: {
        //   title: String,
        //   content: String,
        //   id: String,
        //   route: String,
        // },
        view: { 
            type: Object, 
            default: ()=> ( { 
                title: "", 
                content: '',
                id: "", 
                route:""
            }) 
        }
    },
    computed: {
        ...mapGetters(["isAdmin"]),
    },
    mounted() {
        this.getView();
    },
    methods: {
        ...mapActions(["toggleModel", "updateView", "getView"]),
        edit() {
            const modelDetails = {
                content: this.view.content,
                submitFunction: this.submitChange,
            };
            this.toggleModel(modelDetails);
        },
        submitChange(updatedContent) {
            this.updateView({
                viewId: this.view.id,
                content: updatedContent,
            });
        },
    },
};
</script>

<style></style>
