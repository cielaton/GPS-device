import React from 'react';
import {View} from 'react-native';

const spacerHeight = {
  verySmall: 10,
  small: 20,
  medium: 30,
  largerMedium: 40,
  large: 50,
  ultraLarge: 60,
};

const Spacer = ({height}: any) => {
  return (
    <View style={{height: spacerHeight[height as keyof typeof spacerHeight]}} />
  );
};

export default Spacer;
