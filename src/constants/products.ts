
const headers = [
  {
    key: "exclusive",
    sortable: false,
    removable: false,
    align: "center",
  },
  { title: "SKU", key: "sku", align: "left", sortable: false },
  {
    title: "Product",
    key: "displayName_En",
    align: "center",
    sortable: true,
    width: 250,
  },
  { title: "Category", key: "categoryDisplayName_Ar", align: "center", sortable: true },
  { title: "Type", key: "type", align: "left", sortable: false },
  { title: "Qty", key: "stockQuantity", align: "left", sortable: false },
  { title: "Price", key: "price", align: "left", sortable: true },
  { title: "Viability", key: "visibility", align: "center", sortable: true },
  { key: "actions", align: "center", sortable: false },
];


const productFilter = [
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
    label: 'Hide Product',
    svg: 'eye-crossed',
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

export {
  headers,
  productFilter
}
