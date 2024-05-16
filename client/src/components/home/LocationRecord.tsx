import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import appStyles from '../../styles/appStyles.ts';

const onSwitchChange = (
  locationRecord: boolean,
  isEnabledValue: boolean,
  setLocationRecord: any,
  setIsEnabled: any,
) => {
  setLocationRecord(!locationRecord);
  setIsEnabled(!isEnabledValue);
};

const LocationRecord = ({locationRecord, setLocationRecord}: any) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <View style={styles.locationRecordContainer}>
      <Text style={styles.locationRecordTitle}>Location Record</Text>
      <Switch
        trackColor={{false: 'black', true: appStyles.colors.iconBorder}}
        thumbColor={isEnabled ? appStyles.colors.styledText : 'white'}
        onValueChange={() =>
          onSwitchChange(
            locationRecord,
            isEnabled,
            setLocationRecord,
            setIsEnabled,
          )
        }
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
