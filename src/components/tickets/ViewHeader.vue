<script setup lang="ts">
import { useStyleState } from "@/composables/UseStyleState";
const { getStyleStatus } = useStyleState();
</script>
<template>
  <VCard
    class="card px-4"
    style="
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: space-between;
    "
  >
    <section style="display: flex; gap: 1rem; align-items: center">
      <div class="d-flex" style="align-items: center; gap: 0.7rem">
        <img src="@/assets/test-avatar.png" />
        <p style="color: #21094a; font-weight: 700">Mohamed Gamal</p>
      </div>
      <div style="display: flex; gap: 0.7rem; align-items: center">
        <SvgIcon icon="event calendar" />
        <p style="color: #9089b2; font-size: 16px">
          Creation date:
          <span style="color: #21094a; font-weight: 500">{{
            new Date().toLocaleDateString()
          }}</span>
        </p>
      </div>
      <p
        class="px-2 py-1 text-subtitle-1"
        style="
          max-width: 150px;
          font-size: 12px;
          padding: 0.2rem 0;
          border-radius: 8px;
        "
        :style="`background-color: ${getStyleStatus('Opened')?.background}; color: ${getStyleStatus('Opened')?.color}`"
      >
        Opened
      </p>
    </section>
    <section style="display: flex; gap: 1rem; align-items: center">
      <div
        style="display: flex; align-items: center; gap: 0.5rem"
        @click="$emit('solved')"
      >
        <SvgIcon icon="True-circle" />
        <p style="color: #21094a; font-size: 14px">Solved</p>
      </div>
      |
      <div
        style="display: flex; align-items: center; gap: 0.5rem"
        @click="$emit('delete')"
      >
        <SvgIcon icon="delete (1)" />
        <p style="color: #21094a; font-size: 14px">Delete Ticket</p>
      </div>
    </section>
  </VCard>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
}
</style>
