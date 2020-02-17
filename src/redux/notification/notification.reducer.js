import { NotificationActionTypes } from "./notification.types";

const initialState = {
  message: "",
  hidden: true
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
        hidden: false
      };
    case NotificationActionTypes.CLEAR_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};

export default notificationReducer;
