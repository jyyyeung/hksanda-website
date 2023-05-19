<template>
    <div id="app-user">
        <!-- <edit-model /> -->
        <div aria-hidden="true" class="bg__text-outer d-none d-sm-block">
            <div id="bg__text-1" class="bg__text noselect">
                勇敢
            </div>
            <div id="bg__text-2" class="bg__text noselect">
                頑強
            </div>
            <div id="bg__text-3" class="bg__text noselect">
                不怕苦
            </div>
            <div id="bg__text-4" class="bg__text noselect">
                敢於拼搏
            </div>
            <div class="keywords noselect">
                <ul>
                    <li>武術</li>
                    <li>散打</li>
                    <li>自衛術</li>
                    <li>女子自衛術</li>
                    <li>兒童武術班</li>
                    <li>幼兒武術班</li>
                    <li>中國武術班</li>
                    <li>泰拳課程</li>
                    <li>太極班</li>
                    <li>武術班</li>
                    <li>散打班</li>
                    <li>自衛術課程</li>
                    <li>私人自衛術課程</li>
                    <li>泰拳班</li>
                    <li>功夫</li>
                    <li>兒童功夫班</li>
                    <li>泰拳</li>
                    <li>女子拳擊課程</li>
                </ul>
            </div>
        </div>
        <div>
            <navigation />
            <breadcrumb class="d-lg-none" />
            <div class="main" role="main">
                <Breadcrumb class="d-none d-lg-block" />
                <template>
                    <Breadcrumbs>
                        <template #breadcrumb="{ to, title }">
                            <NuxtLink :to="to">
                                {{ title }}
                            </NuxtLink>
                        </template>
                    </Breadcrumbs>
                </template>
                <ScrollPanel style="height: 100%; width: 100%">
                    <div class="container__outer container">
                        <div class="container__inner">
                            <SeoKit />
                            <!-- a. Generates browser screenshots for every page -->
                            <OgImageScreenshot />
                            <!-- b. Generate saotir images for every page (uses the default template) -->
                            <OgImageStatic />
                            <nuxt-page />
                        </div>
                    </div>
                    <small>&copy; 2021-{{ currentYear }} Jasmine Yeung & Bryan
                        Yeung</small>
                </ScrollPanel>
            </div>
            <whatsapp-chat />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Navigation, Breadcrumb } from "#components"
import moment from "moment";
const store = useMainStore();
const currentYear = moment().format("YYYY");
onMounted(() => {
    // store.getView();
})
useSchemaOrg([
    defineOrganization({
        name: '香港極拳道武術協會 | 中國武術散打、功夫、自衛術',
        logo: '/logo.png',
        sameAs: ['https://www.facebook.com/people/%E6%95%A3%E6%89%93%E8%87%AA%E8%A1%9B%E8%A1%93%E8%A8%93%E7%B7%B4%E7%8F%AD/100057130702824/', 'https://www.hksanda.com']
    }),
    defineWebSite({
        name: '中國武術散打、功夫、自衛術（香港）',
    }),
    defineWebPage(),
])
</script>
