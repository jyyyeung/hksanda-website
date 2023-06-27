<template>
  <div id="app-user" class="min-h-screen bg-blue-mountain bg-cover">
    <div aria-hidden="true" class="bg__text-outer -z-20 hidden sm:block">
      <div id="bg__text-1" class="bg__text select-none">勇敢</div>
      <div id="bg__text-2" class="bg__text select-none">頑強</div>
      <div id="bg__text-3" class="bg__text select-none">不怕苦</div>
      <div id="bg__text-4" class="bg__text select-none">敢於拼搏</div>
    </div>
    <div class="flex w-screen flex-col">
      <navigation />
      <!--<breadcrumb class="lg:hidden" />-->
      <main
        class="main z-10 m-auto flex h-auto min-w-[80vw] max-w-[95vw] flex-grow justify-center bg-gradient-to-br from-background to-transparent lg:max-w-[75vw]"
        role="main"
      >
        <!-- Yellow Frame  -->
        <div class="m-2 w-full">
          <!-- Outer margin -->
          <Breadcrumb class="hidden lg:block" />
          <Breadcrumbs>
            <template #breadcrumb="{ to, title, first }">
              {{ first ? "" : " / " }}
              <NuxtLink :to="to"> {{ chinese.s2t(title) }} </NuxtLink>
            </template>
          </Breadcrumbs>
          <!-- Scroll Frame  -->
          <div class="max-h-[80vh] w-full overflow-y-scroll md:p-2">
            <!-- Outer Border -->
            <div
              class="m-auto border-4 border-solid border-text-color p-[0.32rem]"
            >
              <!-- Inner Border -->
              <div class="body border border-solid border-text-color p-6">
                <SeoKit />
                <!-- a. Generates browser screenshots for every page -->
                <OgImageScreenshot />
                <nuxt-page />
              </div>
            </div>
          </div>
        </div>
      </main>
      <whatsapp-chat />
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Navigation, Breadcrumb, Footer } from "#components";
import { initFlowbite } from "flowbite";
import chinese from "s2t-chinese";

defineRobotMeta();

useSchemaOrg([
  defineOrganization({
    name: "香港極拳道武術協會 | 中國武術散打、功夫、自衛術",
    logo: "/logo.png",
    sameAs: [
      "https://www.facebook.com/people/%E6%95%A3%E6%89%93%E8%87%AA%E8%A1%9B%E8%A1%93%E8%A8%93%E7%B7%B4%E7%8F%AD/100057130702824/",
      "https://www.hksanda.com",
    ],
  }),
  defineWebSite({
    name: "中國武術散打、功夫、自衛術（香港）",
  }),
  defineWebPage(),
]);

useHead({
  // ... or as a function
  titleTemplate: (title) => {
    return title
      ? `${title} | 香港極拳道武術協會 | 中國武術散打、功夫、自衛術`
      : "香港極拳道武術協會 | 中國武術散打、功夫、自衛術";
  },
});

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss">
@import "@/assets/scss/bg_text.scss";
@import "@/assets/scss/link.scss";

[aria-label="Breadcrumb"] > ul {
  display: flex;
}
</style>
