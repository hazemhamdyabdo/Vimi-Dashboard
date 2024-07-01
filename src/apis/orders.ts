import { resource } from "./client"
const { get: getOrders, show: showOrder } = resource('orders')
const rejectOrder = (orderId: string, rejectReason: string) => {
  const { replace: reject } = resource(`orders/${orderId}/reject?rejectionReason=${rejectReason}`)
  return reject
}
const changeOrderStatusAndEstimatedDays = (orderId: string, query = '') => {
  const { replace: changeOrder } = resource(`orders/${orderId}/status${query}`)
  return changeOrder
}
export {
  getOrders,
  showOrder,
  rejectOrder,
  changeOrderStatusAndEstimatedDays
}