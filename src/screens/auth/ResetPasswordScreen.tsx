import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../../components/AppTextInput'
import { ms, mvs } from 'react-native-size-matters'
import { ResetPasswordScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import AppButton from '../../components/AppButton'
import UnCheckbox from "../../../assets/images/svg/UnCheckbox.svg"
import Checkbox from "../../../assets/images/svg/Checkbox.svg"

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    // Password Validation Checks
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSymbol = /[!?@#$%^&*_-]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isMinLength = password.length >= 8;
    const isMatch = confirmPassword ? password === confirmPassword : false;
  
    const getColor = (condition: boolean) => {
      if (password === "") return COLORS.GrayText; // Default color (gray)
      return condition ? "green" : "red";
    };

    const isPasswordValid =
    /[a-z]/.test(password) &&  // At least one lowercase letter
    /[A-Z]/.test(password) &&  // At least one uppercase letter
    /[!?@#$%^&*_-]/.test(password) &&  // At least one symbol
    /[0-9]/.test(password) &&  // At least one numeral
    password.length >= 8 && // Minimum 8 characters
    password === confirmPassword; // Check if passwords match

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <Image style={{ marginTop: "10%", width: mvs(140), height: mvs(40), resizeMode: "contain" }} source={require('../../../assets/images/logo.png')} />
        
        <View style={{ marginTop: "5%", }}>
          <Text style={styles.heading}>{"Create an account"}</Text>
          <Text style={styles.subHeading}>{"Already have an account?"} <Text onPress={()=>{navigation.navigate("LoginScreen")}} style={[styles.subHeading, styles.loginTxt]}>{"Log in"}</Text></Text>
        </View>

        <View style={{ marginTop: mvs(20), flexDirection: "column",  }}>
                <AppTextInput
                  label='Password'
                  value={password}
                  onChangeText={setPassword}
                  placeholder="********"
                  mainStyle={{ width: "95%" }}
                  secureTextEntry
                />
                <AppTextInput
                  label='Confirm Password'
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="********"
                  mainStyle={{ width: "95%" }}
                  secureTextEntry
                />
              <Text style={[styles.pwdValidationText, { color: getColor(hasLowerCase) }, { marginTop: mvs(5) }]}>{"At least one lowercase letter [a-z]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasUpperCase) }]}>{"At least one uppercase letter [A-Z]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasSymbol) }]}>{"At least one symbol [!?@#$%^&*_-]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasNumber) }]}>{"At least one numeral [0-9]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(isMinLength) }]}>{"Minimum 8 characters"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(isMatch) }]}>{"Password match"}</Text>

              </View>
<View style={{marginTop:mvs(20)}}/>
        <AppButton disabled={!isPasswordValid} title='Reset' onPress={() => { navigation.navigate('LoginScreen')}} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: "#ffffff",
    paddingLeft: mvs(30)
  },
  pwdValidationText: {
    color: COLORS.GrayText,
    fontSize: mvs(12),
    fontWeight: "medium",
    textAlign: "left",
  },
  button: {
    backgroundColor: '#0044FF',
    padding: mvs(10),
    marginVertical: mvs(20),
    borderRadius: mvs(5),
    height: mvs(50),
    width: mvs(200),
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: COLORS.Black,
    fontSize: mvs(25),
    fontWeight: "bold",
    textAlign: "left",
    marginTop: mvs(10)
  },
  subHeading: {
    color: COLORS.GrayText,
    fontSize: mvs(12),
    fontWeight: "bold",
    textAlign: "left",
    marginTop: mvs(5)
  },
  forgotPwdText: {
    color: COLORS.GrayText,
    fontSize: mvs(15),
    fontWeight: "bold",
    textAlign: "left",
  },
  loginTxt: {
    color: COLORS.BlueText
  },
  forgotPassword: {
    fontSize: mvs(18),
    fontWeight: "medium",
    marginTop: mvs(2),
    marginLeft: mvs(15)
  }
})