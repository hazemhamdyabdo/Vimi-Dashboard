<template>
  <div class="px-12 w-100">
    <listingHeader
      v-if="!selectedItems.length"
      addAction="Add Product"
      placeholder="Search , ID , SKU , Product name"
      pathName="add-product"
    />
    <tableFilters v-else :filters="productsFilter" />
    <listingItems @emitSelectedItems="selectedItems = $event" class="my-6" />
    <BasePagination>
      <template #label> View 8 from 2000 </template>
      <template #pagination>
        <v-pagination v-model="page" :length="pageCount" />
      </template>
    </BasePagination>
  </div>
</template>

<script lang="ts" setup>
import listingHeader from "@/components/listing/listingHeader.vue";
import productsFilter from "@/constants/categoriesFilter";

let page = 1;
const pageCount = 4;
const selectedItems = ref([]);
</script>
