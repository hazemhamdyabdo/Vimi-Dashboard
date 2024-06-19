<script setup lang="ts">
import { headers, notificationsFilter, items } from '@/constants/notifications';
const selectedItems = ref([]);
</script>

<template>
  <section class="px-12 w-100">
    <ListingHeader
      v-if="!selectedItems.length"
      placeholder="Search for notification"
      pathName="add-notification"
      addAction="Add Notification"
    />
    <TableFilters v-if="selectedItems.length" :filters="notificationsFilter" />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :headers="headers"
      :items="items"
      :itemValue="'id'"
      routeDir="tickets"
    />
  </section>
</template>

<style scoped></style>
