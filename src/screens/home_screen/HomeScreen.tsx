import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Edit} from 'iconoir-react-native';

const userName = 'Kiet';

const HomeScreen = () => {
  return (
    <View style={styles.headingViewContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hi, </Text>
        <Text style={styles.userNameText}>{userName}</Text>
        <Edit color={'white'} height={30} width={30} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headingViewContainer: {
    marginHorizontal: 25,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  greetingText: {
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },

  userNameText: {
    textAlignVertical: 'bottom',
    alignItems: 'flex-end',
    includeFontPadding: false,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#CDD6F4',
  },
});
