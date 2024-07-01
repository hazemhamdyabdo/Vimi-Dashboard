import { resource } from './client';

const { get: getGovernorates } = resource('values/governorates');

export { getGovernorates };
