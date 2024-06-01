export default [
  {
    parent: 'Main',
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: { name: 'dashboard' },
      },
      {
        name: 'Products',
        icon: 'products',
        path: { name: 'listing' },
      },
      {
        name: 'Categories',
        icon: 'categories',
        // path: { name: "categories" },
      },
      {
        name: 'Orders',
        icon: 'orders',
        // path: { name: "orders" },
      },
      {
        name: 'Tickets',
        icon: 'tickets',
        // path: { name: "tickets" },
      },
      {
        name: 'Promotion',
        icon: 'Adds',
        // path: { name: "promotion" },
      },
      {
        name: 'Notifications',
        icon: 'notifications-nav',
        // path: { name: "notifications" },
      },
      {
        name: 'Users',
        icon: 'users',
        // path: { name: "users" },
      },
    ],
  },
  {
    parent: 'General',
    children: [
      {
        name: 'Settings',
        icon: 'settings',
        // path: { name: "settings" },
      },
      {
        name: 'Log out',
        icon: 'logout',
        // path: { name: "logout" },
      },
    ],
  },
];
