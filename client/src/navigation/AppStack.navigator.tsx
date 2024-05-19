import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home.screen.tsx';
import ReferenceEditScreen from '../screens/ReferenceEdit.screen.tsx';
import BoundaryEditScreen from '../screens/BoundaryEdit.screen.tsx';
import LocationHistoryScreen from '../screens/LocationHistory.screen.tsx';
import { DeviceContextProvider } from '../services/device/device.context.tsx';
import { ReferenceLocationContextProvider } from '../services/reference_location/ReferenceLocation.context.tsx';
import { NotificationContextProvider } from '../services/notification/notification.context.tsx';
import { LocationInfoContextProvider } from '../services/location_info/LocationInfo.context.tsx';

const appStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <DeviceContextProvider>
      <ReferenceLocationContextProvider>
        <LocationInfoContextProvider>
          <appStack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{ headerShown: false }}>
            <appStack.Screen name={'HomeScreen'} component={HomeScreen} />
            <appStack.Screen
              name={'ReferenceEditScreen'}
              component={ReferenceEditScreen}
            />
            <appStack.Screen
              name={'BoundaryEditScreen'}
              component={BoundaryEditScreen}
            />
            <appStack.Screen
              name={'LocationHistoryScreen'}
              component={LocationHistoryScreen}
            />
          </appStack.Navigator>
        </LocationInfoContextProvider>
      </ReferenceLocationContextProvider>
    </DeviceContextProvider>
  );
};

export default AppStackNavigator;
