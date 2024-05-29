<template>
  <div classs="d-flex w-100">
    <v-data-table :items="items"></v-data-table>
  </div>
</template>

<script setup>
const items = [
  {
    name: 'African Elephant',
    species: 'Loxodonta africana',
    diet: 'Herbivore',
    habitat: 'Savanna, Forests',
  },
  // ... more items
];
</script>
