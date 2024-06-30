<script lang="ts" setup>
import { categoriesFilter, headers } from '@/constants/categories';
import { getCtegories, deleteCtegories } from '@/apis/categories.ts';
import { useBuildQueryString } from '@/composables/UseBuildQueryString';
import { debounce } from '@/helpers/debounce.ts';

const { buildQueryString } = useBuildQueryString();

let isPageLoading = ref(false);
let isDeletionInProgress = ref(false);

const selectedItems: Ref<string[]> = ref([]);
let categories = ref([]);
let currentPage = ref(1);
let totalCount = ref(0);
let search: Ref<any> = ref('');

let pagesCount = computed(() => {
  return !totalCount.value || !categories.value.length
    ? 0
    : Math.ceil(totalCount.value / 10);
});

const modalOptions = ref({});

let modalState = ref(false);
let table: any = ref(null);

let triggerResetSelectedItems = ref(false);
let triggerSelectAll = ref(false);

watch(currentPage, async () => {
  setCategories();
});

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
        await deleteCtegories(item);
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

const updateSearch = debounce((searchKey: any) => {
  search.value = searchKey;
  setCategories();
}, 500);

const setCategories = async () => {
  isPageLoading.value = true;
  const params = buildQueryString({
    rowCount: 10,
    pageNo: currentPage.value,
    search: search.value,
  });
  try {
    const { data } = await getCtegories(params);
    categories.value = data.data.result ?? [];
    totalCount.value = data.data.totalCount;
    isPageLoading.value = false;
  } catch {
  } finally {
    resetSelectedItems();
  }
};

const tableItems = computed(() => {
  return categories.value;
});
const handleCancel = () => {
  toggleDeleteModal({});
};

onMounted(async () => {
  setCategories();
});
</script>

<template>
  <div class="px-12 w-100">
    <listingHeader
      v-if="!selectedItems.length"
      addAction="Add Category"
      placeholder="Search , ID , Category name"
      pathName="add-category"
      @updateSearch="updateSearch"
    />
    <tableFilters
      v-else
      :filters="categoriesFilter"
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
      routeDir="category"
      :items="tableItems"
      :headers="headers"
      :itemValue="'uuid'"
      :isPageLoading="isPageLoading"
      :triggerResetSelectedItems="triggerResetSelectedItems"
      :triggerSelectAll="triggerSelectAll"
    />
    <div class="w-100 d-flex justify-space-between">
      <p class="my-auto text-9089B2">
        View
        {{ !isPageLoading ? tableItems.length : '...' }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1 && !isPageLoading"
        v-model="currentPage"
        :length="pagesCount"
        :total-visible="pagesCount"
      />
    </div>
    <GlobalPopup
      :options="modalOptions"
      :modalState="modalState"
      :isDeletionInProgress="isDeletionInProgress"
      :onCancel="handleCancel"
      :onConfirm="deleteMultiple"
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
