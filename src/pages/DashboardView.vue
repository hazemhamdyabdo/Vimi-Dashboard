<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

const topDetails = ref([
  {
    title: "Total Revenue",
    icon: "coins",
    bgColor: "#27ae60",
    value: "4000 KD",
    status: "up",
    statusPercentage: "20%",
  },
  {
    title: "Total Orders",
    icon: "Orders-white",
    bgColor: "#733EE4",
    value: "500",
    status: "down",
    statusPercentage: "10%",
  },
  {
    title: "Total Returns",
    icon: "restock",
    bgColor: "#EB5757",
    value: "2,000 KD",
    status: "down",
    statusPercentage: "5%",
  },
]);

const formateNumber = (number: number) => {
  return number.toLocaleString("en", {
    maximumFractionDigits: 2,
  });
};

const Governorate = ref([
  { displayName_En: "Cairo", price: 4000, uuid: "1", increase: false },
  { displayName_En: "Alex", price: 6000, uuid: "2", increase: true },
  { displayName_En: "Aswan", price: 2000, uuid: "3", increase: false },
  { displayName_En: "Asyut", price: 1000, uuid: "4", increase: true },
  { displayName_En: "Beheira", price: 10000, uuid: "5", increase: false },
]);

const topDetailsItems = ref([
  {
    title: "Top Ordered",
    img: "@/assets/test-avatar.png",
    bgColor: "#27ae60",
    value: "4000 KD",
    status: "up",
    statusPercentage: "20%",
  },
  {
    title: "Top buyers",
    img: "@/assets/test-avatar.png",
    bgColor: "#733EE4",
    value: "500",
    status: "down",
    statusPercentage: "10%",
  },
  {
    title: "Top Returned",
    img: "@/assets/test-avatar.png",
    bgColor: "#EB5757",
    value: "2,000 KD",
    status: "down",
    statusPercentage: "5%",
  },
]);

const headers = [
  {
    title: "Customer name",
    key: "CustomerName",
    sortable: false,
    align: "left",
  },
  {
    title: "Product",
    key: "Product",
    align: "left",
    sortable: true,
    width: 300,
  },
  {
    title: "Rating",
    key: "Rating",
    align: "left",
    sortable: true,
  },
  {
    title: "Review",
    key: "Review",
    align: "left",
    sortable: false,
  },
  {
    title: "Review date",
    key: "ReviewDate",
    align: "left",
    sortable: false,
  },
];

const items = [
  {
    uuid: 0,
    CustomerName: "Mohamed Gamal",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Rating: 3,
    Review: "Lorem ipsum dolor sit ame consectetur.",
    ReviewDate: "21/3/2024",
  },
  {
    uuid: 0,
    CustomerName: "Mohamed Gamal",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Rating: 3.5,
    Review: "Lorem ipsum dolor sit ame consectetur.",
    ReviewDate: "21/3/2024",
  },
  {
    uuid: 0,
    CustomerName: "Mohamed Gamal",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Rating: 4.5,
    Review: "Lorem ipsum dolor sit ame consectetur.",
    ReviewDate: "21/3/2024",
  },
  {
    uuid: 0,
    CustomerName: "Mohamed Gamal",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Rating: 1.5,
    Review: "Lorem ipsum dolor sit ame consectetur.",
    ReviewDate: "21/3/2024",
  },
  {
    uuid: 0,
    CustomerName: "Mohamed Gamal",
    Product: "Lorem ipsum dolor sit ame consectetur.",
    Rating: 2.5,
    Review: "Lorem ipsum dolor sit ame consectetur.",
    ReviewDate: "21/3/2024",
  },
];
</script>
<template>
  <VContainer>
    <VRow>
      <VCol cols="4" v-for="(item, i) in topDetails" :key="i">
        <VCard
          flat
          class="pa-6"
          style="border-radius: 12px; background: var(--White, #fff)"
        >
          <div class="d-flex justify-start">
            <div
              class="pa-2 d-flex me-2"
              style="border-radius: 12px"
              :style="{ background: item.bgColor }"
            >
              <svgIcon :icon="item.icon" class="ma-auto" />
            </div>
            <p
              class="my-auto"
              style="
                color: var(--hint, #9089b2);
                font-family: Roboto;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
              "
            >
              {{ item.title }}
            </p>
          </div>
          <div class="mt-3 mb-2">
            <p
              style="
                color: var(--Black, #21094a);
                font-family: Roboto;
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
              "
            >
              {{ item.value }}
            </p>
          </div>
          <div class="d-flex">
            <SvgIcon
              :icon="
                item.status === 'up' ? 'arrow-trend-up' : 'arrow-trend-down'
              "
            />
            <p
              class="mx-2"
              style="
                color: var(--Black, #21094a);
                /* 12/HI1-R-12 */
                font-family: Roboto;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 18px */
              "
            >
              {{ item.statusPercentage }}
            </p>
            <p
              style="
                color: var(--Lite, #afaacb);
                /* 12/HI1-R-12 */
                font-family: Roboto;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 18px */
              "
            >
              This month
            </p>
          </div>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="8">
        <VCard
          flat
          class="pa-6"
          style="border-radius: 12px; background: var(--White, #fff)"
        >
          <section class="d-flex justify-space-between align-center">
            <div class="d-flex justify-start">
              <p
                class="my-auto"
                style="
                  color: var(--Black, #21094a);
                  /* 24/H7-B-24 */
                  font-family: Roboto;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 36px */
                "
              >
                Revenue
              </p>
            </div>
            <div class="d-flex justify-end">
              <v-radio-group inline hide-details color="primary" class="me-4">
                <v-radio label="Year" value="Year" class="me-4"></v-radio>
                <v-radio label="Month" value="month"></v-radio>
              </v-radio-group>
              <div style="width: 7rem" class="ms-4">
                <VSelect
                  label=""
                  :items="[2020, 2021, 2022, 2023, 2024]"
                  :value="2024"
                  density="compact"
                  variant="outlined"
                  placeholder="Choose Role"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <DashboardChart />
            </div>
          </section>
        </VCard>
      </VCol>
      <VCol cols="4">
        <VCard
          flat
          class="pa-6"
          style="
            border-radius: 12px;
            background: var(--White, #fff);
            min-height: 100%;
          "
        >
          <div class="d-flex justify-start">
            <p
              class="my-auto"
              style="
                color: var(--Black, #21094a);
                /* 24/H7-B-24 */
                font-family: Roboto;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 36px */
              "
            >
              Top Governorate
            </p>
          </div>
          <section style="display: flex; flex-direction: column; gap: 2rem">
            <div class="mt-6" v-for="(item, i) in Governorate" :key="item.uuid">
              <span class="d-flex justify-space-between mb-3">
                <p style="color: #21094a; font-weight: 400; font-size: 14px">
                  {{ item.displayName_En }}
                </p>
                <div class="d-flex align-center" style="gap: 0.5rem">
                  <p style="color: #21094a; font-weight: 700; font-size: 14px">
                    {{ formateNumber(item.price) }} KD
                  </p>
                  <SvgIcon
                    :icon="
                      item.increase === true
                        ? 'arrow-trend-up'
                        : 'arrow-trend-down'
                    "
                  />
                </div>
              </span>
              <Bar style="width: 100%" :stars="i + 4" />
            </div>
          </section>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="4" v-for="(item, i) in topDetailsItems" :key="i">
        <VCard
          flat
          class="pa-6"
          style="border-radius: 12px; background: var(--White, #fff)"
        >
          <div class="d-flex justify-start">
            <p
              class="my-auto"
              style="
                color: var(--Black, #21094a);
                /* 24/H7-B-24 */
                font-family: Roboto;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 36px */
              "
            >
              {{ item.title }}
            </p>
          </div>
          <div class="mt-6">
            <div class="d-flex justify-space-between my-4" v-for="i in 6">
              <div class="d-flex my-auto">
                <img class="me-4" src="@/assets/test-avatar.png" />
                <p
                  style="
                    color: var(--Black, #21094a);
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                  "
                  class="my-auto"
                >
                  Lorem ipsum dolor sit
                </p>
              </div>
              <p
                class="my-auto"
                style="
                  color: var(--Black, #21094a);
                  text-align: right;
                  font-family: Roboto;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 150%;
                "
              >
                100 times
              </p>
            </div>
          </div>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VCard
          flat
          class="pa-6"
          style="border-radius: 12px; background: var(--White, #fff)"
        >
          <div class="d-flex justify-start">
            <p
              class="my-auto mb-6"
              style="
                color: var(--Black, #21094a);
                /* 24/H7-B-24 */
                font-family: Roboto;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 36px */
              "
            >
              Latest Reviews
            </p>
          </div>
          <ListingItems
            :headers="headers"
            :items="items"
            :itemValue="'uuid'"
            :show-select="false"
          />
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
.review {
  padding: 0.5rem;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
