import { resource } from "./client"

const { get: getBrands, show: getBrand } = resource("brands");
export {
  getBrands,
  getBrand
}