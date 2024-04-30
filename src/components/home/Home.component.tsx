import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Cube, Edit} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';

const HomeComponent = () => {
  return (
    <View style={styles.homeComponent}>
      <View style={styles.idContainer}>
        <View style={styles.idIcon}>
          <Cube color={'white'} width={25} height={25} />
        </View>
        <Text style={styles.idString}>e2f06f64dd95ad399e70</Text>
        <Edit color={'white'} height={16} width={16} />
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

  idContainer: {
    flex: 0.1,
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
    paddingLeft: 15,
    paddingRight: 5,
    color: 'white',
    fontSize: 16,
  },
});
