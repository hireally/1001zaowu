import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import My from "./views/my/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        showFooter: true
      },
      component: Home
    },
    {
      path: "/sort",
      name: "sort",
      meta: {
        showFooter: true
      },
      // route level code-splitting
      // this generates a separate chunk (sort.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "sort" */ "@/views/sort/index.vue")
    },
    {
      path: "/find",
      name: "find",
      meta: {
        showFooter: true
      },
      // route level code-splitting
      // this generates a separate chunk (find.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "find" */ "@/views/find/index.vue")
    },
    {
      path: "/my",
      name: "my",
      meta: {
        showFooter: true
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: My
    },
    {
      path: "/my/article",
      name: "myArticle",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "myArticle" */ "@/views/my/article/index.vue")
    },
    {
      path: "/my/address",
      name: "address",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "myAddress" */ "@/views/my/address/index.vue")
    },
    {
      path: "/my/card",
      name: "myCard",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "myCard" */ "@/views/my/card/index.vue")
    },
    {
      path: "/my/account",
      name: "myAccount",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "myAccount" */ "@/views/my/account/index.vue")
    },
    {
      path: "/my/postSale",
      name: "postSale",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "postSale" */ "@/views/my/postSale/index.vue")
    },
    {
      path: "/my/order",
      name: "order",
      redirect: "/my/order/all",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "order" */ "@/views/my/order/index.vue"),
      children: [
        {
          path: "all",
          name: "orderAll",
          component: () =>
            import(/* webpackChunkName: "orderAll" */ "@/views/my/order/all/index.vue")
        },
        {
          path: "pending-paid",
          name: "orderPP",
          component: () =>
            import(/* webpackChunkName: "orderAll" */ "@/views/my/order/pp/index.vue")
        },
        {
          path: "fulled",
          name: "orderFull",
          component: () =>
            import(/* webpackChunkName: "orderAll" */ "@/views/my/order/full/index.vue")
        },
        {
          path: "paid",
          name: "orderPaid",
          component: () =>
            import(/* webpackChunkName: "orderAll" */ "@/views/my/order/paid/index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: {
        showFooter: false
      },
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "user" */ "@/views/login/index.vue")
    }
  ]
});
