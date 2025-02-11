import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Animated } from 'react-native';
import { COLORS } from '../../assets/colors';
import { mvs } from 'react-native-size-matters';
import { AppBorderRadius } from '../constants';
import BackArrow from "./../../assets/images/svg/BackArrow.svg"
// Define the types for the props
interface AppCancelButtonProps {
  title?: string; // Text on the button
  onPress: () => void; // Function to call on button press
  disabled?: boolean; // If true, disables the button
  buttonStyle?: ViewStyle; // Optional custom style for the button
  textStyle?: TextStyle; // Optional custom style for the button text
}

const AppCancelButton: React.FC<AppCancelButtonProps> = ({
  title = "Cancel",
  onPress,
  disabled = false,
  buttonStyle = {},
  textStyle = {},
}) => {
  const scaleValue = new Animated.Value(1);
  const handlePressIn = () => {
    if (!disabled) {
      // Animate the button with a more subtle scale effect
      Animated.spring(scaleValue, {
        toValue: 0.98, // Slightly scale down (98%)
        friction: 7, // Light friction
        tension: 100, // Light tension
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      // Reset the button scale when press is released
      Animated.spring(scaleValue, {
        toValue: 1, // Reset to original size (100%)
        friction: 7, // Light friction
        tension: 100, // Light tension
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View 
    style={[ { transform: [{ scale: scaleValue }] }]}>
      <TouchableOpacity
        style={[
          styles.button,
          disabled ? styles.disabledButton : styles.enabledButton,
          buttonStyle,
        ]}
        onPress={disabled ? () => {} : onPress}
        onPressIn={handlePressIn} // Handle press in animation
        onPressOut={handlePressOut} // Handle press out animation
        activeOpacity={0.8} // Slight opacity feedback on press
        disabled={disabled}
      >
        <Text
          style={[
            styles.text,
            disabled ? styles.disabledText : styles.enabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

// Using React.memo for optimization to prevent re-renders unless props change
export default memo(AppCancelButton);

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10, // Optional margin wrapper
  },
  button: {
    minWidth:mvs(95),
    flexDirection:"row",
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(15),
    borderRadius: AppBorderRadius,
    marginVertical: mvs(10),
    alignItems:"center", justifyContent:"center",
    alignSelf: "flex-start",
    overflow: 'hidden', // Make sure the button doesn't overflow on animation
  },
  enabledButton: {
    backgroundColor: COLORS.white, // Default enabled background color
    borderWidth:mvs(1),
    borderColor:COLORS.Black
  },
  disabledButton: {
    backgroundColor:COLORS.white, // Disabled button color
    borderWidth:mvs(1),
    borderColor:COLORS.Black
  },
  text: {
    fontSize: mvs(12),
    fontWeight: "bold",
  },
  enabledText: {
    color: COLORS.Black, // Text color when enabled
  },
  disabledText: {
    color: COLORS.Black, // Text color when disabled
  },
});
