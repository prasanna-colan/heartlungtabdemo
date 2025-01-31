import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../../components/AppTextInput'
import { ms, mvs } from 'react-native-size-matters'
import { RegisterScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import AppButton from '../../components/AppButton'
import UnCheckbox from "../../../assets/images/svg/UnCheckbox.svg"
import Checkbox from "../../../assets/images/svg/Checkbox.svg"

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <Image style={{ marginTop: "10%", width: mvs(140), height: mvs(40), resizeMode: "contain"  }} source={require('../../../assets/images/logo.png')} />
        <View style={{ marginTop: "15%", }}>
          <Text style={styles.heading}>{"Create an account"}</Text>
          <Text style={styles.subHeading}>{"Already have an account?"} <Text onPress={()=>{navigation.navigate("LoginScreen")}} style={[styles.subHeading, styles.loginTxt]}>{"Log in"}</Text></Text>
        </View>

        <AppTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email..."
          mainStyle={{
            width: "80%",
            marginTop: mvs(50),
          }}
        />

        <View style={{ flexDirection: "row", marginTop: mvs(60), alignItems: "center" }}>

          <Pressable style={{top: mvs(5)}} onPress={() => setIsPrivacyAgreed(!isPrivacyAgreed)}>
            {
              isPrivacyAgreed ?
                <Checkbox width={ms(20)} height={mvs(20)}/> :
                <UnCheckbox width={ms(20)} height={mvs(20)}/>
            }
          </Pressable>

          <Text style={styles.subHeading}>{" I agree with the"} <Text onPress={()=>{navigation.navigate("LoginScreen")}} style={[styles.subHeading, styles.loginTxt]}>{"privacy policy"}</Text></Text>
        </View>

        <AppButton disabled={email == "" || !isPrivacyAgreed} title='Continue' onPress={() => { }} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

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