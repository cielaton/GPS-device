import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from "../../styles/colors/colors";

const ApplyButton = () => {
  return <TouchableOpacity style={styles.applyButton} onPress={() => { }}>
    <Text style={styles.Text}>Apply</Text>
  </TouchableOpacity>
}

export default ApplyButton;

const styles = StyleSheet.create({

  applyButton: {
    height: 60,
    backgroundColor: colors.buttonLightBackground,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 20,
    lineHeight: 20,

  }
})
