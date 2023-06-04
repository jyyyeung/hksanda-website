
export default [
    {
        path: "/",
        name: "主頁",
        // component: HomePage,
        // component: () => import('~/pages/index.vue').then(r => r.default || r),
        meta: {
            icon: "pi pi-home",
            carousel: "61ee6bfb9c3de1b608293d4c",
        },
    },
    {
        path: "/about",
        name: "關於我們",
        // component: () => import('~/pages/about/index.vue').then(r => r.default || r),
    },
    {
        path: "/our-team",
        name: "專業教練團隊",
        // component: () => import('~/pages/about/our-team.vue').then(r => r.default || r),
    },
    {
        path: "/bylaws",
        name: "本會章程",
        // component: () => import('~/pages/about/bylaws.vue').then(r => r.default || r),
    },
    {
        path: "/media-interviews",
        name: "媒體採訪",
        // component: () => import('~/pages/about/media-interviews.vue').then(r => r.default || r),
    },
    {
        path: "/syllabus",
        name: "武術自衛散打考试动作",
        // component: () => import('~/pages/assessments/syllabus.vue').then(r => r.default || r),
    },
    {
        path: "/hk-badge",
        name: "武術散打章別全港公開試",
        // component: () => import('~/pages/assessments/hk-badge.vue').then(r => r.default || r),
    },
    {
        path: "/features",
        name: "課程特色",
        // component: () => import('~/pages/course/features.vue').then(r => r.default || r),
    },
    {
        path: "/content",
        name: "學習內容",
        // component: () => import('~/pages/course/content.vue').then(r => r.default || r),
    },
    {
        path: "/class",
        name: "私人及組班課程",
        // component: () => import('~/pages/course/class.vue').then(r => r.default || r),
    },
    {
        path: "/session",
        name: "常規課程",
        // component: () => import('~/pages/course/session.vue').then(r => r.default || r),
    },
    {
        name: "機構及學校合辦課程",
        path: "/cooperation",
        // component: () => import('~/pages/course/cooperation.vue').then(r => r.default || r),
    },
    {
        path: "/training-gallery",
        name: "本會訓練相簿",
        // component: () => import('~/pages/gallery/training.vue').then(r => r.default || r),
    },
    {
        path: "/videos-gallery",
        name: "本會訓練影片",
        // component: () => import('~/pages/gallery/videos.vue').then(r => r.default || r),
    },
    {
        path: "/contact",
        name: "聯絡我們",
        // component: () => import('~/pages/contact.vue').then(r => r.default || r),
    },
    {
        path: "/admin",
        name: "Admin Panel",
        // component: () => import('~/pages/admin.vue').then(r => r.default || r),
        meta: {
            sitemap: { ignoreRoute: true },
            hidden: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        beforeEnter: (_, __, next) => {
            next("/404");
        },
        meta: {
            hidden: true,
            sitemap: { ignoreRoute: true },
        },
    },
    {
        path: "/404",
        name: "404",
        // component: () => import('~/pages/404.vue').then(r => r.default || r),
        meta: {
            hidden: true,
            sitemap: { ignoreRoute: true },
        },
    },
];
