import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-reanimated';
import {Dashboard, Form1, Form2, Home, Login} from './src/screens';

const Drawer = createDrawerNavigator();

// Sample Screens

export default function App() {
  const [drawerWidth, setDrawerWidth] = useState(getDrawerWidth());
  const [auth, setAuth] = useState(false);

  // Detect orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      setDrawerWidth(getDrawerWidth());
    };

    const subscription = Dimensions.addEventListener(
      'change',
      handleOrientationChange,
    );

    return () => {
      subscription?.remove(); // Cleanup listener
    };
  }, []);

  // Function to calculate drawer width
  function getDrawerWidth() {
    const {width, height} = Dimensions.get('window');
    return width > height ? width * 0.5 : width * 0.7; // Adjust widths as needed
  }
  const CustomHeader = ({navigation}) => (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Custom Dashboard Header</Text>
    </View>
  );
  const CustomContent = ({navigation}) => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        src={
          'https://t3.ftcdn.net/jpg/06/14/84/58/360_F_614845842_pNcPaSxVwBiO6hGaaSXKrQOCs6xqnijX.jpg'
        }
        style={{height: 100, width: 100}}
      />
      <Text style={styles.text}>Drawer Content</Text>
    </View>
  );
  const DrawerContent = ({navigation}) => (
    <View style={{flex: 1, backgroundColor: 'orange', padding: 20}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Form1')}
        style={{
          padding: 5,
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'white',
          marginVertical: 10,
        }}>
        <Text style={styles.text}>Form1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Form2')}
        style={{
          padding: 5,
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'white',
          marginVertical: 10,
        }}>
        <Text style={styles.text}>Form2</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerType: 'permanent', // Keeps the drawer open
          drawerContentContainerStyle: {
            flex: 1,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'orange',
          },
          drawerStyle: {
            width: drawerWidth, // Dynamic width
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'orange',
          },
          headerShown: false, // Remove header for better layout
        }}
        drawerContent={({navigation, state}) => {
          // Conditionally show DrawerContent only for Dashboard
          const currentRoute = state?.routes[state.index]?.name;
          if (currentRoute == 'Home' || currentRoute == 'Login') {
            return <CustomContent navigation={navigation} />;
          }
          return <DrawerContent navigation={navigation} />; // No drawer content for other screens
        }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: true, // Show header for Dashboard
            header: ({navigation}) => <CustomHeader navigation={navigation} />,
            headerTitle: 'Dashboard Header', // Customize header title
            drawerStyle: {
              width: drawerWidth * 0.5, // Adjust drawer width for Dashboard
              backgroundColor: '#FF4500', // Custom background for Dashboard
            },
            drawerContentContainerStyle: {
              flex: 1,
              backgroundColor: 'orange',
            },
          }}
        />
        <Drawer.Screen
          name="Form1"
          component={Form1}
          options={{
            headerShown: true, // Show header for Dashboard
            header: ({navigation}) => <CustomHeader navigation={navigation} />,
            headerTitle: 'Dashboard Header', // Customize header title
            drawerStyle: {
              width: drawerWidth * 0.5, // Adjust drawer width for Dashboard
              backgroundColor: '#FF4500', // Custom background for Dashboard
            },
            drawerContentContainerStyle: {
              flex: 1,
              backgroundColor: 'orange',
            },
          }}
        />
        <Drawer.Screen
          name="Form2"
          component={Form2}
          options={{
            headerShown: true, // Show header for Dashboard
            header: ({navigation}) => <CustomHeader navigation={navigation} />,
            headerTitle: 'Dashboard Header', // Customize header title
            drawerStyle: {
              width: drawerWidth * 0.5, // Adjust drawer width for Dashboard
              backgroundColor: '#FF4500', // Custom background for Dashboard
            },
            drawerContentContainerStyle: {
              flex: 1,
              backgroundColor: 'orange',
            },
          }}
        />
        <Drawer.Group>
          <Drawer.Screen name="DrawerContent" component={DrawerContent} />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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
});
