<script setup>
import { usePopUpStore } from "@/stores/popup.state.ts";

const popupStore = usePopUpStore();

const items = [
  {
    SKU: "#76459849",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Vitamins & Minerals",
    Type: "Variables",
    Qty: "185",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Brain Health",
    Type: "Simple",
    Qty: "10",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#764820",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Heart & Metabolism",
    Type: "Variables",
    Qty: "110",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459820",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Vitamins & Minerals",
    Type: "Bundle",
    Qty: "5",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#7645982",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Gut Health",
    Type: "Variables",
    Qty: "144",
    Price: "KD 20",
    Visability: "Published",
  },

  {
    SKU: "#764520",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Vitamins & Minerals",
    Type: "Simple",
    Qty: "6",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459819",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Heart & Metabolism",
    Type: "Variables",
    Qty: "210",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459818",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Gut Health",
    Type: "Bundle",
    Qty: "9",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459817",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Simple",
    Qty: "199",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459815",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Variables",
    Qty: "250",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459816",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Bundle",
    Qty: "400",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459814",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Simple",
    Qty: "250",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459813",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Simple",
    Qty: "250",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459812",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Variables",
    Qty: "250",
    Price: "KD 20",
    Visability: "Published",
  },
  {
    SKU: "#76459811",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Category: "Herbivore",
    Type: "Simple",
    Qty: "250",
    Price: "KD 20",
    Visability: "Published",
  },
  // ... more items
];

const headers = [
  {
    key: "exclusive",
    sortable: false,
    removable: false,
    align: "center",
  },
  { title: "SKU", key: "SKU", align: "left", sortable: false },
  {
    title: "Product",
    key: "Product",
    align: "left",
    sortable: true,
    width: 250,
  },
  { title: "Category", key: "Category", ralign: "center", sortable: true },
  { title: "Type", key: "Type", align: "left", sortable: false },
  { title: "Qty", key: "Qty", align: "left", sortable: false },
  { title: "Price", key: "Price", align: "left", sortable: true },
  { title: "Visability", key: "Visability", align: "left", sortable: true },
  { key: "actions", align: "center", sortable: false },
];

const orderStatus = ref([
  { nameAr: "قيد الانتظار", nameEn: "Pending" },
  {
    nameAr: "تم التسليم",
    nameEn: "Delivered",
  },
  {
    nameAr: "تم الشحن",
    nameEn: "Shipped",
  },
  {
    nameAr: "تم الاسترجاع",
    nameEn: "Returned",
  },
  {
    nameAr: "ملغي",
    nameEn: "Cancelled",
  },
  {
    nameAr: "في الانتظار",
    nameEn: "In progress",
  },
  {
    nameAr: "في انتظار الاسترجاع",
    nameEn: "Return in progress",
  },
  {
    nameAr: "مرفوض",
    nameEn: "Rejected",
  },
]);
const getStyleStatus = (status) => {
  const styles = {
    Pending: {
      color: "#E2B000",
      background: "#e2b0001a",
    },
    Delivered: {
      color: "#27ae60",
      background: "#27ae601a",
    },
    Active: {
      color: '#27ae60',
      background: '#27ae601a',
    },
    Shipped: {
      color: "#733EE4",
      background: "#733ee41a",
    },
    Returned: {
      color: "#21094A",
      background: "#21094a1a",
    },
    Blocked: {
      color: '#EB5757',
      background: '#eb57571a',
    },
    Cancelled: {
      color: "#EB5757",
      background: "#eb57571a",
    },
    "In progress": {
      color: "#F2994A",
      background: "#f2994a1a",
    },
    "Return in progress": {
      color: "#21094A",
      background: "#21094a1a",
    },
    Rejected: {
      color: "#EB5757",
      background: "#eb57571a",
    },
  };

  return styles[status];
};

const props = defineProps(["headers", "items", "itemValue"]);
const emit = defineEmits(["emitSelectedItems"]);
//TODO: for discussion l8r how to make it dynamic
const headerLocal = computed(() => props.headers ?? headers);
const itemsLocal = computed(() => props.items ?? items);
let selectedItems = ref([]);

const selectItems = () => {
  emit("emitSelectedItems", selectedItems.value);
};

const app = getCurrentInstance();

const openDeleteModal = () => {
  popupStore.togglePopupState({
    state: true,
    options: {
      title: "Delete Product",
      text: "Are you sure you want to delete this Product ?",
      buttonTitle: "Yes, Delete",
      buttonColor: "#EB5757",
      icon: "deleteIcon",
      sheetColor: "#eb57571a",
    },
  });
};
</script>

<template>
  <div classs="d-flex w-100">
    <v-data-table
      v-bind="$attrs"
      v-model="selectedItems"
      class="listin-table"
      :headers="headerLocal"
      :items="itemsLocal"
      :item-value="itemValue ?? 'SKU'"
      show-select
      :items-per-page="10"
      hide-default-footer
      @input="selectItems($event)"
    >
      <!-- <template v-slot:header="{ props: { headers } }">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h.text">
              <div class="mx-auto">
                <p>{{ h.text }}</p>
              </div>
            </th>
          </tr>
        </thead>
      </template> -->

      <!-- <template v-slot:item.exclusive="{ item }">
        <div class="checkBox">
          <v-checkbox v-model="item.exclusive" hide-details="true" />
        </div>
      </template> -->

      <template v-slot:item.Visability="{ item }">
        <div class="d-flex">
          <p class="green--tag px-2 py-1 text-subtitle-1">
            {{ item.Visability }}
          </p>
        </div>
      </template>

      <template v-slot:item.Price="{ item }">
        <div class="d-flex">
          <p class="price text-subtitle-1">
            {{ item.Price }}
          </p>
        </div>
      </template>

      <template v-slot:item.Qty="{ item }">
        <div class="d-flex">
          <p class="QTY text-subtitle-1" :class="item.Qty <= 10 ? 'low' : ''">
            {{ item.Qty }}
          </p>
        </div>
      </template>

      <template v-slot:item.Type="{ item }">
        <div class="d-flex">
          <p class="type text-subtitle-1">
            {{ item.Type }}
          </p>
        </div>
      </template>

      <template v-slot:item.Category="{ item }">
        <div class="d-flex">
          <p class="category text-subtitle-1">
            {{ item.Category }}
          </p>
        </div>
      </template>

      <template v-slot:item.Product="{ item }">
        <div class="d-flex align-center">
          <img src="@/assets/svgs/product.svg" alt="product" />
          <p class="product text-subtitle-1 ml-2">
            {{ item.Product }}
          </p>
        </div>
      </template>

      <template v-slot:item.Customer="{ item }">
        <div class="d-flex align-center">
          <img src="@/assets/test-avatar.png" alt="avatar" />
          <p class="product text-subtitle-1 ml-2">
            {{ item.Customer }}
          </p>
        </div>
      </template>

      <template v-slot:item.SKU="{ item }">
        <div class="d-flex">
          <p class="SKU text-subtitle-1">
            {{ item.SKU }}
          </p>
        </div>
      </template>

      <template v-slot:item.orderNumber="{ item }">
        <div class="d-flex justify-center">
          <p class="SKU text-subtitle-1">
            {{ item.orderNumber }}
          </p>
        </div>
      </template>

      <template v-slot:item.orderDate="{ item }">
        <div class="d-flex justify-center">
          <p class="SKU text-subtitle-1">
            {{ item.orderDate }}
          </p>
        </div>
      </template>

      <template v-slot:item.Payment="{ item }">
        <div class="d-flex justify-center align-center" style="gap: 0.5rem">
          <SvgIcon :icon="item.paymentMethod" />
          <p class="SKU text-subtitle-1">
            {{ item.Payment }}
          </p>
        </div>
      </template>

      <template v-slot:item.Status="{ item }">
        <div class="d-flex justify-center">
          <VSelect
            :items="orderStatus"
            item-title="nameEn"
            item-value="nameEn"
            v-model="item.Status"
            density="compact"
            class="pa-0 w-100 pl-2 pb-1"
            variant="plain"
            hide-details
            style="
              max-width: 150px;
              font-size: 12px;
              padding: 0.2rem 0;
              border-radius: 8px;
            "
            :style="`background-color: ${getStyleStatus(item.Status)?.background}; color: ${getStyleStatus(item.Status)?.color}`"
          />
        </div>
      </template>

      <template v-slot:item.status="{ item }">
        <div class="d-flex">
          <p
            class="px-2 py-1 text-subtitle-1 mx-auto"
            style="
              max-width: 150px;
              font-size: 12px;
              padding: 0.2rem 0;
              border-radius: 8px;
            "
            :style="`background-color: ${getStyleStatus(item.status)?.background}; color: ${getStyleStatus(item.status)?.color}`"
          >
            {{ item.status }}
          </p>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex">
          <editIcon
            class="mx-auto my-auto cursor-pointer me-1"
            :color="'#AFAACB'"
            :width="20"
            :height="20"
          />
          <deleteIcon
            class="mx-auto my-auto cursor-pointer"
            :color="'#AFAACB'"
            :width="20"
            :height="20"
            @click="openDeleteModal"
          />
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<style>
.green--tag {
  color: #27ae60;
  background-color: rgba(39, 174, 96, 0.1);
  border-radius: 8px;
}
.price {
  color: #21094a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
.QTY {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.QTY.low {
  color: #eb5757;
}

.type {
  color: #7066a2;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.category {
  color: #21094a;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.product {
  color: var(--Black, #21094a);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.SKU {
  color: #21094a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.checkBox {
  border-right: 1px #afaacb solid;
}

.listin-table {
  border-radius: 8px;
}

.listin-table thead tr:first-child {
  background-color: #9089b233;
  color: #21094a;
}

.listin-table tr > td:first-child {
  border-right: 1px solid #afaacb;
}
</style>
