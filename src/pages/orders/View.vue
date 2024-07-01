<script setup lang="ts">
import {
  showOrder,
  rejectOrder,
  changeOrderStatusAndEstimatedDays,
} from "@/apis/orders";
import { useStyleState } from "@/composables/UseStyleState";
const { getStyleStatus } = useStyleState();
const route = useRoute();
const order = ref({}) as Ref;
const isPageLoading = ref(false);
const modalOptions = ref({});
const modalState = ref(false);
const reason = ref("");

const toggleDeleteModal = ({ options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
};
const handleCancel = () => {
  toggleDeleteModal({});
};

const getOrderDetails = async () => {
  isPageLoading.value = true;
  try {
    const {
      data: { data },
    } = await showOrder(route.params.id as string);
    order.value = data;
    isPageLoading.value = false;
  } catch {}
};

const dateFormatting = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US");
};

const handleConfirm = async () => {
  if (modalOptions.value.buttonTitle === "Yes, Cancel") {
    try {
      await rejectOrder(order.value.uuid, reason.value)();
      toggleDeleteModal({});
    } catch (error) {}
  } else if (modalOptions.value.buttonTitle === "Yes, Reject") {
    await rejectOrder(order.value.uuid, reason.value)();
    toggleDeleteModal({});
  }
};
onMounted(async () => {
  await getOrderDetails();
});
const headers = [
  {
    title: "Products",
    key: "productDisplayName_En",
    sortable: false,
  },
  {
    title: "Price",
    key: "price",
    sortable: false,
  },
  {
    title: "QTY",
    key: "quantity",
    sortable: false,
  },
  {
    title: "Total Amount",
    key: "totalAmount",
    sortable: false,
  },
];

const updateOrderStatus = async () => {
  try {
    await changeOrderStatusAndEstimatedDays(order.value.uuid)();
  } catch (error) {}
};
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

const nextStatus = (currentStatus: string) => {
  const currentIndex = statuses.value?.indexOf(currentStatus);
  if (currentStatus === "Delivered" || currentStatus === "Cancelled") {
    return [currentStatus];
  } else if (currentIndex >= 0 && currentIndex < statuses.value?.length - 1) {
    return [statuses.value[currentIndex + 1]];
  }

  return [currentStatus];
};
const headerButtons = computed(() => {
  const { status } = order.value;
  const btnConfig = {
    "In Progress": [
      {
        text: "Cancel Order",
        icon: "Close",
        action() {
          toggleDeleteModal({
            options: {
              buttonTitle: "Yes, Cancel",
              buttonColor: "#F44336",
              title: "Cancel Order",
              text: "Are you sure you want to cancel this order?",
              svg: "close-circle (2)",
              secondaryButtonTitle: "Back",
              icon: "",
              sheetColor: "#f443361a",
            },
          });
        },
      },
    ],
    Pending: [
      {
        text: "Cancel Order",
        icon: "Close",
        action() {
          toggleDeleteModal({
            options: {
              buttonTitle: "Yes, Cancel",
              buttonColor: "#F44336",
              title: "Cancel Order",
              text: "Are you sure you want to cancel this order?",
              svg: "close-circle (2)",
              secondaryButtonTitle: "Back",
              icon: "",
              sheetColor: "#f443361a",
            },
          });
        },
      },
      {
        text: "Approve Order",
        icon: "True-circle",
        action() {
          toggleDeleteModal({
            options: {
              buttonTitle: "Add Estimation",
              buttonColor: "#733EE4",
              title: "Estimated delivery days",
              text: "",
              svg: "Time",
              secondaryButtonTitle: "Cancel",
              icon: "",
              sheetColor: "#733EE41a",
            },
          });
        },
      },
    ],
    Shipped: [
      {
        text: "Cancel Order",
        icon: "Close",
        action() {
          toggleDeleteModal({
            options: {
              buttonTitle: "Yes, Cancel",
              buttonColor: "#F44336",
              title: "Cancel Order",
              text: "Are you sure you want to cancel this order?",
              svg: "close-circle (2)",
              secondaryButtonTitle: "Back",
              icon: "",
              sheetColor: "#f443361a",
            },
          });
        },
      },
    ],
    Delivered: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
    Cancelled: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
    ReturnCancelled: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
    ReturnInProgress: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
    ItemReturnRequested: [
      {
        text: "Reject Return Request",
        icon: "Close",
      },
      {
        text: "Accept Return Request",
        icon: "True",
      },
    ],
    Rejected: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
    Returned: [
      {
        text: "Archive Order",
        icon: "archive",
      },
    ],
  };

  return btnConfig[status];
});

const orderSummary = computed(() => {
  return {
    ...(order.value.productCount && {
      "Products NO.": order.value.productCount,
    }),

    ...(order.value.shippingFees && {
      "Shipping Charge": `KD ${order.value.shippingFees}`,
    }),

    ...(order.value.discountValue && {
      Discount: `KD ${order.value.discountValue}`,
    }),

    ...(order.value.tax && {
      Tax: `KD ${order.value.tax}`,
    }),
    ...(order.value.subTotal && {
      "Sub Total": `KD ${order.value.subTotal}`,
    }),

    ...(order.value.totalAmount && {
      "Total Amount": `KD ${order.value.totalAmount}`,
    }),
  };
});
</script>

<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow disable-gutters>
        <VCol cols="12">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            class="card"
            style="
              margin-bottom: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <section style="display: flex; gap: 1rem; align-items: center">
              <p style="color: #7066a2">Order NO:</p>
              <span style="color: #21094a; font-weight: 500">{{
                order.serialNumber
              }}</span>
              <p style="color: #7066a2">Order Reference NO. :</p>
              <span style="color: #733ee4; font-weight: 500">{{
                order.orderReferenceSerialNumber ?? "-"
              }}</span>
            </section>
            <section style="display: flex; gap: 1rem">
              <VBtn
                variant="text"
                color="#21094A"
                v-for="headerButton in headerButtons"
                :key="headerButton.text"
                class="px-4"
                @click="headerButton.action()"
                style="
                  box-shadow: none;
                  border-radius: 9px;
                  text-transform: none;
                "
              >
                <SvgIcon
                  :icon="headerButton?.icon"
                  style="margin-right: 0.5rem"
                />
                <p style="text-transform: none">{{ headerButton?.text }}</p>
              </VBtn>
              <VSelect
                :items="nextStatus(order.statusLocalized)"
                v-model="order.statusLocalized"
                density="compact"
                class="pa-0 w-100 pl-6 pb-1"
                @update:modelValue="updateOrderStatus"
                variant="plain"
                hide-details
                style="
                  max-width: 150px;
                  font-size: 12px;
                  padding: 0.2rem 0;
                  border-radius: 8px;
                "
                :style="`background-color: ${getStyleStatus(order.status)?.color}; color: white;  border-radius: 8px;`"
              />
              <!-- <VBtn
                variant="elevated"
                class="px-8"
                style="
                  box-shadow: none;
                  border-radius: 9px;
                  text-transform: none;
                "
              >
                <p>{{ order.statusLocalized }}</p>
              </VBtn> -->
            </section>
          </VCard>
        </VCol>
        <VCol cols="8">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            class="card"
            style="
              display: flex;
              flex-direction: column;
              height: 500px;
              overflow-y: scroll;
            "
          >
            <h3 class="card-title">Order Details</h3>
            <v-data-table
              class="listen-table"
              :items="order.items"
              :headers="headers"
              hide-default-footer
            >
              <template v-slot:item.productDisplayName_En="{ item }">
                <section style="display: flex; gap: 1rem; margin: 0.7rem 0">
                  <div
                    style="
                      border: 1px solid #e8e7ef;
                      padding: 0.5rem 1rem;
                      border-radius: 8px;
                    "
                  >
                    <img
                      style="width: 72px; height: 72px; object-fit: cover"
                      :alt="item.productDisplayName_En"
                      :src="`https://techify-001-site1.htempurl.com${item.productImagePath}`"
                    />
                  </div>
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      color: #21094a;
                    "
                  >
                    <h4>{{ item.productDisplayName_En }}</h4>
                    <div class="d-flex align-items-center" style="gap: 0.5rem">
                      <span style="color: #7066a2; font-size: 14px">
                        {{ item?.productTypeLocalized ?? "-" }}
                      </span>
                      <StarRating :rating="item?.productRating ?? 0" />
                      <span
                        style="
                          color: #21094a;
                          font-size: 14px;
                          font-weight: 500;
                        "
                        >{{ item?.productRating ?? 0 }}</span
                      >
                    </div>
                  </div>
                </section>
              </template>
              <template v-slot:item.price="{ item }">
                <span
                  style="color: #21094a; font-weight: 500; text-align: center"
                  >{{ item.price }}
                </span>
              </template>
              <template v-slot:item.quantity="{ item }">
                <span style="color: #21094a; font-weight: 500"
                  >{{ item.quantity }}
                </span>
              </template>
              <template v-slot:item.totalAmount="{ item }">
                <span style="color: #21094a; font-weight: 500"
                  >{{ item.totalAmount }}
                </span>
              </template>
            </v-data-table>
          </VCard>
        </VCol>
        <VCol cols="4">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard class="card" v-else>
            <h3 class="card-title">Order Summary</h3>
            <section
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 1rem 0;
                border-bottom: 1px solid #e8e7ef;
                padding-bottom: 0.7rem;
                font-weight: 500;
              "
              v-for="[key, val] in Object.entries(orderSummary)"
              :key="val"
            >
              <span
                :style="`color: #7066a2; font-weight: ${key === 'Total Amount' ? '700' : '500'}`"
              >
                {{ key }}</span
              >
              <span
                :style="`color: ${key === 'Discount' ? '#EB5757' : '#21094a'}; font-weight: ${key === 'Total Amount' ? '700' : '500'};`"
                >{{ val }}</span
              >
            </section>
            <VBtn
              variant="elevated"
              color="#733EE4"
              class="px-8 w-100 rounded-lg"
              style="box-shadow: none"
            >
              <VIcon icon="mdi-plus" />
              <p>Invoice</p>
            </VBtn>
          </VCard>
        </VCol>
        <VCol cols="8" style="display: flex">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            class="card"
            style="
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              width: 100%;
              height: 745px;
              overflow-y: scroll;
            "
          >
            <h3 class="card-title">Order History</h3>
            <div
              style="
                display: flex;
                gap: 4rem;
                flex-direction: column;
                position: relative;
              "
            >
              <section
                style="
                  display: flex;
                  gap: 0.8rem;
                  align-items: center;
                  height: 3rem;
                "
                class="section-history"
                v-for="log in order.logs"
                :key="log.uuid"
              >
                <div class="d-flex align-items-center justify-content-between">
                  <SvgIcon :icon="log.status" />
                </div>
                <div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;
                      font-weight: 500;
                      margin-top: 1rem;
                    "
                  >
                    <span style="color: #21094a"> {{ log.status }}: </span>
                    <span style="color: #7066a2">
                      {{ dateFormatting(log?.dateCreated) }}
                    </span>
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;
                      font-weight: 500;
                    "
                  >
                    <span style="color: #21094a">By:</span>
                    <span style="color: #7066a2">{{ log?.userFullName }}</span>
                    <span style="color: #21094a">
                      ({{ log?.userTypeLocalized }})</span
                    >
                  </div>
                </div>
              </section>
            </div>
          </VCard>
        </VCol>
        <VCol
          cols="4"
          style="
            margin-top: -11rem;
            display: flex;
            gap: 1.5rem;
            flex-direction: column;
          "
        >
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard class="card" v-else>
            <h3 class="card-title">Customer Details</h3>
            <section
              class="d-flex align-items-center"
              style="gap: 1rem; flex-direction: column"
            >
              <div
                class="d-flex align-items-center justify-content-between"
                style="gap: 0.8rem"
              >
                <div>
                  <img
                    :src="`https://techify-001-site1.htempurl.com${order?.userProfilePhoto}`"
                  />
                </div>
                <div>
                  <p style="color: #21094a; font-weight: 500; font-size: 14px">
                    {{ order?.userFullName }}
                  </p>
                  <span style="color: #9089b2; font-size: 12px">Customer</span>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 0.8rem;
                  font-size: 14px;
                "
              >
                <div style="color: #21094a">
                  <VIcon
                    icon="mdi-email"
                    color="#7066A2"
                    style="margin-right: 0.5rem"
                  />
                  <span style="color: #7066a2">{{ order?.userEmail }}</span>
                </div>
                <div>
                  <VIcon
                    icon="mdi-phone"
                    color="#7066A2"
                    style="margin-right: 0.5rem"
                  />
                  <span style="color: #7066a2">{{
                    order?.userMobileNumber
                  }}</span>
                </div>
              </div>
            </section>
          </VCard>
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            class="card"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <h3 class="card-title">Address</h3>
            <section
              style="
                display: flex;
                flex-direction: column;
                gap: 1rem;
                color: #21094a;
                font-size: 14px;
                font-weight: 400;
              "
            >
              <p>{{ order?.shippingAddress?.type }}</p>
              <p>
                {{
                  `${order?.shippingAddress?.building} ${order?.shippingAddress?.street} ${order?.shippingAddress?.areaDisplayName} ${order?.shippingAddress?.governorateDisplayName}`
                }}
              </p>
              <!-- 42 Aljarah st. kuwait city. -->
              <p>Floor NO. {{ order?.shippingAddress?.floorNo }}</p>
              <p>Flat No. {{ order?.shippingAddress?.flatNo }}</p>
              <p>{{ order?.shippingAddress?.landmark }}</p>
            </section>
          </VCard>
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            class="card"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <h3 class="card-title">Payment Method</h3>
            <section style="display: flex; flex-direction: column; gap: 1rem">
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Transactions :</p>
                <p style="color: #21094a; font-size: 14px">#542212454052</p>
              </div>
              <div style="display: flex; gap: 3.5rem">
                <p style="color: #7066a2; font-size: 14px">Payment Method :</p>
                <p style="color: #21094a; font-size: 14px">
                  {{ order.paymentMethod }}
                </p>
                <!-- <SvgIcon icon="VISA" color="#21094a" /> -->
              </div>
              <div style="display: flex; gap: 5.7rem">
                <p style="color: #7066a2; font-size: 14px">Card name :</p>
                <p style="color: #21094a; font-size: 14px">Mohamed Ali Zain</p>
              </div>
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Card number :</p>
                <p style="color: #21094a; font-size: 14px">
                  2654 2638 7462 2893
                </p>
              </div>
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Total amount :</p>
                <p style="color: #21094a; font-size: 14px">
                  KD {{ order?.totalAmount }}
                </p>
              </div>
            </section>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
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
              style="
                margin-bottom: 1rem;
                border-radius: 8px;
                border: 1px solid #e8e7ef;
              "
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
      <!-- <VCol v-if="modalOptions.title === 'Change Order Status'">
        <h4 class="card-info-title">Order Status</h4>
        <VRow>
          <VCol>
            <VSelect
              bg-color="#faf9fe"
              label=""
              :items="nextStatus(order.status)"
              v-model="order.status"
              hide-details
              density="compact"
              variant="outlined"
              placeholder="Choose Role"
              style="border-radius: 8px"
            />
      
          </VCol>
        </VRow>
      </VCol> -->
    </GlobalPopup>
  </section>
</template>

<style>
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
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

.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
  text-align: left;
}
.listen-table thead tr {
  background-color: #faf9fe;
  color: #21094a;
  border: 1px solid #e8e7ef;
  margin-bottom: 5rem;
  border-radius: 12px;
  border-bottom: none;
}

.v-table .v-table__wrapper > table > thead > tr > th {
  border-bottom: none;
  margin-bottom: 5rem;
}

.section-history:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 4px;
  bottom: 4px;
  left: 20px;
  border-left: 2px dotted #733ee4;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #7066a2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7066a2a1;
}

/* :global(.v-field__outline__start) {
  display: none;
}
:global(.v-field__outline__end) {
  border-radius: 12px !important;
  border: 1px solid #e8e7ef !important;
} */
</style>
