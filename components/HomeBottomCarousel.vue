<template>
    <div v-for="(section, i) in sections" :key="generateId(section.paragraph)" class="row my-3">
        <div class="col-xl-4 col-lg-6 col-12 fs-5">

            <div :id="'carousel' + i" class="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(image, image_index) in section.images" :key="generateId(image)" :class="`carousel-item ${image_index === 0 ? 'active' : ''
                        } ratio ratio-16x9`">
                        <!-- TODO: Add image alt -->
                        <img :alt="image" :src="image" class="img-fluid rounded" style="object-fit: cover">
                    </div>
                </div>
            </div>

        </div>
        <div class="col">
            <p>{{ section.paragraph }}</p>
        </div>
    </div>
</template>

<script setup>
import { Carousel } from "bootstrap";

const sections = [
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
];
onMounted(() => {
    sections.forEach((_, i) => {
        const carousel = document.querySelector("#carousel" + i);
        new Carousel(carousel).cycle();
    });
})
</script>
