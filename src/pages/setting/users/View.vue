<script setup lang="ts"></script>

<template>
  <section class="px-6">
    <VContainer class="px-12 d-flex">
      <VRow style="gap: 2rem; flex-direction: column">
        <VRow>
          <RoleHeader />
        </VRow>
        <VRow>
          <VCol cols="4">
            <UserProfile />
          </VCol>
          <VCol cols="8">
            <ContactsCard />
            <ViewRole />
          </VCol>
        </VRow>
      </VRow>
    </VContainer>
  </section>
</template>

<style scoped></style>
