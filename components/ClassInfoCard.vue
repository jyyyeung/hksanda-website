<template>
  <section
    class="class class__info col-span-12 my-4 md:col-span-6 xl:col-span-4"
  >
    <h3 class="text-lg">{{ session.title }} （{{ session.type }}）</h3>

    <dl class="h5 grid grid-cols-12">
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
import { Session } from "~/utils/types";

interface Props {
  session: Session;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.class {
  .class__info {
    & > p {
      line-height: 2em !important;
    }
  }
}
</style>
