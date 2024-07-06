interface Discount {
  uuid?: string;
  discountOn: string;
  status?: string;
  Target: string;
  ratio: Number;
  SubCategoryUuid: string;
  products: Array<{}>;
  GovernorateUuids: Array<string>;
  dateCreated?: string;
  statusLocalized: string;
  discountOnLocalized: string;
  startDate?: string;
  endDate?: string;
  CategoryUuid?: string;
}

export { Discount };
