import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ms, mvs } from 'react-native-size-matters'
import { SplashScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import VENDYS3_text from "../../../assets/images/svg/VENDYS3_text.svg"
import Vendys_tab from "../../../assets/images/svg/vendys_tab.svg"
import ProgressBar from "react-native-progress/Bar";
import { useNavigation } from '@react-navigation/native'

const SplashScreen: React.FC<SplashScreenProps> = ({ }) => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('RegisterScreen');  // Navigates after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);  // Cleanup when leaving SplashScreen
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <Vendys_tab width={ms(150)} height={mvs(120)} style={{ marginTop: mvs(130) }} />
        <VENDYS3_text width={ms(200)} height={mvs(70)} />
        
        
        <ProgressBar
          style={{marginTop:mvs(25)}}
                  progress={Number(50) / 100}
                  width={mvs(300)}
                  height={mvs(8)}
                  color={COLORS.AppBlue} // You can set your desired color
                  unfilledColor={COLORS.progressBarGray}
                  borderRadius={mvs(8)}
                  borderWidth={0}
                  animated
                />
        <Image style={{ alignItems: "flex-start", width: mvs(100), height: mvs(35), marginTop:mvs(20) }} source={require('../../../assets/images/logo.png')} />
        <Text style={styles.rightsTxtStyle}>{"All Rights Reserved."}</Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: COLORS.white,
    paddingLeft: mvs(30)
  },
  rightsTxtStyle: {
    color: COLORS.Black,
    fontSize: mvs(8),
    textAlign: "left",
    marginTop: mvs(5),
    paddingLeft: mvs(4)
  }
})