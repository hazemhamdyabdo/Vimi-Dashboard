<script setup lang="ts">
import { headers, ordersFilter } from "@/constants/order";
import { getOrders } from "@/apis/orders";
let page = 1;
const pageCount = 4;
const selectedItems = ref([]);
const orders = ref([]);
const totalCount = ref(0);
const isPageLoading = ref(false);

const getAllOrders = async () => {
  isPageLoading.value = true;
  try {
    const {
      data: { data },
    } = await getOrders();
    orders.value = data.result;
    totalCount.value = data.total;
  } catch (error) {
    console.log(error);
  } finally {
    isPageLoading.value = false;
  }
};

onMounted(async () => {
  await getAllOrders();
});
</script>
<template>
  <section class="px-12 w-100">
    <div style="display: flex">
      <ListingHeader
        v-if="!selectedItems.length"
        addAction="Add Product"
        placeholder="Search , Order No , Customer , Product name"
        labelDate="Choose Order Date"
      />
    </div>
    <TableFilters v-if="selectedItems.length" :filters="ordersFilter" />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :isPageLoading="isPageLoading"
      :headers="headers"
      :items="orders"
      routeDir="order"
    />
    <BasePagination>
      <template #label> View 8 from 2000 </template>
      <template #pagination>
        <v-pagination v-model="page" :length="pageCount" />
      </template>
    </BasePagination>
  </section>
</template>
