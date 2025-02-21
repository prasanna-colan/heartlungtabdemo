import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { mvs } from 'react-native-size-matters';
import { COLORS } from '../../assets/colors';

// Define types for the props
interface AppScreenHeaderProps {
  label?: string | number; // Label for the input field
}

const AppScreenHeader: React.FC<AppScreenHeaderProps> = ({
  label,
}) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>Houston Family Medical Clinic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: mvs(42),
    width: "100%",
    backgroundColor: COLORS.white,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  label: {
    fontSize: mvs(13),
    color: COLORS.Black,
    textAlign: "right",
    paddingRight: mvs(10)
  },

});

export default AppScreenHeader;
