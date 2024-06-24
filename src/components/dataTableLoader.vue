<template>
  <v-col :cols="cols" v-for="i in numberOfCols">
    <v-skeleton-loader type="list-item-two-line" />
  </v-col>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'list-item-two-line',
  },
  cols: {
    type: String,
    default: '12',
  },
  numberOfCols: {
    type: Number,
    default: 7,
  },
});
</script>
