import { resource } from './client.ts';

const resourceObj = resource('ads');

const {
  get: getAds,
  // update: updateCtegories,
  // show: getCtegory,
  // removeAll: deleteMultipleCtegories,
  remove: deleteAds,
} = resourceObj;

export {
  getAds,
  // updateCtegories,
  // getCtegory,
  // deleteMultipleCtegories,
  deleteAds,
};
