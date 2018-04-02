// import Vue from 'vue';
// import Router from 'vue-router';
import CommonComponent from '@/components/common-component';
import Introduce from '@/components/introduce/introduce.vue';
import Starpage from '@/components/starpage/starpage.vue';
import YearRank from '@/components/yearRank/yearRank.vue';

var Vue = window.Vue
const Router = window.VueRouter
Vue.use(Router);
// alert('router');
// window.Hub = new Vue();
// console.log(12);
export default new Router({
    scrollBehavior:() => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'CommonComponent',
            component: CommonComponent
        },
        {
            path:'/introduce',
            name:'Introduce',
            component: Introduce
        },
        {
            path:'/star/:id',
            name:'Starpage',
            component: Starpage
        },
        {
            path:'/yearRank',
            name:'YearRank',
            component: YearRank
        }
    ]
});
