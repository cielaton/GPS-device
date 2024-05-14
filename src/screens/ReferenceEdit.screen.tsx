import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'iconoir-react-native';
import colors from '../styles/colors/colors';
import BackHomeButton from '../components/reference_edit/BackHomeButton.component';

const ReferenceEditScreen = ({navigation}: any) => {
  return (
    <View style={styles.referenceEditScreen}>
      <View style={styles.backHomeButtonWrapper}>
        <BackHomeButton navigation={navigation}/>
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
    flex: 0.05,
  },
});
