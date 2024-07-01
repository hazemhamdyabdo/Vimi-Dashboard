<script setup lang="ts">
import { headers, ordersFilter } from "@/constants/order";
import { useBuildQueryString } from "@/composables/UseBuildQueryString";
import {
  getOrders,
  rejectOrder,
  changeOrderStatusAndEstimatedDays,
} from "@/apis/orders";
interface ModalOptions {
  buttonTitle: string;
  buttonColor: string;
  title: string;
  text: string;
  svg: string;
  secondaryButtonTitle: string;
  icon: string;
  sheetColor: string;
}
const page = ref(1);
const { buildQueryString } = useBuildQueryString();
const estimatedDays = ref();
const selectedItems = ref([]);
const orders = ref([]);
const totalCount = ref(0);
const modalOptions = ref({}) as Ref<ModalOptions>;
const modalState = ref(false);
const reason = ref("");
const isPageLoading = ref(false);
const selectedOrder = ref({}) as Ref<{ uuid: string; status: string }>;
const triggerResetSelectedItems = ref(false);
const triggerSelectAll = ref(false);
const triggerCheckAll = ref(false);

const statuses = ref([
  "Pending",
  "In progress",
  "Shipped",
  "Delivered",
  "Cancelled",
  "Return Requested",
  "Return Cancelled",
  "Return In Progress",
  "Returned",
  // "reject return request",
]);

const setCheckAll = (val: boolean) => {
  triggerCheckAll.value = val;
};
const SelectAll = (selectAll: boolean) => {
  triggerSelectAll.value = !selectAll;
};

const resetSelectedItems = () => {
  selectedItems.value = [];
  triggerResetSelectedItems.value = !triggerResetSelectedItems.value;
};

const nextStatus = (currentStatus: string) => {
  const currentIndex = statuses.value?.indexOf(currentStatus);
  if (currentStatus === "Delivered" || currentStatus === "Cancelled") {
    return [currentStatus];
  } else if (currentIndex >= 0 && currentIndex < statuses.value?.length - 1) {
    return [statuses.value[currentIndex + 1]];
  }

  return [currentStatus];
};
const getSelectedOrder = (orderId: string) => {
  selectedOrder.value = orders.value.find(
    (order: { uuid: string }) => order.uuid === orderId
  );
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
watch(page, async () => {
  fetchProducts();
});

const toggleDeleteModal = ({ uuid = "", options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
  uuid.length && selectedItems.value.push(uuid);
};
const handleCancel = () => {
  toggleDeleteModal({});
};

const changeStatus = async () => {
  const selectedOrderId = selectedItems.value[0];
  getSelectedOrder(selectedOrderId);

  const modalOptionsBase = {
    buttonColor: "#733EE4",
    secondaryButtonTitle: "Cancel",
    icon: "",
    sheetColor: "#733EE41a",
  };

  const modalOptionsWithTitleAndSvg = {
    title: "Change order status",
    svg: "edit (3)",
    buttonTitle: "Change",
    ...modalOptionsBase,
  };

  const modalOptionsWithTitleAndSvgAndEstimation = {
    title:
      selectedOrder.value.status === "Pending"
        ? "Estimated delivery days"
        : "Estimated Return days",
    svg: "Time",
    buttonTitle: "Add Estimation",
    ...modalOptionsBase,
  };

  modalOptions.value =
    selectedOrder.value.status === "Pending" ||
    selectedOrder.value.status === "ReturnRequested"
      ? modalOptionsWithTitleAndSvgAndEstimation
      : { ...modalOptionsWithTitleAndSvg, text: "" };

  modalState.value = true;
};

const cancelOrder = async () => {
  getSelectedOrder(selectedItems.value[0]);
  modalOptions.value = {
    buttonTitle: "Yes, Cancel",
    buttonColor: "#F44336",
    title: "Cancel Order",
    text: "Are you sure you want to cancel this order?",
    svg: "close-circle (2)",
    secondaryButtonTitle: "Back",
    icon: "",
    sheetColor: "#f443361a",
  };
  modalState.value = true;
};
const pagesCount = computed(() => {
  return !totalCount.value || !orders.value.length
    ? 0
    : Math.ceil(totalCount.value / 10);
});

const handleConfirm = async () => {
  if (modalOptions.value.buttonTitle === "Yes, Cancel") {
    try {
      await rejectOrder(selectedOrder.value.uuid, reason.value)();
      toggleDeleteModal({});
    } catch (error) {}
  } else if (modalOptions.value.buttonTitle === "Add Estimation") {
    try {
      const query = buildQueryString({
        estimatedDays: estimatedDays.value,
      });
      await changeOrderStatusAndEstimatedDays(
        selectedOrder.value.uuid,
        query
      )();
      toggleDeleteModal({});
    } catch (error) {}
  } else if (modalOptions.value.buttonTitle === "Change") {
    try {
      await changeOrderStatusAndEstimatedDays(selectedOrder.value.uuid)();
      toggleDeleteModal({});
    } catch (error) {}
  }
  await getAllOrders();
};

async function getAllOrders() {
  isPageLoading.value = true;
  try {
    const params = buildQueryString({
      rowCount: 10,
      pageNo: page.value,
    });
    const {
      data: { data },
    } = await getOrders(params);
    orders.value = data.result;
    totalCount.value = data.totalCount;
  } catch (error) {
    console.log(error);
  } finally {
    isPageLoading.value = false;
    resetSelectedItems();
  }
}
const getNextOrderPage = () => {
  page.value += 1;
  getAllOrders();
};

onMounted(async () => {
  await getAllOrders();
});
</script>
<template>
  <section class="px-12 w-100">
    <div style="display: flex">
      <ListingHeader
        v-if="!selectedItems.length"
        addAction="Add Product"
        placeholder="Search , Order No , Customer , Product name"
        labelDate="Choose Order Date"
      />
    </div>
    <TableFilters
      v-if="selectedItems.length"
      :filters="ordersFilter"
      @changeStatus="changeStatus"
      @SelectAll="SelectAll"
      @CancelSellection="resetSelectedItems"
      @cancelOrder="cancelOrder"
    />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      :triggerResetSelectedItems="triggerResetSelectedItems"
      :triggerSelectAll="triggerSelectAll"
      class="my-6"
      :isPageLoading="isPageLoading"
      :headers="headers"
      :items="orders"
      routeDir="order"
    />
    <div class="w-100 d-flex justify-space-between">
      <p class="my-auto text-9089B2">
        View
        {{ orders.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1"
        v-model="page"
        :length="pagesCount"
        @change="getNextOrderPage"
      />
    </div>
    <GlobalPopup
      :options="modalOptions"
      :modalState="modalState"
      @closeModal="toggleDeleteModal"
      :onCancel="handleCancel"
      :onConfirm="handleConfirm"
    >
      <VCol
        v-if="
          modalOptions.title === 'Cancel Order' ||
          modalOptions.title === 'Reject Order'
        "
      >
        <h4 class="card-info-title">
          {{ modalOptions.title.split(" ")[0] }} Reason
        </h4>
        <VRow>
          <VCol>
            <VTextarea
              bg-color="#FAF9FE"
              variant="outlined"
              density="compact"
              v-model="reason"
              rows="5"
              placeholder="Enter Reason"
              hide-details
              style="border-radius: 8px; border: 1px solid #e8e7ef"
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol v-if="modalOptions.title === 'Change order status'">
        <h4 class="card-info-title">Order Status</h4>
        <VRow>
          <VCol>
            <VSelect
              bg-color="#faf9fe"
              label=""
              :items="nextStatus(selectedOrder.statusLocalized)"
              v-model="selectedOrder.statusLocalized"
              hide-details
              density="compact"
              variant="outlined"
              placeholder="Choose Role"
              style="border-radius: 8px"
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol v-if="modalOptions.title === 'Estimated delivery days'">
        <h4 class="card-info-title">Estimated delivery days</h4>
        <VRow>
          <VCol>
            <VTextField
              label=""
              hide-details
              density="compact"
              type="number"
              suffix="days"
              v-model="estimatedDays"
              placeholder="Enter estimations days"
              variant="outlined"
              bg-color="#faf9fe"
              style="
                color: #afaacb;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
              "
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol v-if="modalOptions.title === 'Estimated Return days'">
        <h4 class="card-info-title">Estimated Return days</h4>
        <VRow>
          <VCol>
            <VTextField
              label=""
              hide-details
              density="compact"
              type="number"
              suffix="days"
              v-model="estimatedDays"
              placeholder="Enter estimations days"
              variant="outlined"
              bg-color="#faf9fe"
              style="
                color: #afaacb;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
              "
            />
          </VCol>
        </VRow>
      </VCol>
    </GlobalPopup>
  </section>
</template>
<style lang="scss" scoped>
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
  text-align: left;
}
</style>
