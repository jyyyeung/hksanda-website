<template>
  <footer class="relative mt-3 bg-background bg-opacity-20 pb-6 pt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full px-4 lg:w-6/12">
          <h4 class="text-blueGray-700 text-3xl font-semibold">聯絡我們</h4>
          <h5 class="text-blueGray-600 mb-2 mt-0 text-lg">
            請報名前致電或WhatsApp有關開班詳情及確認上課時間
          </h5>
          <div class="mb-6 mt-6 lg:mb-0">
            <button
              class="text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
              type="button"
            >
              <Icon name="fa6-brands:instagram" /></button
            ><button
              class="text-lightBlue-600 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
              type="button"
            >
              <Icon name="fa6-brands:youtube" /></button
            ><button
              class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
              type="button"
            >
              <Icon name="fa6-brands:whatsapp" /></button
            ><button
              class="text-blueGray-800 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
              type="button"
            >
              <Icon name="fa6-brands:square-facebook" />
            </button>
          </div>
        </div>
        <div class="w-full px-4 lg:w-6/12">
          <div
            class="grid grid-cols-12"
            v-for="contact in contacts"
            :key="contact._key"
          >
            <dt class="col-span-3">
              <!--<mdicon :name="contact.icon" />-->
              {{ contact.field }}
            </dt>
            <dd class="col-span-9">
              <NuxtLink v-if="contact.to" :href="contact.to" target="_blank"
                >{{ contact.content }}
              </NuxtLink>
              <template v-else>
                {{ contact.content }}
              </template>
            </dd>
          </div>
        </div>
        <!-- <div class="w-full px-4 lg:w-6/12">
          <div class="items-top mb-6 flex flex-wrap">
            <div class="ml-auto w-full px-4 lg:w-4/12">
              <span
                class="text-blueGray-500 mb-2 block text-sm font-semibold uppercase"
                >網頁導覽</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="/about"
                    >關於我們</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://blog.creative-tim.com?ref=njs-profile"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >Free Products</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-4/12">
               <span
                class="text-blueGray-500 mb-2 block text-sm font-semibold uppercase"
                >Other Resources</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >MIT License</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://creative-tim.com/terms?ref=njs-profile"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://creative-tim.com/privacy?ref=njs-profile"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >Contact Us</a
                  >
                </li>
              </ul> 
            </div>
          </div>
        </div> -->
      </div>
      <hr class="my-6 border" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="mx-auto w-full px-4 text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold">
            Copyright &copy; {{ currentYear }} by <a href="">Jasmine YEUNG</a> &
            Bryan YEUNG.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import moment from "moment";
import { GET_CONTACTS } from "~/utils/queries";

const currentYear: string = moment().format("YYYY");
const { data: contacts, pending } = useSanityQuery(GET_CONTACTS);
</script>
