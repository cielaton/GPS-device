import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../styles/colors/colors';
import BackHomeButton from '../components/reference_and_boundary_edit/BackHomeButton.tsx';
import ApplyButton from '../components/reference_and_boundary_edit/ApplyButton';
import UnitSelection from '../components/boundary_edit/UnitSelection.tsx';
import {ReferenceLocationContext} from '../services/reference_location/ReferenceLocation.context.tsx';

const BoundaryEditScreen = ({navigation}: any) => {
  const {onSetBoundary, onInsertReferenceLocation}: any = useContext(
    ReferenceLocationContext,
  );
  const [boundaryInput, setBoundaryInput] = useState('');
  const [unit, setUnit] = useState('meter');

  console.log(boundaryInput);
  console.log(unit);

  return (
    <View style={styles.boundaryEditScreen}>
      <View style={styles.backHomeButtonWrapper}>
        <BackHomeButton navigation={navigation} />
      </View>
      <Text style={styles.boundaryRadiusTitle}>Boundary radius</Text>
      <TextInput style={styles.Input} onChangeText={setBoundaryInput} />
      <View style={styles.unitSelectionWrapper}>
        <UnitSelection unit={unit} setUnit={setUnit} />
      </View>
      <View style={styles.applyButtonWrapper}>
        <ApplyButton
          finalValue={{value: parseFloat(boundaryInput), unit: unit}}
          onPressFunction={onSetBoundary}
          insertReferenceLocationFunction={onInsertReferenceLocation}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default BoundaryEditScreen;

const styles = StyleSheet.create({
  boundaryEditScreen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    paddingHorizontal: 25,
  },

  backHomeButtonWrapper: {
    flex: 0.08,
  },
  boundaryRadiusTitle: {
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

  Input: {
    height: 60,
    paddingHorizontal: 20,
    marginTop: 20,
    color: 'white',
    fontSize: 18,
    backgroundColor: colors.inputBackground,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: colors.secondaryBackground,
  },

  unitSelectionWrapper: {
    flex: 0.1,
    zIndex: 999,
  },

  applyButtonWrapper: {
    justifyContent: 'center',
    flex: 0.135,
  },
});
