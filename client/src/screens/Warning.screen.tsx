import React, { useEffect } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import BackHomeButton from '../components/reference_and_boundary_edit/BackHomeButton';
import colors from '../styles/colors/colors';
import { WarningCircle } from 'iconoir-react-native';

const WarningScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.backHomeButtonWrapper}>
        <BackHomeButton navigation={navigation} />
      </View>
      <View style={styles.warningView}>
        <WarningCircle
          width={120}
          height={120}
          color={colors.errorText}
          strokeWidth={3}
          style={{ marginBottom: 20 }}
        />

        <Text style={styles.warningMessage}>Your device</Text>
        <Text style={styles.warningMessage}>is out of range</Text>
      </View>
    </View>
  );
};

export default WarningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    paddingHorizontal: 25,
  },

  backHomeButtonWrapper: {
    flex: 0.08,
  },

  warningView: {
    flex: 0.92,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warningMessage: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 30,
  },
});
