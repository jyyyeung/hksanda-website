<template>
  <div class="container min-h-[60vh]">
    <h1>{{ page?.pageTitle ?? "聯絡我們" }}</h1>
    <div class="grid grid-cols-12 content-center">
      <div class="contact fs-4 col-span-12 md:col-span-6">
        <h2>{{ page?.orgName ?? "香港極拳道武術協會" }}</h2>
        <dl class="grid grid-cols-12">
          <div v-if="pending">loading</div>
          <template v-else v-for="contact in contacts" :key="contact._id">
            <dt class="col-span-3">
              <!--<mdicon :name="contact.icon" />-->
              {{ contact.field }}
            </dt>
            <dd class="col-span-9">
              <NuxtLink v-if="contact.to || isWhatsappContact(contact)" :href="contactHref(contact)" target="_blank">{{ contact.content }}
              </NuxtLink>
              <template v-else>
                {{ contact.content }}
              </template>
            </dd>
          </template>
        </dl>
        <p>{{ page?.notice ?? "請報名前致電或WhatsApp有關開班詳情及確認上課時間" }}</p>
      </div>
      <!--TODO: Change to oembed plugin so can style posts? -->
      <div class="col-span-12 m-auto hidden h-full w-full md:col-span-6 md:block">
        <ClientOnly>
          <iframe class="h-full w-full overflow-hidden border-none" id="facebook-frame"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true"
            frameborder="0"
            v-if="facebookIframeSrc" :src="facebookIframeSrc"
            title="facebook-frame" />
        </ClientOnly>
      </div>
    </div>
    <div class="container mx-auto max-w-2xl">
      <h2>{{ page?.formTitle ?? "立即查詢" }}</h2>
      <!-- component -->
      <form class="w-full">
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label class="mb-2 block font-bold uppercase tracking-wide" for="grid-first-name">
              {{ page?.nameLabel ?? "稱呼" }}
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded px-4 py-3 leading-tight focus:border-primary focus:ring-primary"
              id="grid-first-name" type="text" placeholder="" v-model="name" />
          </div>
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label for="course" class="mb-2 block font-medium">
              {{ page?.courseLabel ?? "查詢課程" }}
            </label>
            <select id="course" class="block w-full rounded-lg p-2.5 focus:border-primary focus:ring-primary"
              v-model="course">
              <option v-for="option in courseOptions" :key="option">{{ option }}</option>
            </select>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label class="mb-2 block font-bold uppercase tracking-wide" for="grid-password">
              {{ page?.messageLabel ?? "查詢內容" }}
            </label>
            <textarea
              class="no-resize mb-3 block h-48 w-full resize-none appearance-none rounded px-4 py-3 leading-tight focus:border-primary focus:ring-primary"
              id="message" v-model="message"></textarea>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button :class="`btn-primary `" type="button">
              <a v-bind:href="whatsappHref" target="_blank" class="no-highlight">
                <Icon name="fa6-brands:whatsapp" /> {{ page?.sendLabel ?? "發送" }}
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
import { GET_CONTACTS, GET_CONTACT_PAGE } from "~/utils/queries";
import {
  contactHref,
  isWhatsappContact,
  normalizeWhatsappNumber,
} from "~/utils/whatsapp";

const GET_ALL_COURSES: string = groq`*[_type == "course-content" ]`;

const { data: contacts, pending } = useSanityQuery(GET_CONTACTS);
// Singleton (_id: contactPage) holding every editable string on this page.
const { data: page } = useSanityQuery(GET_CONTACT_PAGE);
const { data: courses } = useSanityQuery(GET_ALL_COURSES);

// Every value below falls back to the previously hardcoded text, so an empty or
// not-yet-seeded document can never render a blank page.
const DEFAULT_COURSE_OPTIONS = ["散打自衛術課程", "恆常團體班"];

const courseOptions = computed<string[]>(() => {
  const fromPage: string[] = page.value?.courseOptions?.length
    ? page.value.courseOptions
    : DEFAULT_COURSE_OPTIONS;
  const fromCourses: string[] = ((courses.value ?? []) as { name?: string }[])
    .map((course) => course?.name)
    .filter((name): name is string => !!name);
  return [...new Set([...fromPage, ...fromCourses])];
});

// The WhatsApp number lives in one place only: the 聯絡資料 「WhatsApp」 row.
// Editing that row's 內容 updates both the 聯絡資料 list and every wa.me link.
const whatsappRow = computed(() =>
  ((contacts.value ?? []) as { field?: string; to?: string; content?: string }[]).find(
    (contact) => isWhatsappContact(contact)
  )
);

const whatsappNumber = computed<string>(() =>
  normalizeWhatsappNumber(whatsappRow.value?.content || whatsappRow.value?.to)
);

const facebookIframeSrc = computed<string>(() => {
  const href: string | undefined = page.value?.facebookPageUrl;
  if (!href) return "";
  const params = new URLSearchParams({
    href,
    tabs: "timeline",
    small_header: "true",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
    appId: "936602643635144",
    height: "1000",
    width: "500",
  });
  return `https://www.facebook.com/plugins/page.php?${params.toString()}`;
});

const message = ref("");
const name = ref("");
const course = ref("");

// Keep the select in sync with the (async) option list so the WhatsApp message
// never sends an empty 查詢課程.
watch(
  courseOptions,
  (options) => {
    if (!course.value && options.length) course.value = options[0];
  },
  { immediate: true }
);

const whatsappHref = computed<string>(() => {
  const nameLabel = page.value?.nameLabel ?? "稱呼";
  const courseLabel = page.value?.courseLabel ?? "查詢課程";
  const messageLabel = page.value?.messageLabel ?? "查詢內容";
  const text = `${nameLabel}: ${name.value}\n${courseLabel}: ${course.value}\n${messageLabel}: ${message.value}`;
  return `https://wa.me/${whatsappNumber.value}?text=${encodeURIComponent(text)}`;
});

useSeoMeta({
  title: () => page.value?.pageTitle || "聯絡我們",
  description: () => page.value?.seoDescription || undefined,
});
</script>
