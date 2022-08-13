import  { createRouter,createWebHashHistory } from 'vue-router';
import HomeView from '../views/web/Home.vue'
const routes = [
// -------------web路由-----------------------
    {
        path:'/',
        name:'WebHome',
        component:HomeView
    },
    {
        path:'/cases/:id',
        name:'CaseView',
        component:()=>import( '../views/web/CaseView.vue')
    },
// -------------管理后台路由-----------------------
    {
        path:'/admin',
        name:'AdminHome',
        component:()=>import( '../views/admin/Home.vue'),
        redirect:'/admin/welcome',
        meta:{
            title:'首页'
        },
        children:[
            {   
                name:'Welcome',
                path:'/admin/welcome',
                component:()=>import( '../components/admin/welcome.vue'),
                meta:{
                    title:'欢迎进入智创管理系统'
                }
            },
            {
                name:'Administrator',
                path:'/admin/administrator',
                component:()=>import( '../components/admin/Administrator.vue'),
                meta:{
                    title:'管理员'
                }
            },
            {
                name:'AddAdmin',
                path:'/admin/addadmin',
                component:()=>import( '../components/admin/AddAdmin.vue'),
                meta:{
                    title:'添加管理员'
                }
            },
            {
                name:'AddCase',
                path:'/admin/addcases',
                component:()=>import( '../components/admin/AddCases.vue'),
                meta:{
                    title:'添加案例'
                }
            },
            {
                name:'CaseList',
                path:'/admin/caselist',
                component:()=>import( '../components/admin/CaseList.vue'),
                meta:{
                    title:'案例列表'
                }
            },
            {
                name:'AddNews',
                path:'/admin/addnews',
                component:()=>import( '../components/admin/AddNews.vue'),
                meta:{
                    title:'添加新闻'
                }
            },
            {
                name:'NewsList',
                path:'/admin/newslist',
                component:()=>import( '../components/admin/NewsList.vue'),
                meta:{
                    title:'新闻列表'
                }
            },
            {
                name:'AddTeamer',
                path:'/admin/addteamer',
                component:()=>import( '../components/admin/AddTeamer.vue'),
                meta:{
                    title:'添加团队成员'
                }
            },
            {
                name:'TeamList',
                path:'/admin/teamlist',
                component: ()=>import( '../components/admin/TeamList.vue'),
                meta:{
                    title:'团队列表'
                }
            },
            {
                name:'BusinessList',
                path:'/admin/businesslist',
                component:()=>import( '../components/admin/BusinessList.vue'),
                meta:{
                    title:'业务列表'
                }
            },
            {
                name:'AddBusiness',
                path:'/admin/addbusiness',
                component:()=>import( '../components/admin/AddBusiness.vue'),
                meta:{
                    title:'添加业务'
                }
            },
            {
                name:'CompanyInfo',
                path:'/admin/companyinfo',
                component:()=>import( '../components/admin/CompanyInfo.vue'),
                meta:{
                    title:'公司信息'
                }
            },
            {
                name:'AboutUs',
                path:'/admin/aboutus',
                component:()=>import( '../components/admin/AboutUs.vue'),
                meta:{
                    title:'关于智创'
                }
            },
            {
                name:'AddBanner',
                path:'/admin/addbanner',
                component:()=>import( '../components/admin/AddBanner.vue'),
                meta:{
                    title:'添加轮播'
                }
            },
            {
                name:'BannerList',
                path:'/admin/bannerlist',
                component:()=>import( '../components/admin/BannerList.vue'),
                meta:{
                    title:'轮播列表'
                }
            },
            {
                name:'MessageList',
                path:'/admin/messagelist',
                component: ()=>import( '../components/admin/MessageList.vue'),
                meta:{
                    title:'留言列表'
                }
            }
        ]
       
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import( '../views/admin/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;