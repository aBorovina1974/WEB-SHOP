import React, { useMemo, useState } from "react";
import Notification from "../components/Notification/Notification";

const useNotification = () => {
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [notificationKey, setNotificationKey] = useState(0);

  const showSuccess = (message) => {
    setNotification({ message, type: "success" });
    setNotificationKey((prevKey) => prevKey + 1);
  };

  const showError = (message) => {
    setNotification({ message, type: "error" });
    setNotificationKey((prevKey) => prevKey + 1);
  };

  const dismissNotification = () => {
    setNotification({ message: "", type: "" });
  };

  const notificationComponent = useMemo(
    () => (
      <Notification
        key={notificationKey}
        message={notification.message}
        type={notification.type}
        onDismiss={dismissNotification}
      />
    ),
    [notificationKey, notification.message, notification.type]
  );

  return { showSuccess, showError, notificationComponent };
};

export default useNotification;
