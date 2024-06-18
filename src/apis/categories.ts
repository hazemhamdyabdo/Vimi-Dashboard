import { resource } from './client.ts';

const resourceObj = resource('categories');

const {
  get: getCtegories,
  show: getCtegory,
  removeAll: deleteMultipleCtegories,
  remove: deleteCtegories,
} = resourceObj;

export { getCtegories, getCtegory, deleteMultipleCtegories, deleteCtegories };
