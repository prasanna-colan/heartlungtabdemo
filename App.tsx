import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated';
import { LoginScreen, OnboardScreen, RegisterScreen, ResetPasswordScreen, SplashScreen, VerifyAccountScreen } from './src/screens/auth';
import { Home, DashboardScreen, Form1, Form2, VendysScreen, SettingsScreen, VendysTestScreen, ExistingPatientScreen, FuncTestPreparation, FuncTestBPMeasure } from './src/screens/navigation';
import DrawerScreenImage from "./assets/images/svg/DrawerScreenImage.svg";
import { mvs } from 'react-native-size-matters';
import { COLORS } from './assets/colors';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './src/screens/Drawers/DrawerContent';

type RootDrawerParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  OnboardScreen: undefined;
  SplashScreen: undefined;
  Home: undefined;
  DashboardScreen: undefined;
  Form1: undefined;
  Form2: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createStackNavigator();

export default function App() {
  const [drawerWidth, setDrawerWidth] = useState(getDrawerWidth());

  useEffect(() => {
    const handleOrientationChange = () => setDrawerWidth(getDrawerWidth());
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => subscription?.remove();
  }, []);

  function getDrawerWidth() {
    const { width, height } = Dimensions.get('window');
    return width > height ? width * 0.5 : width * 0.7;
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
        <Stack.Screen name="VerifyAccountScreen" component={VerifyAccountScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />

      </Stack.Navigator>
    )

  };


  const TestsStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="VendysTestScreen" component={VendysTestScreen} />
        <Stack.Screen name="ExistingPatientScreen" component={ExistingPatientScreen} />
        <Stack.Screen name="FuncTestPreparation" component={FuncTestPreparation} />
        <Stack.Screen name="FuncTestBPMeasure" component={FuncTestBPMeasure} />        
      </Stack.Navigator>
    )
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          drawerType: 'permanent',
          drawerStyle: { width: drawerWidth, backgroundColor: COLORS.white , borderBottomRightRadius:mvs(20)},
          headerShown: false
        }}
        
        drawerContent={({ navigation, state }) => {
          const currentRoute = state?.routes[state.index]?.name;
          if (currentRoute === 'Home' || currentRoute === 'AuthStack') {
            return <CustomContent navigation={navigation} />;
          }
          return <DrawerContent />;
        }}
      >
         <Drawer.Screen name="AuthStack" component={AuthStack} />
        
        <Drawer.Screen name="Home" component={Home}
          options={{ headerShown: false, header: ({ navigation }) => <AuthHeader navigation={navigation} /> }}
        />
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen}
          options={{
            headerShown: false,
            // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            drawerStyle: { width: drawerWidth * 0.5, backgroundColor: '#FF4500' }
          }}
        />
        <Drawer.Screen name="VendysScreen" component={VendysScreen}
          options={{
            headerShown: false,
            // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            drawerStyle: { width: drawerWidth * 0.5, backgroundColor: '#FF4500' }
          }}
        />
         {/* <Drawer.Screen name="TestsStack" component={TestsStack} /> */}
         <Drawer.Screen name="TestsStack" component={TestsStack}
          options={{
            headerShown: false,
            // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            drawerStyle: { width: drawerWidth * 0.5, backgroundColor: '#FF4500' }
          }}
        />
         
        
         <Drawer.Screen name="SettingsScreen" component={SettingsScreen}
          options={{
            headerShown: false,
            // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            drawerStyle: { width: drawerWidth * 0.5, backgroundColor: '#FF4500' }
          }}
        />
        
        
        <Drawer.Screen name="Form1" component={Form1} />
        <Drawer.Screen name="Form2" component={Form2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

type DrawerNavProps = DrawerScreenProps<RootDrawerParamList, 'DashboardScreen'>;

const CustomHeader: React.FC<DrawerNavProps> = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Custom DashboardScreen Header</Text>
  </View>
);

const AuthHeader: React.FC<DrawerNavProps> = ({ navigation }) => (
  <View style={styles.AuthheaderContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.AuthbackText}>Back</Text>
    </TouchableOpacity>
  </View>
);

const CustomContent = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, borderBottomRightRadius: 20 }}>
    <Image source={require('./assets/images/bgNew.png')} style={{ height: '100%', width: '100%', borderBottomRightRadius:mvs(20) }} />
    {/* <DrawerScreenImage height={"100%"} width={"100%"}/> */}
  </View>
);

// const DrawerContent = ({ navigation }: { navigation: any }) => (
//   <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
//     <TouchableOpacity onPress={() => navigation.navigate('Form1')} style={styles.button}>
//       <Text style={styles.text}>Device</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => navigation.navigate('Form2')} style={styles.button}>
//       <Text style={styles.text}>Tests</Text>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.button}>
//       <Text style={styles.text}>Settings</Text>
//     </TouchableOpacity>
//   </View>
// );

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerContainer: {
    height: 60,
    backgroundColor: '#FF4500',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 4, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  AuthheaderContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 4, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  AuthbackText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
});
