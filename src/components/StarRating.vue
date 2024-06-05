<script setup lang="ts">
defineProps({
  maxRating: {
    type: Number,
    default: 5,
  },
  rating: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div class="d-flex align-items-center">
    <VIcon
      v-for="index in maxRating"
      :key="index"
      :icon="index <= rating ? 'mdi-star' : 'mdi-star-outline'"
      style="color: #ffa800"
      size="24"
    />
  </div>
</template>
