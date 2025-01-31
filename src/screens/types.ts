import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for navigation
export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  OnboardScreen: undefined;
  ForgotPasswordScreen: undefined;
  ProfileScreen: undefined;
  Home: undefined;
};

// Generic navigation and route props for any auth screen
export type AuthScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

// Predefined types for each auth screen
// Auth
export type LoginScreenProps = AuthScreenProps<'LoginScreen'>;
export type RegisterScreenProps = AuthScreenProps<'RegisterScreen'>;
export type OnboardScreenProps = AuthScreenProps<'OnboardScreen'>;



export type ForgotPasswordScreenProps = AuthScreenProps<'ForgotPasswordScreen'>;
export type ProfileScreenProps = AuthScreenProps<'ProfileScreen'>;
