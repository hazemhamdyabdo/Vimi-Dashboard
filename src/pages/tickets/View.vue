<script setup lang="ts"></script>
<template>
  <section>
    <VContainer class="px-12 d-flex">
      <VRow style="gap: 2rem; flex-direction: column">
        <ViewHeader />
        <VRow>
          <ViewChats cols="8" />
          <ReplayCard cols="4" />
        </VRow>
      </VRow>
    </VContainer>
  </section>
</template>

<style scoped></style>
