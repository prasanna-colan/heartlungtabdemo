import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {  mvs } from 'react-native-size-matters'
import { VerifyAccountScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import AppButton from '../../components/AppButton'
import MailSent from "../../../assets/images/svg/MailsentRafiki.svg"
import AppBackButton from '../../components/AppBackButton'

const VerifyAccountScreen: React.FC<VerifyAccountScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <AppBackButton onPress={() => navigation.pop()} /> */}
      <View style={{ alignItems: "center", justifyContent: "center", height:"85%" }}>
        <MailSent height={mvs(200)} width={mvs(200)} />
        <View style={{ marginTop: mvs(10), }}>
          <Text style={styles.heading}>{"Welcome to yourLiveLong account"}</Text>
          <Text style={styles.subHeading}>{"We sent you an email. Please check your inbox or spam folder\nand click on the link to verify your account."}</Text>
        </View>
        <AppButton buttonStyle={{marginTop:mvs(20)}} title='Open email' onPress={() => { navigation.navigate('OnboardScreen') }} />
      </View>
    </SafeAreaView>
  )
}

export default VerifyAccountScreen

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
    fontSize: mvs(20),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: mvs(10)
  },
  subHeading: {
    color: COLORS.GrayText,
    fontSize: mvs(12),
    fontWeight: "regular",
    textAlign: "center",
    marginTop: mvs(10)
  },
  forgotPwdText: {
    color: COLORS.GrayText,
    fontSize: mvs(10),
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