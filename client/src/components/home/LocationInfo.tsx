import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MapPin, NavArrowRight} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';

const LocationInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerLeftContainer}>
        <View style={styles.mainSection}>
          <View style={styles.iconContainer}>
            <MapPin color={'white'} height={30} width={30} />
          </View>
          <View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>123 Đường A, Quận B, Phường C</Text>
            <Text style={styles.coordinate}>16°05'09.8"N, 108°09'04.5"E</Text>
          </View>
        </View>
        <Text style={styles.updatedMessage}>Last updated: 5 min ago</Text>
      </View>
      <NavArrowRight color={'white'} width={30} height={30} />
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.colors.mainSection,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerLeftContainer: {},

  mainSection: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: appStyles.colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainTextContainer: {
    paddingLeft: 10,
  },

  mainText: {
    fontSize: 16,
    color: 'white',
  },
  coordinate: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
  },
  updatedMessage: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.5)',
  },
});
