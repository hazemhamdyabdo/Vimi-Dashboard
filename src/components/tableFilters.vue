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
      <div class="d-flex cursor-pointer" @click="handleEmitActions(filter)">
        <v-icon v-if="filter.icon" size="15" class="my-auto me-2">
          {{ filter.icon }}
        </v-icon>
        <span v-else-if="+index !== filters.length - 1" class="my-auto me-2">
          <v-checkbox
            class="shrink"
            density="compact"
            hide-details
            v-model="selectAll"
          />
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
const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
  triggerCheckAll: {
    type: Boolean,
    default: null,
  },
});

const emit = defineEmits([
  'Delete',
  'CancelSellection',
  'SelectAll',
  'viewDetails',
]);

const DeleteEmits: any = computed(() => {
  return {
    options: {
      title: 'Delete Selected Products',
      text: 'Are you sure you want to delete all of the selected Products ?',
      buttonTitle: 'Yes, Delete',
      buttonColor: '#EB5757',
      icon: 'deleteIcon',
      sheetColor: '#eb57571a',
    },
  };
});

const selectAll = ref(false);

watch(
  () => props.triggerCheckAll,
  (val) => {
    selectAll.value = val;
  },
  { immediate: true }
);

const handleEmitActions = (filter: any) => {
  switch (filter.label) {
    case 'Delete':
      emit('Delete', DeleteEmits.value);
      break;
    case 'Cancel Sellection':
      emit('CancelSellection');
      break;
    case 'Select All':
      emit('SelectAll', selectAll.value);
      break;
    case 'View Details':
      emit('viewDetails');
      break;
    default:
      break;
  }
};
</script>

<style scoped>
.text-21094A {
  color: #21094a;
}
</style>
