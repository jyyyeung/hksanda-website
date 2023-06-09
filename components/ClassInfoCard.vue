<template>
    <section class="class my-4 col-span-12 md:col-span-6 xl:col-span-4 class__info ">
        <h3 class="text-lg">{{ session.title }} （{{ session.type }}）</h3>

        <dl class="grid grid-cols-12 h5">
            <template v-if="session.classroom">
                <dt class="col-span-3">教室</dt>
                <dd class="col-span-9">（{{ session.classroom }}）上课</dd>
            </template>
            <dt class="col-span-3">时间：</dt>
            <dd class="col-span-9">逢{{ session.time }}</dd>
            <dt class="col-span-3">對象</dt>
            <dd class="col-span-9">
                {{ session.students }}
            </dd>
            <template v-if="session.location">
                <dt class="col-span-3">地点</dt>
                <dd class="col-span-9">
                    {{ session.location }}
                </dd>
            </template>
        </dl>
    </section>
</template>

<script setup lang="ts">
import { Session } from '~/utils/types';

defineProps({
    session: {
        type: Object as () => Session,
        required: true
    },
})
</script>

<style lang="scss" scoped>
.class {
    .class__info {
        &>p {
            line-height: 2em !important;
        }
    }
}
</style>
