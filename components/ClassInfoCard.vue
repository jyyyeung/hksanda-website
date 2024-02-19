<template>
  <section class="class class__info col-span-12 mx-2 my-4 rounded-lg border-primary p-1 md:col-span-6 2xl:col-span-4">
    <h3 class="text-xl">{{ session.title }} （{{ session.type }}）</h3>

    <dl class="grid grid-cols-12">
      <template v-if="session.classroom">
        <dt class="col-span-3">教室</dt>
        <dd class="col-span-9">（{{ session.classroom }}）上课</dd>
      </template>
      <dt class="col-span-3">時間</dt>
      <dd class="col-span-9">逢{{ session.time }}</dd>
      <dt class="col-span-3">對象</dt>
      <dd class="col-span-9">
        {{ session.students }}
      </dd>
      <template v-if="session.location">
        <dt class="col-span-3">地點</dt>
        <dd class="col-span-9">
          {{ session.location }}
        </dd>
      </template>
    </dl>
    <a :href="`https://wa.me/85297322082&text=我想了解有關${session.time}的${session.title}（${session.type}）`">向教練查詢</a>
  </section>
</template>

<script setup lang="ts">
import { type Session } from "~/utils/types";

interface Props {
  session: Session;
}

defineProps<Props>();
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
