<script setup lang="ts">
import { headers, items, ordersFilter } from "@/constants/order";
let page = 1;
const pageCount = 4;
const selectedItems = ref([]);
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
      :headers="headers"
      :items="items"
      :itemValue="'orderNumber'"
    />
    <BasePagination>
      <template #label> View 8 from 2000 </template>
      <template #pagination>
        <v-pagination v-model="page" :length="pageCount" />
      </template>
    </BasePagination>
  </section>
</template>
