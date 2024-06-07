<script setup lang="ts">
const headers = [
  {
    title: "Products",
    key: "products",
    sortable: false,
  },
  {
    title: "Price",
    key: "price",
    sortable: false,
  },
  {
    title: "QTY",
    key: "qty",
    sortable: false,
  },
  {
    title: "Total Amount",
    key: "total",
    sortable: false,
  },
];
const items = [
  {
    product: "African Elephant",
    category: "Herbivore",
    rating: "4",
    price: "KD 20",
    qty: "2",
    total: "KD 40",
  },
  {
    product: "Gorilla",
    category: "Savanna",
    rating: "3",
    price: "KD 15",
    qty: "1",
    total: "KD 15",
  },
  {
    product: "Lion",
    category: "Zebra",
    rating: "5",
    price: "KD 30",
    qty: "2",
    total: "KD 60",
  },
];
const orderSummary = {
  "Products NO.": "2",
  "Total Amount": "KD 40",
  Discount: "KD 10 -",
  "Shipping Charge": "KD 5",
  "Sub Total": "KD 65",
};
</script>

<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow disable-gutters>
        <VCol cols="12">
          <VCard
            class="card"
            style="
              margin-bottom: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <section style="display: flex; gap: 1rem; align-items: center">
              <p style="color: #7066a2">Order NO:</p>
              <span style="color: #21094a; font-weight: 500">#1262123</span>
              <p style="color: #7066a2">Order Reference NO. :</p>
              <span style="color: #733ee4; font-weight: 500">#1262123</span>
            </section>
            <section style="display: flex; gap: 1rem">
              <VBtn variant="text" color="#21094A">
                <VIcon icon="mdi-bookmark-outline" />
                <p>Archive Order</p>
              </VBtn>
              <VBtn
                variant="elevated"
                color="#EB5757"
                class="px-8"
                style="box-shadow: none; border-radius: 9px"
              >
                <p>Cancelled</p>
              </VBtn>
            </section>
          </VCard>
        </VCol>
        <VCol cols="8">
          <VCard class="card">
            <h3 class="card-title">Order Details</h3>
            <v-data-table
              class="listen-table"
              :items="items"
              :headers="headers"
              hide-default-footer
            >
              <template v-slot:item.products="{ item }">
                <section style="display: flex; gap: 1rem; margin: 0.7rem 0">
                  <div
                    style="
                      border: 1px solid #e8e7ef;
                      padding: 0.5rem 1rem;
                      border-radius: 8px;
                    "
                  >
                    <img src="@/assets/test-small-product.png" />
                  </div>
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                    "
                  >
                    <h4>{{ item.product }}</h4>
                    <div class="d-flex align-items-center" style="gap: 0.5rem">
                      <span style="color: #7066a2; font-size: 14px">
                        {{ item.category }}
                      </span>
                      <StarRating :rating="item.rating" />
                      <span
                        style="
                          color: #21094a;
                          font-size: 14px;
                          font-weight: 500;
                        "
                        >{{ item.rating }}</span
                      >
                    </div>
                  </div>
                </section>
              </template>
            </v-data-table>
          </VCard>
        </VCol>
        <VCol cols="4">
          <VCard class="card">
            <h3 class="card-title">Order Summary</h3>
            <section
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 1rem 0;
                border-bottom: 1px solid #e8e7ef;
                padding-bottom: 0.7rem;
                font-weight: 500;
              "
              v-for="[key, val] in Object.entries(orderSummary)"
              :key="val"
            >
              <span style="color: #7066a2"> {{ key }}</span>
              <span
                :style="`color: ${key === 'Discount' ? '#EB5757' : '#21094a'}`"
                >{{ val }}</span
              >
            </section>
            <VBtn
              variant="elevated"
              color="#733EE4"
              class="px-8 w-100 rounded-lg"
              style="box-shadow: none"
            >
              <VIcon icon="mdi-plus" />
              <p>Invoice</p>
            </VBtn>
          </VCard>
        </VCol>
        <VCol cols="8" style="display: flex">
          <VCard
            class="card"
            style="
              display: flex;
              flex-direction: column;
              gap: 1rem;
              width: 100%;
            "
          >
            <h3 class="card-title">Order History</h3>
            <div
              style="
                display: flex;
                gap: 5rem;
                flex-direction: column;
                position: relative;
              "
            >
              <section
                style="display: flex; gap: 1rem; align-items: center"
                class="section-history"
                v-for="i in 5"
                :key="i"
              >
                <div
                  class="d-flex align-items-center justify-content-between"
                  style="
                    padding: 0.8rem;
                    border-radius: 50%;
                    background: #e2b000;
                    width: fit-content;
                  "
                >
                  <SvgIcon icon="box-closed" />
                </div>
                <div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;
                      font-weight: 500;
                    "
                  >
                    <span style="color: #21094a"> Order Placed: </span>
                    <span style="color: #7066a2">
                      25 september 2024 | 12:30 PM
                    </span>
                  </div>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;
                      font-weight: 500;
                    "
                  >
                    <span style="color: #21094a">By:</span>
                    <span style="color: #7066a2">Amr Khalid</span>
                    <span style="color: #21094a"> (Customer)</span>
                  </div>
                </div>
              </section>
            </div>
          </VCard>
        </VCol>
        <VCol
          cols="4"
          style="
            margin-top: -5rem;
            display: flex;
            gap: 1.5rem;
            flex-direction: column;
          "
        >
          <VCard class="card">
            <h3 class="card-title">Customer Details</h3>
            <section
              class="d-flex align-items-center"
              style="gap: 1rem; flex-direction: column"
            >
              <div
                class="d-flex align-items-center justify-content-between"
                style="gap: 0.8rem"
              >
                <div>
                  <img src="@/assets/test-customer.png" />
                </div>
                <div>
                  <p style="color: #21094a; font-weight: 500; font-size: 14px">
                    Mohamed Ali
                  </p>
                  <span style="color: #9089b2; font-size: 12px">Customer</span>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 0.8rem;
                  font-size: 14px;
                "
              >
                <div style="color: #21094a">
                  <VIcon
                    icon="mdi-email"
                    color="#7066A2"
                    style="margin-right: 0.5rem"
                  />
                  <span style="color: #7066a2">mohamed.ali@gmail.com</span>
                </div>
                <div>
                  <VIcon
                    icon="mdi-phone"
                    color="#7066A2"
                    style="margin-right: 0.5rem"
                  />
                  <span style="color: #7066a2">+365 387 287 288</span>
                </div>
              </div>
            </section>
          </VCard>
          <VCard
            class="card"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <h3 class="card-title">Address</h3>
            <section
              style="
                display: flex;
                flex-direction: column;
                gap: 1rem;
                color: #21094a;
                font-size: 14px;
                font-weight: 400;
              "
            >
              <p>Office</p>
              <p>423 Aljarah st. kuwait city.</p>
              <p>Floor NO. 5</p>
              <p>Flat No. 20</p>
              <p>Near by Algalaa Mosque</p>
            </section>
          </VCard>
          <VCard
            class="card"
            style="display: flex; flex-direction: column; gap: 1rem"
          >
            <h3 class="card-title">Payment Method</h3>
            <section style="display: flex; flex-direction: column; gap: 1rem">
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Transactions :</p>
                <p style="color: #21094a; font-size: 14px">#542212454052</p>
              </div>
              <div style="display: flex; gap: 3.5rem">
                <p style="color: #7066a2; font-size: 14px">Payment Method :</p>
                <SvgIcon icon="VISA" color="#21094a" />
              </div>
              <div style="display: flex; gap: 5.7rem">
                <p style="color: #7066a2; font-size: 14px">Card name :</p>
                <p style="color: #21094a; font-size: 14px">Mohamed Ali Zain</p>
              </div>
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Card number :</p>
                <p style="color: #21094a; font-size: 14px">
                  2654 2638 7462 2893
                </p>
              </div>
              <div style="display: flex; gap: 5rem">
                <p style="color: #7066a2; font-size: 14px">Total amount :</p>
                <p style="color: #21094a; font-size: 14px">KD 120</p>
              </div>
            </section>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<style>
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
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
.listen-table thead tr {
  background-color: #faf9fe;
  color: #21094a;
  border: 1px solid #e8e7ef;
  margin-bottom: 5rem;
  border-radius: 12px;
  border-bottom: none;
}

.v-table .v-table__wrapper > table > thead > tr > th {
  border-bottom: none;
  margin-bottom: 5rem;
}

.section-history:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 1px;
  bottom: 1px;
  left: 22px;
  border-left: 2px dotted #733ee4;
}
</style>
