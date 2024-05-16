import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavArrowRight} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';

const EditableInfo = ({icon, title, bodyFirstLine, bodySecondLine}: any) => {
  return (
    <View style={styles.sections}>
      <View style={styles.headerContainer}>
        {icon}
        <Text style={styles.headerTitle}>{title}</Text>
        <NavArrowRight color={'white'} height={25} width={25} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>{bodyFirstLine}</Text>
        <Text style={styles.bodyText}>{bodySecondLine}</Text>
      </View>
    </View>
  );
};

export default EditableInfo;

const styles = StyleSheet.create({
  sections: {
    borderRadius: 10,
    backgroundColor: appStyles.colors.mainSection,
    flex: 1,
  },

  headerContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
  },

  headerTitle: {
    marginLeft: 5,
    marginRight: 15,
    lineHeight: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 18,
  },

  bodyContainer: {
    flex: 0.6,
    paddingHorizontal: 10,
  },

  bodyText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.8)',
  },
});
