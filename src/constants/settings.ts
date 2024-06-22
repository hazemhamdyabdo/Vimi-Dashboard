
const rolesFilter = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',
  },
  {
    id: 1,
    label: 'Edit',
    svg: 'edit (1)',
  },
  {
    id: 3,
    label: 'Delete',
    svg: 'delete (1)',
  },
  {
    id: 4,
    label: 'Select All',
    icon: '',
  },
  {
    id: 5,
    label: 'Cancel Sellection',
    icon: '',
  },
]

const rolesHeader = [
  {
    title: 'Role Name',
    key: 'roleName',
    align: 'start',
    // width: 250,
  },
  {
    title: 'Role Description',
    key: 'description',
    align: 'start',
    // width: 250,
  },
  {
    title: 'Users',
    key: 'users',
    align: 'center',
    sortable: true,
  },
  {
    title: 'Permissions',
    key: 'permissions',
    align: 'center',
    sortable: true,
  },
  {
    title: 'Creation Date',
    key: 'dateCreated',
    align: 'center',
    sortable: true,

  },
  {
    title: 'Status',
    key: 'status',
    align: 'center',
    sortable: true,
  },
  { key: 'actions', align: 'center', sortable: false },
]

const roles = [
  {
    "uuid": "#76459811",
    "roleName": "Admin",
    "description": "Admin role",
    "users": 1,
    "permissions": 1,
    "dateCreated": "11/16/2030",
    "status": "Active",
    "images": [
      {
        "uuid": "#76459811",
        "imagePath": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
    ]
  },
  {
    "uuid": "#875243",
    "roleName": "User",
    "description": "User role",
    "users": 1,
    "permissions": 8,
    "dateCreated": "11/16/2030",
    "status": "Inactive",
    "images": [
      {
        "uuid": "#76459811",
        "imagePath": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "uuid": "#875243",
        "imagePath": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

      },
      {
        "uuid": "#76459811",
        "imagePath": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "uuid": "#875243",
        "imagePath": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

      },
    ]

  },
]

const usersHeader = [
  {
    title: 'User Name',
    key: 'Customer',
    align: 'start',

  },
  {
    title: 'Email',
    key: 'email',
    align: 'start',
  },
  {
    title: 'Phone Number',
    key: 'phoneNumber',
    align: 'center',
  },
  {
    title: "Role Name",
    key: "roleName",
    align: "center",

  },
  {
    title: 'Creation Date',
    key: 'dateCreated',
    align: 'center',
  },
  {
    title: 'Status',
    key: 'status',
    align: 'center',
  }
]

const users = [
  {
    "uuid": "#76459811",
    "Customer": "Mohamed Ahmed",
    "email": "Mohamed_Ahmed@gmail.com",
    "phoneNumber": "+965 984 363 372",
    "roleName": "Admin",
    "dateCreated": "11/16/2030",
    "status": "Active",
  },
  {
    "uuid": "#76459814",
    "Customer": "Khalid Ossama",
    "email": "Khalid_Ossama@gmail.com",
    "phoneNumber": "+965 742 442 333",
    "roleName": "Admin",
    "dateCreated": "11/18/2035",
    "status": "Blocked",
  },
]

const userFilter = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',
  },
  {
    id: 1,
    label: 'Edit',
    svg: 'edit (1)',
  },
  {
    id: 2,
    label: "Reset Password",
    svg: "lock",
  },
  {
    id: 3,
    label: "Block",
    svg: "Block"
  },
  {
    id: 4,
    label: "Delete",
    svg: "delete (1)"
  },
  {
    id: 5,
    label: 'Select All',
    icon: '',
  },
  {
    id: 6,
    label: 'Cancel Sellection',
    icon: '',
  },

]

export {
  rolesFilter,
  rolesHeader,
  roles,
  usersHeader,
  users,
  userFilter
}