import { StyleSheet, Text, View,SafeAreaView,Pressable } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const moveTo = () => {
        navigation.navigate('Dashboard')
        global.auth = true  
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Home</Text>
      <Pressable style={styles.button} onPress={() => moveTo()}>
        <Text>Continue</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})