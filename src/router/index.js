import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from "../views/layout/Layout";

// 读取内容
import store from "../store"

import ProductSelect from "../views/productSelect/ProductSelect";
import Login from "../views/login/Login";
import Params from "../views/params/Params";
import ContentCategory from "../views/contentCategory/ContentCategory";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // 登陆才能访问
    children: [
      {
        path: '/',
        name: 'ProductSelect',
        component: ProductSelect,
        meta: {
          isLogined: true
        }
      },
      {
        path: '/params',
        name: 'Params',
        component: Params,
        meta: {
          isLogined: true
        }
      },
      {
        path: '/content',
        name: 'LoContentCategory',
        component: ContentCategory,
        meta: {
          isLogined: true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
});

// 路由导航，登陆后才能看到的页面，读取vuex的内容
router.beforeEach((to, from, next) => {
  if (to.meta.isLogined) {
    //读取token
    // console.log(store.state.userinfo.token);
    const token = store.state.userinfo.token;
    if (token) {
      next();
    }else {
      next({
        path: "/login"
      })
    }
  }
  next();
});


export default router
