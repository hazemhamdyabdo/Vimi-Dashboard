<script setup lang="ts"></script>
<template>
  <VCol>
    <VCard class="card">
      <h3 class="card-title mb-6">Failed to return</h3>
      <ChatComponent />
    </VCard>
  </VCol>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
  max-height: 70vh;
  overflow-y: scroll;
}
.card-title {
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 0.7rem;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #7066a2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7066a2a1;
}
</style>
