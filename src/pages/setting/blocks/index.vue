<script setup lang="ts">
import { deleteBrand, updateBrand, getBrands } from "@/apis/_brands";
import {
  sendFormData,
  getFormData,
} from "@/composables/products/SendFormRequest";
import { useBuildQueryString } from "@/composables/UseBuildQueryString";
const { buildQueryString } = useBuildQueryString();

const imgSrcs: Ref<any> = ref("");
const allBrands: any = ref([]);
const fileInput: any = ref("");
const imgToSend: Ref<any> = ref("");
const isPageLoading = ref(false);
const editedImag = ref("");

const productsTypes: Ref<any> = ref({
  displayName_En: "",
  displayName_Ar: "",
  photoFile: "",
});
const productsBrands: Ref<any> = ref({
  displayName_En: "",
  displayName_Ar: "",
});
const types = ref([
  {
    id: 0,
    displayName_En: "Variable",
    displayName_Ar: "متغير",
  },
  {
    id: 1,
    displayName_En: "Simple",
    displayName_Ar: "بسيط",
  },
  {
    id: 2,
    displayName_En: "Bundle",
    displayName_Ar: "بندل",
  },
]);
const brands = ref([]);

const addProductType = () => {
  if (productsTypes.value.displayName_En?.trim().length === 0) return;
  types.value.push({ id: types.value.length, ...productsTypes.value });
  productsTypes.value = {};
};

const removeProductType = (deletedProductType: any) => {
  types.value = types.value.filter(
    (productType: any) => productType !== deletedProductType
  );
};
const removeBrand = (deletedBrand: any) => {
  brands.value = brands.value.filter((brand: any) => brand !== deletedBrand);
};

const editProductType = (editedProductType: any) => {
  productsTypes.value.displayName_En = editedProductType.displayName_En;
  productsTypes.value.displayName_Ar = editedProductType.displayName_Ar;

  removeProductType(editedProductType);
};

const handleFileChange = async (event: any) => {
  const file = event.target.files[0];
  const newImgSrcs = (window.URL ? URL : webkitURL).createObjectURL(file);
  imgSrcs.value = newImgSrcs;
  imgToSend.value = file;
};

const addNewBrand = async () => {
  isPageLoading.value = true;
  try {
    const form = getFormData({
      photoFile: imgToSend.value,
      ...productsBrands.value,
    });
    await sendFormData("brands", form);
    productsBrands.value = {};
  } catch (error) {
  } finally {
    isPageLoading.value = false;
    getAllBrands();
  }
};

const handleUpdateBrand = async () => {
  isPageLoading.value = true;
  try {
    const form = getFormData({
      photoFile: imgToSend.value,
      ...productsBrands.value,
    });
    await sendFormData(`brands/${productsBrands.value.uuid}`, form, "put");
    productsBrands.value = {};
    editedImag.value = "";
    imgSrcs.value = "";
  } catch (error) {
  } finally {
    isPageLoading.value = false;
    getAllBrands();
  }
};
const handleDelBrand = async (brand: any) => {
  isPageLoading.value = true;
  try {
    await deleteBrand(brand.uuid);
  } catch (error) {
  } finally {
    isPageLoading.value = false;
    getAllBrands();
  }
};

const editBrand = (editedBrand: any) => {
  productsBrands.value.displayName_En = editedBrand.displayName_En;
  productsBrands.value.displayName_Ar = editedBrand.displayName_Ar;
  productsBrands.value.uuid = editedBrand.uuid;
  editedImag.value = editedBrand.photoPath;
};
const getAllBrands = async () => {
  const params = buildQueryString({
    rowCount: 50,
  });
  try {
    const {
      data: {
        data: { result },
      },
    } = await getBrands(params);
    allBrands.value = result;
  } catch (error) {}
};

const editOrUpdate = () => {
  if (productsBrands.value.uuid) {
    handleUpdateBrand();
  } else {
    addNewBrand();
  }
};

onMounted(() => {
  getAllBrands();
});
</script>
<template>
  <VContainer>
    <VRow>
      <VCol>
        <VCard class="card px-4">
          <h3 class="card-title">Product Type</h3>
          <VRow>
            <VCol class="d-flex justify-between">
              <VTextField
                label=""
                density="compact"
                placeholder="Enter product type"
                variant="outlined"
                bg-color="#faf9fe"
                style="color: #afaacb; font-size: 14px"
                class="pe-3"
                v-model="productsTypes.displayName_En"
              />
              <VTextField
                label=""
                density="compact"
                placeholder="أدخل نوع المنتج"
                variant="outlined"
                bg-color="#faf9fe"
                dir="rtl"
                style="color: #afaacb; font-size: 14px"
                class="pe-3"
                v-model="productsTypes.displayName_Ar"
              />
              <VBtn
                class="card-info-btn"
                color="#21094a"
                variant="outlined"
                @click="addProductType"
              >
                <VIcon icon="mdi-plus" color="#733EE4"></VIcon>
              </VBtn>
            </VCol>

            <VCol cols="12" v-if="types.length">
              <VCard flat class="products-card px-4 py-4">
                <VCol
                  class="d-flex justify-space-between pa-0 mb-3 pb-3"
                  v-for="type in types"
                  :key="type.id"
                  :style="{
                    borderBottom: '1px solid #E5E5E5',
                  }"
                >
                  <div class="d-flex justify-between">
                    <p class="title-product">
                      {{ type.displayName_En }}
                    </p>
                    <p class="mx-2">|</p>
                    <p class="title-product">
                      {{ type.displayName_Ar }}
                    </p>
                  </div>
                  <div>
                    <VIcon
                      class="me-2"
                      icon="mdi-pencil-outline"
                      color="#AFAACB"
                      @click="editProductType(type)"
                    ></VIcon>
                    <VIcon
                      class="me-2"
                      icon="mdi-trash-can-outline"
                      color="#AFAACB"
                      @click="removeProductType(type)"
                    ></VIcon>
                  </div>
                </VCol>
              </VCard>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="4">
        <VCard class="card px-4">
          <h3 class="card-title">Brands</h3>
          <VCard
            flat
            style="background: #faf9fe; padding: 1rem; border-radius: 12px"
          >
            <section>
              <VFileInput
                label=""
                ref="fileInput"
                class="card-file-input"
                prepend-icon="mdi-upload-multiple"
                @change="handleFileChange"
              />
              <VCard
                :style="{
                  border: '1px dashed var(--Purple, #733ee4)',
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
                    v-if="imgSrcs || editedImag"
                    width="142"
                    height="142"
                    :src="
                      imgSrcs
                        ? imgSrcs
                        : `https://techify-001-site1.htempurl.com${editedImag}`
                    "
                  />
                  <img
                    v-else
                    src="@/icons/upload.svg"
                    style="cursor: pointer"
                  />
                  <p
                    class="card-file-text text-decoration-underline cursor-pointer"
                  >
                    {{ imgSrcs ? "Change Image" : "Upload Image" }}
                  </p>
                  <div class="text-center">
                    <p class="card-file-subtitle my-1">
                      Max image 5MB jpg, png, jpeg
                    </p>
                  </div>
                </div>
              </VCard>
            </section>
            <VTextField
              label=""
              density="compact"
              placeholder="Enter brand name"
              variant="outlined"
              bg-color="#fff"
              style="color: #afaacb; font-size: 14px; margin-top: 1rem"
              class="pe-3"
              v-model="productsBrands.displayName_En"
            />
            <VTextField
              label=""
              density="compact"
              placeholder="أدخل اسم العلامة التجارية"
              variant="outlined"
              bg-color="#fff"
              style="color: #afaacb; font-size: 14px"
              dir="rtl"
              class="pe-3"
              v-model="productsBrands.displayName_Ar"
            />
            <VBtn
              class="add-products-actions rounded-lg w-100"
              color="#733EE4"
              style="background: #733ee4; color: #fff; margin-top: 1rem"
              height="48"
              @click="editOrUpdate"
            >
              <VIcon icon="mdi-plus" color="#fff"></VIcon>
              <span class="card-info-text">Add </span>
            </VBtn>
          </VCard>
        </VCard>
      </VCol>
      <VCol cols="8">
        <VCard class="card px-4" style="height: 100%">
          <h3 class="card-title">Brand List</h3>
          <VCol cols="12" v-if="allBrands.length">
            <VCard flat class="products-card px-4 py-4">
              <VCol
                class="d-flex justify-space-between pa-0 mb-3 pb-3"
                v-for="brand in allBrands"
                :key="brand.uuid"
                :style="{
                  borderBottom: '1px solid #E5E5E5',
                }"
              >
                <section class="d-flex align-center" style="gap: 0.5rem">
                  <div>
                    <img
                      :src="`https://techify-001-site1.htempurl.com${brand.photoPath}`"
                      class="circle"
                    />
                    <!-- style="width: 50px; height: 50; border-radius: 50%" -->
                  </div>
                  <div class="d-flex justify-between">
                    <p class="title-product">
                      {{ brand.displayName_En }}
                    </p>
                    <p class="mx-2">|</p>
                    <p class="title-product">
                      {{ brand.displayName_Ar }}
                    </p>
                  </div>
                </section>
                <div>
                  <VIcon
                    class="me-2"
                    icon="mdi-pencil-outline"
                    color="#AFAACB"
                    @click="editBrand(brand)"
                  ></VIcon>

                  <VIcon
                    class="me-2"
                    icon="mdi-trash-can-outline"
                    color="#AFAACB"
                    @click="handleDelBrand(brand)"
                  ></VIcon>
                </div>
              </VCol>
            </VCard>
          </VCol>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card-info-btn {
  padding: 0;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #733ee4;
}
.title-product {
  color: var(--Black, #21094a);
  font-family: Cairo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
}
.add-products-actions {
  padding: 1rem 2rem 2rem 2rem;
}
.card-title {
  color: #21094a;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.card-file {
  border-radius: 8px;
  border: 1px transparent #e8e7ef;
  background: #faf9fe;
  position: relative;
  box-shadow: none;
}
.card-file-subtitle {
  color: #9089b2;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.card-file-input {
  width: 96px;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
.circle {
  display: inline-block;
  border-radius: 50%;
  max-width: 50px;
  padding: 5px;
  /* background: gainsboro; */
  color: white;
  text-align: center;
  line-height: 1;
  box-sizing: content-box;
  white-space: nowrap;
}
.circle:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  padding-top: 100%;
  height: 0;
}
.circle span {
  display: inline-block;
  vertical-align: middle;
}
.card-file-text {
  color: #733ee4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.card-file-ui {
  border-radius: 6px;
  height: 276px;
  background: rgba(115, 62, 228, 0.05);
  box-shadow: none;
}

:global(.v-field__outline__start) {
  display: none;
}

:global(.v-field__outline__end) {
  border-radius: 12px !important;
  border: 1px solid #e8e7ef !important;
}
</style>
