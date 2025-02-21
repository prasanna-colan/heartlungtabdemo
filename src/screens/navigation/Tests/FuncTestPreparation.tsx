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
import R_finger from "../../../../assets/images/svg/R_finger.svg"
import SpeakerOff from "../../../../assets/images/svg/SpeakerOff.svg"
import MenuIcon from "../../../../assets/images/svg/MenuIcon.svg"

import L_Finger from "../../../../assets/images/svg/L_Finger.svg"
import RoomTemp from "../../../../assets/images/svg/RoomTemp.svg"
import Dot_Icon from "../../../../assets/images/svg/Dot.svg"

import { FuncTestPreparationProps } from '../../types'

type ConnectionPhases = "connecting" | "connected" | "disconnected" |"";
interface deviceConnection {
  connection: ConnectionPhases,
  DeviceImage?: any,
  deviceName?:string,
  step?:number
}
const FuncTestPreparation:FC<FuncTestPreparationProps> = ({navigation}) => {

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
          <View style={{width:"100%", flexDirection:"row"}}>
            <View style={{width:"34%"}}>
            <Text numberOfLines={1} style={{fontSize:mvs(10), color:COLORS.Black }}>VENDYS Vascular Function Test</Text>
            </View>
            <View style={{width:"33%", alignItems:"center"}}>
            <Text numberOfLines={1} style={{fontSize:mvs(9.5), color:COLORS.Black }}>Esther Howard</Text>
            </View>
            <View style={{width:"33%", flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
              <View style={{padding:mvs(5), backgroundColor:COLORS.white, borderRadius:mvs(5), alignSelf:"center", aspectRatio:1, flexShrink:1}}>
              <SpeakerOff height={mvs(18)} width={mvs(18)} />
              </View>
            <MenuIcon height={mvs(18)} width={mvs(18)} style={{ marginLeft:mvs(10)}}/>
            </View>
    
          </View>
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
              <AppAddNewButton noButtonIcon onPress={() => { navigation.navigate("FuncTestBPMeasure") }} title='Next' buttonStyle={{ backgroundColor: COLORS.greenButton, paddingVertical: mvs(6), paddingHorizontal: mvs(5) }} textStyle={{ color: COLORS.white, fontSize: mvs(11) }} />
            </View>
          </View>
          {
            step == 0 &&
            <>
              <View style={{ width: "100%", height: "80%", flexDirection: "row", marginTop: mvs(10), justifyContent: "space-between" }}>
                <View style={{ width: "68%", height: "100%", backgroundColor: COLORS.white, borderRadius: mvs(10), alignItems: "center", justifyContent: "center" }}>
                  <Image source={images.VendysGraphicsIsolated} style={{ height: mvs(300), width: mvs(200), resizeMode: "contain" }} />
                </View>
                <View style={{ width: "30%", rowGap:mvs(10) }}>
                  <View style={{ backgroundColor: COLORS.white, borderRadius: mvs(10), padding: mvs(10) }}>
                    <Text style={{ fontSize: mvs(15), color: COLORS.Black, fontWeight: "bold" }} >Quality Check</Text>
                    <View style={{ width: "100%", flexDirection: "row", marginTop: mvs(4) }} >
                      <View style={{ width: "15%", justifyContent: "center" }}>
                        <L_Finger height={mvs(20)} width={mvs(20)} />
                      </View>
                      <View style={{ width: "75%" }}>
                        <Text style={{ fontSize: mvs(10), color: COLORS.Black }}>Cold Finger</Text>
                        <Text style={{ fontSize: mvs(8), color: COLORS.GrayText }}>Checking</Text>
                      </View>
                      <View style={{ width: "15%", justifyContent: "center" }}>
                        <Dot_Icon height={mvs(15)} width={mvs(15)} color={COLORS.greenButton} />
                      </View>
                    </View>

                  </View>
                  <View style={{ backgroundColor: COLORS.white, borderRadius: mvs(10), padding: mvs(8) }}>
                    <View style={{ width: "100%", flexDirection: "row" }} >
                      <View style={{ width: "15%", justifyContent: "center" }}>
                        <RoomTemp height={mvs(20)} width={mvs(20)} />
                      </View>
                      <View style={{ width: "65%", justifyContent:"center" }}>
                        <Text style={{ fontSize: mvs(10), color: COLORS.Black }}>Room Temperature</Text>
                      </View>
                      <View style={{ width: "20%", justifyContent: "center" }}>
                        <Text style={{ fontSize: mvs(12), fontWeight:"bold", color: COLORS.Black }}>27.12</Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", flexDirection: "row", marginTop: mvs(4) }} >
                      <View style={{ width: "15%", justifyContent: "center" }}>
                        <R_finger height={mvs(20)} width={mvs(20)} />
                      </View>
                      <View style={{ width: "65%", justifyContent:"center" }}>
                        <Text style={{ fontSize: mvs(10), color: COLORS.Black }}>R-Finger Temperature</Text>
                      </View>
                      <View style={{ width: "20%", justifyContent: "center" }}>
                        <Text style={{ fontSize: mvs(12), fontWeight:"bold", color: COLORS.Black }}>27.12</Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", flexDirection: "row", marginTop: mvs(4) }} >
                      <View style={{ width: "15%", justifyContent: "center" }}>
                        <L_Finger height={mvs(20)} width={mvs(20)} />
                      </View>
                      <View style={{ width: "65%", justifyContent:"center" }}>
                        <Text style={{ fontSize: mvs(10), color: COLORS.Black }}>L-Finger Temperature</Text>
                      </View>
                      <View style={{ width: "20%", justifyContent: "center" }}>
                        <Text style={{ fontSize: mvs(12), fontWeight:"bold", color: COLORS.Black }}>27.12</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ backgroundColor: COLORS.white, borderRadius: mvs(10) }}>

                  </View>
                </View>

              </View>

            </>

          }
        </View>
      
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default FuncTestPreparation

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