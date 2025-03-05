import { notification } from "antd";
import React, { createContext } from "react";

export const NotificationContext = createContext({});

export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={{ notification: api }}>
      {contextHolder}
      <>{children}</>
    </NotificationContext.Provider>
  );
};
