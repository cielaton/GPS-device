import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/home_screen/HomeScreen.tsx';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
