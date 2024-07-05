<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    stars?: number;
    percentage?: number;
  }>(),
  {
    stars: 0,
    percentage: 0,
  }
);

const style = computed(() => ({
  "clip-path": `inset(0 ${(10 - props.stars) * 10}% 0 0)`,
}));
</script>

<template>
  <section style="display: flex; gap: 0.5rem; align-items: center">
    <span style="font-size: 16px; font-weight: 500; color: #21094a">
      {{ stars }} stars
    </span>
    <Bar :stars="stars" />
    <span style="font-size: 16px; font-weight: 500; color: #21094a"
      >{{ percentage }} %</span
    >
  </section>
</template>
