<template>
    <section>
        <h1 id="title">
            <span>香港極拳道武術協會</span>
            <br>
            <span>Hong Kong Top Win Do Martial Arts Association</span>
        </h1>
        <div class="container">
            <div class="row">
                <!--<ClientOnly>
                    <home-carousel />
                </ClientOnly>-->
                <!--NOTE: add a database for this list? or keep it static ?-->
                <div id="homeList" class="list-group col-3 hidden md:flex">
                    <a class="list-group-item list-group-item-action" href="#title">香港極拳道武術協會</a>
                    <a class="list-group-item list-group-item-action" href="#summary">散打自衛術簡介</a>
                    <a v-for="section in masonrySections" :key="section.title + 'link'" :href="'#' + section.title"
                        class="list-group-item list-group-item-action">
                        {{ section.title }}</a>
                    <a class="list-group-item list-group-item-action" href="#images">照片</a>
                </div>

                <div class="col" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#homeList" tabindex="0">
                    <h2 id="summary_sanda">
                        散打自衛術簡介
                    </h2>
                    <markdown :source="sourceSanda" />
                    <h2 id="summary_female_self_protection">
                        女子自衛術簡介
                    </h2>
                    <markdown :source="sourceFemale" />
                    <div v-for="section in masonrySections" :id="section.title" :key="section.title">
                        <h2>{{ section.title }}</h2>
                        <masonry-wall :column-width="300" :gap="16" :items="section.images" :ssr-columns="1">
                            <template #default="{ item }">
                                <div class="ratio ratio-4x3">
                                    <img :alt="item.image" :src="item.image" class="img-fluid" style="object-fit: cover">
                                </div>
                            </template>
                        </masonry-wall>
                    </div>
                    <h2 id="images">
                        照片
                    </h2>
                    <div class="container-fluid">
                        <!--<ClientOnly>
                            <HomeBottomCarousel />
                        </ClientOnly>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Markdown } from "#components"

const store = useMainStore();
const { localizePage } = store;

onMounted(() => {
    nextTick(() => {
        localizePage();
    });
})

// TODO: This should be a database view with tag
const sourceSanda = ref("香港極拳道武術協會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。 \n\n---\n")
const sourceFemale = ref("女子自衛術是一項專為女子而設的訓練課程，課程內容會以女子防衛術作主要的訓練，這是一項運用踢、打、摔、拿等武術技擊的方法，如當面臨受制於歹徒時，並具備簡單、實用、易記、易學的特點。它是一種以制服對方、保護自己為目的的專門技術。此課程將會由淺入深地介紹自衛術的基本概念及原理，適合現代女性的自我防衛技術。 \n\n---\n")
// TODO: This should be included in masonry database
const masonrySections = [
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
]
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
