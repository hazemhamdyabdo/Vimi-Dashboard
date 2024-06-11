import { resource } from './client.ts';

const resourceObj = resource('categories');

const {
  show: getCtegory,
  get: getCtegories,
  removeAll: deleteMultipleCtegories,
  remove: deleteCtegories,
} = resourceObj;

export { getCtegories, getCtegory, deleteMultipleCtegories, deleteCtegories };
