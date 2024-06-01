<template>
  <div class="pa-9 w-100 bg-f4f3f9">
    <listingHeader />
    <listingItems class="my-6" />
    <div class="d-flex justify-space-between w-100">
      <p class="my-auto text-9089B2">View 8 from 2000</p>
      <v-pagination class="pagination" v-model="page" :length="pageCount" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import listingHeader from '@/components/listing/listingHeader.vue';
const page = 1;
const pageCount = 4;
</script>

<style>
.bg-f4f3f9 {
  background: #f4f3f9;
}

.text-9089B2 {
  color: #9089b2;
}

.v-pagination .v-pagination__list .v-pagination__item--is-active {
  color: #fff;
  background-color: #733ee4;
  border-radius: 8px;
}
.v-pagination .v-pagination__list li button {
  max-height: 34px;
  max-width: 34px;
}
</style>
