import { resource } from './client.ts';

const resourceObj = resource('auth/refresh');

const { create: updateToken } = resourceObj;

export default updateToken;
