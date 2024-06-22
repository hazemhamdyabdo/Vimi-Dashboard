<script setup lang="ts">
import { usersHeader, users, userFilter } from "@/constants/settings";
const selectedItems = ref([]);
</script>
<template>
  <div>
    <ListingHeader
      v-if="!selectedItems.length"
      placeholder="Search for tickets"
      :settings="false"
      pathName="add-users"
      addAction="Add User"
    />
    <TableFilters v-if="selectedItems.length" :filters="userFilter" />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :headers="usersHeader"
      :items="users"
      :itemValue="'uuid'"
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
  </div>
</template>

<style scoped></style>
