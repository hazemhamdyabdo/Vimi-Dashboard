import type { Category } from '@/pages/categories/type';

export const useEditor = (newCategory: Category) => {
  const description_Ar: any = ref(null);
  const description_En: any = ref(null);
  const setEditorValue = () => {
    newCategory.value.description_Ar = description_Ar?.value.getText();
    newCategory.value.description_En = description_En?.value.getText();
  };

  return {
    description_Ar,
    description_En,
    setEditorValue,
  };
};
