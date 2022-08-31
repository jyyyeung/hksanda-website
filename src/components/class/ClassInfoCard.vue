<template>
    <!--<div class="row">-->
    <!--<div class="">-->
    <span class="class my-4 col-12 col-lg-6 class__info">
        <h3 class="h3">{{ session.title }} （{{ session.type }}）</h3>

        <dl class="row h5">
            <template v-if="session.classroom">
                <dt class="col-3">教室</dt>
                <dd class="col-9">（{{ session.classroom }}）上课</dd>
            </template>
            <dt class="col-3">时间：</dt>
            <dd class="col-9">逢{{ session.time }}</dd>
            <dt class="col-3">對象</dt>
            <dd class="col-9">
                {{ session.students }}
            </dd>
            <template v-if="session.location">
                <dt class="col-3">地点</dt>
                <dd class="col-9">
                    {{ session.location }}
                </dd>
            </template>
        </dl>
        <button
            v-if="isAdmin"
            class="btn btn-primary"
            type="submit"
            @click="edit(session)"
        >
            編輯 {{ session.type }}
        </button>
    </span>
    <!--</div>-->
    <!--
        <div
        v-show="session.mapQuery"
        class="col-12 col-lg-6"
        >
        <iframe
        :src="`https://maps.google.com/maps?f=q&source=s_q&hl=zh-HK&geocode=&q=${session.mapQuery}&aq=&ie=UTF8&t=m&z=17&output=embed`"
        :title="`${session.mapQuery}-Map`"
        height="100%"
        width="100%"
        frameborder="0"
        scrolling="no"
        />
        </div>
-->
    <!--</div>-->
</template>

<script>
export default {
    name: "ClassInfoCard",
    props: {
        session: {
            type: Object,
            default: () => ({
                title: "",
                type: "",
                students: null,
                location: null,
                mapQuery: null,
                classroom: null,
            }),
        },
        edit: {
            type: Function,
            required: true
        },
        isAdmin: Boolean
    },
};
</script>

<style lang="scss" scoped>
.class {
    .class__info {
        // margin: 10px;
        & > p {
            line-height: 2em !important;
        }
    }
}
</style>
