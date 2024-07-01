<script setup>

import { useStyleState } from "@/composables/UseStyleState";
import { changeOrderStatusAndEstimatedDays } from "@/apis/orders";

const { getStyleStatus } = useStyleState();
const props = defineProps({
  showSelect: {
    type: Boolean,
    default: true,
  },
  isPageLoading: {
    type: Boolean,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  routeDir: {
    type: String,
    required: true,
  },
  itemValue: {
    type: String,
    default: 'uuid',
  },
  triggerResetSelectedItems: {
    type: Boolean,
    default: false,
  },
  triggerSelectAll: {
    default: false,
    type: Boolean,
  },
});

const router = useRouter();
const route = useRoute();

const viewDetails = (...event) => {
  router.push({
    name: `view-${props.routeDir}`,
    params: { id: event[1]?.item?.uuid ?? event[1]?.item?.id },
  });
};

const dateFormatting = (date) => {
  return new Date(date).toLocaleDateString('en-US');
};
const items = [
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Variables',
    Qty: '185',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Brain Health',
    Type: 'Simple',
    Qty: '10',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#764820',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Heart & Metabolism',
    Type: 'Variables',
    Qty: '110',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459820',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Bundle',
    Qty: '5',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#7645982',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Gut Health',
    Type: 'Variables',
    Qty: '144',
    Price: 'KD 20',
    Visability: 'Published',
  },

  {
    SKU: '#764520',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Simple',
    Qty: '6',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459819',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Heart & Metabolism',
    Type: 'Variables',
    Qty: '210',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459818',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Gut Health',
    Type: 'Bundle',
    Qty: '9',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459817',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '199',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459815',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Variables',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459816',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Bundle',
    Qty: '400',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459814',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459813',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459812',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Variables',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459811',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  // ... more items
];


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
const nextStatus = (currentStatus) => {
  const currentIndex = statuses.value?.indexOf(currentStatus);
  if (currentStatus === "Delivered" || currentStatus === "Cancelled") {
    return [currentStatus];
  } else if (currentIndex >= 0 && currentIndex < statuses.value?.length - 1) {
    return [statuses.value[currentIndex + 1]];
  }
  return [currentStatus];
};

const emit = defineEmits(['emitSelectedItems'], ['openDeleteModal']);
//TODO: for discussion l8r how to make it dynamic
const headerLocal = computed(() => props.headers ?? headers);
const itemsLocal = computed(() => props.items ?? items);
let selectedItems = ref([]);

const selectItems = () => {
  emit('emitSelectedItems', selectedItems.value);
};

watch(
  () => props.triggerResetSelectedItems,
  () => {
    selectedItems.value = [];
  }
);

watch(
  () => props.triggerSelectAll,
  (val) => {
    if (val) {
      selectedItems.value = itemsLocal.value
        .map((item) => item[props.itemValue])
        .slice(0, 10);
    } else {
      selectedItems.value = [];
    }
    emit('emitSelectedItems', selectedItems.value);
  }
);

const openDeleteModal = ({ uuid }) => {
  emit('openDeleteModal', {
    uuid,
    options: {
      title: `Delete ${route.meta.key.includes('-') ? route.meta.key.split('-')[1]?.toUpperCase() : route?.meta?.key?.toUpperCase()}`,
      text: `Are you sure you want to delete this ${route.meta.key} ?`,
      buttonTitle: 'Yes, Delete',
      buttonColor: '#EB5757',
      icon: 'deleteIcon',
      sheetColor: '#eb57571a',
    },
  });
};

const updateOrderStatus = async (item) => {
  try {
    await changeOrderStatusAndEstimatedDays(item.uuid)();
  } catch (error) {}
};

const handleGoTOAction = ({ uuid }, action) => {
  router.push({ name: `${action}-${route.meta.key}`, params: { id: uuid } });
};

const getCellProps = ({ item }) => {
  return selectedItems.value.includes(item[`${props.itemValue}`])
    ? { class: 'bg-f1ecfc' }
    : {};
};
</script>

<template>
  <v-skeleton-loader v-if="isPageLoading" type="table" />
  <div v-else-if="itemsLocal.length" class="d-flex w-100">
    <dataTableLoader v-if="isPageLoading" />
    <v-data-table
      class="listing-table"
      :class="{ showSelect: showSelect }"
      v-bind="$attrs"
      v-model="selectedItems"
      :headers="headerLocal"
      :items="itemsLocal"
      :item-value="itemValue"
      :cell-props="getCellProps"
      :items-per-page="10"
      sort-asc-icon="mdi-menu-swap"
      sort-desc-icon="mdi-menu-swap"
      :show-select="showSelect"
      hide-default-footer
      @input="selectItems($event)"
      @click:row="viewDetails"
    >
      <template v-slot:item.uuid="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              font-family: Roboto;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            "
          >
            #{{ item.uuid.slice(0, 8) }}
          </p>
        </div>
      </template>

      <template v-slot:item.subCategoryCount="{ item }">
        <div>
          <p
            style="
              color: var(--Purple, #733ee4);
              font-family: Roboto;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            "
          >
            {{ item.subCategoryCount }} sub
          </p>
        </div>
      </template>

      <template v-slot:item.imagePath="{ item }">
        <div class="d-flex justify-start">
          <img
            :src="`https://techify-001-site1.htempurl.com${item.imagePath}`"
            alt=""
            style="
              width: 88px;
              height: 44px;
              border-radius: var(--Spacing-N4, 8px);

              background: url(<path-to-image>) lightgray 50% / cover no-repeat;
            "
          />
        </div>
      </template>

      <template v-slot:item.target="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              /* 16/B1-R-16 */
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 24px */
            "
          >
            {{ item.target }}
          </p>
        </div>
      </template>

      <template v-slot:item.navigation="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              /* 16/B1-R-16 */
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 24px */
            "
          >
            {{ item.navigation }}
          </p>
        </div>
      </template>

      <template v-slot:item.place="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              /* 16/B1-R-16 */
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 24px */
            "
          >
            {{ item.place }}
          </p>
        </div>
      </template>
      <template v-slot:item.id="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              /* 16/B1-R-16 */
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 24px */
            "
          >
            {{ item.id }}
          </p>
        </div>
      </template>

      <template v-slot:item.title="{ item }">
        <div>
          <p class="product text-subtitle-1">{{ item.title }}</p>
        </div>
      </template>

      <template v-slot:item.description="{ item }">
        <div>
          <p class="product text-subtitle-1">{{ item.description }}</p>
        </div>
      </template>

      <template v-slot:item.roleName="{ item }">
        <div>
          <p
            style="
              color: var(--Black, #21094a);
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            "
          >
            {{ dateFormatting(item.dateCreated) }}
          </p>
        </div>
      </template>

      <template v-slot:item.dateCreated="{ item }">
        <p class="product text-subtitle-1">
          {{ dateFormatting(item.dateCreated) }}
        </p>
      </template>

      <template v-slot:item.startDate="{ item }">
        <p class="product text-subtitle-1">
          {{ dateFormatting(item.startDate) }}
        </p>
      </template>

      <template v-slot:item.email="{ item }">
        <div>
          <p class="product text-subtitle-1">
            {{ item.email }}
          </p>
        </div>
      </template>
      <template v-slot:item.phoneNumber="{ item }">
        <div>
          <p class="product text-subtitle-1">
            {{ item.phoneNumber }}
          </p>
        </div>
      </template>
      <template v-slot:item.spent="{ item }">
        <div>
          <p class="product text-subtitle-1">
            {{ item.spent }}
          </p>
        </div>
      </template>

      <template v-slot:item.itemsNumber="{ item }">
        <div>
          <p class="product text-subtitle-1">
            {{ item.itemsNumber }}
          </p>
        </div>
      </template>

      <template v-slot:item.joiningDate="{ item }">
        <div>
          <p class="product text-subtitle-1">
            {{ item.joiningDate }}
          </p>
        </div>
      </template>

      <template v-slot:item.respondDate="{ item }">
        <div>
          <p class="product text-subtitle-1">{{ item.respondDate }}</p>
        </div>
      </template>

      <template v-slot:item.productCount="{ item }">
        <div>
          <p
            style="
              text-align: center;
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            "
            :style="{ color: item.productCount <= 10 ? '#EB5757' : '#21094A' }"
          >
            {{ item.productCount }}
          </p>
        </div>
      </template>

      <template v-slot:item.visibility="{ item }">
        <div class="d-flex">
          <p
            class="mx-auto px-2 py-1 text-subtitle-1"
            style="border-radius: 8px"
            :style="`background-color: ${getStyleStatus(item.visibility)?.background}; color: ${getStyleStatus(item.visibility)?.color}`"
          >
            {{ item.visibility }}
          </p>
        </div>
      </template>

      <template v-slot:item.price="{ item }">
        <div class="d-flex">
          <p class="price text-subtitle-1">
            KD
            {{ item.price }}
          </p>
        </div>
      </template>
      <template v-slot:item.totalAmount="{ item }">
        <div class="d-flex">
          <p class="price text-subtitle-1">
            KD
            {{ item.totalAmount }}
          </p>
        </div>
      </template>

      <template v-slot:item.stockQuantity="{ item }">
        <div class="d-flex">
          <p
            class="QTY product text-subtitle-1"
            :class="item.stockQuantity <= 10 ? 'low' : ''"
          >
            {{ item.stockQuantity }}
          </p>
        </div>
      </template>

      <template v-slot:item.type="{ item }">
        <div class="d-flex">
          <p class="type text-subtitle-1">
            {{ item.type }}
          </p>
        </div>
      </template>

      <template v-slot:item.permissions="{ item }">
        <!-- <div class="d-flex"> -->
        <p class="product text-subtitle-1">
          {{ item.permissions }} Permissions
        </p>
        <!-- </div> -->
      </template>

      <template v-slot:item.categoryName="{ item }">
        <div class="d-flex align-center justify-center">
          <p class="category text-subtitle-1">
            {{ item.categoryName }}
          </p>
        </div>
      </template>
      <template v-slot:item.category="{ item }">
        <div class="d-flex align-center justify-center">
          <p
            style="
              color: var(--Black, #21094a);
              font-family: Roboto;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            "
          >
            {{ item.category }}
          </p>
        </div>
      </template>
      <template v-slot:item.displayName_En="{ item }">
        <div class="d-flex align-center justify-start">
          <div v-if="item?.imagePath || item?.images?.length">
            <img
              style="width: 38px; height: 38px"
              :src="`https://techify-001-site1.htempurl.com${item.imagePath ? item.imagePath : item.images[0]?.imagePath}`"
              alt="product"
            />
          </div>
          <p class="product text-subtitle-1 ml-2">
            {{ item.displayName_En }}
          </p>
        </div>
      </template>
      <template v-slot:item.CustomerName="{ item }">
        <div class="d-flex align-center justify-start">
          <div>
            <img
              style="width: 38px; height: 38px"
              src="@/assets/test-avatar.png"
              alt="product"
            />
          </div>
          <p class="product text-subtitle-1 ml-2">
            {{ item.CustomerName }}
          </p>
        </div>
      </template>
      <template v-slot:item.Product="{ item }">
        <div class="d-flex align-center justify-start">
          <div>
            <img
              style="width: 38px; height: 38px"
              src="@/assets/test-avatar.png"
              alt="product"
            />
          </div>
          <p class="product text-subtitle-1 ml-2">
            {{ item.Product }}
          </p>
        </div>
      </template>
      <template v-slot:item.Rating="{ item }">
        <div class="d-flex align-center justify-start">
          <Ratings
            :numnerOfStars="Math.floor(item.Rating)"
            :numnerOfhalfStars="item.Rating % 1 != 0 ? 1 : 0"
          />
        </div>
      </template>
      <template v-slot:item.users="{ item }">
        <div class="d-flex align-center justify-center">
          <div
            v-if="item?.imagePath || item?.images?.length"
            class="d-flex align-center"
          >
            <img
              v-for="image in item.images"
              style="
                width: 28px;
                height: 30px;
                border-radius: 50%;
                margin-left: -15px;
              "
              :src="`${image.imagePath}`"
              alt="product"
            />
            <span
              v-if="item?.images?.length > 3"
              class="text-subtitle-1 ml-2 product"
              style="color: #733ee4"
            >
              +{{ item?.images?.length - 3 }}</span
            >
          </div>
        </div>
      </template>

      <template v-slot:item.items="{ item }">
        <div
          v-for="(product, i) in item.items"
          class="d-flex align-center justify-center"
        >
          <section class="d-flex align-center justify-center" v-if="i == 0">
            <img
              v-if="product?.productImagePath"
              style="
                width: 28px;
                height: 30px;
                border-radius: 50%;
                margin-left: -15px;
              "
              :src="`https://techify-001-site1.htempurl.com${product.productImagePath}`"
              alt="product"
            />
            <span class="product text-subtitle-1 ml-2">
              {{ product.productDisplayName_En }}
            </span>
            <span
              v-if="item.items.length > 1"
              class="text-subtitle-1 ml-2 product"
              style="color: #733ee4"
            >
              +{{ item.items.length - 1 }}</span
            >
          </section>
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

      <template v-slot:item.userFullName="{ item }">
        <div class="d-flex align-center justify-center">
          <p class="product text-subtitle-1 ml-2">
            {{ item.userFullName }}
          </p>
        </div>
      </template>

      <template v-slot:item.sku="{ item }">
        <div class="d-flex">
          <p class="SKU text-subtitle-1">
            {{ item.sku }}
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

      <template v-slot:item.paymentMethod="{ item }">
        <div class="d-flex justify-center align-center" style="gap: 0.5rem">
          <SvgIcon :icon="item.paymentMethod" />
          <p class="SKU text-subtitle-1">
            {{ item.paymentMethod }}
          </p>
        </div>
      </template>

      <template v-slot:item.ReviewDate="{ item }">
        <div class="d-flex justify-center">
          <p class="SKU text-subtitle-1">
            {{ item.ReviewDate }}
          </p>
        </div>
      </template>

      <template v-slot:item.Payment="{ item }">
        <div class="d-flex justify-center align-center" style="gap: 0.5rem">
          <SvgIcon :icon="item.paymentMethod" />
          <p class="SKU text-subtitle-1">
            {{ item.paymentMethod }}
          </p>
        </div>
      </template>

      <template v-slot:item.Status="{ item }">
        <div class="d-flex justify-center">
          <VSelect
            :items="orderStatus"
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
        <div
          class="d-flex justify-center"
          v-if="item?.items?.length > 0"
          @click.stop
        >
          <VSelect
            :items="nextStatus(item.statusLocalized)"
            v-model="item.statusLocalized"
            @update:modelValue="updateOrderStatus(item)"
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
            :style="`background-color: ${getStyleStatus(item.status)?.background}; color: ${getStyleStatus(item.status)?.color}`"
          />
        </div>
        <div class="d-flex" v-else>
          <p
            class="px-5 py-1 text-subtitle-1 mx-auto"
            style="font-size: 12px; border-radius: 8px"
            :style="`background-color: ${getStyleStatus(item.status)?.background}; color: ${getStyleStatus(item.status)?.color}`"
          >
            {{ item.status }}
          </p>
        </div>
      </template>

      <template v-slot:item.notificationActions="{ item, index }">
        <div v-if="index % 2 === 0">
          <v-divider />
        </div>
        <div v-else class="d-flex">
          <p
            style="
              color: var(--Lite, #afaacb);
              text-align: center;
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            "
            class="my-auto me-2"
          >
            Send
          </p>
          <svgIcon icon="Send-icon" class="my-auto" />
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn flat v-bind="props" color="transparent">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="px-0">
              <v-btn
                @click.stop="handleGoTOAction(item, 'edit')"
                class="d-flex w-100 justify-start px-5"
                flat
              >
                <editIcon
                  class="my-auto cursor-pointer me-2"
                  :color="'#AFAACB'"
                  :width="20"
                  :height="20"
                />
                <p>Edit</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0">
              <v-btn
                @click.stop="openDeleteModal(item)"
                class="d-flex w-100 justify-start px-5"
                flat
              >
                <deleteIcon
                  class="my-auto cursor-pointer me-2"
                  :color="'#AFAACB'"
                  :width="20"
                  :height="20"
                />
                <p>Delete</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0">
              <v-btn
                class="d-flex w-100 justify-start px-5"
                flat
                @click.stop="handleGoTOAction(item, 'view')"
              >
                <ViewIcon
                  class="my-auto cursor-pointer me-2"
                  :color="'#AFAACB'"
                  :width="20"
                  :height="20"
                />
                <p>View Details</p>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template v-slot:item.promotion-actions="{ item }">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn flat v-bind="props" color="transparent">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="px-0">
              <v-btn
                @click.stop="handleGoTOAction(item, 'edit')"
                class="d-flex w-100 justify-start px-5"
                flat
              >
                <svgIcon class="my-auto cursor-pointer me-2" icon="edit (1)" />
                <p>Edit</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0">
              <v-btn
                @click.stop="openDeleteModal(item)"
                class="d-flex w-100 justify-start px-5"
                flat
              >
                <svgIcon
                  class="my-auto cursor-pointer me-2"
                  icon="delete (1)"
                />
                <p>Delete</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0">
              <v-btn
                class="d-flex w-100 justify-start px-5"
                flat
                @click.stop="handleGoTOAction(item, 'view')"
              >
                <svgIcon class="my-auto cursor-pointer me-2" icon="eye" />
                <p>View Details</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0" v-if="item.status !== 'active'">
              <v-btn class="d-flex w-100 justify-start px-5" flat>
                <svgIcon class="my-auto cursor-pointer me-2" icon="Change" />
                <p>Renew AD</p>
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0" v-else>
              <v-btn class="d-flex w-100 justify-start px-5" flat>
                <svgIcon class="my-auto cursor-pointer me-2" icon="Hold" />
                <p>Stop AD</p>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<style>
.bg-f1ecfc {
  background-color: #f1ecfc;
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

.mdi-checkbox-blank-outline {
  color: #d4d5dc;
}

.mdi-checkbox-marked {
  color: #733ee4;
}

.listing-table {
  border-radius: 8px;
}

.listing-table thead tr:first-child {
  background-color: #e9e7f0;
  color: #21094a;
}

.listing-table tr {
  height: 64px;
}

.listing-table.showSelect tr > td:first-child {
  border-right: 1px solid #afaacb;
}
</style>
