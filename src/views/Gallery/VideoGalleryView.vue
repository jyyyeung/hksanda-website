<template>
    <div class="container">
        <div class="row">
            <div
                v-for="url in youtubeList"
                :key="url"
                class="col-12 col-lg-6 my-2"
            >
                <div class="ratio ratio-16x9">
                    <iframe
                        :id="url.substring(url.length - 11)"
                        :title="url.substring(url.length - 11)"
                        allowfullscreen="1"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        :src="`//www.youtube.com/embed/${url.substring(
                            url.length - 11
                        )}?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0`"
                    />
                </div>
            </div>
        </div>
        <div v-if="isAdmin">
            <Chips
                v-model="youtubeList"
                separator=","
            />
            <button
                type="button"
                class="btn btn-primary"
                @click="changeYoutubeList"
            >
                儲存
            </button>
        </div>
    </div>
</template>

<script>
import { GET_VIEW_BY_ROUTE, UPDATE_VIEW } from "@/apollo/view";
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";

export default defineComponent({
    name: "VideoGallery",
    setup() {
        useMeta({
            title: "影片",
        });
    },
    data() {
        return {
            youtubeList: null,
        };
    },
    computed: {
        ...mapGetters("isAdmin"),
    },
    apollo: {
        getViewByRoute: {
            query: GET_VIEW_BY_ROUTE,
            variables: {
                route: "/gallery/videos",
            },
        },
    },
    watch: {
        getViewByRoute(route) {
            console.log(route.content);
            const list = JSON.parse(route.content);
            this.youtubeList = Object.assign([], list);
        },
    },
    methods: {
        changeYoutubeList: () => {
            this.$apollo.mutate({
                mutation: UPDATE_VIEW,
                variables: {
                    details: {
                        contents: JSON.stringify(this.youtubeList),
                        viewId: this.getViewByRoute.id,
                    },
                },
            });
        },
    },
});
</script>
