import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { COLORS } from '../../assets/colors';
import { AppBorderRadius } from '../constants';

// Define types for the props
interface AppTextInputProps {
  label?: string; // Label for the input field
  value: string; // Value of the input
  onChangeText: (text: string) => void; // Function to handle text change
  placeholder?: string; // Placeholder text
  secureTextEntry?: boolean; // For password fields
  inputStyle?: TextStyle; // Custom style for the input field
  labelStyle?: TextStyle; // Custom style for the label
  mainStyle?: ViewStyle; // Custom style for the container
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  inputStyle = {},
  labelStyle = {},
  mainStyle = {},
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(secureTextEntry); // Track visibility of the password

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle visibility
  };

  return (
    <View style={[styles.container, mainStyle]}>
      {/* Label */}
      {
        label && <Text style={[styles.label, labelStyle]}>{label}</Text>
      }
      
      
      {/* Text Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={styles.placeholderColor}
          secureTextEntry={isPasswordVisible}  // Toggle based on state
        />
        
        {/* Eye Icon for password visibility toggle */}
        {secureTextEntry && (
          <Pressable onPress={togglePasswordVisibility} style={styles.icon}>
            <Icon name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={24} color="#333" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: mvs(10),  // Space between inputs
    
  },
  label: {
    fontSize: mvs(14),
    color: COLORS.Black,
    marginBottom: mvs(8),  // Space between label and input
  },
  inputContainer: {
    flexDirection: 'row', // Align input and icon horizontally
    alignItems: 'center', // Vertically center the icon and input
    borderRadius: AppBorderRadius,
    backgroundColor: COLORS.LightGray,
    height: mvs(48),

  },
  input: {
    flex: 1, // Take up remaining space
    paddingHorizontal: mvs(20),
    fontSize: mvs(15),
    color:COLORS.Black,
    fontWeight:"bold",
    
  },
  icon: {
    paddingRight:mvs(10),
    backgroundColor: COLORS.LightGray,
  },
  placeholderColor:{
    color:COLORS.GrayText
  }
});

export default AppTextInput;
