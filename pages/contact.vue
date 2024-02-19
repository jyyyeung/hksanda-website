<template>
  <div class="container min-h-[60vh]">
    <h1>聯絡我們</h1>
    <div class="grid grid-cols-12 content-center">
      <div class="contact fs-4 col-span-12 md:col-span-6">
        <h2>香港極拳道武術協會</h2>
        <dl class="grid grid-cols-12">
          <div v-if="pending">loading</div>
          <template v-else v-for="contact in contacts" :key="contact._key">
            <dt class="col-span-3">
              <!--<mdicon :name="contact.icon" />-->
              {{ contact.field }}
            </dt>
            <dd class="col-span-9">
              <NuxtLink v-if="contact.to" :href="contact.to" target="_blank">{{ contact.content }}
              </NuxtLink>
              <template v-else>
                {{ contact.content }}
              </template>
            </dd>
          </template>
        </dl>
        <p>請報名前致電或whatsApp有關開班詳情及確認上課時間</p>
      </div>
      <!--TODO: Change to oembed plugin so can style posts? -->
      <div class="col-span-12 m-auto hidden h-full w-full md:col-span-6 md:block">
        <ClientOnly>
          <iframe class="h-full w-full overflow-hidden border-none" id="facebook-frame"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true"
            frameborder="0"
            src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散打自衛術訓練班-172784523322461&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144&height=1000&width=500"
            title="facebook-frame" />
        </ClientOnly>
      </div>
    </div>
    <div class="container mx-auto max-w-2xl">
      <h2>立即查詢</h2>
      <!-- component -->
      <form class="w-full">
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label class="mb-2 block font-bold uppercase tracking-wide" for="grid-first-name">
              稱呼
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded px-4 py-3 leading-tight focus:border-primary focus:ring-primary"
              id="grid-first-name" type="text" placeholder="" v-model="name" />
          </div>
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label for="course" class="mb-2 block font-medium">
              查詢課程
            </label>
            <select id="course" class="block w-full rounded-lg p-2.5 focus:border-primary focus:ring-primary"
              v-model="course">
              <option>散打自衛術課程</option>
              <option>恆常團體班</option>
              <option v-for="course in courses">{{ course?.name }}</option>
            </select>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label class="mb-2 block font-bold uppercase tracking-wide" for="grid-password">
              查詢內容
            </label>
            <textarea
              class="no-resize mb-3 block h-48 w-full resize-none appearance-none rounded px-4 py-3 leading-tight focus:border-primary focus:ring-primary"
              id="message" v-model="message"></textarea>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button :class="`btn-primary `" type="button">
              <a v-bind:href="`https://wa.me/85297322082?text=${encodeURI(
                `稱呼: ${name} \n查詢課程: ${course} \n查詢內容: ${message}`
              )}`" target="_blank" class="no-highlight">
                <Icon name="fa6-brands:whatsapp" /> 發送
              </a>
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_CONTACTS } from "~/utils/queries";

useSeoMeta({
  title: "聯絡我們",
});

const { data: contacts, pending } = useSanityQuery(GET_CONTACTS);

const GET_ALL_COURSES: string = groq`*[_type == "course-content" ]`;

const { data: courses } = useSanityQuery(GET_ALL_COURSES);

const message = ref("");
const name = ref("");
const course = ref("");
</script>
