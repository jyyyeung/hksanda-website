<template>
    <div class="container min-h-[60vh]">
        <h1>联络我们</h1>
        <div class="grid grid-cols-12 content-center">
            <div class="contact col-span-12 fs-4 md:col-span-6">
                <h2>香港極拳道武術協會</h2>
                <dl class="grid grid-cols-12">
                    <div v-if="pending">
                        loading
                    </div>
                    <template v-else v-for="contact in contacts" :key="contact._key">
                        <dt class="col-span-3">
                            <!--<mdicon :name="contact.icon" />-->
                            {{ contact.field }}
                        </dt>
                        <dd class="col-span-9">
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
            <div class="col-span-12 md:col-span-6 hidden md:block m-auto w-full h-full">
                <ClientOnly>
                    <iframe class="h-full w-full border-none overflow-hidden" id="facebook-frame"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowfullscreen="true" frameborder="0"
                        src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散打自衛術訓練班-172784523322461&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144&height=1000&width=500"
                        title="facebook-frame" />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GET_CONTACTS } from '~/utils/queries';

useSeoMeta({
    title: '聯絡我們',
})

const { data: contacts, pending } = useSanityQuery(GET_CONTACTS);

</script>
