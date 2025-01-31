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
import { LoginScreen, OnboardScreen, RegisterScreen } from './src/screens/auth';
import { Home, Dashboard, Form1, Form2 } from './src/screens/navigation';
import DrawerScreenImage from "./assets/images/svg/DrawerScreenImage.svg";
import { mvs } from 'react-native-size-matters';
import { COLORS } from './assets/colors';

type RootDrawerParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  OnboardScreen: undefined;
  Home: undefined;
  Dashboard: undefined;
  Form1: undefined;
  Form2: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

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

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="RegisterScreen"
        screenOptions={{
          drawerType: 'permanent',
          drawerStyle: { width: drawerWidth, backgroundColor: COLORS.white , borderBottomRightRadius:mvs(20)},
          headerShown: false
        }}
        
        drawerContent={({ navigation, state }) => {
          const currentRoute = state?.routes[state.index]?.name;
          if (currentRoute === 'Home' || currentRoute === 'LoginScreen' || currentRoute === 'RegisterScreen' || currentRoute === 'OnboardScreen') {
            return <CustomContent navigation={navigation} />;
          }
          return <DrawerContent navigation={navigation} />;
        }}
      >
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        <Drawer.Screen name="OnboardScreen" component={OnboardScreen} />
        
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, header: ({ navigation }) => <AuthHeader navigation={navigation} /> }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: true,
            header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            drawerStyle: { width: drawerWidth * 0.5, backgroundColor: '#FF4500' }
          }}
        />
        <Drawer.Screen name="Form1" component={Form1} />
        <Drawer.Screen name="Form2" component={Form2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

type DrawerNavProps = DrawerScreenProps<RootDrawerParamList, 'Dashboard'>;

const CustomHeader: React.FC<DrawerNavProps> = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Custom Dashboard Header</Text>
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
    <Image source={require('./assets/images/bg.png')} style={{ height: '100%', width: '100%', borderBottomRightRadius:mvs(20) }} />
    {/* <DrawerScreenImage height={"100%"} width={"100%"}/> */}
  </View>
);

const DrawerContent = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, backgroundColor: 'orange', padding: 20 }}>
    <TouchableOpacity onPress={() => navigation.navigate('Form1')} style={styles.button}>
      <Text style={styles.text}>Form1</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Form2')} style={styles.button}>
      <Text style={styles.text}>Form2</Text>
    </TouchableOpacity>
  </View>
);

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
