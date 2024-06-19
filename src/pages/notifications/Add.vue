<template>
  <section class="add-products px-6">
    <BaseNotifications :notification="showToast" />
    <VContainer>
      <VRow>
        <VCol cols="6">
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-info">
              <h3 class="card-title">Main information</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol cols="12">
                  <h4 class="card-info-title">Notification name</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter category name"
                    variant="outlined"
                    class="card-info-input"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    v-model="newCategory.displayName_En"
                  />
                </VCol>
                <VCol cols="12">
                  <h4 class="card-info-title">Content</h4>
                  <v-textarea
                    label=""
                    density="compact"
                    placeholder="Write description"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    v-model="newCategory.description_En"
                  />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="6" style="direction: rtl">
          <VCol>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard v-else class="card card-info">
              <h3 class="card-title">المعلومات الأساسية</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol cols="12">
                  <h4 class="card-info-title">إسم الإشعار</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="أدخل إسم الفئة"
                    variant="outlined"
                    class="card-info-input"
                    bg-color="#faf9fe"
                    dir="rtl"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    v-model="newCategory.displayName_Ar"
                  />
                </VCol>
                <VCol cols="12">
                  <h4 class="card-info-title">المحتوى</h4>
                  <v-textarea
                    label=""
                    density="compact"
                    placeholder="أدخل الوصف"
                    variant="outlined"
                    bg-color="#faf9fe"
                    dir="rtl"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    v-model="newCategory.description_Ar"
                  />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="8">
          <VCard
            flat
            class="pa-4"
            style="margin-bottom: 2rem; border-radius: 12px"
          >
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
                  v-model="newCategory.visibility"
                  inline
                  hide-details
                  :style="{ color: '#733ee4' }"
                >
                  <v-radio
                    label="Just Content"
                    color="#733EE4"
                    value="Content"
                    class="me-8"
                  />
                  <v-radio
                    label="Categories"
                    color="#733EE4"
                    value="Categories"
                    class="me-8"
                  />
                  <v-radio
                    label="Sub-Categories"
                    color="#733EE4"
                    value="Sub"
                    class="me-8"
                  />
                  <v-radio
                    label="Custom Products"
                    color="#733EE4"
                    value="Products"
                    class="me-8"
                  />
                </v-radio-group>
              </div>
            </div>

            <VRow>
              <VCol cols="6">
                <div class="mt-4 mb-2">
                  <h4 class="card-info-title">Products</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose category name"
                    class="card-info-list"
                    item-value="uuid"
                    item-title="uuid"
                  ></v-select>
                </div>
              </VCol>
            </VRow>

            <div>
              <VCol
                v-for="i in 2"
                :key="i"
                class="d-flex justify-space-between pa-0 pb-3 mb-5"
                :style="{ borderBottom: '1px solid #E8E7EF' }"
              >
                <div class="d-flex justify-between">
                  <img
                    src="@/assets/test-product.png"
                    alt="avatar"
                    class="me-4"
                    style="
                      width: 35px;
                      height: 38px;
                      border-radius: 48px;
                      border: 1px solid var(--Stroke, #e8e7ef);
                      background: #fff;
                    "
                  />
                  <p class="title-product my-auto">Product 1</p>
                </div>
                <div class="my-auto">
                  <svgIcon icon="delete" />
                </div>
              </VCol>
            </div>
          </VCard>
          <VCard
            flat
            class="pa-4"
            style="margin-bottom: 2rem; border-radius: 12px"
          >
            <div>
              <h3 class="card-title mb-8">Notify to</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group
                  v-model="newCategory.visibility"
                  inline
                  hide-details
                  :style="{ color: '#733ee4' }"
                >
                  <v-radio
                    label="All Users"
                    color="#733EE4"
                    value="Content"
                    class="me-8"
                  />
                  <v-radio
                    label="Specific Users"
                    color="#733EE4"
                    value="Categories"
                    class="me-8"
                  />
                  <v-radio
                    label="Governorate"
                    color="#733EE4"
                    value="Sub"
                    class="me-8"
                  />
                </v-radio-group>
              </div>
            </div>
            <VRow>
              <VCol cols="6">
                <div class="mt-4 mb-2">
                  <h4 class="card-info-title">Users</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose specific users"
                    class="card-info-list"
                    item-value="uuid"
                    item-title="uuid"
                  ></v-select>
                </div>
              </VCol>
            </VRow>

            <div>
              <VCol
                v-for="i in 2"
                :key="i"
                class="d-flex justify-space-between pa-0 pb-3 mb-5"
                :style="{ borderBottom: '1px solid #E8E7EF' }"
              >
                <div class="d-flex justify-between">
                  <img
                    src="@/assets/test-avatar.png"
                    alt="avatar"
                    class="me-4"
                  />
                  <p class="title-product my-auto">Mohamed Gamal</p>
                </div>
                <div class="my-auto">
                  <svgIcon icon="delete" />
                </div>
              </VCol>
            </div>
          </VCard>
          <VCard
            flat
            class="pa-4"
            style="margin-bottom: 2rem; border-radius: 12px"
          >
            <VRow>
              <VCol cols="6">
                <div class="mt-4 mb-2">
                  <h4 class="card-info-title">Products</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose category"
                    class="card-info-list"
                    item-value="uuid"
                    item-title="uuid"
                    hide-details
                  ></v-select>
                </div>
              </VCol>
              <VCol cols="6">
                <div class="mt-4 mb-2">
                  <h4 class="card-info-title">Week Days</h4>
                  <GDatePicker label="Choose days" class="mt-8" :height="40" />
                </div>
              </VCol>
              <VCol cols="12" class="pt-0">
                <VCard flat class="products-card px-4 py-3">
                  <VCol
                    class="d-flex justify-space-between pa-0"
                    v-for="i in 1"
                    :key="i"
                  >
                    <div class="d-flex justify-between">
                      <p class="title-product">name</p>
                      <p class="mx-2">|</p>
                      <p class="title-product">title</p>
                    </div>
                  </VCol>
                </VCard>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
        <VCol cols="4">
          <v-skeleton-loader v-if="isPageLoading" type="card" />
          <VCard
            flat
            v-else
            class="pa-8 card-products"
            style="margin-bottom: 1rem; border-radius: 12px"
          >
            <h3 class="card-title">Notification Images</h3>
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
                  border: true
                    ? '1px solid var(--Purple, #733ee4)'
                    : '1px dashed var(--Purple, #733ee4)',
                }"
                class="card-file-ui mx-1 mt-6"
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
                    v-if="categoryImg"
                    style="width: 50%"
                    :src="
                      categoryImg.includes('http')
                        ? categoryImg
                        : `https://techify-001-site1.htempurl.com${categoryImg}`
                    "
                  />
                  <svgIcon icon="notification" />
                  <p
                    class="card-file-text text-decoration-underline cursor-pointer"
                  >
                    {{ categoryImg ? 'Change Image' : 'Change image' }}
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
      </VRow>
    </VContainer>
  </section>
  <div
    v-if="!isPageLoading"
    class="add-products-actions"
    style="display: flex; justify-content: end"
  >
    <!-- <v-btn flat color="#fff" class="rounded-lg me-2" height="48" width="162">
        <p>Cancel</p>
      </v-btn> -->
    <v-btn
      flat
      :color="true ? '#27AE60' : '#733EE4'"
      class="rounded-lg"
      height="48"
      width="162"
      :loading="isAddingBtnLoading"
      :disabled="isAddingBtnLoading || !isValidCategory"
      @click="addCategory"
    >
      <v-icon v-if="!true" size="20"> mdi-plus </v-icon>
      <p>{{ true ? 'Save Changes' : 'Add Category' }}</p>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
// import type { Category } from './type';
import { getCtegory } from '@/apis/categories.ts';
import {
  getFormData,
  sendFormData,
} from '@/composables/products/SendFormRequest';

let fileInput: any = ref('');
let categoryImg = ref('');
let categoryImgBase64: any = ref('');
let isPageLoading = ref(false);
let showToast = ref(false);
let isAddingBtnLoading = ref(false);
const newCategory: any = ref({}) as unknown as Category;
let newSubCategoryEn = ref('');
let newSubCategoryAr = ref('');
const subCategoriesToAdd: string[] | any = ref([]);

const addSubCategory = () => {
  subCategoriesToAdd.value.push({
    id: subCategoriesToAdd.value.length,
    displayName_En: newSubCategoryEn.value,
    displayName_Ar: newSubCategoryAr.value,
  });
  newSubCategoryEn.value = '';
  newSubCategoryAr.value = '';
};

const removeSubCategory = (deleteSubCategory: any) => {
  subCategoriesToAdd.value = subCategoriesToAdd.value.filter(
    (subCategory: any) => subCategory !== deleteSubCategory
  );
};

const editSubCategory = (editedSubCategory: any) => {
  newSubCategoryEn.value = editedSubCategory.displayName_En;
  newSubCategoryAr.value = editedSubCategory.displayName_Ar;
  removeSubCategory(editedSubCategory);
};

const newTag = ref('');
const tagsToAdd: string[] | any = ref([]);

const addTags = () => {
  tagsToAdd.value.push({
    id: tagsToAdd.value.length,
    title: newTag.value,
  });
  newTag.value = '';
};

const removeTag = (deletedTag: any) => {
  tagsToAdd.value = tagsToAdd.value.filter((tag: any) => tag !== deletedTag);
};

const route = useRoute();

const setCategoryData = async () => {
  if (!route.params.id) return;
  isPageLoading.value = true;
  try {
    const { data } = await getCtegory(route.params.id as string);
    newCategory.value = data.data;
    tagsToAdd.value = data.data.tags;
    subCategoriesToAdd.value = data.data.subCategories;
    categoryImg.value = data.data.imagePath;

    isPageLoading.value = false;
  } catch {}
};
// setCategoryData();
const router = useRouter();
const addCategory = async (): Promise<void> => {
  // setEditorValue();
  isAddingBtnLoading.value = true;
  const form = getFormData({
    ...newCategory.value,
    Tags: tagsToAdd.value,
    SubCategories: subCategoriesToAdd.value,
    ImageFile: categoryImgBase64.value,
  });

  try {
    await sendFormData('categories', form);
    showToast.value = true;
    isAddingBtnLoading.value = true;
    // setTimeout(() => {
    //   router.push({ name: 'categories' });
    // }, 1000);
  } catch (error) {
    console.log(error);
  } finally {
    isAddingBtnLoading.value = false;
  }
};

const handleFileChange = async (event: any) => {
  const file = event.target.files[0];
  const newImgSrcs = (window.URL ? URL : webkitURL).createObjectURL(file);
  categoryImg.value = newImgSrcs;
  const reader = new FileReader();
  reader.onload = (e: any) => {
    categoryImgBase64.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const isValidCategory = computed(() => {
  return false;
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
