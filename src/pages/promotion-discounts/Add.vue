<template>
  <section class="add-products px-6">
    <BaseNotifications
      :notification="showToast"
      :notificationText="notification.text"
      :color="notification.color"
      @closeNotification="showToast = false"
    />
    <VContainer>
      <VRow>
        <VCol cols="8">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            v-else
            flat
            class="pa-4"
            style="margin-bottom: 2rem; border-radius: 12px"
          >
            <div>
              <h3 class="card-title mb-8">Discount on</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group
                  v-model="newDiscount.discountOn"
                  inline
                  hide-details
                  :style="{ color: '#733ee4' }"
                  @input="setDiscountOnItems"
                >
                  <v-radio
                    selected
                    label="Categories"
                    color="#733EE4"
                    value="Category"
                    class="me-8"
                  />
                  <v-radio
                    label="Sub-Categories"
                    color="#733EE4"
                    value="Sub-Categories"
                    class="me-8"
                  />
                  <!-- <v-radio
                    label="Custom Products"
                    color="#733EE4"
                    value="Custom Products"
                    class="me-8"
                  /> -->
                </v-radio-group>
              </div>
            </div>

            <VCol cols="6" class="pa-0">
              <div class="mt-4 mb-2" v-if="newDiscount.discountOn?.length">
                <h4
                  class="mt-4 mb-2"
                  style="
                    color: var(--Lite, #afaacb);
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                  "
                >
                  {{ newDiscount.discountOn }} name
                </h4>
                <v-select
                  density="compact"
                  variant="outlined"
                  bg-color="#faf9fe"
                  :placeholder="`Choose ${newDiscount.discountOn}`"
                  v-model="newDiscount[`${newDiscount.discountOn}Uuid`]"
                  item-value="uuid"
                  item-title="displayName_En"
                  :items="getNavigationItems"
                  style="border-radius: 12px; background: var(--White, #fff)"
                  :loading="discount_on_Loading"
                >
                  <template v-slot:no-data>
                    <div class="d-flex">
                      <p class="mx-auto py-2">
                        {{
                          discount_on_Loading ? 'Loading...' : 'No Data Found'
                        }}
                      </p>
                    </div>
                  </template>
                </v-select>
              </div>
            </VCol>

            <VCol
              cols="12"
              class="pa-0"
              v-if="newDiscount[`${newDiscount.discountOn}Uuid`]"
            >
              <div class="mt-4 mb-2">
                <div class="d-flex justify-space-between align-center">
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
                    {{
                      getNavigationItems.find(
                        (item: any) =>
                          item.uuid ===
                          newDiscount[`${newDiscount.discountOn}Uuid`]
                      )?.displayName_En
                    }}
                  </p>
                  <button
                    @click="newDiscount[`${newDiscount.discountOn}Uuid`] = null"
                    class="d-flex my-auto"
                  >
                    <svgIcon icon="delete" class="my-auto" />
                  </button>
                </div>
                <v-divider class="my-3" />
              </div>
            </VCol>
          </VCard>
          <VCol
            cols="12"
            style="border-radius: 12px; background: var(--White, #fff)"
            class="pa-8 my-6"
          >
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              flat
              style="border-radius: 12px; background: var(--White, #fff)"
            >
              <h3 class="card-title mb-8">Schedule discount</h3>
              <VRow>
                <VCol class="py-0">
                  <h4
                    style="
                      color: var(--Lite, #afaacb);
                      font-family: Roboto;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 150%;
                      margin-bottom: 0.5rem;
                    "
                  >
                    Start date
                  </h4>
                  <GDatePicker
                    label="Enter start date"
                    bg-color="#FAF9FE"
                    v-model="newDiscount.startDate"
                  />
                </VCol>
                <VCol class="py-0">
                  <h4
                    style="
                      color: var(--Lite, #afaacb);
                      font-family: Roboto;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 150%;
                      margin-bottom: 0.5rem;
                    "
                  >
                    Expiry date
                  </h4>
                  <GDatePicker
                    label="Enter end date"
                    bg-color="#FAF9FE"
                    v-model="newDiscount.endDate"
                  />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="4">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCol cols="12" class="pa-0" v-else>
            <VCard
              flat
              style="border-radius: 12px; background: var(--White, #fff)"
              class="pa-8"
            >
              <h3 class="card-title mb-8">Discount To</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group
                  v-model="newDiscount.Target"
                  inline
                  hide-details
                  :style="{ color: '#733ee4' }"
                  @input="setGovernorates"
                >
                  <v-radio
                    label="All users"
                    value="All"
                    color="#733EE4"
                    class="me-5"
                  />
                  <v-radio
                    label="Governorate"
                    value="Governorates"
                    color="#733EE4"
                  />
                </v-radio-group>
              </div>

              <VCol
                cols="12"
                class="pa-0"
                v-if="newDiscount.Target === 'Governorates'"
              >
                <div class="mt-4 mb-2">
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose Governorate"
                    v-model="newDiscount.GovernorateUuids"
                    class="card-info-list"
                    :items="Governorates"
                    return-object
                    item-title="displayName_En"
                    multiple
                  />
                </div>
              </VCol>

              <VCol
                cols="12"
                class="pa-0"
                v-if="newDiscount.GovernorateUuids.length"
              >
                <div
                  class="mt-4 mb-2"
                  v-for="(Governorate, i) in newDiscount.GovernorateUuids"
                  :key="i"
                >
                  <div class="d-flex justify-space-between align-center">
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
                      {{ Governorate.displayName }}
                    </p>
                    <button
                      icon
                      @click="removeGovernorate(Governorate.uuid)"
                      class="d-flex my-auto"
                    >
                      <svgIcon icon="delete" class="my-auto" />
                    </button>
                  </div>
                  <v-divider class="my-3" />
                </div>
              </VCol>
            </VCard>
          </VCol>
          <VCol cols="12" class="pa-0 my-6">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-tags">
              <h3 class="card-title mb-8">Discount ratio</h3>
              <div
                style="
                  height: fit-content;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <VTextField
                  label=""
                  placeholder="Enter discount ratio"
                  variant="outlined"
                  bg-color="#faf9fe"
                  style="color: #afaacb; font-size: 14px"
                  hide-details
                  suffix="%"
                  v-model="newDiscount.ratio"
                />
              </div>
            </VCard>
          </VCol>
          <VCol cols="12" class="pa-0">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-tags" style="margin-bottom: 2rem">
              <h3 class="card-title mb-8">Status</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group v-model="newDiscount.status" inline hide-details>
                  <v-radio
                    label="Active"
                    value="Active"
                    color="primary"
                    class="me-14"
                  />
                  <v-radio label="Stopped" value="Stopped" color="primary" />
                </v-radio-group>
              </div>
            </VCard>
          </VCol>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div
    v-if="!isPageLoading"
    class="add-products-actions"
    style="display: flex; justify-content: end"
  >
    <v-btn
      flat
      color="#fff"
      class="rounded-lg"
      height="48"
      width="162"
      @click="$router.go(-1)"
    >
      Cancel
    </v-btn>
    <v-btn
      flat
      :color="isEditing ? '#27AE60' : '#733EE4'"
      class="rounded-lg"
      height="48"
      width="162"
      :loading="isAddingBtnLoading"
      :disabled="isAddingBtnLoading"
      @click="addDiscount"
    >
      <v-icon size="20"> mdi-plus </v-icon>
      <p>{{ isEditing ? 'Save Changes' : 'Add Discount' }}</p>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import type { Discount } from './type';
import { createDiscount } from '@/apis/discounts';
import { getCtegories } from '@/apis/categories';
import { getGovernorates } from '@/apis/governorates';
import {
  getFormData,
  sendFormData,
} from '@/composables/products/SendFormRequest';
import { useEditDiscountData } from '@/composables/discount/useEditorDiscountData.ts';
import { useBuildQueryString } from '@/composables/UseBuildQueryString';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
const { buildQueryString } = useBuildQueryString();

let isPageLoading = ref(false);
let showToast = ref(false);
let isAddingBtnLoading = ref(false);
const newDiscount: any = reactive({
  uuid: '',
  discountOn: '',
  status: '',
  target: '',
  ratio: 0,
  SubCategoryUuid: '',
  products: [],
  GovernorateUuids: [],
  dateCreated: '',
  statusLocalized: '',
  discountOnLocalized: '',
  startDate: '',
  endDate: '',
}) as unknown as Discount;

const route = useRoute();
const router = useRouter();

const { isEditing, setDiscountData } = useEditDiscountData();

const allCategories = ref([]);
let discount_on_Loading = ref(false);
const Governorates = ref([]);

const setGovernorates = async () => {
  if (Governorates.value.length) {
    return;
  }
  try {
    const params = buildQueryString({
      rowCount: 100,
      pageNo: 1,
    });
    const {
      data: { data },
    } = await getGovernorates(params);
    Governorates.value = data.result;
  } catch (error) {
    console.log(error);
  }
};

const removeGovernorate = (uuid: any) => {
  newDiscount.GovernorateUuids = newDiscount.GovernorateUuids.filter(
    (item: any) => item.uuid !== uuid
  );
};

const getAllCategories = async () => {
  if (allCategories.value.length) {
    return;
  }
  discount_on_Loading.value = true;
  try {
    const params = buildQueryString({
      rowCount: 100,
      pageNo: 1,
    });
    const {
      data: { data },
    } = await getCtegories(params);
    allCategories.value = data.result;
  } catch (error) {
    console.log(error);
  } finally {
    discount_on_Loading.value = false;
  }
};

const getNavigationItems = computed(() => {
  switch (newDiscount.discountOn) {
    case 'Category':
      return allCategories.value ?? [];
    // case 'SubCategory':
    //   return allSubCategories.value ?? [];
    // case 'CustomProducts':
    //   return allProducts.value ?? [];
    // case 'Brand':
    //   return allBrands.value ?? [];
    default:
      return [];
  }
});

const setDiscountOnItems = () => {
  switch (newDiscount.Navigation) {
    case 'Category':
      return getAllCategories();
    // case 'SubCategory':
    //   return getAllSubCategories();
    // case 'CustomProducts':
    //   return getAllProducts();
    // case 'Brand':
    //   return getAllBrands();
    default:
      return;
  }
};

const rules = {
  discountOn: { required },
  status: { required },
  Target: { required },
  ratio: { required },
  startDate: { required },
  endDate: { required },
};

const v$ = useVuelidate(rules, newDiscount);

let notification = ref({
  text: 'Discount has been Added Successfully',
  color: '#27ae60',
});

const addDiscount = async (): Promise<void> => {
  isAddingBtnLoading.value = true;
  const isValid = await v$.value.$validate();
  if (!isValid) {
    isAddingBtnLoading.value = false;
    notification.value.text = 'Please check your Inputs';
    notification.value.color = '#EB5757';
    showToast.value = true;
    return;
  }
  const form = {
    ...(newDiscount.discountOn.length && {
      discountOn: newDiscount.discountOn,
    }),
    ...(newDiscount.target.length && {
      target: newDiscount.target,
    }),
    ...(newDiscount.status.length && {
      status: newDiscount.status,
    }),
    ...(newDiscount.startDate.length && {
      startDate: newDiscount.startDate,
    }),
    ...(newDiscount.endDate.length && {
      endDate: newDiscount.endDate,
    }),
    ...(newDiscount.ratio.length && {
      ratio: Number(newDiscount.ratio),
    }),
    ...(newDiscount.CategoryUuid.length && {
      categoryUuid: newDiscount.CategoryUuid,
    }),
    ...(newDiscount.GovernorateUuids.length && {
      governorateUuids: newDiscount.GovernorateUuids.map(
        (gov: any) => gov.uuid
      ),
    }),
  };

  delete form.uuid;
  try {
    await createDiscount(form);
    showToast.value = true;
    isAddingBtnLoading.value = true;
    setTimeout(() => {
      router.push({ name: 'promotion-discounts' });
    }, 1000);
  } catch (error) {
    console.log(error);
  } finally {
    isAddingBtnLoading.value = false;
  }
};

onMounted(async () => {
  isPageLoading.value = true;
  try {
    await getAllCategories();
    await setDiscountData(newDiscount);
  } catch (error) {
  } finally {
    isPageLoading.value = false;
  }
});
</script>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
}

.add-products-actions {
  padding: 1rem 2rem 2rem 2rem;
}

.card-info-btn {
  padding: 0;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #733ee4;
}
.card-info-input {
  height: 40px;
  background: #faf9fe;
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
.card-info-list {
  border: none;
}
.card-type {
  padding: 1rem;
}
.v-btn--size-default {
  min-width: 37px;
}
.v-btn.v-btn--density-default {
  height: 40px;
}
.card-tags {
  padding: 1rem;
}

.card-file {
  border-radius: 8px;
  border: 1px transparent #e8e7ef;
  background: #faf9fe;
  position: relative;
  box-shadow: none;
}
.card-file-input {
  width: 96px;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
.card-file-ui {
  border-radius: 6px;
  height: 276px;
  background: rgba(115, 62, 228, 0.05);
  box-shadow: none;
}
.card-file-text {
  color: #733ee4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.card-file-subtitle {
  color: #9089b2;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
}
</style>

<style>
.v-field__outline__start {
  display: none;
}
.v-field__outline__end {
  border-radius: 12px !important;
  border: 1px solid #e8e7ef !important;
}

.ql-toolbar.ql-snow {
  border: none;
  position: absolute;
  left: 0.8rem;
  bottom: 0.6rem;
  width: 100%;
  z-index: 1;
}
.ql-container.ql-snow {
  color: #7066a2;
}
.title-product {
  color: #21094a;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.number-products {
  color: #733ee4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.products-card {
  border-radius: 8px;
  border: 1px solid #e8e7ef;
  background: #fff;
}
.tag {
  border-radius: 4px;
  background: #7066a2;
  padding: 3px 8px;
  color: #fff;
}
</style>
