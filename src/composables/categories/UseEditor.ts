import type { Category } from '@/pages/categories/type';

export const useEditor = (newCategory: Category) => {
  let description_Ar: any = ref(null);
  let description_En: any = ref(null);
  const setEditorValue = () => {
    newCategory.description_Ar = description_Ar?.value.getText();
    newCategory.description_En = description_En?.value.getText();
  };

  return {
    description_Ar,
    description_En,
    setEditorValue,
  };
};
