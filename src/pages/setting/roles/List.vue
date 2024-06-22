<script setup lang="ts">
import { rolesFilter, rolesHeader, roles } from "@/constants/settings";
const selectedItems = ref([]);
</script>
<template>
  <div>
    <ListingHeader
      v-if="!selectedItems.length"
      placeholder="Search for role"
      :settings="false"
      pathName="add-roles"
      addAction="Add Role"
    />
    <TableFilters v-if="selectedItems.length" :filters="rolesFilter" />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :headers="rolesHeader"
      :items="roles"
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
