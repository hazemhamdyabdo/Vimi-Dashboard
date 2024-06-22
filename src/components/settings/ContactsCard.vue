<script setup lang="ts"></script>
<template>
  <VCol>
    <VCard class="card px-4">
      <h3 class="card-title">Main information</h3>

      <section class="d-flex align-center justify-space-between pe-4">
        <div>
          <span style="color: #9089b2; font-weight: 400">Email :</span>
          <span style="color: #733ee4; font-weight: 400">
            o8uKm@example.com</span
          >
        </div>
        <div>
          <span style="color: #9089b2; font-weight: 400">Phone Number :</span>
          <span style="color: #21094a; font-weight: 400">
            +965 632 459 857
          </span>
        </div>
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
