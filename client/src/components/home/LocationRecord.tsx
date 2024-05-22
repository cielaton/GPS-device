import React, { useContext, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import appStyles from '../../styles/appStyles.ts';
import { LocationInfoContext } from '../../services/location_info/LocationInfo.context.tsx';

const onSwitchChange = (
  locationRecord: boolean,
  isRecordEnabledValue: boolean,
  setLocationRecord: any,
  setIsRecordEnabled: any,
) => {
  setLocationRecord(!locationRecord);
  setIsRecordEnabled(!isRecordEnabledValue);
};

const LocationRecord = ({ locationRecord, setLocationRecord }: any) => {
  const [isRecordEnabled, setIsRecordEnabled] = useState(true);
  const [isWarningEnabled, setIsWarningEnabled] = useState(true);

  const { updateIsSentWarning }: any = useContext(LocationInfoContext);
  return (
    <View style={styles.locationRecordContainer}>
      <View style={styles.optionWrapper}>
        <Text style={styles.locationRecordTitle}>Location Record</Text>
        <Switch
          trackColor={{ false: 'black', true: appStyles.colors.iconBorder }}
          thumbColor={isRecordEnabled ? appStyles.colors.styledText : 'white'}
          onValueChange={() =>
            onSwitchChange(
              locationRecord,
              isRecordEnabled,
              setLocationRecord,
              setIsRecordEnabled,
            )
          }
          value={isRecordEnabled}
        />
      </View>
      <View style={styles.optionWrapper}>
        <Text style={styles.locationRecordTitle}>Warning</Text>
        <Switch
          trackColor={{ false: 'black', true: appStyles.colors.iconBorder }}
          thumbColor={isWarningEnabled ? appStyles.colors.styledText : 'white'}
          onValueChange={() => {
            setIsWarningEnabled(!isWarningEnabled);
            updateIsSentWarning(!isWarningEnabled);
          }}
          value={isWarningEnabled}
        />
      </View>
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
    justifyContent: 'space-between',
  },

  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
