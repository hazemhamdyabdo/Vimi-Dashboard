const headers = [
  {
    title: 'ID',
    key: 'uuid',
    sortable: false,
    align: 'center',
  },
  { title: 'Category', key: 'displayName_En', align: 'center', sortable: true },
  {
    title: 'Sub-Cate. No.',
    key: 'subCategoryCount',
    align: 'center',
    sortable: false,
  },
  {
    title: 'Items QTY',
    key: 'productCount',
    align: 'center',
    sortable: false,
  },
  {
    title: 'Published date',
    key: 'dateCreated',
    align: 'left',
    sortable: false,
  },
  { title: 'Visibility', key: 'visibility', align: 'center', sortable: true },
  { key: 'actions', align: 'center', sortable: false },
];
const categoriesFilter = [
  {
    id: 1,
    label: 'Delete',
    svg: 'delete (1)',
  },
  {
    id: 2,
    label: 'Select All',
    icon: '',
  },
  {
    id: 3,
    label: 'Cancel Sellection',
    icon: '',
  },
];

export { categoriesFilter, headers };
