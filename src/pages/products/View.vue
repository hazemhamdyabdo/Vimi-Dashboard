<script setup lang="ts">
const productDetails = [
  {
    title: "SKU",
    value: "#43856345",
  },
  {
    title: "Published date",
    value: "21/3/2024",
  },
  {
    title: "Stock quantity",
    value: "2034",
  },
  {
    title: "Weight",
    value: "250gm",
  },
  {
    title: "Dimensions",
    value: "12W 25H 32D",
  },
  {
    title: "Expiration date",
    value: "25 sep. 2024",
  },
  {
    title: "Type",
    value: "Variable",
  },
  {
    title: "Category",
    value: "Vitamins & Minerals",
  },
  {
    title: "Sub-category",
    value: "Vitamins ",
  },
];
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
                gap: 1rem;
                padding: 1rem;
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
                "
              >
                <img src="@/assets/test-product.png" alt="" />
              </div>
              <div class="card-imgs" style="display: flex; gap: 3rem">
                <div v-for="i in 4">
                  <img src="@/assets/test-product.png" width="60px" />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
                <VIcon
                  class="card-info-icon"
                  icon="mdi-star"
                  color="#ffa800"
                  v-for="i in 4"
                />
                <VIcon icon="mdi-star-outline" color="#ffa800" />
              </div>
              <div>
                <span style="font-weight: 800"> 4.4 </span>
                <span style="font-size: 14px; font-weight: 600; color: #733ee4"
                  >(12 reviews)</span
                >
              </div>
            </div>
            <p style="color: #7066a2; font-size: 14px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              nulla architecto? Enim odit, facere ipsum repellat,
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
              <div>
                <img src="@/assets/test-logo.png" />
              </div>
              <span style="font-size: 18px; font-weight: 700"> Vivid </span>
              |
              <span
                style="
                  background: rgba(33, 9, 74, 0.1);
                  font-size: 16px;
                  padding: 0.2rem 0.7rem;
                  border-radius: 8px;
                "
              >
                <p style="color: #21094a">Variable</p>
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
                <p style="color: #27ae60">Published</p>
              </span>
            </div>
            <div style="display: flex; gap: 1rem">
              <ProductSales title="Sales" icon="usd-circle" value="20" />
              <ProductSales
                title="Quantity"
                icon="Products-icon"
                value="2034"
              />
              <ProductSales title="Orders" icon="Orders-icon" value="30" />
              <ProductSales title="Revenue" icon="Price-icon" value="3400" />
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
                  v-for="i in 7"
                >
                  <span style="color: #7066a2; font-size: 14px">
                    #Tag {{ i }}
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
            <VCard class="card" style="border: 1px solid #e8e7ef">
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
              <p style="color: #9089b2; margin-top: 0.5rem; font-size: 14px">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolore eaque, voluptates odio laboriosam voluptatum
                laudantium cupiditate veniam animi in, mollitia corporis dolores
                libero accusamus nihil aspernatur optio! Accusamus, quo?
              </p>
              <h4 style="color: #21094a">Suggested use :</h4>
              <p style="color: #9089b2; margin-top: 0.5rem; font-size: 14px">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolore eaque, voluptates odio laboriosam voluptatum
                laudantium cupiditate veniam animi in, mollitia corporis dolores
                libero accusamus nihil aspernatur optio! Accusamus, quo?
              </p>
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
