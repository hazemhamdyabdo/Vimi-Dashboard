import { resource } from './client.ts';

const resourceObj = resource('auth/logout');

const { create: logout } = resourceObj;

export default logout;
