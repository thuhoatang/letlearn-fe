import { notification } from "antd";
import React from "react";
import NotificationContext from "../../contexts/notification";

export default function Notification({ children }) {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <NotificationContext.Provider value={{ api: api }}>
        {children}
      </NotificationContext.Provider>
    </>
  );
}
