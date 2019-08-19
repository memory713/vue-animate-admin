/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "css效果", icon: "example" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "三角形", icon: "fengkonggongzuotai" }
      },
      {
        path: "tooltips",
        name: "Tooltips",
        component: () => import("@/views/table/tooltips"),
        meta: { title: "标签", icon: "tree" }
      },
      {
        path: "word",
        name: "Word",
        component: () => import("@/views/table/word"),
        meta: { title: "字符动画", icon: "zhangwugongzuotai" }
      },
      {
        path: "taiji",
        name: "Taiji",
        component: () => import("@/views/table/taiji"),
        meta: { title: "太极", icon: "banjie" }
      },
      {
        path: "weather",
        name: "Weather",
        component: () => import("@/views/table/weather"),
        meta: { title: "天气", icon: "banjie" }
      },
      {
        path: "tiao",
        name: "Tiao",
        component: () => import("@/views/table/tiao"),
        meta: { title: "跳动的纸片", icon: "banjie" }
      },
      {
        path: "cloud",
        name: "Cloud",
        component: () => import("@/views/table/cloud"),
        meta: { title: "白云飘飘", icon: "banjie" }
      },
      {
        path: "overturn",
        name: "Overturn",
        component: () => import("@/views/table/overturn"),
        meta: { title: "图片翻转", icon: "banjie" }
      },
      {
        path: "pageturn",
        name: "Pageturn",
        component: () => import("@/views/table/pageturn"),
        meta: { title: "翻页效果", icon: "banjie" }
      }
    ]
  },

  {
    path: "/canvas",
    component: Layout,
    redirect: "/canvas/tree",
    name: "Canvas",
    meta: { title: "canvas动画", icon: "form" },

    children: [
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "画笔🖌️", icon: "form" }
      },
      {
        path: "name",
        name: "Name",
        component: () => import("@/views/tree/name"),
        meta: { title: "渐变", icon: "form" }
      },
      {
        path: "round",
        name: "Round",
        component: () => import("@/views/tree/round"),
        meta: { title: "圆形", icon: "form" }
      },
      {
        path: "square",
        name: "Square",
        component: () => import("@/views/tree/square"),
        meta: { title: "矩形", icon: "form" }
      },
      {
        path: "RoundedRectangle",
        name: "RoundedRectangle",
        component: () => import("@/views/tree/RoundedRectangle"),
        meta: { title: "圆角矩形", icon: "form" }
      },
      {
        path: "transformation",
        name: "Transformation",
        component: () => import("@/views/tree/transformation"),
        meta: { title: "图形变换", icon: "form" }
      },

      {
        path: "word",
        name: "Word",
        component: () => import("@/views/tree/word"),
        meta: { title: "文字渲染", icon: "form" }
      },
      {
        path: "grid",
        name: "Grid",
        component: () => import("@/views/tree/grid"),
        meta: { title: "网格", icon: "form" }
      },
      {
        path: "nonzeroSurroundRule",
        name: "NonzeroSurroundRule",
        component: () => import("@/views/tree/nonzeroSurroundRule"),
        meta: { title: "非零环绕规则", icon: "form" }
      },
      {
        path: "other",
        name: "Other",
        component: () => import("@/views/tree/other"),
        meta: { title: "canvas补充", icon: "form" }
      }
    ]
  },

  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        meta: { title: "menu2" }
      }
    ]
  },

  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: { title: "External Link", icon: "link" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
