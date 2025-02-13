import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppScreenHeader from '../../../components/AppScreenHeader'
import { ms, mvs } from 'react-native-size-matters'
import AppBackButton from '../../../components/AppBackButton'
import { COLORS } from '../../../../assets/colors'
import BackArrow from "../../../../assets/images/svg/BackArrow.svg"
import { AppBorderRadius } from '../../../constants'
import AppAddNewButton from '../../../components/AppAddNewButton'
import AppCancelButton from '../../../components/AppCancelButton'
import Vendys_tab from "../../../../assets/images/svg/vendys_tab.svg"
import { images } from '../../../../assets/images'
import BPcuffIcon from "../../../../assets/images/svg/BPcuff.svg"
import HalfBattery from "../../../../assets/images/svg/HalfBattery.svg"
import LeftFingerSensor from "../../../../assets/images/svg/LeftFingerSensor.svg"
import RightFingerSensor from "../../../../assets/images/svg/RightFingerSensor.svg"
import { useIsFocused } from '@react-navigation/native'
import Preparation1 from "../../../../assets/images/svg/Preparation1.svg"
import Preparation2 from "../../../../assets/images/svg/Preparation2.svg"
import { FuncTestScreen2Props } from '../../types'

type ConnectionPhases = "connecting" | "connected" | "disconnected" |"";
interface deviceConnection {
  connection: ConnectionPhases,
  DeviceImage?: any,
  deviceName?:string,
  step?:number
}
const FuncTestScreen2:FC<FuncTestScreen2Props> = ({navigation}) => {

  const [DevicesList, setDevicesList] = useState<("BPcuff" | "LFS" | "RFS")[]>([]);
  const steps = ["Preparation", "BP Measurement", "VENDYS Test", "Result"];
  const [step, setStep] = useState(0); // Track current step
  const [checkExportAll, setCheckExportAll] = useState<boolean>(false); // Track current step

const isFocused = useIsFocused();


  return (
    <SafeAreaView style={styles.container}>
      <AppScreenHeader />
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <View style={{ width: "100%", height: "100%", backgroundColor: COLORS.bgBlue, paddingHorizontal: mvs(25), paddingVertical: mvs(15) }}>
          <View style={{ flexDirection: "row", width: "100%", flexShrink:1 }}>
            <View style={styles.progressContainer}>
              {steps.map((stepName, index) => (
                <View key={index} style={[styles.progressStep, index != 0 && { paddingLeft: mvs(5) }]}>
                  {/* Step Number inside Circle */}
                  <View
                    style={[
                      styles.progressCircle,
                      index <= step ? styles.activeCircle : styles.inactiveCircle,
                    ]}
                  >
                    <Text
                      style={[
                        styles.stepNumber,
                        index <= step ? styles.inactiveStepText : styles.activeStepText,
                      ]}
                    >
                      {index + 1}
                    </Text>
                  </View>

                  {/* Step Name */}
                  <Text
                    style={[
                      styles.stepLabel,
                      index <= step ? styles.activeText : styles.inactiveText,
                    ]}
                  >
                    {stepName}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ flexDirection: "row-reverse", width:"40%", alignSelf:"flex-end", gap:mvs(10) }}>
              <AppAddNewButton iconSize={12} onPress={() => { navigation.navigate("FuncTestScreen2")  }} title='New Patient' buttonStyle={{ backgroundColor: COLORS.appRed, paddingVertical: mvs(6), paddingHorizontal: 0 }} textStyle={{ color: COLORS.white, fontSize: mvs(11) }} />
              <AppAddNewButton iconSize={12} onPress={() => { navigation.navigate("ExistingPatientScreen") }} title='Existing Patient' buttonStyle={{ backgroundColor: COLORS.darkBlue, paddingVertical: mvs(6), paddingHorizontal: mvs(5) }} textStyle={{ color: COLORS.white, fontSize: mvs(11) }} />
            </View>
          </View>
          {
            step == 0 &&
            <>
               <View style={{ width: "100%", backgroundColor: COLORS.white, marginTop: mvs(10), borderRadius: mvs(10), padding: mvs(20) }}>
              
            </View>
           
            </>
         
          }
        </View>
      
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default FuncTestScreen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%", width: "100%"
  },
  button: {
    // backgroundColor:"red",
    // paddingVertical: mvs(5),
    borderRadius: AppBorderRadius,
    marginVertical: mvs(10),
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center", justifyContent: "center"

  },
  text: {
    fontSize: mvs(12),
    fontWeight: "medium",
    paddingLeft: mvs(5)
  },
  progressContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: mvs(15),
  },
  progressStep: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressCircle: {
    width: mvs(22),
    height: mvs(22),
    borderRadius: mvs(22 / 2),
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    borderColor: COLORS.Black,
    backgroundColor: COLORS.Black,
  },
  inactiveCircle: {
    borderColor: COLORS.BlueText,
    backgroundColor: COLORS.white,
    borderWidth:0.5
  },
  stepNumber: {
    fontSize: mvs(10),
    fontWeight: "bold",
  },
  activeText: {
    color: COLORS.BlueText,
  },
  activeStepText: {
    color: COLORS.Black,
  },
  inactiveText: {
    color: COLORS.BlueText,
  },
  inactiveStepText: {
    color: COLORS.white,
  },
  progressWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: mvs(5),
  },

  stepLabel: {
    fontSize: mvs(11),
    marginLeft: mvs(5),
  },
})