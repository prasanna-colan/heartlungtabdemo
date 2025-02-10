import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import AppScreenHeader from '../../components/AppScreenHeader'


const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
          <AppScreenHeader/>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
})