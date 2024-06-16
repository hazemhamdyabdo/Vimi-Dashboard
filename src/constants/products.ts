
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
  { title: "Category", key: "categoryName", align: "center", sortable: true },
  { title: "Type", key: "type", align: "left", sortable: false },
  { title: "Qty", key: "stockQuantity", align: "left", sortable: false },
  { title: "Price", key: "price", align: "left", sortable: true },
  { title: "Viability", key: "visibility", align: "center", sortable: true },
  { key: "actions", align: "center", sortable: false },
];


export {
  headers
}
