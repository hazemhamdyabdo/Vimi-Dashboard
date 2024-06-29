<script setup lang="ts">
import type { Product } from "./type";
import { getCtegories } from "@/apis/categories";
import { getBrands } from "@/apis/_brands";
import { productType } from "@/enums";
import {
  getFormData,
  sendFormData,
} from "@/composables/products/SendFormRequest";
import {
  useEditProductData,
  isPageLoading,
} from "@/composables/products/UseEditProductData";

import { useProductQuantity } from "@/composables/products/UseProductQuantity";
import { useProductDiscount } from "@/composables/products/UseProductDiscount";
import { useEditor } from "@/composables/products/UseEditor";
import { useBuildQueryString } from "@/composables/UseBuildQueryString";

const newProduct = ref({
  discounts: {},
}) as unknown as Product;

const showToast = ref(false);
const allCategories: any = ref([]);
const imgSrcs = ref([]);
const selectedFiles = ref([]);
const allBrands: any = ref([]);
const newTag = ref("");
const tagsToAdd = ref([]);
const imgsToSend = ref([]);

const { addQuantity, reduceQuantity, selectedAction } =
  useProductQuantity(newProduct);
const { isEditing, oldQuantity, setProductData } = useEditProductData();
const {
  dateFrom,
  dateTo,
  isThereSelectedDates,
  deleteDiscount,
  setDiscount,
  isScheduledOpen,
} = useProductDiscount(newProduct);
const {
  generalInfo,
  generalInfo_Ar,
  suggestedUse,
  suggestedUse_Ar,
  setEditorValue,
} = useEditor(newProduct);
const { buildQueryString } = useBuildQueryString();
const subCategories: any = computed(() => {
  return allCategories.value.filter(
    (category: { uuid: string }) =>
      // @ts-ignore
      category.uuid === newProduct.value.categoryUuid
  )?.[0]?.subCategories;
});

const handleFileChange = async (event: any) => {
  const files = event.target.files;
  const test = event.target.files[0];
  const newFiles = Array.from(files);
  selectedFiles.value.push(...newFiles);
  const newImgSrcs = newFiles.map((file: any) =>
    (window.URL ? URL : webkitURL).createObjectURL(file)
  );
  imgSrcs.value.push(...newImgSrcs);
  imgsToSend.value.push(test);
};

const addTags = (nwTag: any) => {
  // @ts-ignore
  tagsToAdd.value.push(nwTag);
  newTag.value = "";
};

const removeTag = (nwTag: any) => {
  tagsToAdd.value = tagsToAdd.value.filter((tag: any) => tag !== nwTag);
};

const getAdditionalData = async () => {
  try {
    const params = buildQueryString({
      rowCount: 100,
      pageNo: 1,
    });
    const {
      data: { data },
    } = await getCtegories(params);
    allCategories.value = data.result;
    const {
      data: { data: brands },
    } = await getBrands(params);
    allBrands.value = brands.result;
  } catch (error) {
    console.log(error);
  }
};

const uploadProduct = async (): Promise<void> => {
  setEditorValue();
  const form = getFormData({
    ...newProduct.value,
    tags: tagsToAdd.value,
  });
  if (
    newProduct.value?.discount?.DateFrom &&
    newProduct.value?.discount?.DateTo
  ) {
    Object.keys(newProduct.value.discounts).forEach((key) => {
      if (key === "dateFrom" || key === "dateTo") {
        // ! this send to [BE] like that discountsDateFrom
        form.append(`discounts[0].${key}`, newProduct.value.discounts[key]);
      }
    });
  }

  imgsToSend.value.forEach((tag: any) => {
    form.append("imageFiles", tag);
  });

  isPageLoading.value = true;
  try {
    sendFormData("products", form);
    showToast.value = true;
  } catch (error) {
    console.log(error);
  } finally {
    isPageLoading.value = false;
  }
};

onMounted(async () => {
  isPageLoading.value = true;
  await getAdditionalData();
  await setProductData(
    newProduct,
    tagsToAdd,
    imgSrcs,
    suggestedUse,
    suggestedUse_Ar,
    generalInfo,
    generalInfo_Ar
  );
});
</script>
<template>
  <section class="px-6">
    <BaseNotifications :notification="showToast" />
    <VContainer>
      <VRow>
        <VCol cols="12">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard v-else class="card card-products" style="margin-bottom: 1rem">
            <h3 class="card-title">Add Products</h3>
            <VCard class="card-file" style="display: flex; gap: 1rem">
              <VFileInput
                label=""
                class="card-file-input"
                prepend-icon="mdi-upload-multiple"
                multiple
                @change="handleFileChange"
                accept="image/png, image/jpeg, image/jpg"
              ></VFileInput>
              <VCard class="card-file-ui">
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
                  <p class="card-file-text underline">Upload Image</p>
                </div>
              </VCard>

              <VCard
                class="card-file-image"
                v-for="(src, index) in imgSrcs"
                :key="index"
                :style="`margin-left: ${index === 0 ? '8rem' : '0'}; margin-top: 1rem`"
              >
                <img
                  :src="
                    isEditing
                      ? `https://techify-001-site1.htempurl.com${src}`
                      : src
                  "
                  alt="Selected Image"
                  style="max-width: 100px; height: inherit"
                />
                <VBtn
                  style="
                    background: transparent;
                    box-shadow: none;
                    position: absolute;
                    top: -7px;
                    right: -15px;
                  "
                  @click="imgSrcs.splice(index, 1)"
                >
                  <SvgIcon icon="close-circle" />
                </VBtn>
              </VCard>
            </VCard>
          </VCard>
        </VCol>
        <VCol cols="12">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VRow v-show="!isPageLoading">
            <VCol cols="6">
              <VCard class="card card-info">
                <h3 class="card-title mb-4">Main information</h3>
                <VRow disable-gutters style="gap: 1rem">
                  <VCol cols="12">
                    <h4 class="card-info-title">Product Name</h4>
                    <VTextField
                      label=""
                      density="compact"
                      placeholder="Enter product name"
                      variant="outlined"
                      v-model="newProduct.displayName_En"
                      class="card-info-input"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol cols="12">
                    <h4 class="card-info-title">Short description</h4>
                    <VTextField
                      label=""
                      density="compact"
                      v-model="newProduct.description_En"
                      placeholder="Enter short description"
                      variant="outlined"
                      class="card-info-input"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol cols="12" style="position: relative">
                    <h4 class="card-info-title">General info</h4>
                    <Editor
                      theme="snow"
                      toolbar="essentials"
                      ref="generalInfo"
                      placeholder="Write info"
                      style="
                        border: 1px solid #e8e7ef;
                        border-radius: 8px;
                        background: #faf9fe;
                        height: 150px;
                        margin-bottom: 0rem;
                      "
                    />
                  </VCol>
                  <VCol cols="12" style="position: relative">
                    <h4 class="card-info-title">Suggested use</h4>
                    <Editor
                      theme="snow"
                      toolbar="essentials"
                      ref="suggestedUse"
                      placeholder="Write suggested use"
                      style="
                        border: 1px solid #e8e7ef;
                        border-radius: 8px;
                        background: #faf9fe;
                        height: 150px;
                      "
                    />
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
            <VCol cols="6">
              <v-skeleton-loader v-if="isPageLoading" type="card" />
              <VCard v-show="!isPageLoading" class="card card-info">
                <h3 class="card-title text-right mb-4">المعلومات الأساسية</h3>
                <VRow disable-gutters style="gap: 1rem; direction: rtl">
                  <VCol cols="12">
                    <h4 class="card-info-title">إسم المنتج</h4>
                    <VTextField
                      label=""
                      density="compact"
                      placeholder="أدخل إسم المنتج"
                      variant="outlined"
                      v-model="newProduct.displayName_Ar"
                      class="card-info-input"
                      dir="rtl"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol cols="12">
                    <h4 class="card-info-title">الوصف القصير</h4>
                    <VTextField
                      label=""
                      density="compact"
                      v-model="newProduct.description_Ar"
                      placeholder="أدخل الإسم القصير للمنتج"
                      variant="outlined"
                      class="card-info-input"
                      dir="rtl"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    style="position: relative"
                    class="arabic-editor-container"
                  >
                    <h4 class="card-info-title">المعلومات العامة</h4>
                    <Editor
                      theme="snow"
                      class="arabic-editor"
                      toolbar="essentials"
                      ref="generalInfo_Ar"
                      placeholder="أدخل المعلومات العامة"
                      style="
                        border: 1px solid #e8e7ef;
                        border-radius: 8px;
                        background: #faf9fe;
                        height: 150px;
                        margin-bottom: 0rem;
                        text-align: right;
                      "
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    style="position: relative"
                    class="arabic-editor-container"
                  >
                    <h4 class="card-info-title">إفتراح الإستخدام</h4>
                    <Editor
                      theme="snow"
                      toolbar="essentials"
                      class="arabic-editor"
                      ref="suggestedUse_Ar"
                      placeholder="أدخل إفتراح الإستخدام"
                      style="
                        border: 1px solid #e8e7ef;
                        border-radius: 8px;
                        background: #faf9fe;
                        height: 150px;
                        text-align: right;
                      "
                    />
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
          </VRow>
        </VCol>
        <VCol cols="8" style="position: relative; z-index: 1">
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-products" style="margin: 1rem 0">
              <h3 class="card-title mb-6">Category</h3>
              <VRow disable-gutters>
                <VCol>
                  <h4 class="card-info-title">Category</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose category"
                    v-model="newProduct.categoryUuid"
                    class="card-info-list"
                    :items="allCategories"
                    item-value="uuid"
                    item-title="displayName_En"
                  ></v-select>
                </VCol>
                <VCol>
                  <h4 class="card-info-title">Sub category</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    v-model="newProduct.subCategoryUuid"
                    placeholder="Choose sub category"
                    class="card-info-list"
                    :items="subCategories"
                    item-value="uuid"
                    item-title="displayName_En"
                  ></v-select>
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <h3 class="card-title">Warehouse</h3>
              <VRow>
                <v-col cols="6">
                  <h4 class="card-info-title">SKU</h4>
                  <VTextField
                    label=""
                    placeholder="Enter SKU"
                    density="compact"
                    v-model="newProduct.sku"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  />
                </v-col>
                <v-col cols="6">
                  <h4 class="card-info-title">Stock Quantity</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter quantity"
                    variant="outlined"
                    type="number"
                    :disabled="isEditing"
                    v-model="newProduct.stockQuantity"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  />
                </v-col>
                <VCol
                  v-if="isEditing && selectedAction === ''"
                  cols="12"
                  style="
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <div style="display: flex; align-items: center; gap: 1rem">
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                      "
                      @click="selectedAction = 'add'"
                    >
                      <SvgIcon icon="add" />
                      <span style="color: #733ee4" class="pa-2">
                        Add quantity
                      </span>
                    </div>
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                      "
                      @click="selectedAction = 'reduce'"
                    >
                      <SvgIcon icon="minus" />
                      <span style="color: #733ee4" class="pa-2">
                        Reduce quantity
                      </span>
                    </div>
                  </div>
                  <div
                    style="cursor: pointer"
                    @click="newProduct.stockQuantity = oldQuantity"
                    v-if="oldQuantity !== newProduct.stockQuantity"
                  >
                    <SvgIcon icon="undo" />
                    <span style="color: #eb5757" class="px-2">Revert</span>
                  </div>
                </VCol>
                <VCol cols="12" v-if="isEditing">
                  <ControlQuantity
                    v-if="selectedAction == 'add'"
                    :icon="'plus'"
                    :actionText="'Add'"
                    @confirm="addQuantity"
                    @cancel="selectedAction = ''"
                  />

                  <ControlQuantity
                    v-if="selectedAction == 'reduce'"
                    :icon="'minus'"
                    :actionText="'Reduce'"
                    @confirm="reduceQuantity"
                    @cancel="selectedAction = ''"
                  />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-tags" style="margin-bottom: 2rem">
              <h3 class="card-title">Style</h3>
              <VRow disable-gutters>
                <VCol cols="6" style="">
                  <h4 class="card-info-title">Weight</h4>
                  <VRow>
                    <VCol>
                      <VTextField
                        label=""
                        suffix="gm"
                        type="number"
                        density="compact"
                        placeholder="Enter weight"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.weight"
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

                <VCol cols="6">
                  <h4 class="card-info-title">Dimensions</h4>
                  <VRow>
                    <v-col>
                      <VTextField
                        label=""
                        suffix="W"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.width"
                      />
                    </v-col>

                    <v-col>
                      <VTextField
                        label=""
                        suffix="H"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.height"
                      />
                    </v-col>

                    <v-col>
                      <VTextField
                        label=""
                        suffix="D"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.depth"
                      />
                    </v-col>
                  </VRow>
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <h3 class="card-title">Pricing</h3>
              <VRow>
                <v-col cols="6">
                  <h4 class="card-info-title">Price</h4>
                  <VTextField
                    label=""
                    placeholder="Enter price"
                    density="compact"
                    variant="outlined"
                    v-model="newProduct.price"
                    type="number"
                    suffix="KD"
                    bg-color="#faf9fe"
                    style="color: #afaacb; font-size: 14px; font-weight: 400"
                  />
                </v-col>
                <v-col cols="6">
                  <h4 class="card-info-title">Sale price</h4>
                  <VTextField
                    label=""
                    suffix="KD"
                    type="number"
                    v-model="newProduct.salePrice"
                    density="compact"
                    placeholder="Enter price"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="color: #afaacb; font-size: 14px; font-weight: 400"
                  />
                </v-col>
              </VRow>
              <span
                style="color: #733ee4; cursor: pointer"
                class="pa-4"
                v-if="!isScheduledOpen"
                @click="isScheduledOpen = !isScheduledOpen"
              >
                Schedule discount
              </span>

              <VCard
                flat
                class="d-flex products-card px-4 py-4 flex-wrap"
                style="background: #faf9fe"
                v-if="isScheduledOpen"
              >
                <VRow v-if="!isThereSelectedDates">
                  <VCol>
                    <h4 class="card-info-title">From</h4>
                    <GDatePicker
                      label="Enter start date"
                      bg-color="white"
                      v-model="dateFrom"
                    />
                  </VCol>
                  <VCol>
                    <h4 class="card-info-title">To</h4>
                    <GDatePicker
                      label="Enter end date"
                      bg-color="white"
                      v-model="dateTo"
                    />
                  </VCol>
                  <VCol
                    style="
                      display: flex;
                      align-items: center;
                      padding: 1rem 0 0;
                    "
                  >
                    <VBtn variant="text" @click="isScheduledOpen = false">
                      Cancel
                    </VBtn>
                    <VBtn
                      style="
                        box-shadow: none;
                        border: 1px solid #733ee4;
                        border-radius: 8px;
                        color: #733ee4;
                      "
                      variant="elevated"
                      @click="setDiscount(dateFrom, dateTo)"
                    >
                      <VIcon
                        icon="mdi-plus"
                        color="#733ee4"
                        class="card-info-btn-icon"
                      />
                      Add
                    </VBtn>
                  </VCol>
                </VRow>
                <PriceDiscount
                  v-if="isThereSelectedDates"
                  :dateFrom="dateFrom"
                  :dateTo="dateTo"
                  @edit="isThereSelectedDates = false"
                  @delete="deleteDiscount"
                />
              </VCard>
            </VCard>
          </VCol>
          <!-- in case edit show -->
          <VCol v-if="$route.meta.title !== 'Add Product'">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <ReviewRating
                title="Reviews"
                deleteIcon
                name="John Doe"
                date="25 oct 2022"
                description="hi i am description here"
                :numberOfRecords="3"
              />
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="4" class="pt-10">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard v-else class="card card-type" style="margin-bottom: 2rem">
            <h3 class="card-title">Type</h3>
            <v-col cols="12" class="px-2 pr-6">
              <v-select
                label=""
                density="compact"
                variant="outlined"
                v-model="newProduct.type"
                bg-color="#faf9fe"
                placeholder="Choose type"
                style="margin-left: -0.5rem; width: 106%"
                :items="productType"
              ></v-select>
            </v-col>
          </VCard>
          <VCard
            v-if="!isPageLoading"
            class="card card-tags"
            style="margin-bottom: 2rem"
          >
            <h3 class="card-title mb-6">Tags</h3>
            <VRow>
              <VCol class="d-flex">
                <VTextField
                  label=""
                  density="compact"
                  placeholder="Write tag"
                  variant="outlined"
                  v-model="newTag"
                  bg-color="#faf9fe"
                  style="color: #afaacb; font-size: 14px"
                  class="pr-2"
                  hide-details
                />
                <VBtn
                  class="card-info-btn"
                  color="#21094a"
                  variant="outlined"
                  @click="addTags(newTag)"
                >
                  <VIcon icon="mdi-plus" color="#21094a"></VIcon>
                </VBtn>
              </VCol>
              <VCol cols="12">
                <VCard flat class="d-flex products-card px-4 py-4 flex-wrap">
                  <div
                    v-for="i in tagsToAdd"
                    :key="i"
                    class="tag d-flex justify-space-between me-2 mt-1"
                    @click="removeTag(i)"
                  >
                    <VIcon
                      class="my-auto me-1 cursor-pointer"
                      icon="mdi-close"
                      color="#fff"
                      size="15"
                    ></VIcon>
                    <p>{{ i }}</p>
                  </div>
                </VCard>
              </VCol>
            </VRow>
          </VCard>
          <VCard
            v-if="!isPageLoading"
            class="card card-tags"
            style="margin-bottom: 2rem"
          >
            <h3 class="card-title mb-8">Visibility</h3>
            <div
              style="
                height: fit-content;
                padding: 0px 12px;
                border-radius: 6px;
                background: rgba(115, 62, 228, 0.05);
              "
            >
              <v-radio-group
                v-model="newProduct.visibility"
                inline
                hide-details
              >
                <v-radio
                  label="Published"
                  value="Published"
                  color="primary"
                  style="margin-right: 10rem"
                ></v-radio>
                <v-radio
                  label="Hidden"
                  value="Hidden"
                  color="primary"
                ></v-radio>
              </v-radio-group>
            </div>
          </VCard>
          <VCard
            v-if="!isPageLoading"
            class="card card-tags"
            style="margin-bottom: 2rem"
          >
            <h3 class="card-title mb-8">Expiry date</h3>
            <GDatePicker
              label="Expiry date"
              bg-color="#faf9fe"
              v-model="newProduct.expireDate"
            />
          </VCard>
          <VCard
            v-if="!isPageLoading"
            class="card card-tags"
            style="margin-bottom: 2rem"
          >
            <h3 class="card-title">Brand</h3>
            <v-col cols="12">
              <v-select
                label=""
                density="compact"
                variant="outlined"
                bg-color="#faf9fe"
                placeholder="Choose brand"
                style="margin-left: -0.5rem"
                :items="allBrands"
                v-model="newProduct.brandUuid"
                item-value="uuid"
                item-title="displayName_En"
              ></v-select>
            </v-col>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div
    v-if="!isPageLoading"
    class="add-products-actions"
    style="display: flex; justify-content: end"
  >
    <VBtn
      class=""
      style="margin-right: 1rem"
      variant="text"
      @click="$router.go(-1)"
      >Cancel</VBtn
    >
    <VBtn
      class=""
      style="margin-right: 1rem"
      variant="elevated"
      color="#733ee4"
      @click="uploadProduct"
    >
      <VIcon class="card-info-btn-icon" icon="mdi-plus" />
      Add Product
    </VBtn>
  </div>
</template>

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
.tag {
  border-radius: 4px;
  background: #7066a2;
  padding: 3px 8px;
  color: #fff;
}
.card-file {
  height: 128px;
  border-radius: 8px;
  border: 1px transparent #e8e7ef;
  background: #faf9fe;
  position: relative;
  box-shadow: none;
}
.card-file-input {
  width: 96px;
  opacity: 0;
  height: 96px;
  position: absolute;
  top: 4rem;
  left: 4rem;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
.card-file-ui {
  border-radius: 6px;
  height: 96px;
  width: 96px;
  border: 1px dashed var(--Purple, #733ee4);
  background: rgba(115, 62, 228, 0.05);
  position: absolute;
  top: 4rem;
  left: 4rem;
  transform: translate(-50%, -50%);
  box-shadow: none;
}
.card-file-image {
  height: 96px;
  width: 96px;
  /* position: absolute; */
  /* top: 4rem;
  left: 4rem; */
  border: 1px dashed var(--Purple, #733ee4);
  border-radius: 6px;
  box-shadow: none;
}
.card-file-text {
  color: #733ee4;
  font-family: Roboto;
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
