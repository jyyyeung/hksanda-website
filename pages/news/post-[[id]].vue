<template>
  <section>

    <Head>
      <Title>{{ post?.title + " | 最新資訊" }}</Title>
      <Meta name="description" :content="post?.title" />
    </Head>
    <div class="w-full">
      <div class="flex px-4 pb-10 pt-8 lg:px-8">
        <a class="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          href="/news">
          <svg viewBox="0 -9 3 24"
            class="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
            <path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          返回
        </a>
      </div>
      <section v-if="pending">
        <TextSkeleton />
      </section>
      <section v-else>
        <article>
          <h1 v-if="post?.title">{{ post?.title }}</h1>
          <div class="text-center text-sm text-opacity-80">
            <!-- <time> -->
            <!-- {{ localeTime }} -->
            {{ moment(post._createdAt).format("LLLL") }}
            <!-- Monday, April 24, 2023 -->
            <!-- </time> -->
          </div>
          <SanityContent :blocks="post?.content" :serializers="serializers" />
        </article>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import moment from "moment";
const route = useRoute();
import serializers from "~/utils/serializers";
moment.locale("zh");

const GET_COURSE_CONTENT = groq`*[_type == "post" && _id == "${route.params.id}"][0]`;

const { data: post, pending } = useSanityQuery(GET_COURSE_CONTENT);
const localeTime = moment(post.value?._createdAt).locale("zh").format("LLLL");
</script>
