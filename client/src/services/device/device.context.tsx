import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocationInfo } from './device.service';

export const DeviceContext = createContext({});

export const DeviceContextProvider = ({ children }: any) => {
  const [deviceId, setDeviceId] = useState('');
  const [isValidDevice, setIsValidDevice] = useState(true);

  const onCheckDeviceExist = () => {
    getLocationInfo(deviceId)
      .then((result: any) => {
        setIsValidDevice(true);
        console.log("Valid device");
      })
      .catch((error: any) => {
        setIsValidDevice(false);
        console.log("Invalid device");
      });
  };

  useEffect(() => {
    onCheckDeviceExist();
  }, []);

  return (
    <DeviceContext.Provider
      value={{ deviceId, setDeviceId, isValidDevice, setIsValidDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};
