<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    stars?: number;
  }>(),
  {
    stars: 0,
  }
);
const style = computed(() => ({
  "clip-path": `inset(0 ${(5 - props.stars) * 20}% 0 0)`,
}));
</script>
<template>
  <div style="position: relative; width: 60%">
    <div style="background: #e9e7f2" class="review"></div>
    <div style="background: #733ee4" class="review" :style="style"></div>
  </div>
</template>

<style scoped>
.review {
  padding: 0.5rem;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
