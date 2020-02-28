import { NotificationActionTypes } from "./notification.types";

export const showNotification = (message, error = false) => {
  return async dispatch => {
    await dispatch({
      type: NotificationActionTypes.SHOW_NOTIFICATION,
      payload: {
        message,
        error
      }
    });

    setTimeout(() => {
      dispatch({
        type: NotificationActionTypes.CLEAR_NOTIFICATION
      });
    }, 5000);
  };
};
