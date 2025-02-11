import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS } from "../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome"; // Import Vector Icons
import AppButton from "./AppButton";
import AppCancelButton from "./AppCancelButton";
import AppAddNewButton from "./AppAddNewButton";
import { mvs } from "react-native-size-matters";
import { AppBorderRadius } from "../constants";
import AppTextInput from "./AppTextInput";
import Checkbox from "../../assets/images/svg/Checkbox.svg"
import UnCheckbox from "../../assets/images/svg/UnCheckbox.svg"
const EditProfileModal = ({ visible, onClose }) => {
  const [selectedTests, setSelectedTests] = useState([]);

  const tests = [
    "ECG",
    "Treadmill",
    "PAD Testing",
    "Endothelial Function Testing",
    "Automatic Function Testing",
    "POC (Point of Care) Testing",
    "Ultrasound (General)",
    "Echocardiography",
    "CT-Scan",
    "MRI",
    "PET",
    "SPECT",
  ];

  const toggleCheckbox = (test) => {
    setSelectedTests((prev) =>
      prev.includes(test)
        ? prev.filter((item) => item !== test)
        : [...prev, test]
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.scrollContainer}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Edit user info</Text>
              <View style={styles.buttonGroup}>
                <AppCancelButton onPress={onClose} />
                <AppAddNewButton noButtonIcon={true} title="Save Changes" onPress={() => { }} />
              </View>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <View style={styles.row}>
                <AppTextInput label={"First Name"} mainStyle={{ width: "48%" }} />
                <AppTextInput label={"Last Name"} mainStyle={{ width: "48%" }} />
              </View>

              <View style={styles.row}>
                <AppTextInput label={"Phone Number"} keyboardType="phoneNumber" mainStyle={{ width: "48%" }} />
                <AppTextInput label={"Login Email"} mainStyle={{ width: "48%" }} />
              </View>

              <View style={styles.inputContainerFull}>
                <AppTextInput label={"Organization Name"} placeholder="Lorem Ipsum Lorem Ipsum" mainStyle={{ width: "100%" }} />
              </View>

              <View style={styles.inputContainerFull}>
                <AppTextInput label={"Organization URL"} placeholder="http://www.loremipsum.com/123" mainStyle={{ width: "100%" }} />
              </View>

              <View style={styles.inputContainerFull}>
                <AppTextInput label={"Number of Locations"} placeholder="Enter (1 to 1000)" mainStyle={{ width: "100%" }} />
              </View>

              {/* Checkboxes (Two-column Layout) */}
              <View style={styles.checkboxContainer}>
                {tests.map((test, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.checkboxRow}
                    onPress={() => toggleCheckbox(test)}
                  >
                    {/* <Icon
                      name={selectedTests.includes(test) ? "check-square" : "square-o"}
                      size={20}
                      color={COLORS.primary}
                    /> */}
                     {selectedTests.includes(test) ? <Checkbox width={mvs(20)} height={mvs(20)} /> :
                      <UnCheckbox width={mvs(20)} height={mvs(20)} />}
                    <Text style={styles.checkboxLabel}>{test}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: mvs(20),
    borderRadius: mvs(10),
    maxHeight: "80%", // Prevents modal from exceeding screen height
  },
  scrollContainer: {
    maxHeight: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: mvs(20),
  },
  title: {
    fontSize: mvs(20),
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: mvs(10)
  },

  cancelText: {
    color: "#000",
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  saveText: {
    color: "#fff",
  },
  formContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  inputContainer: {
    width: "48%",
  },
  inputContainerFull: {
    width: "100%",
    marginTop: mvs(5),
  },
  label: {
    fontSize: mvs(14),
    fontWeight: "600",

    marginBottom: 5,
  },
 
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows items to wrap into multiple rows
    justifyContent: "space-between",
    marginTop: mvs(20),
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%", // Two columns
    marginBottom: mvs(10),
  },
  checkboxLabel: {
    marginLeft: mvs(10),
    fontSize: mvs(14),
  },
});
