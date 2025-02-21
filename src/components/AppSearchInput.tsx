import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, ViewStyle, TextStyle, TextInputProps, KeyboardTypeOptions } from 'react-native';
import { mvs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { COLORS } from '../../assets/colors';
import { AppBorderRadius } from '../constants';
import SearchIcon from "../../assets/images/svg/SearchIcon.svg"
// Define types for the props
interface AppSearchInputProps {
  value: string | number | undefined ; // Value of the input
  onChangeText: (text: string) => void; // Function to handle text change
  placeholder?: string; // Placeholder text
  keyboardType?: 'default' | 'email' | 'phoneNumber' | 'numberPad'; // Custom type options
  secureTextEntry?: boolean; // For password fields
  inputStyle?: TextStyle; // Custom style for the input field
  mainStyle?: ViewStyle; // Custom style for the container
}

const AppSearchInput: React.FC<AppSearchInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  inputStyle = {},
  mainStyle = {},
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(secureTextEntry); // Track visibility of the password

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle visibility
  };

  const getKeyboardType = (): KeyboardTypeOptions => {
    switch (keyboardType) {
      case 'email':
        return 'email-address';
      case 'phoneNumber':
        return 'phone-pad';
        case 'numberPad':
        return 'number-pad';
      default:
        return 'default';
    }
  };

  return (
    <View style={[styles.container, mainStyle]}>
      
      
      {/* Text Input */}
      <View style={styles.inputContainer}>
        <SearchIcon height={mvs(20)} width={mvs(20)}/>
        <TextInput
          keyboardType={getKeyboardType()}
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GrayText}
          secureTextEntry={isPasswordVisible}  // Toggle based on state
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  label: {
    fontSize: mvs(13),
    color: COLORS.Black,
    marginBottom: mvs(8),  // Space between label and input
  },
  inputContainer: {
    flexDirection: 'row', // Align input and icon horizontally
    alignItems: 'center', // Vertically center the icon and input
    borderWidth:1,
    borderRadius: AppBorderRadius,
    borderColor:COLORS.GrayText,
    backgroundColor: COLORS.white,
    height: mvs(40),
    paddingHorizontal:mvs(10)

  },
  input: {
    flex: 1, // Take up remaining space
    paddingHorizontal: mvs(10),
    marginLeft:mvs(5),
    fontSize: mvs(14),
    color:COLORS.Black,
  },
  icon: {
    paddingRight:mvs(10),
    backgroundColor: COLORS.LightGray,
  }
});

export default AppSearchInput;
