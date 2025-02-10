import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreenHeader from "../../components/AppScreenHeader";
import { COLORS } from "../../../assets/colors";
import AppTextInput from "../../components/AppTextInput";
import { mvs } from "react-native-size-matters";
import AppButton from "../../components/AppButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const userInfo = [
  { label: "First Name", value: "Marvin" },
  { label: "Last Name", value: "McKinney" },
  { label: "Email", value: "marvin@mail.com" },
  { label: "Phone number", value: "456-254-1254" },
  { label: "Organization name", value: "Marvens organization" },
  { label: "Organization URL", value: "www" },
];

const addressInfo = [
  { label: "Address Line 1", value: "123 Main Street" },
  { label: "Address Line 2", value: "Apt 4B" },
  { label: "City", value: "Houston" },
  { label: "State", value: "Texas" },
  { label: "Zip Code", value: "77001" },
  { label: "Country", value: "USA" },
];

const SettingsScreen = () => {
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Simulated API response
      const apiData = {
        ECG: false,
        Treadmill: false,
        PADTesting: true, // Example: this comes checked from the API
        EndothelialFunctionTesting: false,
        AutomaticFunctionTesting: false,
        POC: false,
        Ultrasound: false,
        Echocardiography: false,
        CTScan: false,
        MRI: false,
        PET: false,
        SPECT: false,
      };

      setCheckedItems(apiData);
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <AppScreenHeader />
      <View style={styles.subContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>

        <View style={styles.tabContainer}>
          <Pressable onPress={() => setActiveTab("basicInfo")}>
            <Text
              style={[
                styles.tabText,
                activeTab === "basicInfo" && styles.activeTab,
              ]}
            >
              Basic Info
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab("changePassword")}>
            <Text
              style={[
                styles.tabText,
                activeTab === "changePassword" && styles.activeTab,
              ]}
            >
              Change Password
            </Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.whiteContainer}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "basicInfo" ? (
            <>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.drName}>Dr. Marvin McKinney</Text>
                  <Text style={{color:COLORS.Black}}>Houston Family Medical Clinic</Text>
                  <Text style={{color:COLORS.Black}}>ID: 1234567890</Text>
                </View>
                <TouchableOpacity style={styles.editBtn}>
                  <Text style={styles.editTxt}>Edit profile</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.basicInfo}>Basic Info</Text>
              <FlatList
                data={userInfo}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.infoBox}>
                    <Text>{item.label}</Text>
                    <Text style={styles.infoValue}>{item.value}</Text>
                  </View>
                )}
                scrollEnabled={false}
              />

              <Text style={styles.basicInfo}>Address</Text>
              <FlatList
                 style={{marginBottom:25}}
                data={addressInfo}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.infoBox}>
                    <Text>{item.label}</Text>
                    <Text style={styles.infoValue}>{item.value}</Text>
                  </View>
                )}
                scrollEnabled={false} 
              />
              <Text style={styles.basicInfo}>Facility Information</Text>

              <View style={styles.gridContainer}>
        {Object.entries(checkedItems).map(([key, value], index) => (
          <View key={key} style={styles.checkboxContainer}>
            <Icon 
              name={value ? "checkbox-marked" : "checkbox-blank-outline"} 
              size={20} 
              color={value ? "#007AFF" : "#A0A0A0"} 
            />
            <Text style={[styles.label, key === "PADTesting" && styles.boldLabel]}>
              {key.replace(/([A-Z])/g, " $1").trim()} {/* Formats camelCase to readable text */}
            </Text>
          </View>
        ))}
      </View>
            
            </>
          ) : (
           <ScrollView style={{marginBottom:15}}>
            <AppButton buttonStyle={{position:'absolute',top:10,right:10}} title="Save changes"/>
              <AppTextInput
           
                label="Old Password"
                placeholder="Enter your old password"
                mainStyle={{
                  width: "35%",
                  marginTop: mvs(10),
                }}
              />
              <AppTextInput
                label="New Password"
                placeholder="Enter your new Password"
                mainStyle={{
                  width: "35%",
                  marginTop: mvs(10),
                }}
              />
              <AppTextInput
                label="Confirm New password"
                placeholder="Enter confirm password"
                mainStyle={{
                  width: "35%",
                  marginTop: mvs(10),
                }}
              />
              <Text>{'At lease one lowercase letter [a-z]'} </Text>
              <Text>{'At lease one uppercase letter [A-Z'} </Text>
              <Text>{'At lease one number [0-9]'} </Text>
              <Text>{'At lease one special charater [$,%,&]'} </Text>
              
             
              

         </ScrollView>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 15,
  },
  subContainer: {
    flex: 1,
    padding: 15,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tabText: {
    marginRight: 20,
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 1,
    color: COLORS.primary,
  },
  whiteContainer: {
    flex: 1, // Ensure it takes up space
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drName: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  editBtn: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editTxt: {
    fontWeight: "500",
  },
  basicInfo: {
    color: COLORS.GrayText,
    marginTop: 25,
  },
  infoBox: {
    flex: 1,
    margin: 5,
  },
  infoValue: {
    marginTop: 5,
    fontWeight: "bold",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom:15
  },
  checkboxContainer: {
    width: "50%", // Two items per row
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
    color: "#333",
  },
  boldLabel: {
    fontWeight: "bold",
  },
});
