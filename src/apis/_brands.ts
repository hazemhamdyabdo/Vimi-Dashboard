import { resource } from "./client"

const { get: getBrands } = resource("brands");
export {
  getBrands
}