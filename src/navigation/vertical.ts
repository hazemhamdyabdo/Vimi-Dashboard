const navItems = [
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
        icon: 'Products',
        path: { name: 'products' },
      },
      {
        name: 'Categories',
        icon: 'categories',
        path: { name: 'categories' },
      },
      {
        name: 'Orders',
        icon: 'Orders',
        path: { name: 'orders' },
      },
      {
        name: 'Customers',
        icon: 'customers',
        path: { name: 'customers' },
      },
      {
        name: 'Tickets',
        icon: 'tickets',
        path: { name: 'tickets' },
      },
      {
        name: 'Promotion',
        icon: 'Adds',
        path: { name: 'promotion-discounts' },
      },
      {
        name: 'Push Notifications',
        icon: 'notifications-nav',
        path: { name: 'notifications' },
      },
    ],
  },
  {
    parent: 'General',
    children: [
      {
        name: 'Settings',
        icon: 'settings',
        path: { name: 'settings' },
      },
    ],
  },
];

const actions = [
  {
    name: 'Log out',
    icon: 'logout',
    action: 'logout',
  },
];

export { navItems, actions };
