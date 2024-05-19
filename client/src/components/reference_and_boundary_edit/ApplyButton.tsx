import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors/colors';

const ApplyButton = ({
  finalValue,
  onPressFunction,
  insertReferenceLocationFunction,
  navigation,
}: any) => {
  return (
    <TouchableOpacity
      style={styles.applyButton}
      onPress={() => {
        onPressFunction(finalValue);
        setTimeout(() => insertReferenceLocationFunction(), 100);
        navigation.navigate('HomeScreen');
      }}>
      <Text style={styles.Text}>Apply</Text>
    </TouchableOpacity>
  );
};

export default ApplyButton;

const styles = StyleSheet.create({
  applyButton: {
    height: 60,
    backgroundColor: colors.buttonLightBackground,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 20,
    lineHeight: 20,
  },
});
