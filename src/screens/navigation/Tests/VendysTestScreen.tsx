import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
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

type ConnectionPhases = "connecting" | "connected" | "disconnected" |"";
interface deviceConnection {
  connection: ConnectionPhases,
  DeviceImage?: any,
  deviceName?:string,
  step?:number
}
const VendysScreen = () => {

  const [DevicesList, setDevicesList] = useState<("BPcuff" | "LFS" | "RFS")[]>([]);
const [bpConnection, setBpConnection] = useState<ConnectionPhases>("connecting");
const [LFSConnection, setLFSConnection] = useState<ConnectionPhases>("");
const [RFSConnection, setRFSConnection] = useState<ConnectionPhases>("");

const isFocused = useIsFocused();

useEffect(() => {
  let timeout = 2000;
  if (isFocused) {
    setTimeout(() => {
      setDevicesList((prev) => [...prev, "BPcuff"]);
      setBpConnection("connected");
      setLFSConnection("connecting");

      setTimeout(() => {
        setDevicesList((prev) => [...prev, "LFS"]);
        setLFSConnection("connected");
        setRFSConnection("connecting");

        setTimeout(() => {
          setDevicesList((prev) => [...prev, "RFS"]);
          setRFSConnection("connected");
        }, timeout);
      }, timeout);
    }, timeout);
  }
}, [isFocused]);

useEffect(() => {
  console.log("DevicesList", DevicesList);
}, [DevicesList]); // Log whenever DevicesList changes

  
  const DeviceConnection: React.FC<deviceConnection> = ({ connection, DeviceImage, deviceName, step }) => {
    return (
      <>
        {
          connection == "connected" ?
            <View style={{ flexDirection: "row", alignItems: "center", width:"100%" }}>
              <DeviceImage height={mvs(70)} width={mvs(70)} />
              <View style={{flexDirection:"row", width:"75%", justifyContent:"space-between"}}>
              <Text style={{ fontSize: mvs(15), color: COLORS.darkBlue, paddingLeft: mvs(20) }}>{deviceName}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: mvs(20) }}>
                <HalfBattery height={mvs(30)} width={mvs(30)} />
                <Text style={{ fontSize: mvs(14), fontWeight: "bold", color: COLORS.darkBlue }}>Connected</Text>
              </View>
              </View>
              
            </View> :
            connection == "disconnected" ?
            <View style={{ flexDirection: "row", alignItems: "center", width:"100%" }}>
            <DeviceImage height={mvs(70)} width={mvs(70)} />
            <View style={{flexDirection:"row", width:"75%", justifyContent:"space-between"}}>
            <Text style={{ fontSize: mvs(15), color: COLORS.darkBlue, paddingLeft: mvs(20) }}>Left {deviceName}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: mvs(20) }}>
              <HalfBattery height={mvs(30)} width={mvs(30)} />
              <Text style={{ fontSize: mvs(14), fontWeight: "bold", color: COLORS.appRed }}>DisConnected</Text>
            </View>
            </View>
            
          </View> :
              connection == "connecting" ?
                <View style={{ flexDirection: "row", alignItems: "center", width:"100%"}}>
                  <DeviceImage height={mvs(120)} width={mvs(90)}style={{}} />
                  <View style={{ flexDirection: "column", width: "72%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                      <Text style={{ fontSize: mvs(15), color: COLORS.darkBlue }}>Step </Text>
                        <View style={{ backgroundColor: COLORS.darkBlue, paddingHorizontal: mvs(10), paddingVertical:mvs(5), borderRadius: mvs(35) }}>
                          <Text style={{ fontSize: mvs(15), color: COLORS.white, fontWeight:"bold" }}>{step}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <HalfBattery height={mvs(30)} width={mvs(30)} />
                        <Text style={{ fontSize: mvs(14), fontWeight: "bold", color: COLORS.appRed }}>Connecting</Text>
                      </View>
                    </View>
                    <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Turn on {deviceName}</Text>
                  </View>
                </View>
                : null
        }
      </>
    )
  }

 


  return (
    <SafeAreaView style={styles.container}>
      <AppScreenHeader />
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <View style={{ width: "100%", height: "100%", backgroundColor: COLORS.bgBlue, paddingHorizontal: mvs(25), paddingVertical: mvs(15) }}>
          <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => { }}
                activeOpacity={0.8} // Slight opacity feedback on press
                disabled={true}
              >
                <BackArrow height={10} width={20} />
                <Text style={styles.text}>{"Back"} </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Devices</Text>
            </View>
            <View style={{ flexDirection: "row", gap: mvs(15) }}>
              {/* <AppCancelButton onPress={()=>{}}/> */}
              <AppAddNewButton title={"Start a Test"} onPress={() => { }} />
            </View>
          </View>

          <View style={{ width: "100%", backgroundColor: COLORS.white, marginVertical: mvs(20), borderRadius: mvs(10), padding: mvs(20) }}>
            <View>
              <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Turn on Devices in Following Steps</Text>
              <Text style={{ fontSize: mvs(15), color: COLORS.darkBlue }}>Please make sure all the devices are off at first and only follow the steps</Text>
            </View>
            {/* <View>
              <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Blood Pressure Cuff is disconnected</Text>
              <Text style={{ fontSize: mvs(15), color: COLORS.darkBlue }}>Please make sure battery is charged and software automatically connected</Text>
            </View> */}
            <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", }}>
              <View style={{ marginTop: mvs(20), width:"70%" }}>
                {/* <BpCuffConnection connection="connected" /> */}
{/* {
  deviceConnect =="BPcuff" ?
  <DeviceConnection connection={bpConnection} DeviceImage={BPcuffIcon} deviceName='Blood Pressure Cuff' step={1}/>:
  deviceConnect =="LFS"?
  <DeviceConnection connection={LFSConnection} DeviceImage={LeftFingerSensor} deviceName='Left Finger Sensor' step={2}/>:
  deviceConnect=="RFS"?
  <DeviceConnection connection={RFSConnection} DeviceImage={RightFingerSensor} deviceName='Right Finger Sensor' step={3}/>:
  null
}
   */}
   {bpConnection !="" && <DeviceConnection connection={bpConnection} DeviceImage={BPcuffIcon} deviceName='Blood Pressure Cuff' step={1}/>}
   {LFSConnection !="" && <DeviceConnection connection={LFSConnection} DeviceImage={LeftFingerSensor} deviceName='Left Finger Sensor' step={2}/>}
   {RFSConnection !="" && <DeviceConnection connection={RFSConnection} DeviceImage={RightFingerSensor} deviceName='Right Finger Sensor' step={3}/>}


                


              </View>
              <View style={{width:"30%"}}>
                <Image source={images.SplashDevice} style={{ height: mvs(180), width: mvs(180), marginTop: mvs(20), resizeMode: "contain" }} />
              </View>
            </View>


          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default VendysScreen

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
})