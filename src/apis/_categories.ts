import { resource } from "./client"

const { get: getCategories } = resource('categories')
export {
  getCategories
}