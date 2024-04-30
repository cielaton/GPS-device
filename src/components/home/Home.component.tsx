import React from 'react';
import {View, StyleSheet} from 'react-native';
import appStyles from '../../styles/appStyles.ts';
import Id from './id/Id.tsx';

const HomeComponent = () => {
  return (
    <View style={styles.homeComponent}>
      <Id />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    backgroundColor: appStyles.colors.screenBackground,
  },
});
