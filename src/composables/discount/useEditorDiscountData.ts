import { getDiscount } from '@/apis/discounts';
import type { Discount } from '@/pages/promotion-discounts/type.ts';
export const useEditDiscountData = () => {
  const route = useRoute();
  const isEditing = computed(() => !!route.params.id);

  const setDiscountData = async (newDiscount: Discount) => {
    if (isEditing.value) {
      try {
        const {
          data: { data },
        } = await getDiscount(route.params.id as string);

        newDiscount.uuid = data.uuid;
        newDiscount.discountOn = data.discountOn;
        newDiscount.Target = data.target;
        newDiscount.status = data.status;
        newDiscount.startDate = data.startDate;
        newDiscount.ratio = data.ratio;
        newDiscount.GovernorateUuids = data.governorates;
        newDiscount.endDate = data.dateCreated;
        newDiscount.CategoryUuid = data.categoryUuid;
      } catch (error) {
        throw error;
      }
    }
  };
  return {
    isEditing,
    setDiscountData,
  };
};
