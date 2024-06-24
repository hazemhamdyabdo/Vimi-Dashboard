interface Category {
  uuid?: string;
  displayName_En: string;
  displayName_Ar: string;
  description_En: string;
  description_Ar: string;
  visibility: Visibility;
  ImageFile: string;
  tags?: string[];
  subCategories: string[];
  value?: any;
}

type Visibility = 'Published' | 'Unpublished';

export { Category };
