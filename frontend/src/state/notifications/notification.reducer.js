const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        notifications: [...state.notifications, action.data],
      };
    case "REMOVE_FIRST_NOTIFICATION":
      const newList = state.notifications.slice(1);
      return {
        notifications: newList,
      };
    default:
      return state;
  }
};

export default notificationReducer;
