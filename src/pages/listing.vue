<template>
  <div class="pa-8 w-100 bg-f4f3f9">
    <listingHeader />
    <listingItems class="my-6" />
    <div class="d-flex justify-end">
      <v-pagination
        class="pagination"
        circle
        v-model="page"
        :length="pageCount"
      />
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

.v-pagination .v-pagination__list .v-pagination__item--is-active {
  color: #fff;
  background-color: #733ee4;
  border-radius: 8px;
}
</style>
