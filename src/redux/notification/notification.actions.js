import { NotificationActionTypes } from "./notification.types";

export const showNotification = message => {
  return async dispatch => {
    await dispatch({
      type: NotificationActionTypes.SHOW_NOTIFICATION,
      payload: message
    });

    setTimeout(() => {
      dispatch({
        type: NotificationActionTypes.CLEAR_NOTIFICATION
      });
    }, 5000);
  };
};
