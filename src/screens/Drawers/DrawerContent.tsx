import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For dropdown icons
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { mvs } from "react-native-size-matters";
import { useNavigationState } from '@react-navigation/native';
import { COLORS } from "../../../assets/colors";
import SettingsIcon from "../../../assets/images/svg/SettingsIcon.svg"
import BluetoothIcon from "../../../assets/images/svg/BluetoothIcon.svg"

const getActiveRouteName = () => {
  const routes = useNavigationState(state => state?.routes);
  const activeIndex = useNavigationState(state => state?.index);
  return routes?.[activeIndex]?.name;
};


const DrawerContent = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [isDeviceExpanded, setIsDeviceExpanded] = useState(false); // Manage dropdown state
  const [isTestExpanded, setIsTestExpanded] = useState(false); // Manage Test dropdown state
  const activeRoute = getActiveRouteName();
  return (
    <View style={styles.container}>
      {/* Drawer Header */}
      <View style={styles.header}>
        <Image style={{ width: "90%", height: mvs(45), resizeMode: "contain", marginVertical: mvs(10) }} source={require('../../../assets/images/logo.png')} />
      </View>

      {/* Dashboard Button */}
      <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")} style={[styles.button, activeRoute == "DashboardScreen" && { backgroundColor: COLORS.bgBlue }]}>
      <SettingsIcon height={mvs(18)} width={mvs(18)}/>
        <Text style={styles.drawerMenuText}>Dashboard</Text>
      </TouchableOpacity>

      {/* Device Dropdown */}
      <TouchableOpacity
        onPress={() => setIsDeviceExpanded(!isDeviceExpanded)}
        style={styles.dropdownButton}
      >
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <BluetoothIcon height={mvs(18)} width={mvs(18)}/>
        <Text style={styles.drawerMenuText}>Device</Text>
        </View>
        
        <Icon name={isDeviceExpanded ? "expand-less" : "expand-more"} size={mvs(20)} color="#000" />
      </TouchableOpacity>

      {isDeviceExpanded && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => navigation.navigate("VendysScreen")} style={[styles.dropdownItem, activeRoute == "VendysScreen" && { backgroundColor: COLORS.bgBlue }]}>
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


      {/* Device Dropdown */}
      <TouchableOpacity
        onPress={() => setIsTestExpanded(!isTestExpanded)}
        style={styles.dropdownButton}
      >
         <View style={{flexDirection:"row", alignItems:"center"}}>
        <SettingsIcon height={mvs(18)} width={mvs(18)}/>
        <Text style={styles.drawerMenuText}>Tests</Text>
        </View>
        <Icon name={isTestExpanded ? "expand-less" : "expand-more"} size={mvs(20)} color="#000" />
      </TouchableOpacity>

      {isTestExpanded && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => navigation.navigate("VendysTestScreen")} style={[styles.dropdownItem, activeRoute == "VendysTestScreen" && { backgroundColor: COLORS.bgBlue }]}>
            <Text style={styles.dropdownText}>Vendys</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Settings Button */}
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")} style={styles.button}>
        <SettingsIcon height={mvs(18)} width={mvs(18)}/>
        <Text style={styles.drawerMenuText}>Settings</Text>
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
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  text: {
    fontSize: mvs(13),
  },
  dropdown: {
    backgroundColor: "#f9f9f9",
  },
  dropdownItem: {
    paddingLeft:mvs(15),
    paddingVertical: mvs(10),
  },
  activeButton: {
    backgroundColor: "#D3D3D3", // Gray color for active screen
  },
  dropdownText: {
    fontSize: mvs(14),
    color: "#555",
  },
  drawerMenuText: {
    fontSize: mvs(13),
    paddingLeft:mvs(5),
    color: "#555",
  },
});

export default DrawerContent;
