
const headers = [
  {
    key: "orderNumber",
    title: "Order NO.",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "Customer",
    title: "Customer",
    sortable: false,
    removable: false,
    align: "start"
  },
  {
    key: "displayName_En",
    title: "Product",
    sortable: true,
    removable: false,
    align: "center"
  },
  {
    key: "price",
    title: "Price",
    removable: false,
    align: "start"
  },
  {
    key: "orderDate",
    title: "Order date",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "Payment",
    title: "Payment",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "Status",
    title: "Status",
    sortable: true,
    removable: false,
    align: "center"
  }
]

const items = [
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "MASTERCARD",
    "Status": "Pending"
  },
  {
    "orderNumber": "#875243",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "VISA",
    "Status": "Delivered"
  },
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "VISA",

    "Status": "Shipped"
  },
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "MASTERCARD",

    "Status": "Returned"
  },
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "Status": "Cancelled"
  }, {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "MASTERCARD",
    "Status": "In progress"
  },
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "VISA",
    "Status": "Return in progress"
  },
  {
    "orderNumber": "#76459811",
    "Customer": "Lorem ipsum ",
    "displayName_En": "Lorem ipsum dolor sit ame consectetur.",
    "orderDate": "21/11/2022",
    "price": " 20",
    "Payment": "451245",
    "paymentMethod": "MASTERCARD",
    "Status": "Rejected"
  }

]
const ordersFilter = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',
  },
  {
    id: 1,
    label: 'Change Status',
    svg: 'Change',
  },
  {
    id: 2,
    label: 'Cancel Order',
    svg: 'close-circle (1)',
  },
  {
    id: 5,
    label: 'Archive Order',
    svg: 'archive',
  },

  {
    id: 4,
    label: 'Select All',
    icon: '',
  },
  {
    id: 5,
    label: 'Cancel Selection',
    icon: '',
  },

]

export {
  headers,
  items,
  ordersFilter
}