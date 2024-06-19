<script setup lang="ts">
import { getCtegory } from '@/apis/categories.ts';

const dateFormattinmg = (date: any) => {
  return new Date(date).toLocaleDateString('en-US');
};

const route = useRoute();
let category: any = ref({});
let isPageLoading = ref(false);

const setCategoryData = async () => {
  isPageLoading.value = true;
  try {
    const { data } = await getCtegory(route.params.id as string);
    category.value = data.data;
    isPageLoading.value = false;
  } catch {}
};

setCategoryData();
</script>

<template>
  <section class="view-products">
    <VContainer class="px-12">
      <VCard class="card card-products">
        <VRow gutters>
          <VCol cols="4">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              class="card-image"
              style="
                background: #faf9fe;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                border-radius: 12px;
                border: 1px solid #e8e7ef;
                background: #faf9fe;
              "
            >
              <div
                style="
                  padding: 1rem;
                  background: #fff;
                  border-radius: 12px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  border-radius: 8px;
                  border: 1px solid #e8e7ef;
                  background: #fff;
                "
              >
                <img
                  style="width: 100%"
                  :src="`https://techify-001-site1.htempurl.com${category.imagePath}`"
                />
              </div>
            </VCard>
          </VCol>
          <VCol
            cols="8"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <v-skeleton-loader
              v-if="isPageLoading"
              type="card"
              v-for="i in 3"
            />
            <template v-else>
              <div style="display: flex; justify-content: space-between">
                <h3 class="card-title">
                  {{ category.displayName_En }}
                </h3>
                <v-btn
                  flat
                  style="
                    padding: 0.5rem;
                    border-radius: 8px;
                    background: #faf9fe;
                    width: fit-content;
                    height: fit-content;
                    cursor: pointer;
                  "
                  @click="
                    $router.push({
                      name: 'edit-category',
                      params: { id: category.id },
                    })
                  "
                >
                  <editIcon width="24" height="24" />
                </v-btn>
              </div>
              <p style="color: #7066a2; font-size: 14px">
                {{ category.description_En }}
              </p>

              <div
                style="
                  display: flex;
                  gap: 0.7rem;
                  margin-top: 1rem;
                  align-items: center;
                "
              >
                <span
                  style="
                    color: #9089b2;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                  "
                >
                  Published date :
                </span>
                <span
                  style="
                    color: #21094a;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 150%;
                  "
                >
                  {{ dateFormattinmg(category.dateCreated) }}
                </span>
                <v-divider color="#7066A2" vertical />
                <span
                  style="
                    background: rgba(39, 174, 96, 0.1);
                    font-size: 16px;
                    padding: 0.2rem 0.7rem;
                    border-radius: 8px;
                  "
                >
                  <p style="color: #27ae60">
                    {{ category.visibility }}
                  </p>
                </span>
              </div>
              <div class="d-flex justify-space-between" style="gap: 1rem">
                <ProductSales
                  class="w-100"
                  title="Quantity"
                  icon="Products-icon"
                  :value="category.productCount"
                />
                <ProductSales
                  title="Orders"
                  icon="Orders-icon"
                  value="30"
                  class="w-100"
                />
                <ProductSales
                  title="Revenue"
                  icon="Price-icon"
                  value="3400"
                  class="w-100"
                />
              </div>
              <VCard class="card" style="border: 1px solid #e8e7ef">
                <div>
                  <VIcon icon="mdi-tag-outline" color="#7066A2" />
                  <span
                    style="
                      font-size: 14px;
                      font-weight: 600;
                      color: #7066a2;
                      margin-left: 0.7rem;
                    "
                    >Tags</span
                  >
                </div>
                <div
                  style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                  "
                >
                  <VCard
                    class="card"
                    style="
                      margin-top: 1rem;
                      background: #e9e7f2;
                      padding: 0.3rem 0.7rem;
                      width: fit-content;
                    "
                    v-for="tag in category.tags"
                  >
                    <span style="color: #7066a2; font-size: 14px">
                      {{ tag }}
                    </span>
                  </VCard>
                </div>
              </VCard>
              <VCard flat class="products-card px-6 py-6">
                <VCol class="d-flex pa-0 mb-4">
                  <svg
                    class="me-2 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_522_12349)">
                      <path
                        d="M6.13653 0.833374H3.8638C3.06011 0.833374 2.28934 1.15264 1.72105 1.72093C1.15276 2.28922 0.833496 3.05999 0.833496 3.86368L0.833496 6.1364C0.833496 6.94009 1.15276 7.71086 1.72105 8.27915C2.28934 8.84744 3.06011 9.16671 3.8638 9.16671H6.13653C6.94021 9.16671 7.71098 8.84744 8.27927 8.27915C8.84757 7.71086 9.16683 6.94009 9.16683 6.1364V3.86368C9.16683 3.05999 8.84757 2.28922 8.27927 1.72093C7.71098 1.15264 6.94021 0.833374 6.13653 0.833374ZM7.65168 6.1364C7.65168 6.53825 7.49205 6.92363 7.2079 7.20778C6.92375 7.49192 6.53837 7.65156 6.13653 7.65156H3.8638C3.46196 7.65156 3.07657 7.49192 2.79243 7.20778C2.50828 6.92363 2.34865 6.53825 2.34865 6.1364V3.86368C2.34865 3.46183 2.50828 3.07645 2.79243 2.7923C3.07657 2.50816 3.46196 2.34853 3.8638 2.34853H6.13653C6.53837 2.34853 6.92375 2.50816 7.2079 2.7923C7.49205 3.07645 7.65168 3.46183 7.65168 3.86368V6.1364Z"
                        fill="#7066A2"
                      />
                      <path
                        d="M16.1365 0.833374H13.8638C13.0601 0.833374 12.2893 1.15264 11.7211 1.72093C11.1528 2.28922 10.8335 3.05999 10.8335 3.86368V6.1364C10.8335 6.94009 11.1528 7.71086 11.7211 8.27915C12.2893 8.84744 13.0601 9.16671 13.8638 9.16671H16.1365C16.9402 9.16671 17.711 8.84744 18.2793 8.27915C18.8476 7.71086 19.1668 6.94009 19.1668 6.1364V3.86368C19.1668 3.05999 18.8476 2.28922 18.2793 1.72093C17.711 1.15264 16.9402 0.833374 16.1365 0.833374ZM17.6517 6.1364C17.6517 6.53825 17.492 6.92363 17.2079 7.20778C16.9238 7.49192 16.5384 7.65156 16.1365 7.65156H13.8638C13.462 7.65156 13.0766 7.49192 12.7924 7.20778C12.5083 6.92363 12.3486 6.53825 12.3486 6.1364V3.86368C12.3486 3.46183 12.5083 3.07645 12.7924 2.7923C13.0766 2.50816 13.462 2.34853 13.8638 2.34853H16.1365C16.5384 2.34853 16.9238 2.50816 17.2079 2.7923C17.492 3.07645 17.6517 3.46183 17.6517 3.86368V6.1364Z"
                        fill="#7066A2"
                      />
                      <path
                        d="M6.13653 10.8334H3.8638C3.06011 10.8334 2.28934 11.1526 1.72105 11.7209C1.15276 12.2892 0.833496 13.06 0.833496 13.8637L0.833496 16.1364C0.833496 16.9401 1.15276 17.7109 1.72105 18.2792C2.28934 18.8474 3.06011 19.1667 3.8638 19.1667H6.13653C6.94021 19.1667 7.71098 18.8474 8.27927 18.2792C8.84757 17.7109 9.16683 16.9401 9.16683 16.1364V13.8637C9.16683 13.06 8.84757 12.2892 8.27927 11.7209C7.71098 11.1526 6.94021 10.8334 6.13653 10.8334ZM7.65168 16.1364C7.65168 16.5382 7.49205 16.9236 7.2079 17.2078C6.92375 17.4919 6.53837 17.6516 6.13653 17.6516H3.8638C3.46196 17.6516 3.07657 17.4919 2.79243 17.2078C2.50828 16.9236 2.34865 16.5382 2.34865 16.1364V13.8637C2.34865 13.4618 2.50828 13.0764 2.79243 12.7923C3.07657 12.5082 3.46196 12.3485 3.8638 12.3485H6.13653C6.53837 12.3485 6.92375 12.5082 7.2079 12.7923C7.49205 13.0764 7.65168 13.4618 7.65168 13.8637V16.1364Z"
                        fill="#7066A2"
                      />
                      <path
                        d="M16.1365 10.8334H13.8638C13.0601 10.8334 12.2893 11.1526 11.7211 11.7209C11.1528 12.2892 10.8335 13.06 10.8335 13.8637V16.1364C10.8335 16.9401 11.1528 17.7109 11.7211 18.2792C12.2893 18.8474 13.0601 19.1667 13.8638 19.1667H16.1365C16.9402 19.1667 17.711 18.8474 18.2793 18.2792C18.8476 17.7109 19.1668 16.9401 19.1668 16.1364V13.8637C19.1668 13.06 18.8476 12.2892 18.2793 11.7209C17.711 11.1526 16.9402 10.8334 16.1365 10.8334ZM17.6517 16.1364C17.6517 16.5382 17.492 16.9236 17.2079 17.2078C16.9238 17.4919 16.5384 17.6516 16.1365 17.6516H13.8638C13.462 17.6516 13.0766 17.4919 12.7924 17.2078C12.5083 16.9236 12.3486 16.5382 12.3486 16.1364V13.8637C12.3486 13.4618 12.5083 13.0764 12.7924 12.7923C13.0766 12.5082 13.462 12.3485 13.8638 12.3485H16.1365C16.5384 12.3485 16.9238 12.5082 17.2079 12.7923C17.492 13.0764 17.6517 13.4618 17.6517 13.8637V16.1364Z"
                        fill="#7066A2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_522_12349">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="subCategories">Sub-Categories</p>
                </VCol>
                <VCol
                  class="d-flex justify-space-between pa-0"
                  v-for="subCategory in category.subCategories"
                  :key="subCategory.id"
                >
                  <div class="d-flex justify-between">
                    <p class="me-2 title-product">Vitamins</p>
                  </div>
                  <div>
                    <p class="number-products">50 Product</p>
                  </div>
                </VCol>
                <v-divider class="my-2"></v-divider>
                <VCol class="d-flex justify-space-between pa-0">
                  <div class="d-flex justify-between">
                    <p class="me-2 title-product">Vitamins</p>
                  </div>
                  <div>
                    <p class="number-products">50 Product</p>
                  </div>
                </VCol>
              </VCard>
            </template>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>
  </section>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
}
.card-image {
  box-shadow: none;
  border-radius: 12px;
}
.products-card {
  border-radius: 8px;
  border: 1px solid #e8e7ef;
  background: #fff;
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
  color: #21094a;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
}
.subCategories {
  color: var(--Heavy, #7066a2);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
</style>
