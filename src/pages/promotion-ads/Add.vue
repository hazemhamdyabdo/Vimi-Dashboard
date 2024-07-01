<template>
  <section class="add-products px-6">
    <BaseNotifications
      :notification="showToast"
      :notificationText="notification.text"
      :color="notification.color"
      @closeNotification="showToast = false"
    />
    <VContainer class="pt-0">
      <VRow>
        <VCol cols="8">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCol
            cols="12"
            style="border-radius: 12px; background: var(--White, #fff)"
            class="pa-8"
            v-else
          >
            <VCard flat>
              <h3 class="card-title mb-8">AD Place</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group v-model="newAd.Place" inline hide-details>
                  <v-radio
                    label="At Top"
                    value="Top"
                    color="primary"
                    class="me-14"
                  />
                  <v-radio label="At Down" value="Down" color="primary" />
                </v-radio-group>
              </div>
            </VCard>
          </VCol>
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCol
            cols="12"
            style="border-radius: 12px; background: var(--White, #fff)"
            class="pa-8 my-6"
            v-else
          >
            <VCard flat>
              <div>
                <h3 class="card-title mb-8">Navigate to</h3>
                <div
                  style="
                    height: fit-content;
                    padding: 0px 12px;
                    border-radius: 6px;
                    background: rgba(115, 62, 228, 0.05);
                  "
                >
                  <v-radio-group
                    v-model="newAd.Navigation"
                    inline
                    hide-details
                    :style="{ color: '#733ee4' }"
                    @input="setNavigationItems"
                  >
                    <v-radio
                      label="Categories"
                      color="#733EE4"
                      value="Category"
                      class="me-8"
                    />
                    <!-- <v-radio
                      label="Sub-Categories"
                      color="#733EE4"
                      value="SubCategory"
                      class="me-8"
                    /> -->
                    <v-radio
                      label="Custom Products"
                      color="#733EE4"
                      value="CustomProducts"
                      class="me-8"
                    />
                    <v-radio
                      label="Brand"
                      color="#733EE4"
                      value="Brand"
                      class="me-8"
                    />
                  </v-radio-group>
                </div>
              </div>

              <VCol cols="6" class="pa-0">
                <div class="mt-4 mb-2">
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
                    {{ newAd.Navigation }} name
                  </h4>
                  <v-select
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    :placeholder="`Choose ${newAd.Navigation}`"
                    v-model="newAd[`${newAd.Navigation}Uuid`]"
                    class="card-info-list"
                    :items="getNavigationItems"
                    return-object
                    item-title="displayName_En"
                  />
                </div>
              </VCol>

              <VCol cols="12" class="pa-0" v-if="newAd.GovernorateUuids.length">
                <div
                  class="mt-4 mb-2"
                  v-for="(Governorate, i) in newAd.GovernorateUuids"
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
          <VCol
            cols="12"
            style="border-radius: 12px; background: var(--White, #fff)"
            class="pa-8 my-6"
          >
            <VCard
              flat
              style="border-radius: 12px; background: var(--White, #fff)"
            >
              <h3 class="card-title mb-8">Schedule AD</h3>
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
                    v-model="newAd.StartDate"
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
                    v-model="newAd.EndDate"
                  />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="4" class="py-0">
          <VCol cols="12">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard flat v-else style="margin-bottom: 1rem" class="pa-8">
              <h3
                class="mb-6"
                style="
                  color: var(--Black, #21094a);
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%;
                "
              >
                AD Banner
              </h3>
              <VCard flat>
                <VFileInput
                  label=""
                  ref="fileInput"
                  class="card-file-input"
                  prepend-icon="mdi-upload-multiple"
                  @change="handleFileChange"
                />
                <VCard
                  :style="{
                    border: adImg
                      ? '1px solid var(--Purple, #733ee4)'
                      : '1px dashed var(--Purple, #733ee4)',
                  }"
                  class="card-file-ui ma-1"
                  @click="fileInput.click()"
                >
                  <div
                    style="
                      height: inherit;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 0.7rem;
                      justify-content: center;
                    "
                  >
                    <img
                      v-if="adImg"
                      width="142"
                      height="142"
                      :src="
                        adImg.includes('http')
                          ? adImg
                          : `https://techify-001-site1.htempurl.com${adImg}`
                      "
                    />
                    <SvgIcon icon="upload" v-else />
                    <p
                      class="card-file-text text-decoration-underline cursor-pointer"
                    >
                      {{ adImg ? 'Change Image' : 'Upload Image' }}
                    </p>
                    <div class="text-center">
                      <p class="card-file-subtitle my-1">
                        Max image 5MB jpg, png, jpeg
                      </p>
                      <p class="card-file-subtitle">Dimension X*X (Square)</p>
                    </div>
                  </div>
                </VCard>
              </VCard>
            </VCard>
          </VCol>
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCol
              cols="12"
              style="border-radius: 12px; background: var(--White, #fff)"
              class="pa-8"
              v-else
            >
              <VCard flat>
                <h3 class="card-title mb-8">AD to</h3>
                <div
                  style="
                    height: fit-content;
                    padding: 0px 12px;
                    border-radius: 6px;
                    background: rgba(115, 62, 228, 0.05);
                  "
                >
                  <v-radio-group
                    v-model="newAd.Target"
                    inline
                    hide-details
                    @input="setGovernorates"
                  >
                    <v-radio
                      label="All users"
                      value="All"
                      color="primary"
                      class="me-5"
                    />
                    <v-radio
                      label="Governorate"
                      value="Governorates"
                      color="primary"
                    />
                  </v-radio-group>
                </div>

                <VCol
                  cols="12"
                  class="pa-0"
                  v-if="newAd.Target === 'Governorates'"
                >
                  <div class="mt-4 mb-2">
                    <v-select
                      label=""
                      density="compact"
                      variant="outlined"
                      bg-color="#faf9fe"
                      placeholder="Choose Governorate"
                      v-model="newAd.GovernorateUuids"
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
                  v-if="newAd.GovernorateUuids.length"
                >
                  <div
                    class="mt-4 mb-2"
                    v-for="(Governorate, i) in newAd.GovernorateUuids"
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
          </VCol>
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCol
              cols="12"
              style="border-radius: 12px; background: var(--White, #fff)"
              class="pa-8"
              v-else
            >
              <VCard flat>
                <h3 class="card-title mb-8">Status</h3>
                <div
                  style="
                    height: fit-content;
                    padding: 0px 12px;
                    border-radius: 6px;
                    background: rgba(115, 62, 228, 0.05);
                  "
                >
                  <v-radio-group v-model="newAd.Status" inline hide-details>
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
        </VCol>
        <VCol class="d-flex justify-end mt-6" v-if="!isPageLoading">
          <div>
            <v-spacer />
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
              @click="addAd"
            >
              <v-icon v-if="!isEditing" size="20"> mdi-plus </v-icon>
              <p>{{ isEditing ? 'Save Changes' : 'Add AD' }}</p>
            </v-btn>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<script setup lang="ts">
import type { Ad } from './type';
import { getCtegories } from '@/apis/categories';
import { getGovernorates } from '@/apis/governorates';
import { getBrands } from '@/apis/_brands';
import { getProducts } from '@/apis/products';
// import { getCtegories } from '@/apis/subCategories';
import {
  getFormData,
  sendFormData,
  updateFormData,
} from '@/composables/products/SendFormRequest';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useBuildQueryString } from '@/composables/UseBuildQueryString';

const { buildQueryString } = useBuildQueryString();
const Governorates = ref([]);

let newAd: any = reactive({
  Place: '',
  Status: '',
  Target: '',
  Navigation: 'Category',
  StartDate: '',
  EndDate: '',
  CategoryUuid: '',
  SubCategoryUuid: '',
  BrandUuid: '',
  ProductUuids: '', // CustomProductsUuid
  GovernorateUuids: [],
}) as unknown as Ad;

const allCategories: any = ref([]);
const allBrands: any = ref([]);
const allProducts: any = ref([]);
const allSubCategories: any = ref([]);

const rules = {
  Place: { required },
  Target: { required },
  Status: { required },
  StartDate: { required },
};

const v$ = useVuelidate(rules, newAd);

let notification = ref({
  text: 'Ad has been Added Successfully',
  color: '#27ae60',
});
let fileInput: any = ref('');
let adImg = ref('');
let adImgBase64: any = ref('');
let isPageLoading = ref(false);
let showToast = ref(false);
let isAddingBtnLoading = ref(false);

const clear = () => {
  v$.value.$reset();

  for (const [key, value] of Object.entries(newAd)) {
    newAd[key] = value;
  }
};

const getAllCategories = async () => {
  if (allCategories.value.length) {
    return;
  }
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
  }
};

const getAllBrands = async () => {
  if (allBrands.value.length) {
    return;
  }
  try {
    const params = buildQueryString({
      rowCount: 100,
      pageNo: 1,
    });
    const {
      data: { data },
    } = await getBrands(params);
    allBrands.value = data.result;
  } catch (error) {
    console.log(error);
  }
};

// const getAllSubCategories = async () => {
//   try {
//     const params = buildQueryString({
//       rowCount: 100,
//       pageNo: 1,
//     });
//     const {
//       data: { data },
//     } = await getProducts(params);
//     allSubCategories.value = data.result;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getAllProducts = async () => {
  if (allProducts.value.length) {
    return;
  }
  try {
    const params = buildQueryString({
      rowCount: 100,
      pageNo: 1,
    });
    const {
      data: { data },
    } = await getProducts(params);
    allProducts.value = data.result;
  } catch (error) {
    console.log(error);
  }
};

// onMounted(async () => {
//   isPageLoading.value = true;
//   try {
//     await setCategoryData(
//       newAd,
//       tagsToAdd,
//       subCategoriesToAdd,
//       adImg,
//       description_En,
//       description_Ar
//     );
//   } catch (error) {
//   } finally {
//     isPageLoading.value = false;
//   }
// });

const router = useRouter();
const isEditing = ref(false);
const addAd = async (): Promise<void> => {
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
    ...(newAd.Place.length && {
      Place: newAd.Place,
    }),
    ...(newAd.Status.length && {
      Status: newAd.Status,
    }),
    ...(newAd.Target.length && {
      Target: newAd.Target,
    }),
    ...(newAd.Navigation.length && {
      Navigation: newAd.Navigation,
    }),
    ...(newAd.StartDate.length && {
      StartDate: newAd.StartDate,
    }),
    ...(newAd.EndDate.length && {
      EndDate: newAd.EndDate,
    }),
    ...(newAd.CategoryUuid.length && {
      CategoryUuid: newAd.CategoryUuid,
    }),
    ...(newAd.SubCategoryUuid.length && {
      SubCategoryUuid: newAd.SubCategoryUuid,
    }),
    ...(newAd.BrandUuid.length && {
      BrandUuid: newAd.BrandUuid,
    }),
    ...(newAd.CustomProductsUuid.length && {
      ProductUuids: newAd.CustomProductsUuid,
    }),
    ...(newAd.GovernorateUuids.length && {
      GovernorateUuids: newAd.GovernorateUuids,
    }),
    imageFile: adImgBase64.value,
  };
  delete form.uuid;
  try {
    isEditing.value
      ? await updateFormData('ads', form, newAd.uuid)
      : await sendFormData('ads', form);
    notification.value.text = isEditing.value
      ? 'Ad Updated Successfully'
      : 'Ad Added Successfully';
    notification.value.color = '#27ae60';
    showToast.value = true;
    isAddingBtnLoading.value = true;
    setTimeout(() => {
      router.push({ name: 'promotion-ads' });
    }, 1000);
  } catch (error) {
    console.log(error);
    isAddingBtnLoading.value = false;
    notification.value.text = 'Somethin went wrong';
    notification.value.color = '#EB5757';
    showToast.value = true;
  } finally {
    isAddingBtnLoading.value = false;
  }
};

const handleFileChange = async (event: any) => {
  const file = event.target.files[0];
  const newImgSrcs = (window.URL ? URL : webkitURL).createObjectURL(file);
  adImg.value = newImgSrcs;
  adImgBase64.value = file;
};

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
const setNavigationItems = () => {
  switch (newAd.Navigation) {
    case 'Category':
      return getAllCategories();
    // case 'SubCategory':
    //   return getAllSubCategories();
    case 'CustomProducts':
      return getAllProducts();
    case 'Brand':
      return getAllBrands();
    default:
      return;
  }
};

const removeGovernorate = (uuid: any) => {
  console.log('🚀 ~ removeGovernorate ~ uuid:', uuid);
  newAd.GovernorateUuids = newAd.GovernorateUuids.filter(
    (item: any) => item.uuid !== uuid
  );
};

const getNavigationItems = computed((key: any) => {
  switch (newAd.Navigation) {
    case 'Category':
      return allCategories.value ?? [];
    case 'SubCategory':
      return allSubCategories.value ?? [];
    case 'CustomProducts':
      return allProducts.value ?? [];
    case 'Brand':
      return allBrands.value ?? [];
    default:
      return [];
  }
});

onMounted(() => {
  getAllCategories();
});
</script>

<style scoped>
.card {
  border-radius: 12px;
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
  font-weight: 700;
  line-height: 150%;
}
.number-products {
  color: #733ee4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
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

.arabic-editor .ql-editor {
  text-align: right;
}
.ql-toolbar.ql-snow {
  border: none;
  position: absolute;
  left: 0.8rem;
  bottom: 0.6rem;
  width: 100%;
  z-index: 3;
}

.arabic-editor-container .ql-toolbar.ql-snow {
  right: 1rem;
  bottom: 0.6rem;
  width: 100%;
  z-index: 3;
}
.ql-container.ql-snow {
  color: #7066a2;
}

.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  display: none;
}
</style>
