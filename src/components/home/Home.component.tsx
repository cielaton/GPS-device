import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import appStyles from '../../styles/styles.ts';

const HomeComponent = () => {
  return (
    <View style={styles.homeComponent}>
      <Text>This is an inner component</Text>
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
