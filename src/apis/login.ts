import { resource } from './client.ts';

const resourceObj = resource('auth/authenticate');

const { create: login } = resourceObj;

export default login;
