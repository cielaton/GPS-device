import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Check, Cube, Edit } from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../styles/colors/colors.ts';
import { DeviceContext } from '../../services/device/device.context.tsx';

const Id = () => {
  const { deviceId, setDeviceId, isValidDevice }: any = useContext(DeviceContext);

  const [isEditMode, setIsEditMode] = useState(false);
  const [deviceIdInput, setDeviceIdInput] = useState('');

  useEffect(() => {
    if (isValidDevice) {
      setIsEditMode(false);
    }
  }, [isValidDevice]);

  return (
    <View style={styles.idContainer}>
      <View style={styles.idIcon}>
        <Cube color={'white'} width={25} height={25} />
      </View>
      {isEditMode ? (
        <View style={styles.idEditWrapper}>
          <TextInput
            style={styles.Input}
            onChangeText={setDeviceIdInput}
            value={deviceIdInput}
          />
          <TouchableOpacity
            style={styles.CheckButton}
            onPress={() => {
              setDeviceId(deviceIdInput);
            }}>
            <Check width={20} height={20} color={'black'} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.idNonEditWrapper}>
          <Text style={styles.idString}>{deviceId}</Text>
          <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
            <Edit color={'white'} height={16} width={16} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Id;

const styles = StyleSheet.create({
  idContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  idIcon: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: appStyles.colors.mainSection,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40 / 6,
  },

  idString: {
    paddingRight: 5,
    color: 'white',
    fontSize: 16,
  },

  idNonEditWrapper: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  idEditWrapper: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input: {
    height: 30,
    paddingHorizontal: 15,
    paddingVertical: 0,
    color: 'white',
    fontSize: 15,
    lineHeight: 15,
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    borderColor: colors.secondaryBackground,
  },

  CheckButton: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: colors.styledText,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});
