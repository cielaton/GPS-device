import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'iconoir-react-native';
import colors from "../../styles/colors/colors";

const BackHomeButton = ({ navigation }: any) => {
  return <TouchableOpacity style={styles.backHomeButton} onPress={() => {
    navigation.navigate("HomeScreen")
  }}>
    <ArrowLeft width={16} height={16} color={colors.styledText} strokeWidth={3} />
    <Text style={styles.backHomeButtonText}>Home</Text>
  </TouchableOpacity>
}

export default BackHomeButton;

const styles = StyleSheet.create({
  backHomeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backHomeButtonText: {
    marginLeft: 5,
    color: colors.styledText,
    fontSize: 18,
  }
}
);
