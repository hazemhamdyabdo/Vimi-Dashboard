<template>
  <v-card
    flat
    min-height="48"
    bg-color="#fff"
    class="mx-auto border-sm rounded-lg w-100 d-flex px-4"
  >
    <div
      v-for="(filter, index) in filters"
      :key="filter.id"
      class="d-flex justify-between my-auto"
    >
      <div class="d-flex">
        <v-icon v-if="filter.icon" size="15" class="my-auto me-2">
          {{ filter.icon }}
        </v-icon>
        <span v-else-if="+index !== filters.length - 1" class="my-auto me-2">
          <v-checkbox
            class="shrink"
            density="compact"
            hide-details
          ></v-checkbox>
        </span>
        <p class="my-auto text-subtitle-2">
          {{ filter.label }}
        </p>
      </div>
      <v-divider v-if="+index !== filters.length - 1" class="mx-5" vertical />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  filters: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.text-21094A {
  color: #21094a;
}
</style>
