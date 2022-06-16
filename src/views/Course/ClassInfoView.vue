<template>
    <h1>常規課程及地點</h1>
    <div class="container">
        <div class="row">
            <class-info-card
                v-for="session in getClasses"
                :key="session.id"
                :session="session"
            />
        </div>
    </div>
</template>

<script>
import ClassInfoCard from "@/components/class/ClassInfoCard.vue";
import { GET_CLASSES } from "@/apollo/class";
import { useMeta } from "vue-meta";

export default {
    name: "ClassInfo",
    components: { ClassInfoCard },
    apollo: {
        getClasses: { query: GET_CLASSES },
        //TODO: function to add, remove,update class
    },
    setup() {
        useMeta({
            title: "常規課程",
        });
    },
};
</script>
