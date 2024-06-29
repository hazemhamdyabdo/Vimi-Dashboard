import { resource } from "./client"
const { get: getOrders } = resource('orders')
export {
  getOrders
}