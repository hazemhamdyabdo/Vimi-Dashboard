<script setup lang="ts">
import { discountHeaders, dicountFilter, items } from '@/constants/prmotions';
let page = ref(1);
let isPageLoading = ref(false);
let isDeletionInProgress = ref(false);

const selectedItems: Ref<string[]> = ref([]);
let totalCount = ref(0);

let pagesCount = computed(() => {
  return !totalCount.value || !items.length
    ? 0
    : Math.ceil(totalCount.value / 10);
});

const modalOptions = ref({});

let modalState = ref(false);
let table: any = ref(null);

let triggerResetSelectedItems = ref(false);
let triggerSelectAll = ref(false);

const getNextCategoriesPage = () => {
  page.value += 1;
};
const resetSelectedItems = () => {
  selectedItems.value = [];
  triggerResetSelectedItems.value = !triggerResetSelectedItems.value;
};

const SelectAll = (selectAll: boolean) => {
  triggerSelectAll.value = !selectAll;
};

watch(
  () => selectedItems.value,
  (val) => {
    if (val.length === 10) {
      return setCheckAll(true);
    }
    return setCheckAll(false);
  }
);

const triggerCheckAll = ref(false);
const setCheckAll = (val: boolean) => {
  triggerCheckAll.value = val;
};

const toggleDeleteModal = ({ uuid = '', options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
  uuid.length && selectedItems.value.push(uuid);
};

const deleteMultiple = async () => {
  isDeletionInProgress.value = true;
  try {
    await selectedItems.value.map(async (item) => {
      try {
        // await deleteCtegories(item);
      } finally {
        isDeletionInProgress.value = false;
      }
    });
  } catch {
  } finally {
    setTimeout(() => {
      toggleDeleteModal({});
      setCategories();
    });
  }
};

const setCategories = async () => {
  isPageLoading.value = true;
  try {
    // const { data } = await getCtegories();
    // categories.value = data.data.result ?? [];
    totalCount.value = items.length;
    isPageLoading.value = false;
  } catch {
  } finally {
    resetSelectedItems();
  }
};

const tableItems = computed(() => {
  return items.slice(10 * page.value - 10, 10 * page.value);
});

setCategories();
</script>

<template>
  <div class="px-12 w-100">
    <listingHeader
      v-if="!selectedItems.length"
      addAction="Add Discount"
      placeholder="Search for discount"
      pathName="add-promotion-discounts"
    />
    <tableFilters
      v-else
      :filters="dicountFilter"
      :triggerCheckAll="triggerCheckAll"
      @Delete="toggleDeleteModal"
      @CancelSellection="resetSelectedItems"
      @SelectAll="SelectAll"
    />
    <listingItems
      ref="table"
      @emitSelectedItems="selectedItems = $event"
      @openDeleteModal="toggleDeleteModal"
      class="my-6"
      :items="tableItems"
      :headers="discountHeaders"
      :itemValue="'uuid'"
      :isPageLoading="isPageLoading"
      :triggerResetSelectedItems="triggerResetSelectedItems"
      :triggerSelectAll="triggerSelectAll"
      routeDir="promotion-discounts"
    />
    <div class="w-100 d-flex justify-space-between">
      <p class="my-auto text-9089B2">
        View
        {{ tableItems.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1"
        v-model="page"
        :length="pagesCount"
        :total-visible="pagesCount"
        @change="getNextCategoriesPage"
      />
    </div>
    <GlobalPopup
      :options="modalOptions"
      :modalState="modalState"
      :isDeletionInProgress="isDeletionInProgress"
      @closeModal="toggleDeleteModal"
      @deleteItem="deleteMultiple"
    />
  </div>
</template>

<style>
.bg-f4f3f9 {
  background: #f4f3f9;
}

.text-9089B2 {
  color: #9089b2;
}

.v-pagination .v-pagination__list .v-pagination__item--is-active {
  color: #fff;
  background-color: #733ee4;
  border-radius: 8px;
}
.v-pagination .v-pagination__list li button {
  max-height: 34px;
  max-width: 34px;
}
</style>
