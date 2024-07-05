<script setup lang="ts">
withDefaults(
  defineProps<{
    stars?: number;
    percentage?: number;
    label?: string;
  }>(),
  {
    stars: 0,
    percentage: 0,
  }
);
</script>

<template>
  <VCol cols="12" style="display: flex; gap: 0.5rem; align-items: center">
    <span style="font-size: 14px; font-weight: 500; color: #21094a">
      {{ label }} stars
    </span>
    <Bar :stars="stars" />
    <span style="font-size: 14px; font-weight: 500; color: #21094a"
      >{{ percentage }} %</span
    >
  </VCol>
</template>
