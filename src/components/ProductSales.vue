<script setup lang="ts">
defineProps({
  title: String,
  icon: String,
  value: String,
});
</script>
<template>
  <VCard
    class="card"
    style="
      background: #faf9fe;
      width: fit-content;
      padding: 1rem;
      margin-top: 1rem;
      border: 1px solid #e8e7ef;
    "
  >
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <SvgIcon :icon="icon" color="#21094a" />
      <span style="color: #7066a2">{{ title }}</span>
    </div>
    <div
      style="
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
      "
    >
      <span style="color: #21094a; font-weight: 400"> kd </span>
      <span style="color: #21094a; font-weight: 700">{{ value }}</span>
    </div>
  </VCard>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
}
</style>
