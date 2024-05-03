import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TriangleFlag, OnePointCircle} from 'iconoir-react-native';
import MapBox, {MapView} from '@rnmapbox/maps';
import Config from 'react-native-config';

import appStyles from '../../styles/appStyles.ts';
import Id from './Id.tsx';
import EditableInfo from './EditableInfo.tsx';
import LocationRecord from './LocationRecord.tsx';
import LocationInfo from './LocationInfo.tsx';

const mapBoxAccessToken = Config.MAP_BOX_ACCESS_TOKEN;

MapBox.setAccessToken(mapBoxAccessToken!)
  .then(() => console.log('MapBox initialization successfully'))
  .catch(err => console.log(`Error: ${err}`));

const HomeComponent = () => {
  useEffect(() => {
    MapBox.setTelemetryEnabled(false);
  }, []);
  return (
    <View style={styles.homeComponent}>
      <View style={styles.idWrapper}>
        <Id />
      </View>
      <View style={styles.editableInfoWrapper}>
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
      <View style={styles.mapViewContainer}>
        <MapView style={styles.mapView} />
      </View>
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

  locationRecordWrapper: {
    flex: 0.08,
  },
  locationInfoWrapper: {
    flex: 0.15,
  },
  mapViewContainer: {
    overflow: 'hidden',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 0.52,
  },
  mapView: {
    flex: 1,
  },
});
