<template>
  <section class="add-products px-6">
    <VContainer>
      <VCard
        flat
        color="#fff"
        class="d-flex justify-space-between px-5 py-6"
        style="border-radius: 12px; background: var(--White, #fff)"
      >
        <div class="d-flex my-auto">
          <p
            class="my-auto me-8"
            style="
              color: var(--Black, #21094a);
              /* 16/B1-B-16 */
              font-family: Roboto;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%; /* 24px */
            "
          >
            #43763898
          </p>
          <div class="d-flex me-8">
            <svgIcon icon="event calendar" class="my-auto me-1" />
            <p
              class="my-auto me-2"
              style="
                color: var(--hint, #9089b2);
                text-align: center;
                /* 16/B1-R-16 */
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 24px */
              "
            >
              Creation date :
            </p>
            <p
              class="my-auto"
              style="
                color: var(--Black, #21094a);
                text-align: center;
                /* 16/B1-M-16 */
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 24px */
              "
            >
              21/3/2024
            </p>
          </div>
          <div class="d-flex my-auto">
            <p
              class="px-2 py-1 text-subtitle-1 ma-auto"
              style="
                max-width: 150px;
                font-size: 12px;
                padding: 0.2rem 0;
                border-radius: 8px;
                background-color: #27ae601a;
                color: #27ae60;
              "
            >
              Active
            </p>
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex my-auto">
            <svgIcon icon="Change" class="me-2 my-auto" />
            <p>Renew Discount</p>
          </div>
          <v-divider vertical class="mx-4" />
          <div class="d-flex my-auto">
            <svgIcon icon="delete (1)" class="me-2 my-auto" />
            <p>Delete</p>
          </div>
        </div>
      </VCard>
      <VCard
        flat
        color="#fff"
        class="d-flex justify-space-between px-5 py-6 mt-6"
        style="border-radius: 12px; background: var(--White, #fff)"
      >
        <VRow>
          <VCol cols="4">
            <VCard
              flat
              color="#FAF9FE"
              style="border-radius: 12px"
              class="pa-6 h-100"
            >
              <p
                style="
                  color: var(--Heavy, #7066a2);
                  /* 18/H9-B-18 */
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 27px */
                "
              >
                Discount on
              </p>
              <div class="d-flex justify-start mt-5">
                <img
                  style="width: 38px; height: 38px"
                  src="@/assets/multivitaminDetails.png"
                  alt="product"
                  class="me-2"
                />
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  Vitamins & Minerals
                </p>
              </div>
            </VCard>
          </VCol>
          <VCol cols="4">
            <VCard
              flat
              color="#FAF9FE"
              style="border-radius: 12px"
              class="pa-6 h-100"
            >
              <p
                style="
                  color: var(--Heavy, #7066a2);
                  /* 18/H9-B-18 */
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 27px */
                "
              >
                Discount to
              </p>
              <div class="mt-5">
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  Governorate 1
                </p>
                <v-divider class="my-3" />
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  Governorate 2
                </p>
                <v-divider class="my-3" />
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  Governorate 3
                </p>
                <v-divider class="my-3" />
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  Governorate 4
                </p>
              </div>
            </VCard>
          </VCol>
          <VCol cols="4">
            <VCard
              flat
              color="#FAF9FE"
              style="border-radius: 12px"
              class="pa-6 h-40"
            >
              <p
                style="
                  color: var(--Heavy, #7066a2);
                  /* 18/H9-B-18 */
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 27px */
                "
              >
                Discount Ratio
              </p>
              <p
                class="my-auto mt-5"
                style="
                  color: var(--Red, #eb5757);
                  /* 16/B1-B-16 */
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 24px */
                "
              >
                30%
              </p>
            </VCard>
            <VCard
              flat
              color="#FAF9FE"
              style="border-radius: 12px"
              class="pa-6 mt-6 h-40"
            >
              <p
                style="
                  color: var(--Heavy, #7066a2);
                  /* 18/H9-B-18 */
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 27px */
                "
              >
                Schedule discount
              </p>
              <div class="d-flex justify-start mt-6">
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  25 March 2024
                </p>
                <svgIcon icon="arrow" class="mx-4" />
                <p
                  class="my-auto"
                  style="
                    color: var(--Black, #21094a);
                    /* 14/B2-R-14 */
                    font-family: Roboto;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 21px */
                  "
                >
                  30 March 2024
                </p>
              </div>
            </VCard>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>
  </section>
</template>
