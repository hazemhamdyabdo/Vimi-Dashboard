import { resource } from "./client"

const { get: getBrands } = resource("public/brands");
export {
  getBrands
}