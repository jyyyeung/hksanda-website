<template>
  <section>
    <div class="container">
      <h1 class="text-4xl text-center">
        {{ $props.title }} </h1>
      <SanityContent v-if="$props.content != null" :serializers="serializers" :blocks="$props.content" />
    </div>
  </section>
</template>

<script setup lang="ts">
// import { SanityContent, YoutubeEmbed } from "#components";
import { OrderedList } from "#components";
import { Serializers } from "@nuxtjs/sanity/dist/runtime/components/sanity-content";
import { SanityView } from "~/utils/types";
// import TextSkeleton from "./TextSkeleton.vue";

const serializers: Serializers = {
  // types: {
  //   block: (props) => {
  //     console.log("props", (props))
  //     // const { style = "normal" } = props.node;

  //     // if (/^h\d/.test(style)) {
  //     //   const level = style.replace(/[^\d]/g, "");
  //     //   return React.createElement(
  //     //     style,
  //     //     { className: `heading-${level}` },
  //     //     props.children
  //     //   );
  //     // }

  //     if (props.listitem === "number") {
  //       return OrderedList;
  //     }

  //     // Fall back to default handling
  //     // return DefaultSerializer(props);
  //   },
  // },
  listItem: (props) => console.log(props) || OrderedList

  // list: (props) => (
};
defineProps<SanityView>();

// defineProps({
//   view: {
//     type: Object as () => SanityView,
//     required: true
//   },
//   pending: Boolean
// })
</script>

