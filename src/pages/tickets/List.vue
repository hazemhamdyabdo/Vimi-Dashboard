<script setup lang="ts">
import { headers, ticketsFilter, items } from "@/constants/tickets";
const selectedItems = ref([]);
</script>

<template>
  <section class="px-12 w-100">
    <div style="display: flex">
      <ListingHeader
        v-if="!selectedItems.length"
        placeholder="Search for tickets"
        :settings="false"
      />
    </div>
    <TableFilters v-if="selectedItems.length" :filters="ticketsFilter" />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :headers="headers"
      :items="items"
      :itemValue="'id'"
      routeDir="tickets"
    />
    <!-- // ! when integrate with backend -->
    <!-- <div class="w-100">
      <p class="my-auto text-9089B2">
        View
        {{ tableItems.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1"
        v-model="page"
        :length="pagesCount"
        @change="getNextProductsPage"
      />
    </div>
    <GlobalPopup
      :options="modalOptions"
      :modalState="modalState"
      :isDeletionInProgress="isDeletionInProgress"
      @closeModal="toggleDeleteModal"
      @deleteItem="deleteMultiple"
    /> -->
  </section>
</template>

<style scoped></style>
