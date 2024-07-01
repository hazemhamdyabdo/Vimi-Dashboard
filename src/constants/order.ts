
const headers = [
  {
    key: "serialNumber",//orderNumber
    title: "Order NO.",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "userFullName",// Customer
    title: "Customer",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "items",
    title: "Product",
    sortable: true,
    removable: false,
    align: "center"
  },
  {
    key: "dateCreated",
    title: "Order date",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "totalAmount",
    title: "Price",
    removable: false,
    align: "start"
  },
  {
    key: "paymentMethod",
    title: "Payment",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "status",
    title: "Status",
    sortable: true,
    removable: false,
    align: "center"
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
    label: 'Cancel Sellection',
    icon: '',
  },

]

export {
  headers,
  items,
  ordersFilter
}