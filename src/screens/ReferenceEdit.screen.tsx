import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors/colors';
import BackHomeButton from '../components/reference_edit/BackHomeButton.component';
import LocationInput from '../components/reference_edit/LocationInput.component';
import ApplyButton from '../components/reference_edit/ApplyButton';

const ReferenceEditScreen = ({ navigation }: any) => {

  const [LongitudeInput, setLongitudeInput] = useState("");
  const [LatitudeInput, setLatitudeInput] = useState("");
  return (
    <View style={styles.referenceEditScreen}>
      <View style={styles.backHomeButtonWrapper}>
        <BackHomeButton navigation={navigation} />
      </View>
      <Text style={styles.referencelocationTitle}>Reference location</Text>
      <View style={styles.locationInputWrapper}>
        <LocationInput inputTitle={"Longitude"} onChangeTextSetState={setLongitudeInput} />
        <LocationInput inputTitle={"Latitude"} onChangeTextSetState={setLatitudeInput} />
      </View>
      <View style={styles.applyButtonWrapper}><ApplyButton /></View>
    </View>
  );
};

export default ReferenceEditScreen;

const styles = StyleSheet.create({
  referenceEditScreen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    paddingHorizontal: 25,
  },

  backHomeButtonWrapper: {
    flex: 0.08,
  },
  referencelocationTitle: {
    flex: 0.05,
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 35,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  locationInputWrapper: {
    flex: 0.27
  },

  applyButtonWrapper: {
    justifyContent: 'center',
    flex: 0.135,
  }

});
