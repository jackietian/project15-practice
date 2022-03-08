export const addNotificationAction = (data) => ({
  type: "ADD_NOTIFICATION",
  data,
});

export const removeNotification = () => ({
  type: "REMOVE_FIRST_NOTIFICATION",
});
