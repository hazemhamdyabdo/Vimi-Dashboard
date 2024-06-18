import { showProduct } from "@/apis/products";
import type { Product } from "@/pages/products/type";
export const useEditProductData = () => {
  const route = useRoute();
  const oldQuantity = ref(0);
  const isEditing = computed(() => !!route.params.id);
  const setProductData = async (newProduct: Product, tagsToAdd: Ref<any>, imgSrcs: Ref<any>, suggestedUse: Ref<any>, suggestedUse_Ar: Ref<any>, generalInfo: Ref<any>, generalInfo_Ar: Ref<any>) => {
    if (isEditing) {
      try {
        const {
          data: { data },
        } = await showProduct(route.params.id as string);
        newProduct.value = data;
        oldQuantity.value = newProduct.value.stockQuantity;

        // @ts-ignore
        suggestedUse.value.setText(newProduct.value.suggestedUse_En);
        // @ts-ignore
        suggestedUse_Ar.value.setText(newProduct.value.suggestedUse_Ar);
        // @ts-ignore
        generalInfo.value.setText(newProduct.value.generalInfo_En);
        // @ts-ignore
        generalInfo_Ar.value.setText(newProduct.value.generalInfo_Ar);
        // ! expire date not show in case edit
        newProduct.value.expireDate = newProduct.value.dateExpiry;
        tagsToAdd.value = newProduct.value.tags;
        imgSrcs.value = newProduct.value.images?.map(
          (image: { imagePath: string }) => image.imagePath
        );


      } catch (error) {
        throw error
      }
    }

  }
  return {
    oldQuantity,
    isEditing,
    setProductData
  };
}