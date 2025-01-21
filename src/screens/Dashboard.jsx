import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'


const Dashboard = () => {
    console.log("auth==>",global.auth)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})