<script setup lang="ts">
defineProps<{ dateFrom: string; dateTo: string }>();
</script>

<template>
  <section style="width: 100%">
    <h3>Discount scheduling</h3>
    <VRow>
      <VCol
        style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: space-between;
        "
      >
        <div style="display: flex; align-items: center; gap: 0.5rem">
          <h4 class="card-info-title">From :</h4>
          <span> {{ dateFrom }} </span>
          <SvgIcon icon="arrow" />
          <h4 class="card-info-title">To :</h4>
          <span> {{ dateTo }} </span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem">
          <SvgIcon icon="edit" @click="$emit('edit')" style="cursor: pointer" />
          <SvgIcon
            icon="delete"
            class="pr-4"
            @click="$emit('delete')"
            style="cursor: pointer"
          />
        </div>
      </VCol>
    </VRow>
  </section>
</template>

<style scoped>
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
h3 {
  color: #21094a;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 0.8rem;
}
h4 + span {
  color: #21094a;
  font-size: 16px;
  font-weight: 500;
}
</style>
