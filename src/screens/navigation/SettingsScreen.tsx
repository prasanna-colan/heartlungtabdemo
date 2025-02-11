import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreenHeader from "../../components/AppScreenHeader";
import { COLORS } from "../../../assets/colors";
import AppTextInput from "../../components/AppTextInput";
import { ms, mvs } from "react-native-size-matters";
import AppButton from "../../components/AppButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EditProfileModal from "../../components/EditProfileModal";
import AppAddNewButton from "../../components/AppAddNewButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AppBorderRadius } from "../../constants";
import Checkbox from "../../../assets/images/svg/Checkbox.svg"
import UnCheckbox from "../../../assets/images/svg/UnCheckbox.svg"

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  // Password Validation Checks
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasSymbol = /[!?@#$%^&*_-]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const isMinLength = newPassword.length >= 8;
  const isMatch = confirmNewPassword ? newPassword === confirmNewPassword : false;

  const getColor = (condition: boolean) => {
    if (newPassword === "") return COLORS.GrayText; // Default color (gray)
    return condition ? "green" : "red";
  };
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
          <Pressable style={[{ paddingBottom: mvs(5) }, activeTab === "basicInfo" && { borderBottomWidth: mvs(1), borderBottomColor: COLORS.darkBlue }]} onPress={() => setActiveTab("basicInfo")}>
            <Text
              style={[
                styles.tabText,
                activeTab === "basicInfo" && { color: COLORS.darkBlue }
              ]}
            >
              Basic Info
            </Text>
          </Pressable>
          <Pressable style={[{ paddingBottom: mvs(5) }, activeTab === "changePassword" && { borderBottomWidth: mvs(1), borderBottomColor: COLORS.darkBlue }]} onPress={() => setActiveTab("changePassword")}>
            <Text
              style={[
                styles.tabText,
                activeTab === "changePassword" && { color: COLORS.darkBlue }
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
            <View style={{paddingBottom:mvs(20)}}>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.drName}>Dr. Marvin McKinney</Text>
                  <Text style={{ color: COLORS.textBlue, fontSize: mvs(13) }}>
                    Houston Family Medical Clinic
                  </Text>
                  <Text style={{ color: COLORS.textBlue, fontSize: mvs(12) }}>ID: 1234567890</Text>
                </View>

                <AppAddNewButton noButtonIcon={true} title="Edit Profile" onPress={() => setIsModalVisible(true)} buttonStyle={{ backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.appRed }} textStyle={{ color: COLORS.appRed }} />
              </View>
              <View style={{ width: "100%", backgroundColor: COLORS.LightGray, borderRadius: AppBorderRadius, paddingVertical: mvs(4), paddingHorizontal: mvs(5), marginTop: mvs(10) }}>
                <Text style={styles.basicInfo}>Basic Info</Text>
              </View>

              <FlatList
                data={userInfo}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.infoBox}>
                  <Text style={{fontSize:mvs(12), color:COLORS.GrayText}}>{item.label}</Text>
                    <Text style={styles.infoValue}>{item.value}</Text>
                  </View>
                )}
                scrollEnabled={false}
              />

              <View style={{ width: "100%", backgroundColor: COLORS.LightGray, borderRadius: AppBorderRadius, paddingVertical: mvs(4), paddingHorizontal: mvs(5), marginTop: mvs(10) }}>
                <Text style={styles.basicInfo}>Address</Text>
              </View>
              <FlatList
                style={{ marginBottom: 25 }}
                data={addressInfo}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.infoBox}>
                    <Text style={{fontSize:mvs(12), color:COLORS.GrayText}}>{item.label}</Text>
                    <Text style={styles.infoValue}>{item.value}</Text>
                  </View>
                )}
                scrollEnabled={false}
              />
              <View style={{ width: "100%", backgroundColor: COLORS.LightGray, borderRadius: AppBorderRadius, paddingVertical: mvs(4), paddingHorizontal: mvs(5), marginTop: mvs(10) }}>
                <Text style={styles.basicInfo}>Facility Information</Text>
              </View>


              <View style={styles.gridContainer}>
                {Object.entries(checkedItems).map(([key, value], index) => (
                  <View key={key} style={styles.checkboxContainer}>
                    {/* <Icon
                      name={
                        value ? "checkbox-marked" : "checkbox-blank-outline"
                      }
                      size={20}
                      color={value ? "#007AFF" : "#A0A0A0"}
                    /> */}
                     {value ? <Checkbox width={mvs(20)} height={mvs(20)} /> :
                      <UnCheckbox width={mvs(20)} height={mvs(20)} />}
                    <Text
                      style={[
                        styles.label,
                        key === "PADTesting" && styles.boldLabel,
                      ]}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}{" "}
                      {/* Formats camelCase to readable text */}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1, }]}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "80%" }}>
                  <AppTextInput
                    label="Old Password"
                    placeholder="Enter your old password"
                    mainStyle={{
                      width: "60%",
                    }}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                  />
                  <AppTextInput
                    label="New Password"
                    placeholder="Enter your new Password"
                    mainStyle={{
                      width: "60%",
                    }}
                    value={newPassword}
                    onChangeText={setNewPassword}
                  />
                  <AppTextInput
                    label="Confirm New password"
                    placeholder="Enter confirm password"
                    mainStyle={{
                      width: "60%",
                    }}
                    value={confirmNewPassword}
                    onChangeText={setConfirmNewPassword}
                  />
                  <Text style={[styles.pwdValidationText, { color: getColor(hasLowerCase) }, { marginTop: mvs(5) }]}>{"At least one lowercase letter [a-z]"}</Text>
                  <Text style={[styles.pwdValidationText, { color: getColor(hasUpperCase) }]}>{"At least one uppercase letter [A-Z]"}</Text>
                  <Text style={[styles.pwdValidationText, { color: getColor(hasSymbol) }]}>{"At least one symbol [!?@#$%^&*_-]"}</Text>
                  <Text style={[styles.pwdValidationText, { color: getColor(hasNumber) }]}>{"At least one numeral [0-9]"}</Text>
                  <Text style={[styles.pwdValidationText, { color: getColor(isMinLength) }]}>{"Minimum 8 characters"}</Text>
                  <Text style={[styles.pwdValidationText, { color: getColor(isMatch) }]}>{"Password match"}</Text>
                </View>
                <View style={{ width: "20%" }}>
                  <AppAddNewButton noButtonIcon={true} title="Save Changes" onPress={() => { }} />
                </View>
              </View>


            </KeyboardAwareScrollView>
          )}
        </ScrollView>
      </View>
      <EditProfileModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsTitle: {
    fontSize: mvs(24),
    fontWeight: "bold",
  },
  subContainer: {
    flex: 1,
    padding: mvs(15),
    backgroundColor: COLORS.bgBlue
  },
  tabContainer: {
    flexDirection: "row",
    marginVertical: mvs(15),
    gap: mvs(20)
  },
  tabText: {
    fontSize: mvs(13),
    color: COLORS.textBlue
  },
  activeTab: {
    // borderBottomWidth: 1,
    color: COLORS.darkBlue,
  },
  whiteContainer: {
    flex: 1, // Ensure it takes up space
    backgroundColor: COLORS.white,
    padding: mvs(15),
    borderRadius: mvs(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: mvs(5),
    elevation: 3,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drName: {
    fontSize: mvs(20),
    fontWeight: "bold",
    marginBottom: mvs(5),
  },
  editBtn: {
    borderWidth: 1,
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(10),
    borderRadius: mvs(5),
  },
  editTxt: {
    fontWeight: "500",
  },
  basicInfo: {
    color: COLORS.GrayText,
    fontSize: mvs(13),
    fontWeight: "bold"
  },
  infoBox: {
    flex: 1,
    margin: mvs(5),
  },
  infoValue: {
    marginTop: mvs(5),
    fontSize:mvs(13), color:COLORS.Black
  },
  header: {
    fontSize: mvs(18),
    fontWeight: "bold",
    marginBottom: mvs(10),
  },
  sectionHeader: {
    fontSize: mvs(16),
    fontWeight: "600",
    color: "#333",
    marginBottom: mvs(8),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 15,
  },
  checkboxContainer: {
    width: "50%", // Two items per row
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: mvs(5),
  },
  label: {
    fontSize: mvs(14),
    marginLeft: mvs(8),
    color: "#333",
  },
  boldLabel: {
    fontWeight: "bold",
  },
  pwdValidationText: {
    color: COLORS.GrayText,
    fontSize: mvs(12),
    fontWeight: "medium",
    textAlign: "left",
  },
});
