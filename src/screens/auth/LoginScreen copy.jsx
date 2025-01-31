import { StyleSheet, Text, View,SafeAreaView,Pressable,Image } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../../components/AppTextInput'
import Logo from "../../../assets/images/logo.png"
const LoginScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{flex:1}} contentContainerStyle={[{flexGrow:1}]}>
      <Image style={{width:200,height:200,resizeMode:"contain"}} source={Logo}/>
      <Text style={styles.heading}>{"Welcome to your \nLiveLong account"}</Text>
      <AppTextInput label="Email" placeholder="Enter your email" mainStyle={{marginRight:150,marginLeft:15,marginTop:15}} />
      <AppTextInput label="Password" placeholder="Enter your Password" mainStyle={{marginRight:150,marginLeft:15,marginTop:15}} secureTextEntry />
      <Text style={styles.forgotPassword}>{"Forgot Password ?"}</Text>
      <Pressable style={styles.button} onPress={() =>{ navigation.navigate('Home') }}>
        <Text style={{color:"white",fontSize:18}}>Continue</Text>
      </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor:"#ffffff"
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
    heading:{
      fontSize:38,
      fontWeight:"bold",
      textAlign:"left",
      marginTop:10
    },
    forgotPassword:{
      fontSize:18,
      fontWeight:"medium",
      marginTop:2,
      marginLeft:15
    }
})