import type { Product } from "@/pages/products/type";

export const useEditor = (newProduct: Product) => {
  const suggestedUse = ref(null);
  const suggestedUse_Ar = ref(null);
  const generalInfo = ref(null);
  const generalInfo_Ar = ref(null);
  const setEditorValue = () => {
    newProduct.value.suggestedUse_En = suggestedUse?.value.getText();
    newProduct.value.generalInfo_Ar = generalInfo_Ar?.value.getText();
    newProduct.value.suggestedUse_Ar = suggestedUse_Ar?.value.getText();
    newProduct.value.generalInfo_En = generalInfo?.value.getText();
  }


  return {
    suggestedUse,
    suggestedUse_Ar,
    generalInfo,
    generalInfo_Ar,
    setEditorValue
  }
}