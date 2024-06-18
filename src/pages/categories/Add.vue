<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow>
        <VCol cols="6">
          <VCol>
            <VCard class="card card-info">
              <h3 class="card-title">Main information</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol cols="12">
                  <h4 class="card-info-title">Category name</h4>
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
                  <h4 class="card-info-title">Description</h4>
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
            <VCard class="card card-info">
              <h3 class="card-title">المعلومات الأساسية</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol cols="12">
                  <h4 class="card-info-title">إسم الفئة</h4>
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
                  <h4 class="card-info-title">الوصف</h4>
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
        <VCol>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <VRow>
              <VCol class="d-flex justify-between">
                <VTextField
                  label=""
                  density="compact"
                  placeholder="Enter sub-category name"
                  variant="outlined"
                  bg-color="#faf9fe"
                  style="color: #afaacb; font-size: 14px"
                  class="pe-3"
                  v-model="newSubCategoryEn"
                />
                <VTextField
                  label=""
                  density="compact"
                  placeholder="أدخل إسم الفئه الفرعيه"
                  variant="outlined"
                  bg-color="#faf9fe"
                  dir="rtl"
                  style="color: #afaacb; font-size: 14px"
                  class="pe-3"
                  v-model="newSubCategoryAr"
                />
                <VBtn
                  class="card-info-btn"
                  color="#21094a"
                  variant="outlined"
                  :disabled="!newSubCategoryEn || !newSubCategoryAr"
                  @click="addSubCategory()"
                >
                  <VIcon icon="mdi-plus" color="#733EE4"></VIcon>
                </VBtn>
              </VCol>

              <VCol cols="12" v-if="subCategoriesToAdd.length">
                <VCard flat class="products-card px-4 py-4">
                  <VCol
                    class="d-flex justify-space-between pa-0 mb-3 pb-3"
                    v-for="subCategory in subCategoriesToAdd"
                    :key="subCategory.id"
                    :style="{
                      borderBottom: '1px solid #E5E5E5',
                    }"
                  >
                    <div class="d-flex justify-between">
                      <p class="title-product">
                        {{ subCategory.displayName_En }}
                      </p>
                      <p class="mx-2">|</p>
                      <p class="title-product">
                        {{ subCategory.displayName_Ar }}
                      </p>
                    </div>
                    <div>
                      <VIcon
                        class="me-2"
                        icon="mdi-pencil-outline"
                        color="#AFAACB"
                        @click="editSubCategory(subCategory)"
                      ></VIcon>
                      <VIcon
                        class="me-2"
                        icon="mdi-trash-can-outline"
                        color="#AFAACB"
                        @click="removeSubCategory(subCategory)"
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
          <VCard class="card card-products" style="margin-bottom: 1rem">
            <h3 class="card-title">Category Images</h3>
            <VCard flat>
              <VFileInput
                label=""
                class="card-file-input"
                prepend-icon="mdi-upload-multiple"
              ></VFileInput>
              <VCard class="card-file-ui ma-1">
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
                  <img src="@/icons/upload.svg" style="cursor: pointer" />
                  <img v-if="false" src="@/assets/multivitamin.png" />
                  <p class="card-file-text text-decoration-underline">
                    Upload Image
                  </p>
                  <div class="text-center">
                    <p class="card-file-subtitle my-1">
                      Max image 5MB jpg, png, jpeg
                    </p>
                    <p class="card-file-subtitle">Dimention X*X (Square)</p>
                  </div>
                </div>
              </VCard>
            </VCard>
          </VCard>
        </VCol>
        <VCol cols="4">
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title mb-6">Tags</h3>
            <VRow>
              <VCol class="d-flex">
                <VTextField
                  label=""
                  density="compact"
                  placeholder="Write tag"
                  variant="outlined"
                  bg-color="#faf9fe"
                  style="color: #afaacb; font-size: 14px"
                  class="pr-2"
                  hide-details
                  v-model="newTag"
                />
                <VBtn
                  class="card-info-btn"
                  color="#21094a"
                  variant="outlined"
                  @click="addTags()"
                >
                  <VIcon icon="mdi-plus" color="#21094a"></VIcon>
                </VBtn>
              </VCol>
              <VCol cols="12">
                <VCard
                  flat
                  class="d-flex products-card px-4 py-4 flex-wrap"
                  :style="{
                    'min-height': tagsToAdd.length ? 'fit-content' : '10rem',
                  }"
                >
                  <div
                    v-for="tag in tagsToAdd"
                    :key="tag?.id ?? tag"
                    class="tag d-flex justify-space-between me-2 mt-1"
                  >
                    <VIcon
                      class="my-auto me-1"
                      icon="mdi-close"
                      color="#fff"
                      size="15"
                      @click="removeTag(tag)"
                    ></VIcon>
                    <p>{{ tag.title ?? tag }}</p>
                  </div>
                </VCard>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
        <VCol cols="4">
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
                v-model="newCategory.visibility"
                inline
                hide-details
              >
                <v-radio
                  label="Published"
                  value="Published"
                  color="primary"
                  class="me-14"
                />
                <v-radio label="Hidden" value="Hidden" color="primary" />
              </v-radio-group>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div class="add-products-actions" style="display: flex; justify-content: end">
    <v-btn flat color="#fff" class="rounded-lg me-2" height="48" width="162">
      <p>Cancel</p>
    </v-btn>
    <v-btn flat color="#733EE4" class="rounded-lg" height="48" width="162">
      <v-icon size="20"> mdi-plus </v-icon>
      <p>Add Category</p>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import type { Category } from './type';
import { getCtegory } from '@/apis/categories.ts';

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
  // isPageLoading.value = true;
  try {
    const { data } = await getCtegory(route.params.id as string);
    newCategory.value = data.data;
    tagsToAdd.value = data.data.tags;
    subCategoriesToAdd.value = data.data.subCategories;
    // isPageLoading.value = false;
  } catch {}
};
setCategoryData();
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
  border: 1px dashed var(--Purple, #733ee4);
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
</style>
