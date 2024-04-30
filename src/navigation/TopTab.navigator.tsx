import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeComponent from '../components/home/Home.component.tsx';
import appStyles from '../styles/styles.ts';

const topTab = createMaterialTopTabNavigator();

const topTabNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: appStyles.colors.screenBackground,
        },
        tabBarIndicatorStyle: {
          backgroundColor: appStyles.colors.secondaryBackground,
          borderStyle: 'solid',
        },
        tabBarIndicatorContainerStyle: {
          shadowColor: 'white',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5',
      }}>
      <topTab.Screen name={'Person 1'} component={HomeComponent} />
      <topTab.Screen name={'Person 2'} component={HomeComponent} />
      <topTab.Screen name={'Person 3'} component={HomeComponent} />
    </topTab.Navigator>
  );
};

export default topTabNavigator;
