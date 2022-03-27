<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content }} - 武術 實用自衛散手 自衛術</template>
    </metainfo>
    <div id="app-user">
        <edit-model />
        <div class="bg__text-outer d-none d-sm-block">
            <div id="bg__text-1" class="bg__text noselect">勇敢</div>
            <div id="bg__text-2" class="bg__text noselect">頑強</div>
            <div id="bg__text-3" class="bg__text noselect">不怕苦</div>
            <div id="bg__text-4" class="bg__text noselect">敢於拼搏</div>
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
            <navigation-vue />
            <div class="main">
                <ScrollPanel style="height: 100%; width: 100%">
                    <div class="container__outer container">
                        <div class="container__inner">
                            <breadcrumb />
                            <router-view></router-view>
                        </div>
                    </div>
                </ScrollPanel>
            </div>
            <whatsapp-chat />
        </div>
    </div>
</template>

<script>
import Breadcrumb from "@/components/nav/Breadcrumb.vue";
import NavigationVue from "@/components/nav/Navigation.vue";

import WhatsappChat from "@/components/others/WhatsappChat.vue";
import EditModel from "@/components/others/EditModel.vue";
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";
export default {
    components: { NavigationVue, WhatsappChat, Breadcrumb, EditModel },
    name: "App",
    setup() {
        const meta = {
            description:
                "香港極拳道武術協會由一批具專業資格的武術教練於二零零五年成立，為香港政府注册認可武術團體。以推廣中國武術散手自衞術為宗旨，不定期開辦不同年齡、水准的訓練班，為個人、會所、學校、公司或團體設計不同的課程（包括私人及小組教授），本會教練持有國家認可之防身自衞術專業資格證書和政府認可注册持牌武術散手教練及裁判的專業資格。",
            title: "香港極拳道武術協會",
            image: "https://hksanda.com/img/logo.0bccf8bd.png"
        };
        useMeta({
            htmlAttrs: {
                //amp: true,
            },
            ...meta,
            og: {
                ...meta,
            },
        });
    },
    mounted() {
        this.getView();
    },
    methods: {
        ...mapActions(["getView"]),
    },
};
</script>
