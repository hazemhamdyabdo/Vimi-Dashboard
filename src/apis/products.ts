import { resource } from "./client"

const { get: getProducts, create: addProduct, update: updateProduct, show: showProduct, remove: removeProduct } = resource('products')

export {
  getProducts,
  addProduct,
  updateProduct,
  showProduct,
  removeProduct
}