import { resource } from "./client"
const { get: getOrders, show: showOrder } = resource('orders')
const rejectOrder = (orderId: string, rejectReason: string) => {
  const { replace: reject } = resource(`orders/${orderId}/reject?rejectionReason=${rejectReason}`)
  return reject
}
export {
  getOrders,
  showOrder,
  rejectOrder
}