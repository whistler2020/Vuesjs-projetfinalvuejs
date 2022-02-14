import Vue from 'vue'
//import VueRouter from 'vue-router'
import Router from 'vue-router'
//import HeaderMenu from '../views/HeaderMenu.vue';

Vue.use(Router)

const routes = [
  {
    path:"/Product",
    name:"Product",
    component:"Product",
},
{
    path:"/ProductEdit",
    name:"ProductEdit",
    component:"ProductEdit",
},
{
    path:"/ProductList",
    name:"ProductList",
    component:"ProductList",
},
{
    path:"/Contact",
    name:"Contact",
    component:"Contact",
},
{
    path:"/info",
    name:"info",
   // component:"info",
    component: () => import ('../components/HeaderMenu.vue')
},
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
