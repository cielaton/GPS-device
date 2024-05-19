import React, { createContext, useContext, useEffect } from 'react';
import { DeviceContext } from '../device/device.context';
import { getArlertInfo } from './notification.service';

export const NotificationContext = createContext(null);

export const NotificationContextProvider = ({ children }: any) => {
  const { deviceId }: any = useContext(DeviceContext);

  useEffect(() => {
    console.log("The notification function get called")
      getArlertInfo(deviceId).then((result: any) => {
        if (result.isOutOfBound) {
          console.log('The arlet is send');
        } else {
          console.log('Do nothing');
        }
      });
  }, []);

  return (
    <NotificationContext.Provider value={null}>
      {children}
    </NotificationContext.Provider>
  );
};
