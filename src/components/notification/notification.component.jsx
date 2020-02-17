import React from "react";
import { connect } from "react-redux";

import { NotificationContainer, NotificationText } from "./notification.styles";

const Notification = ({ notification }) => (
  <NotificationContainer hidden={notification.hidden}>
    <NotificationText>{notification.message}</NotificationText>
  </NotificationContainer>
);

const mapStateToProps = state => ({
  notification: state.notification
});

export default connect(mapStateToProps)(Notification);
