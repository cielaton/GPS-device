import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/home/Home.screen.tsx';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
