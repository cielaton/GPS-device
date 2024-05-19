import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors/colors';
import BackHomeButton from '../components/reference_and_boundary_edit/BackHomeButton.tsx';
import LocationInput from '../components/reference_edit/LocationInput.tsx';
import ApplyButton from '../components/reference_and_boundary_edit/ApplyButton';
import { ReferenceLocationContext } from '../services/reference_location/ReferenceLocation.context.tsx';

const ReferenceEditScreen = ({ navigation }: any) => {
  const { setReferenceLocation, onInsertReferenceLocation }: any = useContext(ReferenceLocationContext);

  const [longitudeInput, setLongitudeInput] = useState('');
  const [latitudeInput, setLatitudeInput] = useState('');
  return (
    <View style={styles.referenceEditScreen}>
      <View style={styles.backHomeButtonWrapper}>
        <BackHomeButton navigation={navigation} />
      </View>
      <Text style={styles.referencelocationTitle}>Reference location</Text>
      <View style={styles.locationInputWrapper}>
        <LocationInput
          inputTitle={'Longitude'}
          onChangeTextSetState={setLongitudeInput}
        />
        <LocationInput
          inputTitle={'Latitude'}
          onChangeTextSetState={setLatitudeInput}
        />
      </View>
      <View style={styles.applyButtonWrapper}>
        <ApplyButton
          finalValue={{ longitude: longitudeInput, latitude: latitudeInput }}
          onPressFunction={setReferenceLocation}
          insertReferenceLocationFunction = {onInsertReferenceLocation}
          navigation={navigation}
        />
      </View>
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
    flex: 0.27,
  },

  applyButtonWrapper: {
    justifyContent: 'center',
    flex: 0.135,
  },
});
