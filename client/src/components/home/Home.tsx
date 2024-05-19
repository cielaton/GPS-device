import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OnePointCircle, TriangleFlag } from 'iconoir-react-native';
import { TouchableOpacity } from 'react-native';

import appStyles from '../../styles/appStyles.ts';
import Id from './Id.tsx';
import EditableInfo from './EditableInfo.tsx';
import LocationRecord from './LocationRecord.tsx';
import LocationInfo from './LocationInfo.tsx';
import MapViewComponent from './MapViewComponent.tsx';
import { DeviceContext } from '../../services/device/device.context.tsx';
import colors from '../../styles/colors/colors.ts';
import { ReferenceLocationContext } from '../../services/reference_location/ReferenceLocation.context.tsx';

const Home = ({ navigation }: any) => {
  const { referenceLocation, boundary }: any = useContext(
    ReferenceLocationContext,
  );

  const [locationRecord, setLocationRecord] = useState(true);
  const { isValidDevice }: any = useContext(DeviceContext);

  return (
    <View style={styles.homeComponent}>
      <View style={styles.idWrapper}>
        <Id />
        {isValidDevice ? (
          <></>
        ) : (
          <Text style={styles.notValidText}>Your device is not valid!</Text>
        )}
      </View>
      <View style={styles.editableInfoWrapper}>
        <TouchableOpacity
          style={styles.editableInfoContainer}
          onPress={() => navigation.navigate('ReferenceEditScreen')}>
          <EditableInfo
            icon={<TriangleFlag color={'white'} width={25} height={25} />}
            title={'Reference'}
            bodyFirstLine={referenceLocation.longitude}
            bodySecondLine={referenceLocation.latitude}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editableInfoContainer}
          onPress={() => {
            navigation.navigate('BoundaryEditScreen');
          }}>
          <EditableInfo
            icon={<OnePointCircle color={'white'} width={25} height={25} />}
            title={'Boundary'}
            bodyFirstLine={`${boundary.value} ${boundary.unit}`}
            bodySecondLine={''}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.locationRecordWrapper}>
        <LocationRecord
          locationRecord={locationRecord}
          setLocationRecord={setLocationRecord}
        />
      </View>
      {locationRecord ? (
        <View style={styles.locationRecordView}>
          <View style={styles.mapViewWrapper}>
            <MapViewComponent />
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    backgroundColor: appStyles.colors.screenBackground,
  },

  idWrapper: {
    flex: 0.1,
  },
  notValidText: {
    fontSize: 15,
    color: colors.errorText,
  },
  editableInfoWrapper: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editableInfoContainer: {
    flex: 0.48,
  },

  locationRecordWrapper: {
    flex: 0.08,
    justifyContent: 'center',
  },
  locationRecordView: {
    flex: 0.67,
  },
  mapViewWrapper: {
    flex: 1,
  },
});
