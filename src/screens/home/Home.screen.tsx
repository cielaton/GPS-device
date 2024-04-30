import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Edit, Bell} from 'iconoir-react-native';
import appStyles from '../../styles/appStyles.ts';
import TopTabNavigator from '../../navigation/TopTab.navigator.tsx';

const userName = 'Kiet';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.headingView}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi, </Text>
          <Text style={styles.userNameText}>{userName} </Text>
          <Edit
            color={'white'}
            height={30}
            width={30}
            style={styles.editUserNameIcon}
          />
        </View>
        <View style={styles.notificationContainer}>
          <Bell color={'white'} height={30} width={30} />
        </View>
      </View>
      <TopTabNavigator />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: appStyles.colors.screenBackground,
  },
  headingView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  greetingText: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  userNameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: appStyles.colors.styledText,
  },

  editUserNameIcon: {
    marginBottom: 7,
  },

  notificationContainer: {
    width: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appStyles.colors.iconBackground,
    borderStyle: 'solid',
    borderRadius: 50 / 2,
    borderColor: appStyles.colors.iconBorder,
    borderWidth: 2,
  },
});
