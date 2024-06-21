<script setup lang="ts"></script>

<template>
  <section class="add-products px-6">
    <VContainer>
      <VCard
        flat
        style="border-radius: 12px; background: var(--White, #fff)"
        class="pa-4"
      >
        <VRow>
          <VCol cols="5">
            <VCol>
              <VCard
                flat
                width="398px"
                height="398px"
                class="d-flex align-center justify-center"
                style="
                  border-radius: 12px;
                  border: 1px solid var(--Stroke, #e8e7ef);
                  background: var(--Surface, #faf9fe);
                "
              >
                <VCard
                  flat
                  width="334px"
                  height="334px"
                  class="d-flex align-center justify-center ma-auto"
                  style="
                    border-radius: 8px;
                    border: 1px solid var(--Stroke, #e8e7ef);
                    background: var(--White, #fff);
                  "
                >
                  <div
                    style="
                      display: flex;
                      gap: 1rem;
                      align-items: center;
                      flex-direction: column;
                      justify-content: center;
                    "
                  >
                    <div class="ma-auto">
                      <svgIcon icon="notification-xl" />
                    </div>
                  </div>
                </VCard>
              </VCard>
            </VCol>
            <VCol>
              <VCard
                flat
                class="pa-8"
                style="
                  border-radius: 8px;
                  border: 1px solid var(--Stroke, #e8e7ef);
                  background: var(--Surface, #faf9fe);
                "
              >
                <div class="d-flex justify-space-between">
                  <p
                    style="
                      color: var(--Heavy, #7066a2);
                      font-family: Roboto;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 150%;
                    "
                  >
                    Schedule Notification
                  </p>
                  <p
                    style="
                      color: var(--Black, #21094a);
                      font-family: Roboto;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 150%;
                    "
                  >
                    Weekly
                  </p>
                </div>
                <div class="mt-6 d-flex justify-start">
                  <VCard
                    flat
                    class="px-2 py-1 me-2"
                    style="
                      border-radius: 6px;
                      border: 1px solid var(--Stroke, #e8e7ef);
                      background: var(--White, #fff);
                    "
                  >
                    Sunday
                  </VCard>
                  <VCard
                    flat
                    class="px-2 py-1"
                    style="
                      border-radius: 6px;
                      border: 1px solid var(--Stroke, #e8e7ef);
                      background: var(--White, #fff);
                    "
                  >
                    Sunday
                  </VCard>
                </div>
              </VCard>
            </VCol>
          </VCol>
          <VCol cols="7">
            <VCol>
              <VCard flat>
                <div class="d-flex justify-space-between mb-3">
                  <p
                    style="
                      color: var(--Black, #21094a);
                      font-family: Roboto;
                      font-size: 24px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 150%;
                    "
                  >
                    Lorem Ipsum is simply
                  </p>
                  <VCard
                    flat
                    class="px-2 py-1 d-flex"
                    style="
                      border-radius: 8px;
                      background: var(--Surface, #faf9fe);
                    "
                  >
                    <RouterLink :to="{ name: 'add-notification' }">
                      <svgIcon icon="edit" class="ma-auto" />
                    </RouterLink>
                  </VCard>
                </div>
                <div class="mb-4">
                  <p
                    style="
                      color: var(--Heavy, #7066a2);
                      font-family: Roboto;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 150%;
                    "
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br />Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="mb-8 d-flex">
                  <div class="d-flex me-4" v-for="i in 2" :key="i">
                    <p
                      class="me-2"
                      style="
                        color: var(--hint, #9089b2);
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%;
                      "
                    >
                      Creation date :
                    </p>
                    <p
                      style="
                        color: var(--Black, #21094a);
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%;
                      "
                    >
                      21/3/2024
                    </p>
                  </div>
                </div>
                <VCard
                  flat
                  class="pa-6 mb-6"
                  style="
                    border-radius: 8px;
                    border: 1px solid var(--Stroke, #e8e7ef);
                    background: var(--Surface, #faf9fe);
                  "
                >
                  <div class="d-flex justify-space-between mb-6">
                    <p
                      style="
                        color: var(--Heavy, #7066a2);
                        /* 16/B1-M-16 */
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 24px */
                      "
                    >
                      Navigate To
                    </p>
                    <p
                      style="
                        color: var(--Black, #21094a);
                        text-align: right;
                        /* 16/B1-M-16 */
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 24px */
                      "
                    >
                      Custom Products
                    </p>
                  </div>
                  <div
                    v-for="i in 2"
                    :key="i"
                    class="d-flex py-2"
                    :style="i !== 2 ? 'border-bottom: 1px solid #e8e7ef' : ''"
                  >
                    <VCard
                      flat
                      width="40px"
                      height="40px"
                      class="d-flex me-2"
                      style="
                        border-radius: 50%;
                        border: 1px solid var(--Stroke, #e8e7ef);
                        background: #fff;
                      "
                    >
                      <img
                        src="@/assets/test-product.png"
                        alt="avatar"
                        class="ma-auto"
                        style="width: 35px; height: 40px"
                    /></VCard>
                    <p
                      class="my-auto"
                      style="
                        color: var(--Black, #21094a);
                        font-family: Roboto;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%;
                      "
                    >
                      Product 1
                    </p>
                  </div>
                </VCard>
                <VCard
                  flat
                  class="pa-6"
                  style="
                    border-radius: 8px;
                    border: 1px solid var(--Stroke, #e8e7ef);
                    background: var(--Surface, #faf9fe);
                  "
                >
                  <div class="d-flex justify-space-between mb-6">
                    <p
                      style="
                        color: var(--Heavy, #7066a2);
                        /* 16/B1-M-16 */
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 24px */
                      "
                    >
                      Notify To
                    </p>
                    <p
                      style="
                        color: var(--Black, #21094a);
                        text-align: right;
                        /* 16/B1-M-16 */
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 24px */
                      "
                    >
                      Custom users
                    </p>
                  </div>
                  <div
                    v-for="i in 2"
                    :key="i"
                    class="d-flex py-2"
                    :style="i !== 2 ? 'border-bottom: 1px solid #e8e7ef' : ''"
                  >
                    <img
                      src="@/assets/avatar.png"
                      style="border-radius: 50%"
                      class="me-2"
                    />
                    <p
                      class="my-auto"
                      style="
                        color: var(--Black, #21094a);
                        font-family: Roboto;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%;
                      "
                    >
                      Mohammed Gamal
                    </p>
                  </div>
                </VCard>
              </VCard>
            </VCol>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>
  </section>
</template>
<style scoped>
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
:global(.listen-table thead tr) {
  background-color: #faf9fe;
  color: #21094a;
  border: 1px solid #e8e7ef;
  margin-bottom: 5rem;
  border-radius: 12px;
  border-bottom: none;
}
:global(.v-table .v-table__wrapper > table > thead > tr > th) {
  border-bottom: 2px solid #7066a2;
  margin-bottom: 5rem;
}
</style>
