<script setup lang="ts">
import type { Product } from "./type";
import { getCategories } from "@/apis/_categories";
import { getBrands } from "@/apis/_brands";
import { addProduct } from "@/apis/products";
import { productType } from "@/enums";
import axios from "axios";

const newProduct: Product = ref({
  Discounts: {},
});
const allCategories: any = ref([]);
const imgSrcs = ref([]);
const selectedFiles = ref([]);
const allBrands: any = ref([]);
const newTag = ref("");
const tagsToAdd = ref([]);
const suggestedUse = ref(null);
const suggestedUse_Ar = ref(null);
const generalInfo = ref(null);
const generalInfo_Ar = ref(null);
const isScheduledOpen = ref(false);
const dateFrom = ref("");
const dateTo = ref();

const handleFileChange = async (event: any) => {
  const files = event.target.files;
  const newFiles = Array.from(files);
  selectedFiles.value.push(...newFiles);
  const newImgSrcs = newFiles.map((file) =>
    (window.URL ? URL : webkitURL).createObjectURL(file)
  );
  imgSrcs.value.push(...newImgSrcs);
};

const addTags = (nwTag: any) => {
  // @ts-ignore
  tagsToAdd.value.push(nwTag);
  newTag.value = "";
};

const removeTag = (nwTag: any) => {
  tagsToAdd.value = tagsToAdd.value.filter((tag: any) => tag !== nwTag);
};

const subCategories: any = computed(() => {
  return allCategories.value.filter(
    (category: { uuid: string }) =>
      // @ts-ignore
      category.uuid === newProduct.value.categoryUuid
  )?.[0]?.subCategories;
});
const getAdditionalData = async () => {
  try {
    const {
      data: { data },
    } = await getCategories();
    allCategories.value = data.result;
    const {
      data: { data: brands },
    } = await getBrands();
    allBrands.value = brands.result;
  } catch (error) {
    console.log(error);
  }
};

const isObject = (value: object) => value?.constructor === Object;

const getFormData = (_data: object): FormData => {
  const data = new FormData();

  const append = (value: any, key = "", initial = true) => {
    if (isObject(value) || Array.isArray(value)) {
      Object.entries(value as object).forEach(([_key, _value]) => {
        const __key = initial
          ? _key
          : key +
            (isObject(value)
              ? [`${_key}`]
              : Array.isArray(value)
                ? "[]"
                : _key);

        append(_value, __key, false);
      });
    } else {
      data.append(key, [undefined, null].includes(value) ? "" : value);
    }
  };

  append(_data);

  return data;
};

const setDiscouount = (dateFrom: string, dateTo: string) => {
  newProduct.value.discounts.DateFrom = dateFrom;
  newProduct.value.discounts.DateTo = dateTo;
};

const uploadProduct = async () => {
  // @ts-ignore
  newProduct.value.SuggestedUse_En = suggestedUse?.value
    .getText()
    .replace(/\n/g, " ");
  // @ts-ignore
  newProduct.value.GeneralInfo_Ar = generalInfo_Ar?.value
    .getText()
    .replace(/\n/g, " ");

  // @ts-ignore
  newProduct.value.SuggestedUse_Ar = suggestedUse_Ar?.value
    .getText()
    .replace(/\n/g, " ");

  // @ts-ignore
  newProduct.value.GeneralInfo_En = generalInfo?.value
    .getText()
    .replace(/\n/g, " ");

  const form = getFormData({
    ...newProduct.value,
    Tags: tagsToAdd.value,
    ImageFiles: selectedFiles.value,
  });

  try {
    const test = axios.post(
      "https://techify-001-site1.htempurl.com/api/v1/products",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
          "x-api-key": "x5b9j8p2qRz3vdK1st7yf4ul6wa0ezcv",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  await getAdditionalData();
});
</script>
<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow>
        <VCol cols="12">
          <VCard class="card card-products" style="margin-bottom: 1rem">
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
                  :src="src"
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
          <VRow>
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
                      v-model="newProduct.DisplayName_En"
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
                      v-model="newProduct.Description_En"
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
                    ></VTextField>
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
              <VCard class="card card-info">
                <h3 class="card-title text-right mb-4">المعلومات الأساسية</h3>
                <VRow disable-gutters style="gap: 1rem; direction: rtl">
                  <VCol cols="12">
                    <h4 class="card-info-title">إسم المنتج</h4>
                    <VTextField
                      label=""
                      density="compact"
                      placeholder="أدخل إسم المنتج"
                      variant="outlined"
                      v-model="newProduct.DisplayName_Ar"
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
                      v-model="newProduct.Description_Ar"
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
                    ></VTextField>
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
            <VCard class="card card-products" style="margin: 1rem 0">
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
                    v-model="newProduct.SubCategoryUuid"
                    placeholder="Choose sub category"
                    class="card-info-list"
                    :items="subCategories"
                    item-value="uuid"
                    item-title="displayName"
                  ></v-select>
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <VCard
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
                    v-model="newProduct.Sku"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  ></VTextField>
                </v-col>
                <v-col cols="6">
                  <h4 class="card-info-title">Stock Quantity</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter quantity"
                    variant="outlined"
                    type="number"
                    v-model="newProduct.StockQuantity"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  ></VTextField>
                </v-col>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <VCard class="card card-tags" style="margin-bottom: 2rem">
              <h3 class="card-title">Style</h3>
              <VRow disable-gutters>
                <VCol cols="6" class="px-0 pl-2" style="">
                  <h4 class="card-info-title">Weight</h4>
                  <VTextField
                    label=""
                    suffix="gm"
                    type="number"
                    density="compact"
                    placeholder="Enter weight"
                    variant="outlined"
                    bg-color="#faf9fe"
                    v-model="newProduct.Weight"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  />
                </VCol>

                <VCol cols="6">
                  <h4 class="card-info-title">Dimensions</h4>
                  <VRow>
                    <v-col cols="4">
                      <VTextField
                        label=""
                        suffix="W"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.Width"
                      />
                    </v-col>

                    <v-col cols="4">
                      <VTextField
                        label=""
                        suffix="H"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.Height"
                      />
                    </v-col>

                    <v-col cols="4">
                      <VTextField
                        label=""
                        suffix="D"
                        type="number"
                        density="compact"
                        variant="outlined"
                        bg-color="#faf9fe"
                        v-model="newProduct.Depth"
                      />
                    </v-col>
                  </VRow>
                </VCol>
              </VRow>
              <!-- </v-row> -->
            </VCard>
          </VCol>
          <VCol>
            <VCard
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
                    v-model="newProduct.Price"
                    type="number"
                    suffix="KD"
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
                  <h4 class="card-info-title">Sale price</h4>
                  <VTextField
                    label=""
                    suffix="KD"
                    type="number"
                    v-model="newProduct.SalePrice"
                    density="compact"
                    placeholder="Enter price"
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

                <!-- <VMenu v-model="isMenuOpen" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <span
                      style="color: #733ee4; cursor: pointer"
                      class="pa-4"
                      v-bind="props"
                    >
                      Schedule discount
                    </span>
                  </template>
                  <VDatePicker
                    @input="isMenuOpen = false"
                    label=""
                    density="compact"
                  />
                </VMenu> -->
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
                v-if="isScheduledOpen"
                flat
                class="d-flex products-card px-4 py-4 flex-wrap"
                style="background: #faf9fe"
              >
                <VRow>
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
                    <VBtn variant="text"> Cancel </VBtn>
                    <VBtn
                      style="
                        box-shadow: none;
                        border: 1px solid #733ee4;
                        border-radius: 8px;
                        color: #733ee4;
                      "
                      variant="elevated"
                      @click="setDiscouount(dateFrom, dateTo)"
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
              </VCard>
            </VCard>
          </VCol>
          <!-- in case edit show -->
          <VCol v-if="!$route.meta.title === 'Add Product'">
            <VCard
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
          <VCard class="card card-type" style="margin-bottom: 2rem">
            <h3 class="card-title">Type</h3>
            <v-col cols="12" class="px-2 pr-6">
              <v-select
                label=""
                density="compact"
                variant="outlined"
                v-model="newProduct.Type"
                bg-color="#faf9fe"
                placeholder="Choose type"
                style="margin-left: -0.5rem; width: 106%"
                :items="productType"
              ></v-select>
            </v-col>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
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
          <VCard class="card card-tags" style="margin-bottom: 2rem">
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
                v-model="newProduct.Visibility"
                inline
                hide-details
              >
                <v-radio
                  label="Published"
                  value="Published"
                  color="primary"
                  style="margin-right: 6rem"
                ></v-radio>
                <v-radio
                  label="Hidden"
                  value="Hidden"
                  color="primary"
                ></v-radio>
              </v-radio-group>
            </div>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title mb-8">Expiry date</h3>
            <GDatePicker
              label="Expiry date"
              bg-color="#faf9fe"
              v-model="newProduct.ExpireDate"
            />
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
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
                v-model="newProduct.BrandUuid"
                item-value="uuid"
                item-title="displayName_En"
              ></v-select>
            </v-col>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div class="add-products-actions" style="display: flex; justify-content: end">
    <VBtn class="" style="margin-right: 1rem" variant="text">Cancel</VBtn>
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
