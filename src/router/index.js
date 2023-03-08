import { createRouter, createWebHashHistory } from "vue-router";
const routers = [
    {
        path:'/',
        name:'HomePage',
        component:()=>import(/* webpackChunkName:'mycomp' */'../views/HomePage.vue')
    },
    {
        path:'/article',
        name:'ArticlePage',
        component:()=>import(/* webpackChunkName:'mycomp' */'../views/ArticlePage.vue')
    },
    {
        path:'/hot',
        name:'HotListPage',
        component:()=>import(/* webpackChunkName:'mycomp' */'../views/HotListPage.vue')
    },
    {
        path:'/user',
        name:'SiginPage',
        component:()=>import(/* webpackChunkName:'mycomp' */'../views/SiginPage.vue')
    }
]
export const router=createRouter({
    history:createWebHashHistory(),
    routes:routers
})
export default router;

