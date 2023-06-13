<template>
    <section class="class my-4 col-span-12 md:col-span-6 xl:col-span-4 class__info ">
        <h3 class="text-lg">{{ $props.title }} （{{ $props.type }}）</h3>

        <dl class="grid grid-cols-12 h5">
            <template v-if="$props.classroom">
                <dt class="col-span-3">教室</dt>
                <dd class="col-span-9">（{{ $props.classroom }}）上课</dd>
            </template>
            <dt class="col-span-3">时间：</dt>
            <dd class="col-span-9">逢{{ $props.time }}</dd>
            <dt class="col-span-3">對象</dt>
            <dd class="col-span-9">
                {{ $props.students }}
            </dd>
            <template v-if="$props.location">
                <dt class="col-span-3">地点</dt>
                <dd class="col-span-9">
                    {{ $props.location }}
                </dd>
            </template>
        </dl>
    </section>
</template>

<script setup lang="ts">
import { Session } from '~/utils/types';

defineProps<Session>()
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
