import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TriangleFlag, OnePointCircle} from 'iconoir-react-native';
import {TouchableOpacity} from 'react-native';

import appStyles from '../../styles/appStyles.ts';
import Id from './Id.tsx';
import EditableInfo from './EditableInfo.tsx';
import LocationRecord from './LocationRecord.tsx';
import LocationInfo from './LocationInfo.tsx';
import MapViewComponent from './MapViewComponent.tsx';

const HomeComponent = ({navigation}: any) => {
  const [locationRecord, setLocationRecord] = React.useState(true);

  return (
    <View style={styles.homeComponent}>
      <View style={styles.idWrapper}>
        <Id />
      </View>
      <View style={styles.editableInfoWrapper}>
        <TouchableOpacity
          style={styles.editableInfoContainer}
          onPress={() => navigation.navigate('ReferenceEditScreen')}>
          <EditableInfo
            icon={<TriangleFlag color={'white'} width={25} height={25} />}
            title={'Reference'}
            bodyFirstLine={'16°05\'09.8"N'}
            bodySecondLine={'108°09\'04.5"E'}
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
            bodyFirstLine={'100 meters'}
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
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationHistoryScreen')}
            style={styles.locationInfoWrapper}>
            <LocationInfo />
          </TouchableOpacity>
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

export default HomeComponent;

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    backgroundColor: appStyles.colors.screenBackground,
  },

  idWrapper: {
    flex: 0.1,
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
  },
  locationRecordView: {
    flex: 0.67,
  },
  locationInfoWrapper: {
    flex: 0.2,
  },
  mapViewWrapper: {
    flex: 0.8,
  },
});
