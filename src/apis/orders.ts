import { resource } from "./client"
const { get: getOrders, show: showOrder } = resource('orders')
const rejectOrder = (orderId: string) => {
  const { replace: reject } = resource(`orders/${orderId}/reject`)
  return reject
}
export {
  getOrders,
  showOrder,
  rejectOrder
}