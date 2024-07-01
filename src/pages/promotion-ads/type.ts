interface Ad {
  uuid?:String;
  Place: String;
  Status: String;
  Target: String;
  Navigation: String;
  StartDate: String;
  EndDate: String;
  CategoryUuid: String;
  SubCategoryUuid: String;
  BrandUuid: String;
  ProductUuids: Array<String>;
  GovernorateUuids: Array<String>;;
}


export { Ad };
