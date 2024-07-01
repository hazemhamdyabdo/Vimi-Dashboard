const headers = [
  {
    title: 'ID',
    key: 'uuid',
    sortable: false,
    align: 'center',
  },
  { title: 'AD Banner', key: 'imagePath', align: 'left', sortable: true },
  {
    title: 'AD Contain',
    key: 'navigation',
    align: 'center',
    sortable: true,
  },
  {
    title: 'AD to',
    key: 'target',
    align: 'center',
    sortable: true,
  },
  {
    title: 'AD Place',
    key: 'place',
    align: 'left',
    sortable: false,
  },
  { title: 'Start date', key: 'startDate', align: 'center', sortable: true },
  {
    title: 'Expiry date',
    key: 'dateCreated',
    align: 'center',
    sortable: false,
  },
  { title: 'Status', key: 'status', align: 'center', sortable: true },
  { title: '', key: 'promotion-actions', align: 'center', sortable: false },
];
const adsFilter = [
  {
    id: 1,
    label: 'Renew AD',
    svg: 'Change',
  },
  {
    id: 1,
    label: 'Stop AD',
    svg: 'Hold',
  },
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

export { adsFilter, headers };
