import { StyleSheet, Text, View,SafeAreaView,Pressable } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login to continue</Text>
      <Pressable style={styles.button} onPress={() =>{ navigation.navigate('Home') }}>
        <Text>Continue</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'orange',
        padding:10,
        marginVertical:20,
        borderRadius:5
    }
})