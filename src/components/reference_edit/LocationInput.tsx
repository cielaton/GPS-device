import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../../styles/colors/colors';

const LocationInput = ({inputTitle, onChangeTextSetState}: any) => {
  return (
    <View style={styles.locationInput}>
      <Text style={styles.Title}>{inputTitle}</Text>
      <TextInput style={styles.Input} onChangeText={onChangeTextSetState} />
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  locationInput: {
    flex: 1,
    justifyContent: 'center',
  },
  Title: {
    includeFontPadding: false,
    paddingBottom: 5,
    textAlignVertical: 'bottom',
    fontSize: 20,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  Input: {
    height: 60,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 18,
    backgroundColor: colors.inputBackground,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: colors.secondaryBackground,
  },
});
