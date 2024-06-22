<script setup lang="ts"></script>

<template>
  <VCol>
    <VCard class="card px-4">
      <h3 class="card-title">Users</h3>
      <section>
        <div class="d-flex align-center" style="gap: 1rem">
          <img src="@/assets/test-avatar.png" />
          <p style="color: #21094a">Mohamed Gamal</p>
        </div>
        <hr />
        <div class="d-flex align-center" style="gap: 1rem">
          <img
            src="@/assets/avatar.png"
            style="width: 32px; height: 32px; border-radius: 50%"
          />
          <p style="color: #21094a">Mohamed Gamal</p>
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
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

hr {
  border: 1px solid #e8e7ef;
  margin: 1rem 0;
}
</style>
