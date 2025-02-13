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
import UnCheckbox from "../../../../assets/images/svg/UnCheckbox.svg"
import Checkbox from "../../../../assets/images/svg/Checkbox.svg"
import { ExistingPatientScreenProps } from '../../types'

type ConnectionPhases = "connecting" | "connected" | "disconnected" |"";
interface deviceConnection {
  connection: ConnectionPhases,
  DeviceImage?: any,
  deviceName?:string,
  step?:number
}
const ExistingPatientScreen:FC<ExistingPatientScreenProps> = ({navigation}) => {

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
            <View style={{ flexDirection: "row", width:"100%", justifyContent:"space-between", }}>
              <AppBackButton onPress={()=>{navigation.goBack()}}/>
              <AppAddNewButton iconSize={12} onPress={() => { }} title='New Patient' buttonStyle={{ backgroundColor: COLORS.appRed, paddingVertical: mvs(6), paddingHorizontal: 0 }} textStyle={{ color: COLORS.white, fontSize: mvs(11) }} />
            </View>
            <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Existing Patients</Text>
            <View style={{ width: "100%", backgroundColor: COLORS.white, marginTop: mvs(10), borderRadius: mvs(10),  }}>
<View style={{width:"100%", flexDirection:"row", padding: mvs(20)}}>
  <View style={{width:"65%"}}>

  </View>
  <View style={{width:"35%",flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
    <View style={{flexDirection:"row", alignItems:"center"}}>
      {
        checkExportAll ? <Checkbox height={mvs(18)} width={mvs(18)}/>: <UnCheckbox height={mvs(18)} width={mvs(18)}/>
      }
<Text style={{fontSize:mvs(11), color:COLORS.GrayText, paddingLeft:mvs(5)}}>Select All</Text>
    
    </View>
  <AppAddNewButton title={"Export Data"} onPress={() => { }} />
  </View>
</View>
</View>
        </View>
      
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default ExistingPatientScreen

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