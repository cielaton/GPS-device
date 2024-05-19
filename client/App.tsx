import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/Home.screen.tsx';
import AppStackNavigator from './src/navigation/AppStack.navigator.tsx';
import {PaperProvider} from 'react-native-paper';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer>
        <PaperProvider>
          <AppStackNavigator />
        </PaperProvider>
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
