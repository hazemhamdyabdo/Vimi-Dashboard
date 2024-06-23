import { showProduct } from "@/apis/products";
import type { Product } from "@/pages/products/type";
export const isPageLoading = ref(false);
export const useEditProductData = () => {


  const route = useRoute();
  const oldQuantity = ref(0);
  const isEditing = computed(() => !!route.params.id);
  const getEditorValue = (newProduct: Product, suggestedUse: Ref<any>, suggestedUse_Ar: Ref<any>, generalInfo: Ref<any>, generalInfo_Ar: Ref<any>) => {
    // @ts-ignore
    suggestedUse.value?.setText(newProduct.value?.suggestedUse_En);
    // @ts-ignore
    suggestedUse_Ar.value?.setText(newProduct.value?.suggestedUse_Ar);
    // @ts-ignore
    generalInfo.value?.setText(newProduct.value?.generalInfo_En);
    // @ts-ignore
    generalInfo_Ar.value?.setText(newProduct.value?.generalInfo_Ar);

  }

  const setProductData = async (newProduct: Product, tagsToAdd: Ref<any>, imgSrcs: Ref<any>, suggestedUse: Ref<any>, suggestedUse_Ar: Ref<any>, generalInfo: Ref<any>, generalInfo_Ar: Ref<any>) => {
    if (isEditing) {
      // !when uncomment this and comment isPageLoading then the editor access to ref and found it null
      // isPageLoading.value = true;
      try {
        const {
          data: { data },
        } = await showProduct(route.params.id as string);
        newProduct.value = data;
        getEditorValue(newProduct, suggestedUse, suggestedUse_Ar, generalInfo, generalInfo_Ar);
        oldQuantity.value = newProduct.value.stockQuantity;
        // ! expire date not show in case edit
        newProduct.value.expireDate = newProduct.value.dateExpiry;
        tagsToAdd.value = newProduct.value.tags;
        imgSrcs.value = newProduct.value.images?.map(
          (image: { imagePath: string }) => image.imagePath
        );
      } catch (error) {
        throw error
      } finally {
        isPageLoading.value = false
      }
    }

  }
  return {
    oldQuantity,
    isEditing,
    setProductData,
    getEditorValue

  };
}