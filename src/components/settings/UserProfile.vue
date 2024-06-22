<script setup lang="ts"></script>

<template>
  <VCol>
    <VCard class="card px-4">
      <div
        class="d-flex flex-column align-center justify-space-between"
        style="gap: 1rem"
      >
        <img src="@/assets/test-profile-1.png" />
        <p style="color: #21094a; font-weight: 500; font-size: 20px">
          Mohamed Gamal
        </p>
      </div>
    </VCard>
  </VCol>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 2rem 4rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
