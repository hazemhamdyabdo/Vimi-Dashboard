interface Product {
  [x: string]: any;
  DisplayName_En: string;
  DisplayName_Ar: string;
  Sku: string;
  Description_En: string;
  Description_Ar: string;
  Category: string;
  SalePrice: number;
  Price: number;
  SubCategoryUuid: string;
  BrandUuid: string;
  ImageFiles?: string[];
  Discounts?: string[];
  Tags?: string[];
  GeneralInfo_En: string;
  GeneralInfo_Ar: string;
  SuggestedUse_En: string;
  SuggestedUse_Ar: string;
  Type: string;
  Visibility: string;
  ExpireDate: string;
  Weight: number;
  Width: number;
  Height: number;
  Depth: number;
  StockQuantity: number;
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

