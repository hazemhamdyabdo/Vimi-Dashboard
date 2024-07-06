const discountHeaders = [
  {
    key: 'uuid',
    title: 'ID',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    title: 'Discount on',
    key: 'discountOn',
    align: 'center',
    sortable: true,
    width: 250,
  },
  { title: 'Discount to', key: 'target', align: 'center', sortable: true },
  {
    title: 'Discount ratio',
    key: 'ratio',
    align: 'center',
    sortable: true,
  },
  { title: 'Start date', key: 'startDate', align: 'left', sortable: false },
  { title: 'Expiry date', key: 'startDate', align: 'left', sortable: false },
  { title: 'Status', key: 'status', align: 'center', sortable: true },
  { key: 'promotion-actions', align: 'center', sortable: false },
];

const discountFilter = [
  {
    id: 2,
    label: 'Renew Discount',
    svg: 'Change',
  },
  {
    id: 3,
    label: 'Stop Discount',
    svg: 'Hold',
  },
  {
    id: 4,
    label: 'Delete',
    svg: 'delete (1)',
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
];

export { discountHeaders, discountFilter };
