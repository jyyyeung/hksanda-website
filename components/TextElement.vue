<template>
  <h1
    v-if="$props.style === 'h1'"
    class="text-center text-2xl md:text-3xl lg:text-4xl"
  >
    <slot />
  </h1>
  <h2
    v-else-if="$props.style === 'h2'"
    class="text-2xl md:text-3xl lg:text-4xl"
  >
    <slot />
  </h2>
  <h3 v-else-if="$props.style === 'h3'" class="text-base">
    <slot />
  </h3>
  <p v-else-if="$props.style === 'small'" class="text-sm">
    <slot />
  </p>
  <li v-else-if="$props.listItem === 'number'" class="list-inside list-decimal">
    <slot />
  </li>
  <li v-else-if="$props.listItem === 'bullet'" class="list-inside list-disc">
    <slot />
  </li>
  <p v-else class="my-2 whitespace-pre-line indent-8 text-base leading-loose">
    <slot />
  </p>
</template>

<script setup lang="ts">
defineProps({
  style: {
    type: String,
    default: () => "",
  },
  children: {
    type: Object,
    default: () => {},
  },
  _type: String,
  marks: Array,
  markDefs: Array,
  listItem: String,
  level: Number,
});

// const props = defineProps();
// console.log('js', ($props))
</script>
