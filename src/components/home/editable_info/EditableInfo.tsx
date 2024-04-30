import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavArrowRight} from 'iconoir-react-native';
import appStyles from '../../../styles/appStyles.ts';

const EditableInfo = ({icon, title, bodyFirstLine, bodySecondLine}: any) => {
  return (
    <View style={styles.editableInfoSections}>
      <View style={styles.editableInfoHeaderContainer}>
        {icon}
        <Text style={styles.editableInfoHeaderTitle}>{title}</Text>
        <NavArrowRight color={'white'} height={25} width={25} />
      </View>
      <View style={styles.editableInfoBodyContainer}>
        <Text style={styles.editableInfoBodyText}>{bodyFirstLine}</Text>
        <Text style={styles.editableInfoBodyText}>{bodySecondLine}</Text>
      </View>
    </View>
  );
};

export default EditableInfo;

const styles = StyleSheet.create({
  editableInfoSections: {
    borderRadius: 10,
    backgroundColor: appStyles.colors.mainSection,
    flex: 0.48,
  },

  editableInfoHeaderContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
  },

  editableInfoHeaderTitle: {
    marginLeft: 5,
    marginRight: 15,
    lineHeight: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 18,
  },

  editableInfoBodyContainer: {
    flex: 0.6,
    paddingHorizontal: 10,
  },

  editableInfoBodyText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.8)',
  },
});
