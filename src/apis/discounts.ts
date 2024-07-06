import { resource } from './client.ts';

const resourceObj = resource('discounts');

const {
  create: createDiscount,
  get: getDiscounts,
  // update: updateCtegories,
  show: getDiscount,
  // removeAll: deleteMultipleCtegories,
  remove: deleteDiscounts,
} = resourceObj;

export {
  getDiscounts,
  createDiscount,
  // updateCtegories,
  getDiscount,
  // deleteMultipleCtegories,
  deleteDiscounts,
};
