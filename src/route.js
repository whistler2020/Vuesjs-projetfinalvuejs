import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
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
            component:"info",
        },
    ]
});