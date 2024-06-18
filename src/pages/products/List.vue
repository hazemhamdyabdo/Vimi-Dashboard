<script lang="ts" setup>
import productsFilter from "@/constants/categoriesFilter";
import { headers } from "@/constants/products";
import { getProducts, deleteProduct } from "@/apis/products";
import { getCtegories } from "@/apis/categories";

const selectedItems = ref([]);

const resetSelectedItems = () => {
  selectedItems.value = [];
  triggerResetSelectedItems.value = !triggerResetSelectedItems.value;
};

const modalOptions = ref({});
const modalState = ref(false);
const toggleDeleteModal = ({ uuid = "", options = {} }) => {
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
const getAllCategories = async () => {
  try {
    const {
      data: { data },
    } = await getCtegories();
    allCategories.value = data.result;
  } catch (error) {
    console.log(error);
  }
};
const getCategoryNameForProduct = () => {
  // add category name to products based on category id
  allProducts.value.forEach(
    (product: { categoryUuid: string; categoryName: string }) => {
      const category = allCategories.value.find(
        (category: { uuid: string }) => category.uuid === product.categoryUuid
      );
      if (category) {
        product.categoryName = category.displayName_En;
      }
    }
  );
};

let totalCount = ref(0);
const isPageLoading = ref(false);

async function fetchProducts() {
  isPageLoading.value = true;
  try {
    const {
      data: { data },
    } = await getProducts();
    allProducts.value = data.result;
    totalCount.value = data.totalCount;
    getCategoryNameForProduct();
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

const page = ref(1);
const tableItems = computed(() => {
  return allProducts.value.slice(10 * page.value - 10, 10 * page.value);
});
const getNextProductsPage = () => {
  page.value += 1;
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
    />
    <tableFilters
      v-else
      :filters="productsFilter"
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
      :triggerSelectAll="triggerSelectAll"
      :routeDir="'product'"
      :itemValue="'uuid'"
      class="my-6"
      :headers="headers"
      :isPageLoading="isPageLoading"
      :items="tableItems"
    />
    <div class="w-100">
      <p class="my-auto text-9089B2">
        View
        {{ tableItems.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-model="page"
        :length="pagesCount"
        @change="getNextProductsPage"
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
