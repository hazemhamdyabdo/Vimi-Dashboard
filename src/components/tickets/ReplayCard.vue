<script setup lang="ts"></script>

<template>
  <VCol>
    <VCard class="card">
      <h3 class="card-title">Send Reply</h3>
      <VTextarea
        bg-color="#FAF9FE"
        variant="outlined"
        density="compact"
        rows="12"
        placeholder="Write your reply"
        hide-details
        style="
          margin-bottom: 1rem;
          border-radius: 8px;
          border: 1px solid #e8e7ef;
        "
      />
      <VBtn
        variant="plain"
        style="
          border-radius: 8px;
          border: 1px dashed #733ee4;
          background: #733ee41a;
        "
      >
        <SvgIcon icon="Attachment" />
        <span style="margin-left: 0.5rem; color: #733ee4; text-transform: none">
          Upload File
        </span>
      </VBtn>
      <VBtn
        variant="plain"
        style="
          border-radius: 8px;

          background: #733ee4;
        "
      >
        <span style="margin-left: 0.5rem; color: #fff; text-transform: none">
          Send Replay
        </span>
      </VBtn>
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
  margin-bottom: 0.7rem;
}

:global(.v-field__outline__start) {
  border-radius: 8px;
  display: none;
}
:global(.v-field__outline__end) {
  border-radius: 8px;
  display: none;
}
</style>
