<template>
  <div class="flex gap-x-[0.05rem]">
    <svgIcon v-for="i in numnerOfStars" icon="filled-star" />
    <svgIcon v-for="i in numnerOfhalfStars" icon="half-star" />
    <svgIcon v-for="i in numberOfEmptyStars" icon="empty-star" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    default: '#F2C94C',
    type: String,
  },
  numnerOfStars: {
    default: 1,
    type: Number,
  },
  numnerOfhalfStars: {
    default: 1,
    type: Number,
  },
});

const numberOfEmptyStars = computed(() => {
  return 5 - (props.numnerOfStars + props.numnerOfhalfStars);
});
</script>
