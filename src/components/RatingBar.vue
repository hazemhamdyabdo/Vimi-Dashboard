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
    <div style="position: relative; width: 60%">
      <div
        style="
          width: 100%;
          background: #e9e7f2;
          padding: 0.5rem;
          border-radius: 8px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        "
      ></div>
      <div
        style="
          width: 100%;
          background: #733ee4;
          padding: 0.5rem;
          border-radius: 6px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        "
        :style="style"
      ></div>
    </div>
    <span style="font-size: 16px; font-weight: 500; color: #21094a"
      >{{ percentage }} %</span
    >
  </section>
</template>

<style scoped></style>
