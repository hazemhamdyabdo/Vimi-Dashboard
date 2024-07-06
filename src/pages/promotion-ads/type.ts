interface Ad {
  uuid?: string;
  Place: string;
  Status: string;
  Target: string;
  Navigation: string;
  StartDate: string;
  EndDate: string;
  CategoryUuid: string;
  SubCategoryUuid: string;
  BrandUuid: string;
  ProductUuids: Array<string>;
  GovernorateUuids: Array<string>;
  dateCreated?: string;
}

export { Ad };
