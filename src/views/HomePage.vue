<template>
    <h1 id="title">
        <span>香港極拳道武術協會</span>
        <br>
        <span>Hong Kong Top Win Do Martial Arts Association</span>
    </h1>
    <div class="container">
        <div class="row">
            <home-carousel />
            <!--NOTE: add a database for this list? or keep it static ?-->
            <div
                id="homeList"
                class="list-group col-3 d-none d-md-flex"
            >
                <a
                    class="list-group-item list-group-item-action"
                    href="#title"
                >香港極拳道武術協會</a>
                <a
                    class="list-group-item list-group-item-action"
                    href="#summary"
                >散打自衛術簡介</a>
                <a
                    v-for="section in masonrySections"
                    :key="section.title + 'link'"
                    :href="'#' + section.title"
                    class="list-group-item list-group-item-action"
                >{{ section.title }}</a>
                <a
                    class="list-group-item list-group-item-action"
                    href="#images"
                >照片</a>
            </div>

            <div
                class="col"
                data-bs-offset="0"
                data-bs-spy="scroll"
                data-bs-target="#homeList"
                tabindex="0"
            >
                <h2 id="summary_sanda">
                    散打自衛術簡介
                </h2>
                <markdown :source="sourceSanda" />
                <h2 id="summary_female_self_protection">
                    女子自衛術簡介
                </h2>
                <markdown :source="sourceFemale" />
                <div
                    v-for="section in masonrySections"
                    :id="section.title"
                    :key="section.title"
                >
                    <h2>{{ section.title }}</h2>
                    <masonry-wall
                        :column-width="300"
                        :gap="16"
                        :items="section.images"
                        :ssr-columns="1"
                    >
                        <template #default="{ item }">
                            <div class="ratio ratio-4x3">
                                <img
                                    :alt="item.image"
                                    :src="item.image"
                                    class="img-fluid"
                                    style="object-fit: cover"
                                >
                            </div>
                        </template>
                    </masonry-wall>
                </div>
                <h2 id="images">
                    照片
                </h2>
                <div class="container-fluid">
                    <div
                        v-for="(section, i) in sections"
                        :key="generateId(section.paragraph)"
                        class="row my-3"
                    >
                        <div class="col-xl-4 col-lg-6 col-12 fs-5">
                            <div
                                :id="'carousel' + i"
                                class="carousel slide"
                                data-bs-interval="3000"
                                data-bs-ride="carousel"
                            >
                                <div class="carousel-inner">
                                    <div
                                        v-for="(image, image_index) in section.images"
                                        :key="generateId(image)"
                                        :class="`carousel-item ${
                                            image_index === 0 ? 'active' : ''
                                        } ratio ratio-16x9`"
                                    >
                                        <!-- TODO: Add image alt -->
                                        <img
                                            :alt="image"
                                            :src="image"
                                            class="img-fluid rounded"
                                            style="object-fit: cover"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <p>{{ section.paragraph }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import generateId from "@/helpers/generateId";
import Markdown from "@/components/others/Markdown.vue";
import {useMeta} from "vue-meta";
import {Carousel} from "bootstrap";
import {mapActions} from "vuex";

export default {
    name: "HomePage",
    components: {
        HomeCarousel,
        Markdown,
    },
    setup() {
        useMeta({
            title: "主頁",
            // htmlAttrs: {
            //  lang: "zh-HK",
            //},
        });
    },
    data() {
        return {
            // TODO: This should be a database view with tag
            sourceSanda: "香港極拳道武術協會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。 \n\n---\n",
            sourceFemale: "女子自衛術是一項專為女子而設的訓練課程，課程內容會以女子防衛術作主要的訓練，這是一項運用踢、打、摔、拿等武術技擊的方法，如當面臨受制於歹徒時，並具備簡單、實用、易記、易學的特點。它是一種以制服對方、保護自己為目的的專門技術。此課程將會由淺入深地介紹自衛術的基本概念及原理，適合現代女性的自我防衛技術。 \n\n---\n",
            // TODO: This should be included in masonry database
            masonrySections: [
                {
                    title: "全港武術散打公開賽裁判工作",
                    images: [
                        {
                            image: "https://s2.loli.net/2022/01/21/UFTvaOVMtQKd6ie.jpg",
                        },
                        {
                            image: "https://s2.loli.net/2022/01/21/wfHAL3zGUcYoEIy.jpg",
                        },
                        {
                            image: "https://s2.loli.net/2022/01/21/A7rkahiRbIWCqfe.jpg",
                        },
                        {
                            image: "https://s2.loli.net/2022/01/31/pzmaH4JN58Uu2hx.png",
                        },
                    ],
                },
                // TODO: Also in masonry database
                {
                    title: "香港散打代表隊總教練  張立功老師",
                    images: [
                        {
                            alt: "香港散打代表隊總教練  張立功老師",
                            image: "https://s2.loli.net/2022/01/21/RvdfQuY3ThMlkiX.jpg",
                        },
                    ],
                },
                {
                    title: "2017年香港武術散打公開賽各裁判合照",
                    images: [
                        {
                            alt: "2017年香港武術散打公開賽各裁判合照",
                            image: "https://s2.loli.net/2022/01/21/ub3lMoTt4Ea2xpc.jpg",
                        },
                    ],
                },
                {
                    title: "香港武術散打教練培訓班",
                    images: [
                        {
                            alt: "香港武術散打教練培訓班",
                            image: "https://s2.loli.net/2022/01/31/yBtrWJxEDUTkco5.png",
                        },
                    ],
                },
                {
                    title: "香港武術散打裁判培訓班",
                    images: [
                        {
                            alt: "香港武術散打裁判培訓班",
                            image: "https://s2.loli.net/2022/01/31/zTJmOCDYP3cpWk5.png",
                        },
                    ],
                },
            ],
            // TODO: Maybe add a database for this view?
            sections: [
                {
                    paragraph:
                        "康樂及文化事務署認可及資助之全港武術自衛散打章別1一10公開考核試，本會14名學員全部合格，取得自衛散打章別資格。",

                    images: [
                        "https://s2.loli.net/2022/01/31/2iC9KuoeS6qD5ax.png",
                        "https://s2.loli.net/2022/01/31/wm7yMl1c4uQErsI.png",
                        "https://s2.loli.net/2022/01/31/87cHYQi9uwOfdDT.png",
                    ],
                },
                {
                    paragraph:
                        "2016 / 2018年香港金文泰中學（防身自衛術）教學及講座",

                    images: [
                        "https://s2.loli.net/2022/01/31/hmF8rvolJtcUpMi.png",
                        "https://s2.loli.net/2022/01/31/ALld62DOtgTKupY.png",
                        "https://s2.loli.net/2022/01/31/9OsHQiRgGUC6tZT.jpg",
                    ],
                },
                {
                    paragraph:
                        "2019年仁濟醫院嚴徐玉珊社區服務中心（防身自衛術）教學及講座",
                    images: [
                        "https://s2.loli.net/2022/01/31/njLQzJDI34bZOmd.jpg",
                        "https://s2.loli.net/2022/01/31/oTE9yvIsDMhRfqP.jpg",
                        "https://s2.loli.net/2022/01/31/MShs5KvapQqVT2X.jpg",
                    ],
                },
                {
                    paragraph:
                        "2017年香港中文大學醫學院院會（防身自衛術）教學及講座",
                    images: [
                        "https://s2.loli.net/2022/01/31/9EImDK1xTq4X5oe.jpg",
                        "https://s2.loli.net/2022/01/21/KYGnhLm9eikcX27.jpg",
                        "https://s2.loli.net/2022/01/31/NcyF7Vn3XwofUPE.jpg",
                    ],
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.localizePage();
        });
        this.sections.forEach((_, i) => {
            const carousel = document.querySelector("#carousel" + i);
            new Carousel(carousel).cycle();
        });
    },
    methods: {
        ...mapActions(["localizePage"]),
        generateId,
    },
};
</script>

<style lang="scss" scoped>
.list-group-item {
    background-color: transparent;

    &.active {
        background-color: transparent;
        border-color: var(--primary-color);
    }
}

.p-scrollpanel-content {
    overflow-y: hidden;
}
</style>
