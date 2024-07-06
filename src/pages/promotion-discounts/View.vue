<script setup lang="ts">
import { getDiscount, deleteDiscounts } from '@/apis/discounts';
import { useStyleState } from '@/composables/UseStyleState';

const { getStyleStatus } = useStyleState();

const dateFormattinmg = (date: any) => {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const route = useRoute();
const router = useRouter();
const modalOptions = ref({});
let modalState = ref(false);
let discount: any = ref({});
let isPageLoading = ref(false);
let isDeletionInProgress = ref(false);

const DeleteEmits: any = computed(() => {
  return {
    options: {
      title: 'Delete Discount',
      text: 'Are you sure you want to delete all of the selected Products ?',
      buttonTitle: 'Yes, Delete',
      secondaryButtonTitle: 'Cancel',
      buttonColor: '#EB5757',
      icon: 'deleteIcon',
      sheetColor: '#eb57571a',
    },
  };
});

const setDiscountsData = async () => {
  isPageLoading.value = true;
  try {
    const { data } = await getDiscount(route.params.id as string);
    discount.value = data.data;
    isPageLoading.value = false;
  } catch {}
};

const deleteDiscount = async () => {
  isDeletionInProgress.value = true;
  try {
    await deleteDiscounts(discount.value.uuid);
  } catch {
  } finally {
    router.push({ name: 'promotion-ads' });
    isDeletionInProgress.value = false;
  }
};

const toggleDeleteModal = ({ uuid = '', options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
  console.log(uuid);
};

const handleCancel = () => {
  toggleDeleteModal({});
};

onMounted(async () => {
  setDiscountsData();
});
</script>
<template>
  <section class="add-products px-6">
    <VContainer>
      <v-skeleton-loader v-if="isPageLoading" type="list-item-two-line" />
      <VCard
        v-else
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
            #{{ discount?.uuid?.slice(0, 6) }}
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
              {{ dateFormattinmg(discount.dateCreated) }}
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
              "
              :style="`background-color: ${getStyleStatus(discount.status)?.background}; color: ${getStyleStatus(discount.status)?.color}`"
            >
              {{ discount.status }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex my-auto">
            <svgIcon icon="Change" class="me-2 my-auto" />
            <p>Renew Discount</p>
          </div>
          <v-divider vertical class="mx-4" />
          <VBtn
            flat
            class="d-flex my-auto"
            :loading="isDeletionInProgress"
            @click="toggleDeleteModal(DeleteEmits)"
          >
            <svgIcon icon="delete (1)" class="me-2 my-auto" />
            <p>Delete</p>
          </VBtn>
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
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
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
                  {{ discount.discountOn }}
                </p>
              </div>
            </VCard>
          </VCol>
          <VCol cols="4">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
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
              <div
                class="mt-5"
                v-for="gov in discount.governorates"
                :key="gov.uuid"
              >
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
                  {{ gov.governorateUuid }}
                </p>
                <v-divider class="my-3" />
              </div>
            </VCard>
          </VCol>
          <VCol cols="4">
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
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
                {{ discount.ratio }}%
              </p>
            </VCard>
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
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
                  {{ dateFormattinmg(discount.dateCreated) }}
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
                  {{ dateFormattinmg(discount.dateCreated) }}
                </p>
              </div>
            </VCard>
          </VCol>
        </VRow>
      </VCard>
      <GlobalPopup
        :options="modalOptions"
        :modalState="modalState"
        :onCancel="handleCancel"
        :onConfirm="deleteDiscount"
      />
    </VContainer>
  </section>
</template>
