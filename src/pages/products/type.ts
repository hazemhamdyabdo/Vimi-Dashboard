interface Product {
  [x: string]: any;
  displayName_En: string;
  displayName_Ar: string;
  sku: string;
  description_En: string;
  description_Ar: string;
  category: string;
  salePrice: number;
  price: number;
  subCategoryUuid: string;
  brandUuid: string;
  imageFiles?: string[];
  discounts?: string[];
  tags?: string[];
  generalInfo_En: string;
  generalInfo_Ar: string;
  suggestedUse_En: string;
  suggestedUse_Ar: string;
  type: string;
  visibility: string;
  expireDate: string;
  weight: number;
  width: number;
  height: number;
  depth: number;
  stockQuantity: number;
  categoryUuid: string;
}

type Visibility = "Published" | "Unpublished";

interface Brand {
  uuid: string;
  dateCreated: string; // or Date if you plan to use Date objects
  displayName_En: string;
  displayName_Ar: string;
  visibility: Visibility;
  photoPath: string;
}

export {
  Product,
  Brand
}

