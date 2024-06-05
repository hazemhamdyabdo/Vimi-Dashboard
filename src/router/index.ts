import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
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
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/pages/orders/List.vue'),
          meta: {
            title: 'Orders',
          },
        },
        {
          path: 'view-order',
          name: 'view-order',
          component: () => import('@/pages/orders/View.vue'),
          meta: {
            title: 'Order Details',
          },
        },
        {
          path: 'view-category',
          name: 'view-category',
          component: () => import('@/pages/categories/View.vue'),
          meta: {
            title: 'View Category',
          },
        },
      ],
    },
  ],
});

export default router;
