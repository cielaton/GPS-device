import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TriangleFlag, OnePointCircle} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';
import Id from './id/Id.tsx';
import EditableInfo from './editable_info/EditableInfo.tsx';

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
});
