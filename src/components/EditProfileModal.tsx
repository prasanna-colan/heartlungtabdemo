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
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
               <AppButton title="Save Changes"/>
              </View>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput style={styles.input} value="John" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput style={styles.input} value="Michael" />
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Phone Number</Text>
                  <TextInput style={styles.input} value="123 456 7890" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Login Email</Text>
                  <TextInput style={styles.input} value="johndoe123@gmail.com" />
                </View>
              </View>

              <View style={styles.inputContainerFull}>
                <Text style={styles.label}>Organization Name</Text>
                <TextInput style={styles.input} value="Lorem Ipsum Lorem Ipsum" />
              </View>

              <View style={styles.inputContainerFull}>
                <Text style={styles.label}>Organization URL</Text>
                <TextInput
                  style={styles.input}
                  value="http://www.loremipsum.com/123"
                />
              </View>

              <View style={styles.inputContainerFull}>
                <Text style={styles.label}>Number of Locations</Text>
                <TextInput style={styles.input} placeholder="Enter (1 to 1000)" />
              </View>

              {/* Checkboxes (Two-column Layout) */}
              <View style={styles.checkboxContainer}>
                {tests.map((test, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.checkboxRow}
                    onPress={() => toggleCheckbox(test)}
                  >
                    <Icon
                      name={selectedTests.includes(test) ? "check-square" : "square-o"}
                      size={20}
                      color={COLORS.primary}
                    />
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
    padding: 20,
    borderRadius: 10,
    maxHeight: "80%", // Prevents modal from exceeding screen height
  },
  scrollContainer: {
    maxHeight: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  cancelButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    height:47,
    width:90,
    marginTop:15,
    alignItems:'center'
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
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows items to wrap into multiple rows
    justifyContent: "space-between",
    marginTop: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%", // Two columns
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
  },
});
