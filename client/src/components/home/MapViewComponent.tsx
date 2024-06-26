import React, { useContext, useEffect } from 'react';
import MapBox, {
  Camera,
  MapView,
  MarkerView,
  PointAnnotation,
  UserLocation,
} from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import Config from 'react-native-config';
import { LocationInfoContext } from '../../services/location_info/LocationInfo.context';

const mapBoxAccessToken = Config.MAP_BOX_ACCESS_TOKEN;

MapBox.setAccessToken(mapBoxAccessToken!)
  .then(() => console.log('MapBox initialization successfully'))
  .catch(err => console.log(`Error: ${err}`));

const MapViewComponent = () => {
  const { location }: any = useContext(LocationInfoContext);
  useEffect(() => {
    MapBox.setTelemetryEnabled(false);
  }, []);
  return (
    <View style={styles.mapViewContainer}>
      <MapView
        style={styles.mapView}
        compassEnabled={true}
        logoEnabled={false}
        attributionEnabled={false}
        scaleBarEnabled={false}>
        <Camera
          centerCoordinate={[location.longitude, location.latitude]}
          zoomLevel={19}
        />
        <PointAnnotation
          id={'default'}
          coordinate={[location.longitude, location.latitude]}>
          <MapBox.Callout title={'User position'} />
        </PointAnnotation>
      </MapView>
    </View>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  mapViewContainer: {
    overflow: 'hidden',
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
  },
});
