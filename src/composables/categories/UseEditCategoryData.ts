import { getCtegory } from '@/apis/categories.ts';
import type { Category } from '@/pages/categories/type';
export const useEditCategoryData = () => {
  const route = useRoute();
  const isEditing = computed(() => !!route.params.id);

  const getEditorValue = (
    data: any,
    description_En: Ref<any>,
    description_Ar: Ref<any>
  ) => {
    // @ts-ignore
    description_En.value?.setText(data?.description_En);
    // @ts-ignore
    description_Ar.value?.setText(data?.description_Ar);
  };
  const setCategoryData = async (
    newCategory: Category,
    tagsToAdd: Ref<any>,
    subCategoriesToAdd: Ref<any>,
    categoryImg: Ref<any>,
    description_En: Ref<any>,
    description_Ar: Ref<any>
  ) => {
    if (isEditing.value) {
      try {
        const {
          data: { data },
        } = await getCtegory(route.params.id as string);
        newCategory.uuid = data.uuid;
        newCategory.displayName_Ar = data.displayName_Ar;
        newCategory.displayName_En = data.displayName_En;
        newCategory.visibility = data.visibility;
        tagsToAdd.value = data.tags.map((tag: any, index: Number) => {
          return {
            title: tag,
            id: index,
          };
        });
        subCategoriesToAdd.value = data.subCategories.map(
          (subCategory: any, index: Number) => {
            return {
              displayName_Ar: subCategory.displayName_Ar,
              displayName_En: subCategory.displayName_En,
              id: index,
            };
          }
        );
        categoryImg.value = data.imagePath;
        setTimeout(() => {
          getEditorValue(data, description_En, description_Ar);
        });
      } catch (error) {
        throw error;
      }
    }
  };
  return {
    isEditing,
    setCategoryData,
  };
};
