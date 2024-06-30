import { resource } from "./client"
const { get: getOrders, show: showOrder } = resource('orders')
export {
  getOrders,
  showOrder
}