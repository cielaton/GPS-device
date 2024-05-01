import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {
  TriangleFlag,
  OnePointCircle,
  MapPin,
  ArrowRightCircle,
  NavArrowRight,
} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';
import Id from './Id.tsx';
import EditableInfo from './EditableInfo.tsx';
import LocationRecord from './LocationRecord.tsx';

const HomeComponent = () => {
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
      <View style={styles.locationInfoContainer}>
        <View style={styles.locationInfoInnerLeftContainer}>
          <View style={styles.locationInfoMainSection}>
            <View style={styles.locationInfoIconContainer}>
              <MapPin color={'white'} height={30} width={30} />
            </View>
            <View style={styles.locationInfoMainTextContainer}>
              <Text style={styles.locationInfoMainText}>
                123 Đường A, Quận B, Phường C
              </Text>
              <Text style={styles.locationInfoCoordinate}>
                16°05'09.8"N, 108°09'04.5"E
              </Text>
            </View>
          </View>
          <Text style={styles.locationInfoUpdatedMessage}>
            Last updated: 5 min ago
          </Text>
        </View>
        <NavArrowRight color={'white'} width={30} height={30} />
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

  editableInfoContainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  locationRecordWrapper: {
    flex: 0.08,
  },
  locationInfoContainer: {
    flex: 0.15,
    backgroundColor: appStyles.colors.mainSection,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationInfoInnerLeftContainer: {},

  locationInfoMainSection: {
    flexDirection: 'row',
  },
  locationInfoIconContainer: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: appStyles.colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationInfoMainTextContainer: {
    paddingLeft: 10,
  },

  locationInfoMainText: {
    fontSize: 16,
    color: 'white',
  },
  locationInfoCoordinate: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
  },
  locationInfoUpdatedMessage: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.5)',
  },
});
