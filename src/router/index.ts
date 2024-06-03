import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/auth/loginView.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('@/pages/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/DashboardView.vue'),
          meta: {
            title: 'Dashboard',
          },
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('@/pages/products/List.vue'),
          meta: {
            title: 'Products',
          },
        },
        {
          path: 'add-product',
          name: 'add-product',
          component: () => import('@/pages/products/Add.vue'),
          meta: {
            title: 'Add Product',
          },
        },
        {
          path: 'view-product',
          name: 'view-product',
          component: () => import('@/pages/products/View.vue'),
          meta: {
            title: 'View Product',
          },
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('@/pages/categories/List.vue'),
          meta: {
            title: 'categories',
          },
        },
        {
          path: 'add-category',
          name: 'add-category',
          component: () => import('@/pages/categories/Add.vue'),
          meta: {
            title: 'Add Category',
          },
        },
      ],
    },
  ],
});

export default router;
