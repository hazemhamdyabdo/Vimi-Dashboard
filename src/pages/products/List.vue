<script lang="ts" setup>
import productsFilter from "@/constants/categoriesFilter";
import { getProducts } from "@/apis/products";

let page = 1;
const pageCount = 4;
const selectedItems = ref([]);
const allProducts = ref([]);

async function fetchProducts() {
  try {
    const {
      data: { data },
    } = await getProducts();

    allProducts.value = data.result;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchProducts();
});
</script>

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
