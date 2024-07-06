<script setup lang="ts">
import { getAd, deleteAds } from '@/apis/ads';

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
let ad: any = ref({});
let isPageLoading = ref(false);
let isDeletionInProgress = ref(false);

const DeleteEmits: any = computed(() => {
  return {
    options: {
      title: 'Delete Ad',
      text: 'Are you sure you want to delete all of the selected Products ?',
      buttonTitle: 'Yes, Delete',
      secondaryButtonTitle: 'Cancel',
      buttonColor: '#EB5757',
      icon: 'deleteIcon',
      sheetColor: '#eb57571a',
    },
  };
});

const setAdData = async () => {
  isPageLoading.value = true;
  try {
    const { data } = await getAd(route.params.id as string);
    ad.value = data.data;
    isPageLoading.value = false;
  } catch {}
};

const deleteAd = async () => {
  isDeletionInProgress.value = true;
  try {
    await deleteAds(ad.value.uuid);
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
  setAdData();
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
            #{{ ad?.uuid?.slice(0, 6) }}
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
              {{ dateFormattinmg(ad.dateCreated) }}
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
              {{ ad.status }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex my-auto">
            <svgIcon icon="Change" class="me-2 my-auto" />
            <p>Renew Ad</p>
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
                Navigate To
              </p>
              <div class="d-flex justify-start mt-5">
                <img
                  style="width: 38px; height: 38px"
                  :src="`https://techify-001-site1.htempurl.com${ad.imagePath}`"
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
                  {{ ad.navigation }}
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
              class="pa-6"
              v-if="ad.governorates?.length"
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
                AD to
              </p>
              <div class="mt-5" v-for="gov in ad.governorates" :key="gov.uuid">
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
            <v-skeleton-loader v-if="isPageLoading" type="card" />
            <VCard
              v-else
              flat
              color="#FAF9FE"
              style="border-radius: 12px"
              class="pa-6"
              :class="{ 'mt-6': ad.governorates?.length }"
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
                AD Place
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
                  {{ ad.place }}
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
                AD Banner
              </p>
              <img
                :src="`https://techify-001-site1.htempurl.com${ad.imagePath}`"
                class="w-100 mt-6"
              />
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
                Schedule AD
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
                  {{ dateFormattinmg(ad.dateCreated) }}
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
                  {{ dateFormattinmg(ad.endDate) }}
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
        :onConfirm="deleteAd"
      />
    </VContainer>
  </section>
</template>
