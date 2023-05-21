<template>
    <div id="app-user" class="h-screen bg-cover bg-blue-mountain">
        <!-- <edit-model /> -->
        <div aria-hidden="true" class="bg__text-outer hidden sm:block">
            <div id="bg__text-1" class="bg__text select-none">
                勇敢
            </div>
            <div id="bg__text-2" class="bg__text select-none">
                頑強
            </div>
            <div id="bg__text-3" class="bg__text select-none">
                不怕苦
            </div>
            <div id="bg__text-4" class="bg__text select-none">
                敢於拼搏
            </div>
            <!--<div class="keywords noselect">
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
            </div> -->
        </div>
        <div class="overflow-hidden">
            <navigation />
            <!--<breadcrumb class="lg:hidden" />-->
            <main
                class="main z-10 lg:w-[75vw] w-full h-[80vh] m-auto overflow-x-hidden bg-gradient-to-br from-background to-transparent"
                role="main">
                <div class="m-2">
                    <Breadcrumb class="hidden lg:block" />
                    <!--<template>
                        <Breadcrumbs>
                            <template #breadcrumb="{ to, title }">
                                <NuxtLink :to="to">
                                    {{ title }}
                                </NuxtLink>
                            </template>
                        </Breadcrumbs>
                    </template>-->
                    <div class="h-full w-full md:p-2 overflow-y-scroll">
                        <div class="min-h-full container border-4 border-text-color border-solid p-[0.32rem]">
                            <div class="border-solid border-text-color border p-6 min-h-full h-full">
                                <SeoKit />
                                <!-- a. Generates browser screenshots for every page -->
                                <OgImageScreenshot />
                                <!-- b. Generate saotir images for every page (uses the default template) -->
                                <OgImageStatic />
                                <nuxt-page />
                            </div>
                        </div>
                        <small>&copy; 2021-{{ currentYear }} Jasmine YEUNG & Bryan YEUNG</small>
                    </div>
                </div>
            </main>
            <whatsapp-chat />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Navigation, Breadcrumb } from "#components"
import { initFlowbite } from 'flowbite'
import moment from "moment";
const currentYear: string = moment().format("YYYY");

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

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>


<style lang="scss">
// .content {
//     height: 100vh;
// }

* {
    scroll-behavior: smooth;
}

.slider-home {

    // max-height: 50vh;
    hr {
        margin: 0 2.5vw;
        color: black;
    }

    .ratio-inner {
        height: 100%;
    }

    .carousel-inner {
        padding: 5.5vw;
        padding-top: 1.6vw;
        padding-bottom: 0;

        &>.item>img,
        &>.item>a>img {
            margin: auto;
        }

        h1 {
            margin: 0;
            margin-bottom: 0.5rem;
            text-align: start !important;
        }

        img {
            object-fit: cover;
            object-position: top;
        }

        // @include media-breakpoint-down(md) {
        //     padding: 0;
        // }
    }
}

:root {
    body {

        @import "@/assets/scss/dropdown.scss";

        .breadcrumb {
            @import "@/assets/scss/link.scss";
            padding: revert;
        }

        #app-user {

            .p-component,
            .p-inputtext {
                font-family: var(--font-family);
            }

            // overflow: hidden;

            // height: 100vh;
            // background-image: url("@/assets/images/df098a8450fc65081bba1a00db798acbe8ddf696.jpg@942w_630h_progressive.webp");
            // background-size: cover;

            @import "@/assets/scss/menubar.scss";
            @import "@/assets/scss/bg_text.scss";

            .main {
                // z-index: 1;
                // width: 75vw;
                // margin: auto;
                // height: 80vh;
                // background: linear-gradient(45deg, #ffffde, transparent);
                // padding: 10px;

                // overflow-y: hidden;

                // @include media-breakpoint-down(sm) {
                //     width: 100vw;
                //     height: 87vh;
                // }

                @import "@/assets/scss/text.scss";
                @import "@/assets/scss/tab_panel.scss";
                @import "@/assets/scss/link.scss";

                .container__outer {
                    // padding: 0.32rem;
                    // border-color: var(--text-color);
                    // border-width: 5px;
                    // border-style: solid;
                    // min-height: -webkit-fill-available;
                    // min-height: 100%;

                    .p-image,
                    .p-image-preview-container>img {
                        width: -webkit-fill-available;
                    }

                    .container__inner {
                        // border: var(--text-color) 1px solid;
                        // padding: 10px;
                        // min-height: 100%;
                        // height: 100%;

                        .p-card {
                            background: transparent;
                        }

                        .main__router {
                            height: 100%;
                        }
                    }
                }
            }

            .noselect {
                -webkit-touch-callout: none;
                /* iOS Safari */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Old versions of Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */
                user-select: none;
                /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
            }
        }
    }
}


.container__inner {
    div.md {
        margin: auto 0;
    }
}
</style>
