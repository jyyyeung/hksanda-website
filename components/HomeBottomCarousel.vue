<template>
    <section v-for="(section, i) in sections" :key="generateId(section.paragraph)" class="grid grid-cols-12 my-3">
        <div class="xl:col-span-4 lg:col-span-6 col-span-12 fs-5">
            <Swiper :loop="true" :autoplay="{
                    delay: 3000, disableOnInteraction: true,
                }" :slides-per-view="1" :space-between="50" :id="'carousel' + i">
                <SwiperSlide v-for="(image, image_index) in section.images" :key="image">
                    <!-- TODO: Add image alt -->
                    <nuxt-img :key="generateId(image)" format="webp" :alt="image" :src="image"
                        sizes="sm:100vw md:50vw lg:400px" class="w-full rounded object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="xl:col-span-8 lg:col-span-6 col-span-12 p-4">
            <p>{{ section?.paragraph }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Section {
    paragraph: string
    images: string[]
}

const sections: Section[] = [
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
</script>
