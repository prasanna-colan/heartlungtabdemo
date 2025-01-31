import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppBackButton from "../../components/AppBackButton";
const headerData = [
  {
    id: 1,
    title: "Admin Profile",
    isCheck: true,
  },
  {
    id: 2,
    title: "Organization Profile",
    isCheck: false,
  },
  {
    id: 3,
    title: "Terms and Services",
    isCheck: false,
  },
  {
    id: 4,
    title: "Complete",
    isCheck: false,
  },
];
const Home = ({ navigation }) => {
  const [data, setData] = useState(headerData);

  const AdminProfileContent = () => {
    return (
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Complete your personal Profile</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Contact Informationsss</Text>
      </View>
    )
  }
  const moveTo = () => {
    navigation.navigate("Dashboard");
    global.auth = true;
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
      style={{flex: 1,}}
        contentContainerStyle={[{ flexGrow: 1 }, styles.container]}
      >
        <AppBackButton onPress={()=> navigation.goBack()}/>
        <Image
          style={{ width: 200, height: 100, resizeMode: "contain" }}
          source={require("../../../assets/images/logo.png")}
        />
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View
                style={{
                  backgroundColor:item.isCheck ? "blue" : "grey",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft:10
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {item.id}
                </Text>
              </View>
              <Text style={{ marginLeft: 5,marginTop:5 }}>{item.title}</Text>
            </View>
          )}
        />

        <Pressable style={styles.button} onPress={() => moveTo()}>
          <Text>Continue</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  button:{
    backgroundColor:'#0044FF',
    padding:10,
    marginVertical:20,
    borderRadius:5,
    height:50,
    width:200,
    marginLeft:15,
    justifyContent:'center',
    alignItems:'center'
},
});
