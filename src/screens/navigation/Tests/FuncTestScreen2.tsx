import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppScreenHeader from "../../../components/AppScreenHeader";
import { ms, mvs } from "react-native-size-matters";
import AppBackButton from "../../../components/AppBackButton";
import { COLORS } from "../../../../assets/colors";
import BackArrow from "../../../../assets/images/svg/BackArrow.svg";
import { AppBorderRadius } from "../../../constants";
import AppAddNewButton from "../../../components/AppAddNewButton";
import AppCancelButton from "../../../components/AppCancelButton";
import Vendys_tab from "../../../../assets/images/svg/vendys_tab.svg";
import { images } from "../../../../assets/images";
import BPcuffIcon from "../../../../assets/images/svg/BPcuff.svg";
import HalfBattery from "../../../../assets/images/svg/HalfBattery.svg";
import LeftFingerSensor from "../../../../assets/images/svg/LeftFingerSensor.svg";
import RightFingerSensor from "../../../../assets/images/svg/RightFingerSensor.svg";
import { useIsFocused } from "@react-navigation/native";
import Preparation1 from "../../../../assets/images/svg/Preparation1.svg";
import Preparation2 from "../../../../assets/images/svg/Preparation2.svg";
import { FuncTestScreen2Props } from "../../types";

type ConnectionPhases = "connecting" | "connected" | "disconnected" | "";
interface deviceConnection {
  connection: ConnectionPhases;
  DeviceImage?: any;
  deviceName?: string;
  step?: number;
}
const FuncTestScreen2: FC<FuncTestScreen2Props> = ({ navigation }) => {
  const [DevicesList, setDevicesList] = useState<("BPcuff" | "LFS" | "RFS")[]>(
    []
  );
  const steps = ["Preparation", "BP Measurement", "VENDYS Test", "Result"];
  const [step, setStep] = useState(0); // Track current step
  const [checkExportAll, setCheckExportAll] = useState<boolean>(false); // Track current step

  const isFocused = useIsFocused();

  const InfoCard = ({ title, value, unit, icon }) => {
    return (
      <View
        style={[styles.card, { flexDirection: "row", alignItems: "center" }]}
      >
        <Text style={[styles.icon, { paddingRight: 10 }]}>{icon}</Text>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>
            {value} {unit}
          </Text>
        </View>
      </View>
    );
  };

  const StatusCard = ({ progress }) => {
    return (
      <View style={[styles.card, { width: "40%" }]}>
        <Text style={styles.title}>Status</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    );
  };

  const QualityCheckCard = ({ items }) => {
    return (
      <View style={[styles.card, { width: "50%" }]}>
        <Text style={styles.title}>Quality Check</Text>
        {items.map((item, index) => (
          <Text key={index} style={styles.qualityItem}>
            • {item}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppScreenHeader />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[{ flexGrow: 1 }]}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.bgBlue,
            paddingHorizontal: mvs(25),
            paddingVertical: mvs(15),
          }}
        >
          <View style={{ flexDirection: "row", width: "100%", flexShrink: 1 }}>
            <View style={styles.progressContainer}>
              {steps.map((stepName, index) => (
                <View
                  key={index}
                  style={[
                    styles.progressStep,
                    index != 0 && { paddingLeft: mvs(5) },
                  ]}
                >
                  {/* Step Number inside Circle */}
                  <View
                    style={[
                      styles.progressCircle,
                      index <= step
                        ? styles.activeCircle
                        : styles.inactiveCircle,
                    ]}
                  >
                    <Text
                      style={[
                        styles.stepNumber,
                        index <= step
                          ? styles.inactiveStepText
                          : styles.activeStepText,
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
            <View
              style={{
                flexDirection: "row-reverse",
                width: "40%",
                alignSelf: "flex-end",
                gap: mvs(10),
              }}
            >
              <AppAddNewButton
                iconSize={12}
                onPress={() => {
                  navigation.navigate("FuncTestScreen2");
                }}
                title="New Patient"
                buttonStyle={{
                  backgroundColor: COLORS.appRed,
                  paddingVertical: mvs(6),
                  paddingHorizontal: 0,
                }}
                textStyle={{ color: COLORS.white, fontSize: mvs(11) }}
              />
              <AppAddNewButton
                iconSize={12}
                onPress={() => {
                  navigation.navigate("ExistingPatientScreen");
                }}
                title="Existing Patient"
                buttonStyle={{
                  backgroundColor: COLORS.darkBlue,
                  paddingVertical: mvs(6),
                  paddingHorizontal: mvs(5),
                }}
                textStyle={{ color: COLORS.white, fontSize: mvs(11) }}
              />
            </View>
          </View>
          {step == 0 && (
            <>
              <View style={styles.container}>
                {/* Temperature Cards */}
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={[styles.card, { width: "70%",height:300, marginRight: 25 }]}
                  >
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_640.jpg",
                      }}
                      style={{ height: 250, width: "100%" }}
                    />
                  </View>
                  <View>
                    <View style={styles.card}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text>Probe SN</Text>
                        <Text>20104</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text>Tests Available</Text>
                        <Text>74</Text>
                      </View>
                    </View>
                    <View style={styles.card}>
                      <View
                        style={[
                        
                          { flexDirection: "row", alignItems: "center" },
                        ]}
                      >
                        <Text style={[styles.icon, { paddingRight: 10 }]}>
                          {"icon"}
                        </Text>
                        <View>
                          <Text style={styles.title}>{"R-Finger Temperature"}</Text>
                          <Text style={styles.value}>
                            {"27.12"} 
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                        
                          { flexDirection: "row", alignItems: "center" },
                        ]}
                      >
                        <Text style={[styles.icon, { paddingRight: 10 }]}>
                          {"icon"}
                        </Text>
                        <View>
                          <Text style={styles.title}>{"L-Finger Temperature"}</Text>
                          <Text style={styles.value}>
                            {"26.14"} 
                          </Text>
                        </View>
                      </View>

                      <View
                        style={[
                        
                          { flexDirection: "row", alignItems: "center" },
                        ]}
                      >
                        <Text style={[styles.icon, { paddingRight: 10 }]}>
                          {"icon"}
                        </Text>
                        <View>
                          <Text style={styles.title}>{"Room Temperature"}</Text>
                          <Text style={styles.value}>
                            {"26.16"}
                          </Text>
                        </View>
                      </View>

                    </View>
                    <InfoCard
                      title="Cuff Pressure"
                      value="83.11"
                      unit="mmHg"
                      icon="🩸"
                    />
                    <View style={styles.card}>
                      <Text>{"Time (sec)"}</Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text>{"BP Systolic mmHg "}</Text>
                        <Text>{"110"} </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text>{"BP Diastolic mmHg "}</Text>
                        <Text>{"70"} </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text>{"Pulse "}</Text>
                        <Text>{"72"} </Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* Status & Quality Check */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <QualityCheckCard
                    items={[
                      "Cold finger",
                      "Cold/Hot Room",
                      "Baseline Stabilization",
                      "Sympathetic Response",
                      "Vasomotor Instability",
                    ]}
                  />
                  <StatusCard progress={30} />
                </View>
              </View>
            </>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FuncTestScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  button: {
    // backgroundColor:"red",
    // paddingVertical: mvs(5),
    borderRadius: AppBorderRadius,
    marginVertical: mvs(10),
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: mvs(12),
    fontWeight: "medium",
    paddingLeft: mvs(5),
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
    borderWidth: 0.5,
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
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    marginTop: 5,
  },
  icon: {
   
    textAlign: "center",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
  },
  progress: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    textAlign: "center",
  },
  qualityItem: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
