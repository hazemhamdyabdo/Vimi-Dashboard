export const useOrderStatus = () => {
  const statuses = ref([
    "Pending",
    "In progress",
    "Shipped",
    "Delivered",
    "Cancelled",
    "Return Requested",
    "Return In Progress",
    "Returned",
    // "Return Cancelled",
    // "reject return request",
  ]);

  const nextStatus = (currentStatus: string) => {
    const currentIndex = statuses.value?.indexOf(currentStatus);
    if (currentStatus === "Delivered" || currentStatus === "Cancelled") {
      return [currentStatus];
    } else if (currentIndex >= 0 && currentIndex < statuses.value?.length - 1) {
      return [statuses.value[currentIndex + 1]];
    }

    return [currentStatus];
  };

  return {
    statuses,
    nextStatus
  }
}