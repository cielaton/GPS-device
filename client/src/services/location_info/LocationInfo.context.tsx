import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getLocationInfo } from './locationInfo.service';
import { DeviceContext } from '../device/device.context';
import notifee from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { Vibration } from 'react-native';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

const displayWarning = async () => {
  await notifee.requestPermission();

  const channelId = await notifee.createChannel({
    id: 'Warning',
    name: 'Warning channel',
  });

  await notifee.displayNotification({
    title: 'Device is out of range',
    body: 'Your tracking device has gone out of the defined area boundary',
    android: {
      channelId,
      pressAction: {
        id: 'Warning',
      },
    },
  });
};

export const LocationInfoContext = createContext({});

export const LocationInfoContextProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const { deviceId }: any = useContext(DeviceContext);

  const [location, setLocation] = useState({
    longitude: 108.1533,
    latitude: 16.0758,
  });

  const isSentWarning = useRef(true);

  const onGetLocationInfo = () => {
    getLocationInfo(deviceId)
      .then((result: any) => {
        location.longitude = result.longitude;
        location.latitude = result.latitude;
        if (result) {
          setLocation({
            longitude: parseFloat(result.longitude),
            latitude: parseFloat(result.latitude),
          });
          console.log('Updated location info');
          console.log(location);
          console.log(isSentWarning.current);
          if (result.isOutOfBound && isSentWarning.current) {
            displayWarning();

            const ONE_SECOND_IN_MS = 400;
            const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS];
            Vibration.vibrate(PATTERN, true);

            navigation.navigate('WarningScreen' as never);
            console.log('[Warning]: Has been sent');
          }
        } else {
          console.log('Invalid device');
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const updateIsSentWarning = (value: boolean) => {
    isSentWarning.current = value;
  };
  useEffect(() => {
    console.log('The on get location info get called');
    const interval = setInterval(() => onGetLocationInfo(), 10000);
    return () => clearInterval(interval);
  }, [deviceId]);
  return (
    <LocationInfoContext.Provider value={{ location, updateIsSentWarning }}>
      {children}
    </LocationInfoContext.Provider>
  );
};
