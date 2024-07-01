export const useStyleState = () => {
  const getStyleStatus = (status: string) => {
    const styles = {
      Pending: {
        color: '#E2B000',
        background: '#e2b0001a',
      },
      Placed: {
        color: "#E2B000",
        background: "#e2b0001a",
      },
      Replied: {
        color: '#733EE4',
        background: '#733EE41a',
      },
      Solved: {
        color: '#27AE60',
        background: '#27AE601a',
      },
      Opened: {
        color: '#F2994A',
        background: '#F2994A1a',
      },
      Published: {
        color: '#27ae60',
        background: '#27ae601a',
      },
      Hidden: {
        color: '#EB5757',
        background: '#EB57571a',
      },
      Deleted: {
        color: '#EB5757',
        background: '#EB57571a',
      },
      Expired: {
        color: '#EB5757',
        background: '#EB57571a',
      },
      Delivered: {
        color: '#27ae60',
        background: '#27ae601a',
      },
      Active: {
        color: '#27ae60',
        background: '#27ae601a',
      },
      Shipped: {
        color: '#733EE4',
        background: '#733ee41a',
      },
      Returned: {
        color: '#21094A',
        background: '#21094a1a',
      },
      Blocked: {
        color: '#EB5757',
        background: '#eb57571a',
      },
      Stopped: {
        color: '#EB5757',
        background: '#eb57571a',
      },
      Cancelled: {
        color: '#EB5757',
        background: '#eb57571a',
      },
      ReturnCancelled: {
        color: "#EB5757",
        background: "#eb57571a",
      },
      Inactive: {
        color: '#EB5757',
        background: '#eb57571a',
      },
      'In progress': {
        color: '#F2994A',
        background: '#f2994a1a',
      },

      ReturnRequested: {
        color: "#F2994A",
        background: "#f2994a1a",
      },
      InProgress: {
        color: "#F2994A",
        background: "#f2994a1a",
      },
      ReturnInProgress: {
        color: "#21094A",
        background: "#21094a1a",
      },
      'Return in progress': {
        color: '#21094A',
        background: '#21094a1a',
      },
      Rejected: {
        color: '#EB5757',
        background: '#eb57571a',
      },
    };

    return styles[status];
  };

  return {
    getStyleStatus,
  };
};
