import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/auth/loginView.vue'),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/Dashboard.vue"),
      children: [
        {
          path: "products",
          name: "products",
          component: () => import("@/pages/TestInner.vue"),
        },
      ]
    }
  ],
});

export default router;
