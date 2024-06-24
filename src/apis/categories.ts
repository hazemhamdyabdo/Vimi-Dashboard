import { resource } from './client.ts';

const resourceObj = resource('categories');

const {
  get: getCtegories,
  update: updateCtegories,
  show: getCtegory,
  removeAll: deleteMultipleCtegories,
  remove: deleteCtegories,
} = resourceObj;

export {
  getCtegories,
  updateCtegories,
  getCtegory,
  deleteMultipleCtegories,
  deleteCtegories,
};
