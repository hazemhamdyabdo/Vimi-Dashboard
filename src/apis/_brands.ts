import { resource } from "./client"

const { get: getBrands, show: getBrand, create: addBrand, replace: updateBrand, remove: deleteBrand } = resource("brands");
export {
  getBrands,
  getBrand,
  addBrand,
  updateBrand,
  deleteBrand
}