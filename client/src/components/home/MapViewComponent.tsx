import React, {useEffect} from 'react';
import MapBox, {Camera, MapView} from '@rnmapbox/maps';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';

const mapBoxAccessToken = Config.MAP_BOX_ACCESS_TOKEN;

MapBox.setAccessToken(mapBoxAccessToken!)
  .then(() => console.log('MapBox initialization successfully'))
  .catch(err => console.log(`Error: ${err}`));

const initialCoordinates = [108.1496424, 16.0736355];

const MapViewComponent = () => {
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
        <Camera centerCoordinate={initialCoordinates} zoomLevel={15} />
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
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
});
