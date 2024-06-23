import type { Product } from "@/pages/products/type";

export const useProductDiscount = (newProduct: Product) => {
  const isScheduledOpen = ref(false);
  const dateFrom = ref("");
  const dateTo = ref();
  const isThereSelectedDates = ref(false);
  const deleteDiscount = () => {
    newProduct.value.discounts = null;
    isThereSelectedDates.value = false;
    dateFrom.value = "";
    dateTo.value = "";
    isScheduledOpen.value = false;
  };
  const setDiscount = (dateFrom: string, dateTo: string) => {
    newProduct.value.discounts.dateFrom = dateFrom;
    newProduct.value.discounts.dateTo = dateTo;
    isThereSelectedDates.value = true;
  };

  return {
    isScheduledOpen,
    dateFrom,
    dateTo,
    isThereSelectedDates,
    deleteDiscount,
    setDiscount
  }
}