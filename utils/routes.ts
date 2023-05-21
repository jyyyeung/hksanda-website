
export default [
    {
        path: "/",
        name: "主頁",
        // component: HomePage,
        component: () => import('~/pages/index.vue').then(r => r.default || r),
        meta: {
            icon: "pi pi-home",
            carousel: "61ee6bfb9c3de1b608293d4c",
        },
    },
    {
        path: "/about",
        name: "關於我們",
        //component: () =>
        //import([>* webpackChunkName: "about" <] "@/views/About/AboutPage.vue"),
        // component: AboutPage,
        component: () => import('~/pages/about.vue').then(r => r.default || r),
        redirect: "/about/",
        children: [
            {
                path: "",
                name: "關於我們",
                component: () => import('~/pages/about/index.vue').then(r => r.default || r),
                //component: () =>
                //import(
                //* webpackChunkName: "about" "@/views/About/AboutUsView.vue"
                //)
                // component: AboutUsView,
            },
            {
                path: "our-team",
                name: "專業教練團隊",
                component: () => import('~/pages/about/our-team.vue').then(r => r.default || r),
                //component: () =>
                //import(
                //[> webpackChunkName: "about" <] "@/views/About/OurTeamView.vue"
                //)
                //component: () => import("../views/About/OurTeamView.vue")
                // component: OurTeamView,
            },
            {
                path: "bylaws",
                name: "本會章程",
                component: () => import('~/pages/about/bylaws.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "about" */ "@/views/About/BylawsView.vue"
                //     ),
            },
            {
                path: "media-interviews",
                name: "媒體採訪",
                component: () => import('~/pages/about/media-interviews.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "about" */ "@/views/About/MediaInterviewsView.vue"
                //     ),
            },
        ],
    },
    {
        path: "/assessments",
        name: "晋升考试制度",
        component: () => import('~/pages/assessments.vue').then(r => r.default || r),
        // component: () =>
        //     import(
        //         /* webpackChunkName: "assessments" */ "@/views/Assessments/AssessmentsPage.vue"
        //     ),
        redirect: "/assessments/syllabus/61d2cc159e2d516a0cc44f9b",
        children: [
            {
                path: "syllabus",
                name: "武術自衛散打考试动作",
                redirect: "/assessments/syllabus/61d2cc159e2d516a0cc44f9b",
                component: () => import('~/pages/assessments/syllabus/index.vue').then(r => r.default || r),
                children: [
                    {
                        path: ':id',
                        component: () => import('~/pages/assessments/syllabus/[id].vue').then(r => r.default || r),
                        meta: {
                            hidden: true,
                        },
                    }
                ]
            },
            {
                path: "hk-badge",
                name: "武術散打章別全港公開試",
                redirect: "/assessments/hk-badge/61d2cc159e2d516a0cc44f9b",
                component: () => import('~/pages/assessments/hk-badge/index.vue').then(r => r.default || r),
                children: [
                    {
                        path: ':id',
                        component: () => import('~/pages/assessments/hk-badge/[id].vue').then(r => r.default || r),
                        meta: {
                            hidden: true,
                        },
                    }
                ]
            },
        ],
    },
    {
        path: "/course",
        name: "本会課程",
        component: () => import('~/pages/course.vue').then(r => r.default || r),
        redirect: "/course/content",
        children: [
            {
                path: "features",
                name: "課程特色",
                component: () => import('~/pages/course/features.vue').then(r => r.default || r),
            },
            {
                path: "content",
                name: "學習內容",
                redirect: '/course/content/61e5381191245e08c35d61d4',
                component: () => import('~/pages/course/content/index.vue').then(r => r.default || r),
                children: [
                    {
                        path: ':id',
                        component: () => import('~/pages/course/content/[id].vue').then(r => r.default || r),
                        meta: {
                            hidden: true,
                        },
                    }
                ]
            },
            {
                path: "class",
                name: "常規課程",
                component: () => import('~/pages/course/class.vue').then(r => r.default || r),
            },
            {
                path: "session",
                name: "私人及組班課程",
                component: () => import('~/pages/course/session.vue').then(r => r.default || r),
            },
            {
                name: "機構及學校合辦課程",
                path: "cooperation",
                component: () => import('~/pages/course/cooperation.vue').then(r => r.default || r),
            },
        ],
    },
    {
        path: "/gallery",
        name: "本會相簿",
        component: () => import('~/pages/gallery.vue').then(r => r.default || r),
        redirect: "/gallery/training",
        children: [
            {
                path: "training",
                name: "本會訓練相簿",
                component: () => import('~/pages/gallery/training.vue').then(r => r.default || r),
            },
            {
                path: "videos",
                name: "本會訓練影片",
                component: () => import('~/pages/gallery/videos.vue').then(r => r.default || r),
            },
        ],
    },
    {
        path: "/contact",
        name: "聯絡我們",
        component: () => import('~/pages/contact.vue').then(r => r.default || r),
    },

    {
        path: "/admin",
        name: "Admin Panel",
        component: () => import('~/pages/admin.vue').then(r => r.default || r),
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
        component: () => import('~/pages/404.vue').then(r => r.default || r),
        meta: {
            hidden: true,
            sitemap: { ignoreRoute: true },
        },
    },
];
