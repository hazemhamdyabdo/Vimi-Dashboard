import { getAd } from '@/apis/ads';
import type { Ad } from '@/pages/promotion-ads/type.ts';
export const useEditAdData = () => {
  const route = useRoute();
  const isEditing = computed(() => !!route.params.id);

  const setAdData = async (newAd: Ad, adImg: Ref<any>) => {
    if (isEditing.value) {
      try {
        const {
          data: { data },
        } = await getAd(route.params.id as string);
        newAd.uuid = data.uuid;
        newAd.Status = data.status;
        newAd.Target = data.target;
        newAd.Navigation = data.navigation;
        newAd.Place = data.place;
        adImg.value = data.imagePath;
        newAd.StartDate = data.startDate;
        newAd.EndDate = data.dateCreated;
        newAd.CategoryUuid = data.categoryUuid;
        newAd.GovernorateUuids = data.governorates;
      } catch (error) {
        throw error;
      }
    }
  };
  return {
    isEditing,
    setAdData,
  };
};
