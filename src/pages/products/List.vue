<script lang="ts" setup>
import { headers, productFilter } from '@/constants/products';
import { getProducts, deleteProduct } from '@/apis/products';
import { getCtegories } from '@/apis/categories';
import { useBuildQueryString } from '@/composables/UseBuildQueryString';
import { debounce } from '@/helpers/debounce.ts';

const selectedItems = ref([]);
const { buildQueryString } = useBuildQueryString();

const resetSelectedItems = () => {
  selectedItems.value = [];
  triggerResetSelectedItems.value = !triggerResetSelectedItems.value;
};

const modalOptions = ref({});
const modalState = ref(false);
const toggleDeleteModal = ({ uuid = '', options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
  uuid.length && selectedItems.value.push(uuid);
};

const triggerSelectAll = ref(false);
const triggerCheckAll = ref(false);
const triggerResetSelectedItems = ref(false);
const setCheckAll = (val: boolean) => {
  triggerCheckAll.value = val;
};
const SelectAll = (selectAll: boolean) => {
  triggerSelectAll.value = !selectAll;
};

const isDeletionInProgress = ref(false);
const deleteMultiple = async () => {
  isDeletionInProgress.value = true;
  try {
    selectedItems.value.map(async (item) => {
      try {
        await deleteProduct(item);
      } finally {
        isDeletionInProgress.value = false;
      }
    });
  } catch {
  } finally {
    setTimeout(() => {
      toggleDeleteModal({});
      fetchProducts();
    });
  }
};

const allProducts = ref([]);
const allCategories: any = ref([]);

const updateSearch = debounce((searchKey: any) => {
  search.value = searchKey;
  fetchProducts();
}, 500);

const getAllCategories = async () => {
  isPageLoading.value = true;
  try {
    const {
      data: { data },
    } = await getCtegories();
    allCategories.value = data.result;
  } catch (error) {
    console.log(error);
  }
};

let totalCount = ref(0);
let search = ref('');
const isPageLoading = ref(false);
const page = ref(1);

async function fetchProducts() {
  isPageLoading.value = true;
  try {
    const params = buildQueryString({
      rowCount: 10,
      pageNo: page.value,
      search: search.value,
    });
    const {
      data: { data },
    } = await getProducts(params);
    allProducts.value = data.result;
    totalCount.value = data.totalCount;
    // getCategoryNameForProduct();
  } catch (error) {
    console.log(error);
  } finally {
    isPageLoading.value = false;
    resetSelectedItems();
  }
}
const pagesCount = computed(() => {
  return !totalCount.value || !allProducts.value.length
    ? 0
    : Math.ceil(totalCount.value / 10);
});

const getNextProductsPage = () => {
  page.value += 1;
  fetchProducts();
};

watch(page, async () => {
  fetchProducts();
});

watch(
  () => selectedItems.value,
  (val) => {
    if (val.length === 10) {
      return setCheckAll(true);
    }
    return setCheckAll(false);
  }
);
const handleCancel = () => {
  toggleDeleteModal({});
};
onMounted(async () => {
  await getAllCategories();
  fetchProducts();
});
</script>

<template>
  <div class="px-12 w-100">
    <listingHeader
      v-if="!selectedItems.length"
      addAction="Add Product"
      placeholder="Search , ID , SKU , Product name"
      pathName="add-product"
      @updateSearch="updateSearch"
    />
    <tableFilters
      v-else
      :filters="productFilter"
      :triggerCheckAll="triggerCheckAll"
      @SelectAll="SelectAll"
      @CancelSellection="resetSelectedItems"
      @Delete="toggleDeleteModal"
      @edit="
        $router.push({ name: 'edit-product', params: { id: selectedItems[0] } })
      "
    />
    <listingItems
      @emitSelectedItems="selectedItems = $event"
      @openDeleteModal="toggleDeleteModal"
      @edit="$router.push({ name: 'edit-product', params: { id: $event } })"
      :triggerResetSelectedItems="triggerResetSelectedItems"
      :triggerSelectAll="triggerSelectAll"
      :routeDir="'product'"
      :itemValue="'uuid'"
      class="my-6"
      :headers="headers"
      :isPageLoading="isPageLoading"
      :items="allProducts"
    />
    <div class="w-100 d-flex justify-space-between">
      <p class="my-auto text-9089B2">
        View
        {{ allProducts.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1 && !isPageLoading"
        v-model="page"
        :length="pagesCount"
        @change="getNextProductsPage"
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
