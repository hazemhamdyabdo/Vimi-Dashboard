import { resource } from './client.ts';

const resourceObj = resource('users/my');

const { get: getUserData } = resourceObj;

export default getUserData;
