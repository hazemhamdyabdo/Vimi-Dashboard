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
          path: 'edit-product/:id',
          name: 'edit-product',
          component: () => import('@/pages/products/Add.vue'),
          meta: {
            title: 'Edit Product',
          },
        },
        {
          path: 'view-product/:id',
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
          path: 'edit-category/:id',
          name: 'edit-category',
          component: () => import('@/pages/categories/Add.vue'),
          meta: {
            title: 'Edit Category',
          },
        },
        {
          path: 'view-category/:id',
          name: 'view-category',
          component: () => import('@/pages/categories/View.vue'),
          meta: {
            title: 'View Category',
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
          path: 'customers',
          name: 'customers',
          component: () => import('@/pages/customers/List.vue'),
          meta: {
            title: 'Customers',
          },
        },
        {
          path: 'add-customer',
          name: 'add-customer',
          component: () => import('@/pages/customers/Add.vue'),
          meta: {
            title: 'Add Customer',
          },
        },
        {
          path: 'view-customer',
          name: 'view-customer',
          component: () => import('@/pages/customers/View.vue'),
          meta: {
            title: 'View Customer',
          },
        },
        {
          path: 'tickets',
          name: 'tickets',
          component: () => import('@/pages/tickets/List.vue'),
          meta: {
            title: 'Tickets',
          },
        },
        {
          path: 'view-ticket',
          name: 'view-ticket',
          component: () => import('@/pages/tickets/View.vue'),
          meta: {
            title: 'Ticket Details',
          },
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: () => import('@/pages/notifications/List.vue'),
          meta: {
            title: 'Push Notifications',
          },
        },
        {
          path: 'add-notification',
          name: 'add-notification',
          component: () => import('@/pages/notifications/Add.vue'),
          meta: {
            title: 'Push Notification',
          },
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/pages/setting/index.vue'),
          meta: {
            title: 'Setting',
          },
        },
        {
          path: 'add-roles',
          name: 'add-roles',
          component: () => import('@/pages/setting/roles/Add.vue'),
          meta: {
            title: 'Add Role',
          },
        },
        {
          path: 'view-roles',
          name: 'view-roles',
          component: () => import('@/pages/setting/roles/View.vue'),
          meta: {
            title: 'Role Details',
          },
        },
        {
          path: 'add-users',
          name: 'add-users',
          component: () => import('@/pages/customers/Add.vue'),
          meta: {
            title: 'Add User',
          },
        },
        {
          path: 'view-users',
          name: 'view-users',
          component: () => import('@/pages/setting/users/View.vue'),
          meta: {
            title: 'User Details',
          },
        },
      ],
    },
  ],
});

export default router;
