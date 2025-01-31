import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../assets/colors';
import { mvs } from 'react-native-size-matters';

// Define the types for the props
interface DividerLineProps {
  title?: string; // Text on the Line
}

const DividerLine: React.FC<DividerLineProps> = ({
  title,
}) => {

  return (
    <View style={styles.lienStyle} />
  );
};

// Using React.memo for optimization to prevent re-renders unless props change
export default memo(DividerLine);

const styles = StyleSheet.create({
  lienStyle: { 
    borderBottomWidth: 1,
    marginVertical:mvs(15),
     borderBottomColor: COLORS.GrayText,
     width: '100%',
    }
});
