import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import appStyles from '../../../styles/appStyles.ts';

const LocationRecord = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.locationRecordContainer}>
      <Text style={styles.locationRecordTitle}>Location Record</Text>
      <Switch
        trackColor={{false: 'black', true: appStyles.colors.iconBorder}}
        thumbColor={isEnabled ? appStyles.colors.styledText : 'white'}
        onValueChange={() => {
          setIsEnabled(!isEnabled);
        }}
        value={isEnabled}
      />
    </View>
  );
};

export default LocationRecord;

const styles = StyleSheet.create({
  locationRecordTitle: {
    fontSize: 18,
    lineHeight: 18,
    paddingRight: 5,
    color: 'white',
  },
  locationRecordContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
