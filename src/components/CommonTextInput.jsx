import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import the icon library

const CommonTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  inputStyle = {},
  labelStyle = {},
  mainStyle = {},
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry); // Track visibility of the password

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle visibility
  };

  return (
    <View style={[styles.container,mainStyle]}>
      {/* Label */}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      
      {/* Text Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
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
    marginBottom: 10,  // Space between inputs
   
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,  // Space between label and input

  },
  inputContainer: {
    flexDirection: 'row', // Align input and icon horizontally
    alignItems: 'center', // Vertically center the icon and input
    borderRadius: 8,
  },
  input: {
    flex: 1, // Take up remaining space
    height: 56,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
  },
  icon: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
});

export default CommonTextInput;
