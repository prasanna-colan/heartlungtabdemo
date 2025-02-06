import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppScreenHeader from '../../../components/AppScreenHeader'
import { mvs } from 'react-native-size-matters'
import AppBackButton from '../../../components/AppBackButton'
import { COLORS } from '../../../../assets/colors'

const VendysScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
              <AppScreenHeader/>

      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <View style={{width:"100%", height:"100%", backgroundColor:"#a3a3a3", paddingHorizontal:mvs(20), paddingTop:mvs(20), paddingBottom:mvs(10)}}>
          <AppBackButton onPress={()=>{}}/>
<Text style={{fontSize:mvs(13), fontWeight:"bold"}}>Devices</Text>
<View style={{width:"100%", backgroundColor:COLORS.white, height:"auto", borderRadius:mvs(10)}}>

</View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default VendysScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%", width:"100%"
  },
})