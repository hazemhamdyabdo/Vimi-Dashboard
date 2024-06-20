
const headers = [
  {
    key: "uuid",
    title: "ID",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "Customer",
    title: "Customer Name",
    sortable: false,
    removable: false,
    align: "start"
  },
  {
    key: "title",
    title: "Title",
    sortable: true,
    removable: false,
    align: "start"
  },
  {
    key: "description",
    title: "Description",
    removable: false,
    align: "start"
  },
  {
    key: "dateCreated",
    title: "Creation date",
    sortable: false,
    removable: false,
    align: "center"
  },
  {
    key: "respondDate",
    title: "Respond date",
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

const items = [
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Pending"
  },
  {
    "uuid": "#875243",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Replied"
  },
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Solved"
  },
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Opened"
  },
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Deleted"

  }, {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Solved"
  },
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Replied"
  },
  {
    "uuid": "#76459811",
    "Customer": "Lorem ipsum ",
    "title": "Lorem ipsum dolor",
    "description": "Lorem ipsum dolor sit ame consectet",
    "dateCreated": new Date(),
    "respondDate": "11/16/2030",
    "status": "Deleted"
  }

]
const ticketsFilter = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',
  },
  {
    id: 1,
    label: 'Reply',
    svg: 'Reply',
  },
  {
    id: 2,
    label: 'Solved',
    svg: 'True-circle',
  },
  {
    id: 5,
    label: 'Archive Ticket',
    svg: 'archive',
  },
  {
    id: 6,
    label: 'Delete Ticket',
    svg: 'delete (1)',
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
  ticketsFilter
}