import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For dropdown icons
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { mvs } from "react-native-size-matters";
import { useNavigationState } from '@react-navigation/native';

const getActiveRouteName = () => {
  const routes = useNavigationState(state => state?.routes);
  const activeIndex = useNavigationState(state => state?.index);
  return routes?.[activeIndex]?.name;
};


const DrawerContent = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [isDeviceExpanded, setIsDeviceExpanded] = useState(false); // Manage dropdown state
  const activeRoute = getActiveRouteName();
  return (
    <View style={styles.container}>
      {/* Drawer Header */}
      <View style={styles.header}>
      <Image style={{ width: "90%", height: mvs(45), resizeMode:"contain", marginVertical:mvs(10) }} source={require('../../../assets/images/logo.png')} />
      </View>

      {/* Dashboard Button */}
      <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")} style={[styles.button, activeRoute =="DashboardScreen" &&{backgroundColor:"#a3a3a3"}]}>
        <Text style={styles.text}>Dashboard</Text>
      </TouchableOpacity>

      {/* Device Dropdown */}
      <TouchableOpacity
        onPress={() => setIsDeviceExpanded(!isDeviceExpanded)}
        style={styles.button}
      >
        <Text style={styles.text}>Device</Text>
        <Icon name={isDeviceExpanded ? "expand-less" : "expand-more"} size={20} color="#000" />
      </TouchableOpacity>

      {isDeviceExpanded && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => navigation.navigate("VendysScreen")} style={[styles.dropdownItem, activeRoute =="VendysScreen" &&{backgroundColor:"#a3a3a3"}]}>
            <Text style={styles.dropdownText}>Vendys</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Device2")} style={[styles.dropdownItem]}>
            <Text style={styles.dropdownText}>Device 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Device3")} style={[styles.dropdownItem]}>
            <Text style={styles.dropdownText}>Device 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Settings Button */}
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")} style={styles.button}>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 20,
  },
  header: {
    alignItems: "center",
    justifyContent:"center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 16,
  },
  dropdown: {
    paddingLeft: 20,
    backgroundColor: "#f9f9f9",
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  activeButton: {
    backgroundColor: "#D3D3D3", // Gray color for active screen
  },
  dropdownText: {
    fontSize: 14,
    color: "#555",
  },
});

export default DrawerContent;
