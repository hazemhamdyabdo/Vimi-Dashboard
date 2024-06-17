<script setup lang="ts">
defineProps<{ icon: "minus" | "plus"; actionText: "Add" | "Reduce" }>();
const quantity = ref(0);
</script>
<template>
  <VCard flat class="px-4 py-4" style="background: #faf9fe; border-radius: 8px">
    <VRow>
      <VCol>
        <h4 class="card-info-title">Quantity number</h4>
        <VTextField
          label=""
          type="number"
          placeholder="Enter quantity"
          hide-details
          density="compact"
          variant="outlined"
          bg-color="#faf9fe"
          v-model="quantity"
        />
      </VCol>

      <VCol style="display: flex; align-items: center; padding: 2rem 0 0">
        <VBtn variant="text" @click="$emit('cancel')"> Cancel </VBtn>
        <VBtn
          class="px-8 text-center"
          style="
            box-shadow: none;
            border: 1px solid #733ee4;
            border-radius: 8px;
            color: #733ee4;
            text-transform: none;
          "
          @click="$emit('confirm', quantity)"
          variant="elevated"
        >
          <VIcon :icon="`mdi-${icon}`" color="#733ee4" />
          {{ actionText }}
        </VBtn>
      </VCol>
      <VCol cols="12" style="display: flex; align-items: center; gap: 0.5rem">
        <SvgIcon icon="info-circle" />
        <p
          style="
            font-size: 0.8rem;
            color: #9089b2;
            padding: 0.5rem 0;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          "
        >
          Quantity number will be
          {{ actionText === "Add" ? "added" : "reduced" }} from the quantity in
          the Stoke
        </p>
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped>
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
}
</style>
