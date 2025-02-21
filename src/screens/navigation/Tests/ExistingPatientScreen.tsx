import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { FC, useCallback, useEffect, useState } from 'react'
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
import CheckBorder from "../../../../assets/images/svg/CheckBorder.svg"
import UnCheckBorder from "../../../../assets/images/svg/UnCheckBorder.svg"

import HeartLine from "../../../../assets/images/svg/HeartLine.svg"
import EditIcon from "../../../../assets/images/svg/EditIcon.svg"
import HistoryIcon from "../../../../assets/images/svg/HistoryIcon.svg"


import { ExistingPatientScreenProps } from '../../types'
import AppSearchInput from '../../../components/AppSearchInput'

type ConnectionPhases = "connecting" | "connected" | "disconnected" | "";
interface deviceConnection {
  connection: ConnectionPhases,
  DeviceImage?: any,
  deviceName?: string,
  step?: number
}
const ExistingPatientScreen: FC<ExistingPatientScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState<string>(""); // Track current step
  const [checkExportAll, setCheckExportAll] = useState<boolean>(false); // Track current step

  const dummyExistingPatient = [
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    }, {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    }, {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    }, {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    },
    {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    }, {
      name:"Esther Howard",
      LL_ID:3562756,
      email:"deanna.curtis@example.com"
    }
  ]
  
  const renderSearchItem = useCallback(({ item }: {item:any}) => {
    return (
      // <View style={styles.searchItem}>
      //   <View>
      //     <Text style={styles.searchTitle}>{item?.name}</Text>
      //   </View>
     
      // </View>
      <View style={[styles.searchItem, { width: "100%", flexDirection: "row", paddingVertical: mvs(10), borderRadius: AppBorderRadius, }]}>
              <View style={{ width: "18%", flexDirection:"row", alignItems:"center" }}>
                <CheckBorder height={mvs(16)} width={mvs(16)}/>
                <Text numberOfLines={1} style={{color:COLORS.Black, fontSize:mvs(10), paddingLeft:mvs(5) }}>{item.name}</Text>
              </View>
              <View style={{ width: "14%" }}>
                <Text  numberOfLines={1} style={{color:COLORS.Black, fontSize:mvs(10),  }}>{item.LL_ID}</Text>
              </View>

              <View style={{ width: "28%" }}>
                <Text  numberOfLines={1} style={{color:COLORS.BlueText, fontSize:mvs(10),  }}>{item.email}</Text>
              </View>
              <View style={{ width: "40%" , flexDirection:"row", gap:mvs(10)}}>
              <View style={{ flexDirection:"row", alignItems:"center" }}>
                <HeartLine height={mvs(13)} width={mvs(13)}/>
                <Text numberOfLines={1} style={{color:COLORS.Black, fontSize:mvs(10), paddingLeft:mvs(5) }}>New Test</Text>
              </View>
              <View style={{ flexDirection:"row", alignItems:"center" }}>
                <HistoryIcon height={mvs(13)} width={mvs(13)}/>
                <Text numberOfLines={1} style={{color:COLORS.Black, fontSize:mvs(10), paddingLeft:mvs(5) }}>History</Text>
              </View>
              <View style={{ flexDirection:"row", alignItems:"center" }}>
                <EditIcon height={mvs(13)} width={mvs(13)}/>
                <Text numberOfLines={1} style={{color:COLORS.Black, fontSize:mvs(10), paddingLeft:mvs(5) }}>Edit</Text>
              </View>
              </View>
            </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppScreenHeader />
      
        <View style={{ width: "100%", height: "100%", backgroundColor: COLORS.bgBlue, paddingHorizontal: mvs(25), paddingVertical: mvs(15) }}>
          <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", }}>
            <AppBackButton onPress={() => { navigation.goBack() }} />
            <AppAddNewButton iconSize={12} onPress={() => { }} title='New Patient' buttonStyle={{ backgroundColor: COLORS.appRed, paddingVertical: mvs(6), paddingHorizontal: 0 }} textStyle={{ color: COLORS.white, fontSize: mvs(11) }} />
          </View>
          <Text style={{ fontSize: mvs(20), fontWeight: "bold", color: COLORS.darkBlue }}>Existing Patients</Text>
          <View style={{ width: "100%", backgroundColor: COLORS.white, marginTop: mvs(10), borderRadius: mvs(10), }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", padding: mvs(10) }}>
              <View style={{ width: "65%" }}>
                <AppSearchInput placeholder='Search by patient name, email, phone' value={searchText} onChangeText={setSearchText} mainStyle={{ width: "80%" }} />
              </View>
              <View style={{ width: "35%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {
                    checkExportAll ? <Checkbox height={mvs(18)} width={mvs(18)} /> : <UnCheckbox height={mvs(18)} width={mvs(18)} />
                  }
                  <Text style={{ fontSize: mvs(11), color: COLORS.GrayText, paddingLeft: mvs(5) }}>Select All</Text>

                </View>
                <AppAddNewButton title={"Export Data"} onPress={() => { }} />
              </View>
            </View>

            <View style={{ width: "98%", flexDirection: "row", paddingHorizontal: mvs(10), backgroundColor: COLORS.LightGray, paddingVertical: mvs(5), borderRadius: AppBorderRadius, marginHorizontal: mvs(5) }}>
              <View style={{ width: "18%" }}>
                <Text style={{color:COLORS.darkBlue, fontSize:mvs(11), fontWeight:"500" }}>PATIENT NAME</Text>
              </View>
              <View style={{ width: "14%" }}>
                <Text style={{color:COLORS.darkBlue, fontSize:mvs(11), fontWeight:"500" }}>LIVELONG ID</Text>
              </View>

              <View style={{ width: "28%" }}>
                <Text style={{color:COLORS.darkBlue, fontSize:mvs(11), fontWeight:"500" }}>EMAIL</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text style={{color:COLORS.darkBlue, fontSize:mvs(11), fontWeight:"500" }}>QUICK ACCESS</Text>
              </View>
            </View>
            {
              dummyExistingPatient?.length &&
              <FlatList
              style={styles.searchListHeight}
              data={dummyExistingPatient}
              keyExtractor={(item, index) => `${index}_search_keys`}
              renderItem={renderSearchItem}
              // ListEmptyComponent={<RenderEmptyComponent title="No data found" desc="No data found"/>}
            />
            }
          </View>
        </View>

      
    </SafeAreaView>
  )
}

export default ExistingPatientScreen

const styles = StyleSheet.create({

  searchListHeight:{
    width:"100%", paddingBottom:mvs(20), paddingHorizontal:mvs(15)
  },
  searchItem:{
    borderBottomColor:COLORS.LightGray, borderBottomWidth:mvs(0.7),
  },
  
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
    borderWidth: 0.5
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