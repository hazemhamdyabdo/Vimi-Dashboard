<script setup lang="ts">
const headers = [
  {
    title: 'Order ID',
    key: 'orderNumber',
    sortable: false,
  },
  {
    title: 'Order Date',
    key: 'orderDate',
    sortable: false,
  },
  {
    title: 'Status',
    key: 'status',
    sortable: false,
    align: 'center',
  },
  {
    title: 'Items NO.',
    key: 'items',
    sortable: false,
    align: 'center',
  },
  {
    title: 'Amount',
    key: 'amount',
    sortable: false,
    align: 'center',
  },
];
const items = [
  {
    orderNumber: '#434856345',
    orderDate: '21/2/2024',
    status: 'Delivered',
    items: '2',
    amount: 'KD 40',
  },
  {
    orderNumber: '#4138546345',
    orderDate: '21/3/2024',
    status: 'In progress',
    items: '2',
    amount: 'KD 60',
  },
  {
    orderNumber: '#13856345',
    orderDate: '21/4/2024',
    status: 'cancelled',
    items: '2',
    amount: 'KD 105',
  },
];
const getStyleStatus = (status: string) => {
  const styles = {
    Pending: {
      color: '#E2B000',
      background: '#e2b0001a',
    },
    Delivered: {
      color: '#27ae60',
      background: '#27ae601a',
    },
    Shipped: {
      color: '#733EE4',
      background: '#733ee41a',
    },
    Returned: {
      color: '#21094A',
      background: '#21094a1a',
    },
    cancelled: {
      color: '#EB5757',
      background: '#eb57571a',
    },
    'In progress': {
      color: '#F2994A',
      background: '#f2994a1a',
    },
    'Return in progress': {
      color: '#21094A',
      background: '#21094a1a',
    },
    Rejected: {
      color: '#EB5757',
      background: '#eb57571a',
    },
  };
  return styles[status];
};
</script>

<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow>
        <VCol cols="4">
          <VCol>
            <VCard class="card card-info">
              <div
                style="
                  display: flex;
                  gap: 1rem;
                  align-items: center;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <div>
                  <img src="@/assets/test-profile.png" />
                </div>
                <div style="text-align: center">
                  <p style="color: #21094a; font-weight: 500; font-size: 20px">
                    Mohamed Gamal
                  </p>
                  <p style="color: #733ee4">mohamedgamal23@gmail.com</p>
                  <p style="color: #7066a2; font-size: 14px; font-weight: 400">
                    +965 983 373 282
                  </p>
                </div>
              </div>
              <hr style="margin: 1rem 0; border: 1px solid #e8e7ef" />
              <div class="card-body">
                <div>
                  <span
                    style="
                      font-weight: 400;
                      color: #afaacb;
                      font-size: 14px;
                      margin-right: 0.5rem;
                    "
                    >Joining Date:</span
                  >
                  <span
                    style="font-weight: 500; font-size: 14px; color: #7066a2"
                    >21 September 2023</span
                  >
                </div>
                <div>
                  <span
                    style="
                      font-weight: 400;
                      color: #afaacb;
                      font-size: 14px;
                      margin-right: 0.5rem;
                    "
                    >Last Order Number:</span
                  >
                  <span
                    style="font-weight: 500; font-size: 14px; color: #7066a2"
                    >#4387653</span
                  >
                </div>
                <div>
                  <span
                    style="
                      font-weight: 400;
                      color: #afaacb;
                      font-size: 14px;
                      margin-right: 0.5rem;
                    "
                    >Average Order value:</span
                  >
                  <span
                    style="font-weight: 500; font-size: 14px; color: #7066a2"
                    >Kd 320</span
                  >
                </div>
              </div>
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="8">
          <VCol>
            <VCard class="card">
              <h3 class="card-title mb-4">Orders</h3>
              <VDataTable
                class="listen-table"
                :headers="headers"
                hide-default-footer
                :items="items"
                :itemsPerPage="10"
                color="#FAF9FE"
                style="background-color: #faf9fe; border: none; padding: 1rem"
              >
                <template v-slot:item.orderNumber="{ item }">
                  <span
                    style="font-weight: 500; font-size: 14px; color: #733ee4"
                  >
                    {{ item.orderNumber }}
                  </span>
                </template>
                <template v-slot:item.orderDate="{ item }">
                  <span
                    style="font-weight: 400; font-size: 14px; color: #21094a"
                  >
                    {{ item.orderDate }}
                  </span>
                </template>
                <template v-slot:item.status="{ item }">
                  <span
                    :style="`background-color: ${getStyleStatus(item.status)?.background}; color: ${getStyleStatus(item.status)?.color}; padding: 0.5rem 1rem; border-radius: 8px; font-size: 14px;`"
                  >
                    {{ item.status }}
                  </span>
                </template>
                <template v-slot:item.items="{ item }">
                  <span
                    style="font-weight: 400; font-size: 14px; color: #21094a"
                  >
                    {{ item.items }}
                  </span>
                </template>
                <template v-slot:item.amount="{ item }">
                  <span
                    style="font-weight: 400; font-size: 14px; color: #21094a"
                  >
                    {{ item.amount }}
                  </span>
                </template>
              </VDataTable>
              <p
                style="color: #7066a2; font-size: 14px; font-weight: 500"
                class="mt-4"
              >
                Total spent KD 3400 on 7 orders
              </p>
            </VCard>
          </VCol>
          <VCol>
            <VCard class="card">
              <h3 class="card-title mb-4">Addresses</h3>
              <VCard
                style="
                  padding: 1rem 2rem;
                  background-color: #faf9fe;
                  border: none;
                  box-shadow: none;
                  border-radius: 12px;
                "
              >
                <h5
                  style="
                    color: #21094a;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 0.5rem;
                  "
                >
                  Home
                </h5>
                <p style="color: #21094a">30 street, block 3, Kuwait</p>
              </VCard>
            </VCard>
          </VCol>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>
<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
}
.card-title {
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 0.7rem;
}
:global(.listen-table thead tr) {
  background-color: #faf9fe;
  color: #21094a;
  border: 1px solid #e8e7ef;
  margin-bottom: 5rem;
  border-radius: 12px;
  border-bottom: none;
}
:global(.v-table .v-table__wrapper > table > thead > tr > th) {
  border-bottom: 2px solid #7066a2;
  margin-bottom: 5rem;
}
</style>
