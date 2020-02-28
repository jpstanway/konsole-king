import { NotificationActionTypes } from "./notification.types";

const initialState = {
  message: "",
  error: false,
  hidden: true
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
        hidden: false
      };
    case NotificationActionTypes.CLEAR_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};

export default notificationReducer;
