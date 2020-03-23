import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/service',
            name: 'service',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Service.vue')
        },
        {
            path: '/about',
            name: 'about',

            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
        },

        {
            path: '/components',
            name: 'components',

            component: () => import(/* webpackChunkName: "about" */ './views/AllComponents.vue'),
            children: [
                {
                    path: 'tab',
                    name: 'tabs',
                    component: () => import(/* webpackChunkName: "about" */ './views/components/Tabs.vue'),
                },
                {
                    path: 'accordion',
                    name: 'accordion',
                    component: () => import(/* webpackChunkName: "about" */ './views/components/Accordions.vue'),
                },
                {
                    path: 'sliders',
                    name: 'slider',
                    component: () => import(/* webpackChunkName: "about" */ './views/components/SlideShow.vue'),
                },
                {
                    path: 'testimonial',
                    name: 'testifyG',
                    component: () => import(/* webpackChunkName: "about" */ './views/components/TestifyGlider.vue'),
                },
                {
                    path: 'quicktips',
                    name: 'quickTips',
                    component: () => import(/* webpackChunkName: "about" */ './views/components/QuickTips.vue'),
                },


            ]
        },

        {
            path: 'faq',
            name: 'faqPage',

            component: () => import(/* webpackChunkName: "about" */ './views/FaqPage')
        },

        {
            path: '/setting',
            name: 'setting',
            component: () => import(/* webpackChunkName: "about" */ './views/Setting.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        },
    ]
})
