import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'


const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard Screen</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})