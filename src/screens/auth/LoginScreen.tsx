import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../../components/AppTextInput'
import { ms, mvs } from 'react-native-size-matters'
import { LoginScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import AppButton from '../../components/AppButton'
import UnCheckbox from "../../../assets/images/svg/UnCheckbox.svg"
import Checkbox from "../../../assets/images/svg/Checkbox.svg"

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <Image style={{ marginTop: "10%", width: mvs(140), height: mvs(40), resizeMode: "contain" }} source={require('../../../assets/images/logo.png')} />
        
        <View style={{ marginTop: "8%", }}>
          <Text style={styles.heading}>{"Welcome to your\nLiveLong account"}</Text>
        </View>

        <AppTextInput
          label='Email'
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          mainStyle={{
            width: "80%",
            marginTop: mvs(50),
          }}
        />
        <AppTextInput
          label='Password'
          value={password}
          onChangeText={setPassword}
          placeholder="Password" mainStyle={{ width: "80%", }} secureTextEntry />
        <Text onPress={()=> navigation.navigate("ResetPasswordScreen")} style={styles.forgotPwdText}>{"Forget Password ?"} </Text>
<View style={{marginTop:mvs(40)}}/>
        <AppButton disabled={email == "" || password == ""} title='Login' onPress={() => { navigation.navigate('VendysScreen')}} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: "#ffffff",
    paddingLeft: mvs(30)
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
    fontSize: mvs(30),
    fontWeight: "bold",
    textAlign: "left",
    marginTop: mvs(10)
  },
  subHeading: {
    color: COLORS.GrayText,
    fontSize: mvs(15),
    fontWeight: "bold",
    textAlign: "left",
    marginTop: mvs(10)
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