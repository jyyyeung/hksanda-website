<template>
    <div class="container">
        <h1>联络我们</h1>
        <div class="grid grid-cols-12 content-center">
            <div class="contact col-span-12 fs-4 xl:col-span-6">
                <h2>香港極拳道武術協會</h2>
                <dl class="grid row-cols-1 row-cols-sm-2">
                    <template v-for="contact in getContacts" :key="contact.id">
                        <dt class="col">
                            <!--<mdicon :name="contact.icon" />-->
                            {{ contact.field }}
                        </dt>
                        <dd class="col">
                            <NuxtLink v-if="contact.to" :href="contact.to" target="_blank">{{
                                contact.content
                            }}
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
            <div class="col-span-12 xl:col-span-6 hidden md:block h-[50vh] m-auto">
                <iframe class="h-full w-full border-none overflow-hidden" id="facebook-frame"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true"
                    frameborder="0"
                    src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散打自衛術訓練班-172784523322461&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144&height=1000&width=500"
                    title="facebook-frame" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { GET_CONTACTS } from "@/apollo/contact";

const store = useMainStore();
const { localizePage } = store;

onMounted(() => {
    nextTick(() => {
        localizePage();
    });
})

useSeoMeta({
    title: '聯絡我們',
})

const { data } = await useAsyncQuery(GET_CONTACTS);
const getContacts = data.value?.getContacts;
</script>
