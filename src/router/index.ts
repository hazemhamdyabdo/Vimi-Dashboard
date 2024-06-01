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
      component: () => import('../pages/auth/loginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard.vue'),
      children: [
        {
          path: 'listing',
          name: 'listing',
          component: () => import('@/pages/products/Listing.vue'),
        },
        {
          path: 'add-product',
          name: 'add-product',
          component: () => import('@/pages/products/AddProducts.vue'),
        },
      ],
    },
  ],
});

export default router;
