<script setup lang="ts"></script>
<template>
  <VCol>
    <VCard class="card px-4">
      <h3 class="card-title">Roles</h3>
      <section>
        <span style="color: #9089b2; font-weight: 400">Role name :</span>
        <span style="color: #733ee4; font-weight: 400"> Super Admin</span>
      </section>
    </VCard>
  </VCol>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-title {
  color: #7066a2;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
</style>
