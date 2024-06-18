<script setup lang="ts">
import { showProduct } from "@/apis/products";
import { getBrand } from "@/apis/_brands";
import { getCtegory } from "@/apis/categories";
import type { Product, Brand } from "./type";

const productRatings = [
  {
    stars: 10,
    percentage: 100,
  },
  {
    stars: 8,
    percentage: 80,
  },
  {
    stars: 6,
    percentage: 60,
  },
  {
    stars: 4,
    percentage: 40,
  },
  {
    stars: 2,
    percentage: 20,
  },
  {
    stars: 0,
    percentage: 0,
  },
];
const route = useRoute();
const product = ref({}) as unknown as Ref<Product>;
const isPageLoading = ref(false);
const category = ref({}) as unknown as Ref<any>;
const selectedBrand = ref({}) as unknown as Ref<Brand>;
const productDetails = computed(() => {
  return [
    {
      title: "SKU",
      value: product.value.sku,
    },
    {
      title: "Published date",
      value: new Date(product.value.dateCreated).toLocaleDateString("en-US"),
    },
    {
      title: "Stock quantity",
      value: product.value.stockQuantity,
    },
    {
      title: "Weight",
      value: product.value.weight,
    },
    {
      title: "Dimensions",
      value: `${product.value.width}W ${product.value.height}H ${product.value.depth}D`,
    },
    {
      title: "Expiration date",
      value: new Date(product.value.dateExpiry).toLocaleDateString("en-US"),
    },
    {
      title: "Type",
      value: product.value.type,
    },
    {
      title: "Category",
      value: category.value.displayName_En,
    },
    {
      title: "Sub-category",
      value: category.value.subCategories?.[0].displayName_En,
    },
  ];
});

async function fetchProduct() {
  isPageLoading.value = true;
  try {
    const {
      data: { data },
    } = await showProduct(route.params.id as string);
    product.value = data;
    isPageLoading.value = false;
  } catch {}
}
const getCategoryNameForProduct = async () => {
  try {
    const {
      data: { data },
    } = await getCtegory(product.value.categoryUuid);
    category.value = data;
  } catch {}
};
const getBrandDetails = async () => {
  const {
    data: { data: brand },
  } = await getBrand(product.value.brandUuid);
  selectedBrand.value = brand;
};
onMounted(async () => {
  await fetchProduct();
  await getBrandDetails();
  await getCategoryNameForProduct();
});
</script>

<template>
  <section class="view-products">
    <VContainer class="px-12">
      <VCard class="card card-products">
        <VRow gutters>
          <VCol cols="4">
            <VCard
              class="card-image"
              style="
                background: #faf9fe;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                padding: 1rem;
                height: 100%;
              "
            >
              <div
                style="
                  padding: 1rem;
                  background: #fff;
                  border-radius: 12px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <img
                  :src="`https://techify-001-site1.htempurl.com${product.images?.[0]?.imagePath}`"
                  alt=""
                />
              </div>
              <div
                class="card-imgs"
                style="display: flex; gap: 3rem"
                v-if="product.images?.length > 1"
              >
                <div v-for="i in product?.images" :key="i.uuid">
                  <img
                    :src="`https://techify-001-site1.htempurl.com${i?.imagePath}`"
                    width="60px"
                  />
                </div>
              </div>
            </VCard>
          </VCol>
          <VCol
            cols="8"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <div style="display: flex; justify-content: space-between">
              <h3 class="card-title">
                {{ product?.displayName_En }}
              </h3>
              <div
                style="
                  padding: 0.2rem 0.6rem;
                  border-radius: 8px;
                  background: #faf9fe;
                  width: fit-content;
                  height: fit-content;
                  cursor: pointer;
                "
                @click="
                  $router.push({
                    name: 'edit-product',
                    params: { id: product.uuid },
                  })
                "
              >
                <VIcon
                  class="card-info-icon"
                  icon="mdi-pencil-outline"
                  color="#21094a"
                />
              </div>
            </div>
            <div style="display: flex; gap: 0.7rem">
              <div>
                <StarRating :rating="4" />
              </div>
              <div>
                <span style="font-weight: 800"> 4.4 </span>
                <span style="font-size: 14px; font-weight: 600; color: #733ee4"
                  >(12 reviews)</span
                >
              </div>
            </div>
            <p style="color: #7066a2; font-size: 14px">
              {{ product?.description_En }}
            </p>

            <div
              style="
                display: flex;
                gap: 0.7rem;
                margin-top: 1rem;
                align-items: center;
              "
            >
              <span style="color: #9089b2; font-size: 16px"> Brand: </span>
              <div class="mt-2" style="margin-left: -1rem">
                <img
                  width="60px"
                  :src="`https://techify-001-site1.htempurl.com${selectedBrand?.photoPath}`"
                />
              </div>
              <span style="font-size: 18px; font-weight: 700">
                {{ selectedBrand?.displayName_En }}
              </span>
              |
              <span
                style="
                  background: rgba(33, 9, 74, 0.1);
                  font-size: 16px;
                  padding: 0.2rem 0.7rem;
                  border-radius: 8px;
                "
              >
                <p style="color: #21094a">{{ product?.type }}</p>
              </span>
              |
              <span
                style="
                  background: rgba(39, 174, 96, 0.1);
                  font-size: 16px;
                  padding: 0.2rem 0.7rem;
                  border-radius: 8px;
                "
              >
                <p style="color: #27ae60">{{ product?.visibility }}</p>
              </span>
            </div>
            <div style="display: flex; gap: 1rem">
              <!-- // ! this not integrated yet as no data came form product api -->
              <ProductSales title="Sales" icon="usd-circle" value="20" />
              <ProductSales
                title="Quantity"
                icon="Products-icon"
                value="2034"
              />
              <ProductSales title="Orders" icon="Orders-icon" value="30" />
              <ProductSales title="Revenue" icon="Price-icon" value="3400" />
            </div>
            <VCard
              class="card"
              style="border: 1px solid #e8e7ef; margin-top: 1.5rem"
            >
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
                v-if="product.tags?.length"
              >
                <VCard
                  class="card"
                  style="
                    margin-top: 1rem;
                    background: #e9e7f2;
                    padding: 0.3rem 0.7rem;
                    width: fit-content;
                  "
                  v-for="(tag, i) in product.tags"
                  :key="i"
                >
                  <span style="color: #7066a2; font-size: 14px">
                    {{ tag }}
                  </span>
                </VCard>
              </div>
            </VCard>
          </VCol>
          <VCol cols="4">
            <VCard class="card" style="border: 1px solid #e8e7ef">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem">
                <VIcon
                  icon="mdi-information-slab-circle-outline"
                  color="#7066A2"
                />
                <h4 style="color: #7066a2">Product details</h4>
              </div>
              <div
                style="
                  display: flex;
                  gap: 0.5rem;
                  justify-content: space-between;
                  border-bottom: 1px solid #e8e7ef;
                  padding-bottom: 0.7rem;
                  margin-bottom: 0.7rem;
                "
                v-for="detail in productDetails"
                :key="detail.title"
              >
                <p style="color: #9089b2">{{ detail.title }}:</p>
                <p style="margin-right: 5rem; font-weight: 500; color: #21094a">
                  {{ detail.value }}
                </p>
              </div>
            </VCard>
          </VCol>
          <VCol cols="8">
            <VCard class="card" style="border: 1px solid #e8e7ef; height: 100%">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem">
                <SvgIcon icon="Description" color="#7066a2" />
                <h4 style="color: #9089b2">
                  Description

                  <span style="font-size: 14px">
                    (general info & suggested use)
                  </span>
                </h4>
              </div>
              <h4 style="color: #21094a">General info :</h4>
              <p
                style="color: #9089b2; margin: 0.5rem 0 2rem 0; font-size: 14px"
              >
                {{ product.generalInfo_En }}
              </p>
              <h4 style="color: #21094a">Suggested use :</h4>
              <p
                style="color: #9089b2; margin: 0.5rem 0 2rem 0; font-size: 14px"
              >
                {{ product.suggestedUse_En }}
              </p>
            </VCard>
          </VCol>
          <VCol cols="12">
            <VCard
              class="card"
              style="border: 1px solid #e8e7ef; background: #faf9fe"
            >
              <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem">
                <SvgIcon icon="star" color="#7066a2" />
                <h4 style="color: #7066a2">Rating</h4>
              </div>
              <VRow>
                <VCol cols="3">
                  <VCard class="card" style="border: 1px solid #e8e7ef">
                    <div class="d-flex align-items-center">
                      <VIcon
                        icon="mdi-star"
                        style="color: #ffa800"
                        size="24"
                        v-for="i in 4"
                      />
                      <VIcon
                        icon="mdi-star-outline"
                        style="color: #ffa800"
                        size="24"
                      />
                      <p
                        style="
                          color: #21094a;
                          margin-left: 0.5rem;
                          font-size: 18px;
                        "
                      >
                        4.4 out of 5
                      </p>
                    </div>
                    <h4
                      style="color: #21094a; font-size: 18px; margin-top: 1rem"
                    >
                      60 global ratings
                    </h4>
                    <div style="margin-top: 1rem">
                      <RatingBar
                        v-for="rating in productRatings"
                        :key="rating.stars"
                        style="margin-bottom: 0.5rem"
                        :stars="rating.stars"
                        :percentage="rating.percentage"
                      />
                    </div>
                  </VCard>
                </VCol>
                <VCol cols="9">
                  <VCard
                    class="card"
                    style="border: 1px solid #e8e7ef; background: #faf9fe"
                  >
                    <ReviewRating
                      :description="'hi i am description here'"
                      :name="'John Doe'"
                      :date="'2021-01-01'"
                      v-for="i in 3"
                    />
                  </VCard>
                </VCol>
              </VRow>
            </VCard>
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
</style>
