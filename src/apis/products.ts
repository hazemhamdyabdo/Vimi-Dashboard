import { resource } from "./client"

const { get: getProducts, create: addProduct, update: updateProduct, show: showProduct, remove: deleteProduct } = resource('products')

export {
  getProducts,
  addProduct,
  updateProduct,
  showProduct,
  deleteProduct
}