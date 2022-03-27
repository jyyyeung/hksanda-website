<template>
    <h1 id="title">
        <span>香港極拳道武術協會</span>
        <br />
        <span>Hong Kong Top Win Do Martial Arts Association</span>
    </h1>
    <div class="container">
        <div class="row">
            <home-carousel />

            <!--NOTE: add a database for this list? or keep it static ?-->
            <div id="homeList" class="list-group col-3 d-none d-md-flex">
                <a class="list-group-item list-group-item-action" href="#title">香港極拳道武術協會</a>
                <a class="list-group-item list-group-item-action" href="#summary">散手自衛術簡介</a>
                <a
                    class="list-group-item list-group-item-action"
                    v-for="section in masonrySections"
                    :key="section.title + 'link'"
                    :href="'#' + section.title"
                >{{ section.title }}</a>
                <a class="list-group-item list-group-item-action" href="#images">照片</a>
            </div>

            <div
                data-bs-spy="scroll"
                data-bs-target="#homeList"
                data-bs-offset="0"
                class="col"
                tabindex="0"
            >
                <h2 id="summary">散手自衛術簡介</h2>
                <markdown :source="source" />
                <div v-for="section in masonrySections" :key="section.title" :id="section.title">
                    <h2>{{ section.title }}</h2>
                    <masonry-wall
                        :items="section.images"
                        :ssr-columns="1"
                        :column-width="300"
                        :gap="16"
                    >
                        <template #default="{ item }">
                            <div class="ratio ratio-4x3">
                                <img style="object-fit: cover" class="img-fluid" :src="item.image" />
                            </div>
                        </template>
                    </masonry-wall>
                </div>
                <h2 id="images">照片</h2>
                <div class="container-fluid">
                    <div
                        class="row my-3"
                        v-for="(section, i) in sections"
                        :key="generateId(section.paragraph)"
                    >
                        <div class="col-xl-4 col-lg-6 col-12 fs-5">
                            <div
                                :id="'carousel' + i"
                                class="carousel slide"
                                data-bs-ride="carousel"
                                data-bs-interval="3000"
                            >
                                <div class="carousel-inner">
                                    <div
                                        :class="`carousel-item ${i == 0 ? 'active' : ''
                                        } ratio ratio-16x9`"
                                        v-for="(image, i) in section.images"
                                        :key="generateId(image)"
                                    >
                                        <!-- TODO: Add image alt -->
                                        <img
                                            style="object-fit: cover"
                                            :src="image"
                                            class="img-fluid rounded"
                                        />
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
import { useMeta } from "vue-meta";
import { Carousel } from "bootstrap";
import { mapActions } from "vuex";

export default {
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
    mounted() {
        this.$nextTick(() => {
            this.localizePage();
        });
        this.sections.forEach((_, i) => {
            const carousel = document.querySelector("#carousel" + i);
            new Carousel(carousel).cycle();
        });
    },
    name: "HomePage",
    data() {
        return {
            // TODO: This should be a database view with tag
            source:
                "香港極拳道武術協會推廣『散手自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。 \n\n---\n",
            // TODO: This should be included in masonry database
            masonrySections: [
                {
                    title: "全港武術散手公開賽裁判工作",
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
                    title: "香港散手代表隊總教練  張立功老師",
                    images: [
                        {
                            alt: "香港散手代表隊總教練  張立功老師",
                            image: "https://s2.loli.net/2022/01/21/RvdfQuY3ThMlkiX.jpg",
                        },
                    ],
                },
                {
                    title: "2017年香港武術散手公開賽各裁判合照",
                    images: [
                        {
                            alt: "2017年香港武術散手公開賽各裁判合照",
                            image: "https://s2.loli.net/2022/01/21/ub3lMoTt4Ea2xpc.jpg",
                        },
                    ],
                },
                {
                    title: "香港武術散手教練培訓班",
                    images: [
                        {
                            alt: "香港武術散手教練培訓班",
                            image: "https://s2.loli.net/2022/01/31/yBtrWJxEDUTkco5.png",
                        },
                    ],
                },
                {
                    title: "香港武術散手裁判培訓班",
                    images: [
                        {
                            alt: "香港武術散手裁判培訓班",
                            image: "https://s2.loli.net/2022/01/31/zTJmOCDYP3cpWk5.png",
                        },
                    ],
                },
            ],
            // TODO: Maybe add a database for this view?
            sections: [
                {
                    paragraph:
                        "康樂及文化事務署認可及資助之全港武術自衛散手章別1一10公開考核試，本會14名學員全部合格，取得自衛散手章別資格。",

                    images: [
                        "https://s2.loli.net/2022/01/31/2iC9KuoeS6qD5ax.png",
                        "https://s2.loli.net/2022/01/31/wm7yMl1c4uQErsI.png",
                        "https://s2.loli.net/2022/01/31/87cHYQi9uwOfdDT.png",
                    ],
                },
                {
                    paragraph: "2016 / 2018年香港金文泰中學（防身自衛術）教學及講座",

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
                    paragraph: "2017年香港中文大學醫學院院會（防身自衛術）教學及講座",
                    images: [
                        "https://s2.loli.net/2022/01/31/9EImDK1xTq4X5oe.jpg",
                        "https://s2.loli.net/2022/01/21/KYGnhLm9eikcX27.jpg",
                        "https://s2.loli.net/2022/01/31/NcyF7Vn3XwofUPE.jpg",
                    ],
                },
            ],
        };
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
