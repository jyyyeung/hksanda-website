// import HomePage from "~/pages/index.vue";

// import AboutPage from "~/pages/About/AboutPage.vue";
// import AboutUsView from "~/pages/About/AboutUsView.vue";
// import OurTeamView from "~/pages/About/OurTeamView.vue";

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
        redirect: "/assessments/syllabus",
        children: [
            {
                path: "syllabus",
                name: "武術自衛散打考试动作",
                component: () => import('~/pages/assessments/syllabus.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "assessments" */ "@/views/Assessments/SyllabusView.vue"
                //     ),
            },
            {
                path: "hk-badge",
                name: "武術散打章別全港公開試",
                component: () => import('~/pages/assessments/hk-badge.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "assessments" */ "@/views/Assessments/HKBadgeView.vue"
                //     ),
            },
        ],
    },
    {
        path: "/course",
        name: "本会課程",
        component: () => import('~/pages/course.vue').then(r => r.default || r),
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/CoursePage.vue"
        //     ),
        redirect: "/course/content",
        children: [
            {
                path: "features",
                name: "課程特色",
                component: () => import('~/pages/course/features.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "course" */ "@/views/Course/LessonFeaturesView.vue"
                //     ),
            },
            {
                path: "content",
                name: "學習內容",
                component: () => import('~/pages/course/content.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "course" */ "@/views/Course/CourseContentView.vue"
                //     ),
            },
            {
                path: "class",
                name: "常規課程",
                component: () => import('~/pages/course/class.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "course" */ "@/views/Course/ClassInfoView.vue"
                //     ),
            },
            {
                path: "session",
                name: "私人及組班課程",
                component: () => import('~/pages/course/session.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "course" */ "@/views/Course/CourseSessionView.vue"
                //     ),
            },
            {
                name: "機構及學校合辦課程",
                path: "cooperation",
                component: () => import('~/pages/course/cooperation.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "course" */ "@/views/Course/CooperationCourseView.vue"
                //     ),
            },
        ],
    },
    {
        path: "/gallery",
        name: "本會相簿",
        component: () => import('~/pages/gallery.vue').then(r => r.default || r),
        // component: () =>
        //     import(
        //         /* webpackChunkName: "gallery" */ "@/views/Gallery/GalleryPage.vue"
        //     ),
        redirect: "/gallery/training",
        children: [
            {
                path: "training",
                name: "本會訓練相簿",
                component: () => import('~/pages/gallery/training.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "gallery" */ "@/views/Gallery/TrainingGalleryView.vue"
                //     ),
            },
            {
                path: "videos",
                name: "本會訓練影片",
                component: () => import('~/pages/gallery/videos.vue').then(r => r.default || r),
                // component: () =>
                //     import(
                //         /* webpackChunkName: "gallery" */ "@/views/Gallery/VideoGalleryView.vue"
                //     ),
            },
        ],
    },
    {
        path: "/contact",
        name: "聯絡我們",
        component: () => import('~/pages/contact.vue').then(r => r.default || r),
        // component: () =>
        //     import(
        //         /* webpackChunkName: "contact" */ "@/views/ContactsPage.vue"
        //     ),
    },

    {
        path: "/admin",
        name: "Admin Panel",
        component: () => import('~/pages/admin.vue').then(r => r.default || r),
        // component: () =>
        //     import(
        //         /* webpackChunkName: "admin" */ "@/views/Admin/AdminPage.vue"
        //     ),
        meta: {
            sitemap: { ignoreRoute: true },
            hidden: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        //path: "/:catchAll(.*)",
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
        // component: () => import("@/pages/404.vue"),
        meta: {
            hidden: true,
            sitemap: { ignoreRoute: true },
        },
    },
];
