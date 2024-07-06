import { resource } from './client.ts';

const resourceObj = resource('ads');

const {
  get: getAds,
  // update: updateCtegories,
  show: getAd,
  // removeAll: deleteMultipleCtegories,
  remove: deleteAds,
} = resourceObj;

export {
  getAds,
  // updateCtegories,
  getAd,
  // deleteMultipleCtegories,
  deleteAds,
};
