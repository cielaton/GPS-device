import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TriangleFlag, OnePointCircle} from 'iconoir-react-native';
import MapBox, {MapView} from '@rnmapbox/maps';

import appStyles from '../../styles/appStyles.ts';
import Id from './Id.tsx';
import EditableInfo from './EditableInfo.tsx';
import LocationRecord from './LocationRecord.tsx';
import LocationInfo from './LocationInfo.tsx';

MapBox.setAccessToken(
  'sk.eyJ1IjoidHVhbmtpZXQxNyIsImEiOiJjbHZvMTg4YzAwOWp0MmprMW50Z3AzbXpiIn0.tiATAs2MD3jN3_VBhB3IXw',
)
  .then(() => console.log('MapBox initialization successfully'))
  .catch(err => console.log(`Error: ${err}`));
const HomeComponent = () => {
  useEffect(() => {
    MapBox.setTelemetryEnabled(false);
  }, []);
  return (
    <View style={styles.homeComponent}>
      <Id />
      <View style={styles.editableInfoContainer}>
        <EditableInfo
          icon={<TriangleFlag color={'white'} width={25} height={25} />}
          title={'Reference'}
          bodyFirstLine={'16°05\'09.8"N'}
          bodySecondLine={'108°09\'04.5"E'}
        />
        <EditableInfo
          icon={<OnePointCircle color={'white'} width={25} height={25} />}
          title={'Boundary'}
          bodyFirstLine={'100 meters'}
          bodySecondLine={''}
        />
      </View>
      <View style={styles.locationRecordWrapper}>
        <LocationRecord />
      </View>
      <View style={styles.locationInfoWrapper}>
        <LocationInfo />
      </View>
      <MapView style={styles.mapView} />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    backgroundColor: appStyles.colors.screenBackground,
  },

  editableInfoContainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  locationRecordWrapper: {
    flex: 0.08,
  },
  locationInfoWrapper: {
    flex: 0.15,
  },
  mapView: {
    flex: 0.3,
  },
});
