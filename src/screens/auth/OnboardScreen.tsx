import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../../components/AppTextInput'
import { ms, mvs } from 'react-native-size-matters'
import { OnboardScreenProps } from '../types'
import { COLORS } from '../../../assets/colors'
import AppButton from '../../components/AppButton'
import RadioUncheck from "../../../assets/images/svg/RadioUncheck.svg"
import RadioCheck from "../../../assets/images/svg/RadioCheck.svg"
import UnCheckbox from "../../../assets/images/svg/UnCheckbox.svg"
import Checkbox from "../../../assets/images/svg/Checkbox.svg"
import AppBackButton from '../../components/AppBackButton'
import DividerLine from '../../components/DividerLine'

const OnboardScreen: React.FC<OnboardScreenProps> = ({ navigation }) => {
  const steps = ["Admin Profile", "Organization Profile", "Teams and Services", "Complete"];
  const [step, setStep] = useState(0); // Track current step
  const progressAnim = new Animated.Value(step);
  const TitleName = ["Complete your personal Profile", "Organization Profile", "VENDYS Software as a Service\nLicense Agreement ", "Complete"];
  const options = ['SMS', 'EMAIL'];


  //Step1: Contact Information
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedNotifyOption, setSelectedNotifyOption] = useState<string>('SMS'); // Default selection

   // Password Validation Checks
   const hasLowerCase = /[a-z]/.test(password);
   const hasUpperCase = /[A-Z]/.test(password);
   const hasSymbol = /[!?@#$%^&*_-]/.test(password);
   const hasNumber = /[0-9]/.test(password);
   const isMinLength = password.length >= 8;
   const isMatch = confirmPassword ? password === confirmPassword : false;
 
   const getColor = (condition: boolean) => {
     if (password === "") return COLORS.GrayText; // Default color (gray)
     return condition ? "green" : "red";
   };

  //Step2: organization
  const [orgName, setOrgName] = useState<string>('');
  const [orgURL, setOrgURL] = useState<string>('');
  const [orgLocation, setOrgLocation] = useState<number | undefined>(undefined);

  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [addressState, setAddressState] = useState<string>('');
  const [zip, setZip] = useState<string>('');

  const [orgPhone, setOrgPhone] = useState<string>('');
  const [orgEmail, setOrgEmail] = useState<string>('');

  const [orgTestList, setOrgTestList] = useState<string[]>([]);

  const Test_list = [
    { id: "1", name: "ECG" },
    { id: "2", name: "Treadmil" },
    { id: "3", name: "PAD Testing" },
    { id: "4", name: "Endothelial Function Testing" },
    { id: "5", name: "Automatic Function Testing" },
    { id: "7", name: "POC (Point of Care) Testing" },
    { id: "8", name: "Ultrasound  (General)" },
    { id: "9", name: "Echocardiography" },
    { id: "10", name: "CT-Scan" },
    { id: "11", name: "MRI" },
    { id: "12", name: "PET" },
    { id: "13", name: "SPECT" },

  ];

  

  // Step:3 team and service
  const [isTSAgreed, setIsTSAgreed] = useState<boolean>(false);
  const ts_content1 = "This License Agreement governs the use of VENDYS software provided by American Heart Technologies. By using the software, you agree to the terms outlined below. If you do not agree, do not access or use the software."
  const ts_content2 = "American Heart Technologies grants you a non-exclusive, non-transferable license to access and use VENDYS software solely for its intended purpose in analyzing and reporting vascular health data. 1.2 Restrictions: You may not:  "

  const toggleTestCheckbox = (id: string) => {
    setOrgTestList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const validateStep = () => {
    // if (step === 0) {
    //   // Validation for Step 1 (Admin Profile)
    //   const isPasswordValid =
    //   /[a-z]/.test(password) &&  // At least one lowercase letter
    //   /[A-Z]/.test(password) &&  // At least one uppercase letter
    //   /[!?@#$%^&*_-]/.test(password) &&  // At least one symbol
    //   /[0-9]/.test(password) &&  // At least one numeral
    //   password.length >= 8 && // Minimum 8 characters
    //   password === confirmPassword; // Check if passwords match

    //   return firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && phoneNumber.trim() !== '' && isPasswordValid;
    // } else if (step === 1) {
    //   // Validation for Step 2 (Organization Profile)
    //   return orgName.trim() !== '' && orgURL.trim() !== '' && orgEmail.trim() !== '' && orgLocation !== undefined && street.trim() !== '' && city.trim() !== '' && addressState.trim() !== '' && zip.trim() !== '' && orgPhone.trim() !== '' && orgEmail.trim() !== '' && orgTestList.length > 0;
    // } else if (step === 2) {
    //   // Validation for Step 3 (T&C Agreement)
    //   return isTSAgreed; // Boolean state for checkbox (e.g., `useState(false)`)
    // }
    return true; // Step 4 (Complete) doesn't need validation
  };

  // Animate progress bar
  const animateProgress = (nextStep: number) => {
    Animated.timing(progressAnim, {
      toValue: nextStep,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  // Handle Continue button
  const handleNext = () => {
    if (step < steps.length - 2) {
      setStep(prev => {
        const nextStep = prev + 1;
        animateProgress(nextStep);
        return nextStep;
      });
    } else {
      navigation.navigate('VendysScreen'); // Navigate on completion
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => {
        const prevStep = prev - 1;
        animateProgress(prevStep);
        return prevStep;
      });
    }else{
      navigation.goBack()
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBackButton onPress={handleBack} />
      <Image style={{ marginTop: mvs(15), width: mvs(140), height: mvs(40), resizeMode: "contain" }} source={require('../../../assets/images/logo.png')} />
      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {steps.map((stepName, index) => (
          <View key={index} style={[styles.progressStep, index != 0 && { paddingLeft: mvs(5) }]}>
            {/* Step Number inside Circle */}
            <View
              style={[
                styles.progressCircle,
                index <= step ? styles.activeCircle : styles.inactiveCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  index <= step ? styles.inactiveText : styles.activeText,
                ]}
              >
                {index + 1}
              </Text>
            </View>

            {/* Step Name */}
            <Text
              style={[
                styles.stepLabel,
                index <= step ? styles.activeText : styles.inactiveText,
              ]}
            >
              {stepName}
            </Text>
          </View>
        ))}
      </View>

      <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={[{ flexGrow: 1 }]}>
        <View style={{ marginTop: mvs(5), }}>
          <Text style={styles.heading}>{TitleName[step]}</Text>
        </View>

        {
          step === 0 && (
            <>
              <Text style={styles.subHeading}>{"Contact Information"}</Text>
              <View style={{ marginTop: mvs(5), flexDirection: "row", alignSelf: "flex-start" }}>
                <AppTextInput
                  label='First Name'
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First Name"
                  mainStyle={{ width: "45%", }}
                />
                <AppTextInput
                  label='Last Name'
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last Name"
                  mainStyle={{ width: "45%", marginLeft: mvs(20) }}
                />
              </View>

              <View style={{ marginTop: mvs(5), flexDirection: "column",  }}>
                <AppTextInput
                  label='Password'
                  value={password}
                  onChangeText={setPassword}
                  placeholder="********"
                  mainStyle={{ width: "95%" }}
                  secureTextEntry
                />
                <AppTextInput
                  label='Confirm Password'
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="********"
                  mainStyle={{ width: "95%" }}
                  secureTextEntry
                />
              <Text style={[styles.pwdValidationText, { color: getColor(hasLowerCase) }, { marginTop: mvs(5) }]}>{"At least one lowercase letter [a-z]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasUpperCase) }]}>{"At least one uppercase letter [A-Z]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasSymbol) }]}>{"At least one symbol [!?@#$%^&*_-]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(hasNumber) }]}>{"At least one numeral [0-9]"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(isMinLength) }]}>{"Minimum 8 characters"}</Text>
              <Text style={[styles.pwdValidationText, { color: getColor(isMatch) }]}>{"Password match"}</Text>

              </View>
              <View style={{ marginTop:mvs(20), flexDirection: "row", alignSelf: "flex-start", gap: mvs(20) }}>
                <AppTextInput
                  label='Phone Number'
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Phone Number"
                  mainStyle={{ width: "45%", }}
                />

                <AppTextInput
                  label='Login Email'
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  mainStyle={{ width: "45%" }}
                />

              </View>
              <Text style={[styles.summaryText, { marginTop: mvs(5) }]}>{"We’ll send you a code via SMS to verify your phone  number."}</Text>

              <Text style={styles.subHeading}>{"Preferred method to be notified"}</Text>
              <View style={{ marginTop: mvs(5), flexDirection: "row", alignSelf: "flex-start" }}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    style={[{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, index != 0 && { paddingLeft: mvs(25) }]}
                    onPress={() => setSelectedNotifyOption(option)}
                    key={option}
                  >
                    <View style={{ top: mvs(1) }}>
                      {selectedNotifyOption === option ?
                        <RadioCheck height={mvs(15)} width={mvs(15)} /> :
                        <RadioUncheck height={mvs(15)} width={mvs(15)} />
                      }
                    </View>

                    <Text style={styles.radioText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>

            </>
          )
        }

        {
          step == 1 && (
            <>
              <View style={{ flexDirection: "column", marginTop: mvs(20) }}>
                <AppTextInput
                  label='Organization Name'
                  value={orgName}
                  onChangeText={setOrgName}
                  placeholder="Organization Name"
                  mainStyle={{ width: "95%", }}
                />

                <AppTextInput
                  label='Organization URL'
                  value={orgURL}
                  onChangeText={setOrgURL}
                  placeholder="http://www.Organization.com/123"
                  mainStyle={{ width: "95%" }}
                />
                <AppTextInput
                  label='Number of location'
                  value={orgLocation}
                  onChangeText={setOrgLocation}
                  placeholder="Enter (1 to 1000)"
                  keyboardType="phoneNumber"
                  mainStyle={{ width: "95%" }}
                />

              </View>
              <Text style={styles.subHeading}>{"Address"}</Text>
              <View style={{ marginTop: mvs(5), flexDirection: "row", alignSelf: "flex-start" }}>
                <AppTextInput
                  label='Street'
                  value={street}
                  onChangeText={setStreet}
                  placeholder="Street"
                  mainStyle={{ width: "45%", }}
                />
                <AppTextInput
                  label='City/Town'
                  value={city}
                  onChangeText={setCity}
                  placeholder="City/Town"
                  mainStyle={{ width: "45%", marginLeft: mvs(20) }}
                />
              </View>
              <View style={{ flexDirection: "row", alignSelf: "flex-start", gap: mvs(20) }}>
                <AppTextInput
                  label='State'
                  value={addressState}
                  onChangeText={setAddressState}
                  placeholder="State"
                  mainStyle={{ width: "45%", }}
                />

                <AppTextInput
                  label='Zip'
                  value={zip}
                  onChangeText={setZip}
                  placeholder="Zip"
                  keyboardType="numberPad"
                  mainStyle={{ width: "45%" }}
                />

              </View>
              <Text style={styles.subHeading}>{"Contact Information"}</Text>
              <View style={{ marginTop: mvs(5), flexDirection: "row", alignSelf: "flex-start" }}>
                <AppTextInput
                  label='Phone'
                  value={orgPhone}
                  onChangeText={setOrgPhone}
                  placeholder="Phone"
                  mainStyle={{ width: "45%", }}
                />
                <AppTextInput
                  label='Email'
                  value={orgEmail}
                  onChangeText={setOrgEmail}
                  keyboardType="email"
                  placeholder="Email"
                  mainStyle={{ width: "45%", marginLeft: mvs(20) }}
                />
              </View>
              <Text style={styles.subHeading}>{"What tests do you currently do?"}</Text>
              <View style={styles.orgTestContainer}>
                {Test_list.map((item) => (
                  <Pressable key={item.id} style={styles.TestItem} onPress={() => toggleTestCheckbox(item.id)}>
                    {
                      orgTestList.includes(item.id) ? <Checkbox height={mvs(20)} width={mvs(20)} /> : <UnCheckbox height={mvs(20)} width={mvs(20)} />
                    }
                    <Text style={[styles.summaryText, { paddingLeft: mvs(5) }]}>{item.name}</Text>
                  </Pressable>
                ))}
              </View>
            </>
          )
        }

        {
          step == 2 && (
            <>
              <Text style={[styles.summaryText, { marginTop: mvs(20) }]}>{ts_content1}</Text>
              <DividerLine />
              <Text style={[styles.summaryText, { marginTop: mvs(5), fontWeight: "bold" }]}>{"1. License Grant"}</Text>
              <Text style={[styles.summaryText, { marginTop: mvs(5) }]}><Text style={{ fontWeight: "bold" }}>{"1.1 Use of Software:"}</Text> {ts_content2}</Text>
            </>
          )
        }
        {
          step == 2 ?
            <View style={{ flexDirection: "row", alignItems:"center", justifyContent: "space-between", marginVertical: mvs(20) }}>
              <View style={{ flexDirection: "row", alignItems: "center", width:"50%" }}>

                <Pressable style={{ top: mvs(1) }} onPress={() => setIsTSAgreed(!isTSAgreed)}>
                  {
                    isTSAgreed ?
                      <Checkbox width={ms(20)} height={mvs(20)} /> :
                      <UnCheckbox width={ms(20)} height={mvs(20)} />
                  }
                </Pressable>

                <Text style={styles.agreeTeamsText}>{"I agree with the LiveLong's Terms and Services"}</Text>
              </View>

              <AppButton disabled={!validateStep()} title={step < steps.length - 1 ? "Continue" : "Finish"} onPress={handleNext} />
            </View> :
            <AppButton buttonStyle={{ marginVertical: mvs(20) }} disabled={!validateStep()} title={step < steps.length - 1 ? "Continue" : "Finish"} onPress={handleNext} />
        }


      </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: "#ffffff",
    paddingLeft: mvs(15)
  },
  button: {
    backgroundColor: '#0044FF',
    padding: mvs(10),
    marginVertical: mvs(20),
    borderRadius: mvs(5),
    height: mvs(50),
    width: mvs(200),
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: COLORS.Black,
    fontSize: mvs(23),
    fontWeight: "bold",
    textAlign: "left",
  },

  subHeading: {
    marginTop: mvs(20),
    color: COLORS.BlueText,
    fontSize: mvs(18),
    fontWeight: "bold",
    textAlign: "left",
  },
  agreeTeamsText: {
    color: COLORS.GrayText,
    fontSize: mvs(13),
    fontWeight: "medium",
    textAlign: "left",
    paddingLeft:mvs(5)
  },
  summaryText: {
    color: COLORS.GrayText,
    fontSize: mvs(13),
    fontWeight: "medium",
    textAlign: "left",
  },
  pwdValidationText: {
    color: COLORS.GrayText,
    fontSize: mvs(12),
    fontWeight: "medium",
    textAlign: "left",
  },
  radioText: {
    paddingLeft: mvs(10),
    color: COLORS.Black,
    fontSize: mvs(15),
    fontWeight: "bold",
    textAlign: "left",
  },
  forgotPwdText: {
    color: COLORS.GrayText,
    fontSize: mvs(15),
    fontWeight: "bold",
    textAlign: "left",
  },
  loginTxt: {
    color: COLORS.BlueText
  },
  forgotPassword: {
    fontSize: mvs(18),
    fontWeight: "medium",
    marginTop: mvs(2),
    marginLeft: mvs(15)
  },
  progressContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: mvs(15),
  },
  progressStep: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressCircle: {
    width: mvs(18),
    height: mvs(18),
    borderRadius: mvs(18 / 2),
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    borderColor: COLORS.Black,
    backgroundColor: COLORS.Black,
  },
  inactiveCircle: {
    borderColor: "#808080",
    backgroundColor: "#D3D3D3",
  },
  stepNumber: {
    fontSize: mvs(10),
    fontWeight: "bold",
  },
  activeText: {
    color: COLORS.Black,
  },
  inactiveText: {
    color: "#808080",
  },
  progressWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: mvs(5),
  },

  stepLabel: {
    fontSize: mvs(10),
    marginLeft: mvs(5),
    fontWeight: "400",
    marginTop: mvs(2),
  },
  orgTestContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    padding: 10,
  },
  TestItem: {
    flexShrink: 1,
    paddingVertical: mvs(8),
    paddingHorizontal: mvs(5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  }
})