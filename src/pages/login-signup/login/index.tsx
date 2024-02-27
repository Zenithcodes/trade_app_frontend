import React from 'react';
import {Modal, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import { ButtonText, LoginText, style } from './style';
import { MainContainer } from '../../../shared/styled-component';
import { useState } from 'react';
import { MobileInput } from '../../../components';
import OnBoardingLogo from '../../../assests/logo/onboarding-logo.svg';



const Login = ({navigation} : any) => {
  const [modalVisible, setModalVisible] = useState(false)
  const handlePress = () => {
    navigation.navigate('Otp');
  }
  return (
    <MainContainer>
      <View style={{alignSelf:"center", marginTop:50}}>
      <OnBoardingLogo />
      </View>
      <View style={style.textConatiner}>
        <Text style={{color:"#fff", fontSize:32, fontWeight:700}}>Dhanst₹i</Text>
        <Text style={{color:"#fff", fontSize:12, fontWeight:400}}>The future of Investing</Text>
      </View>
      <SafeAreaView style={style.safeArea}>
        <MobileInput />
        <TouchableHighlight style={style.button} onPress={handlePress}>
          <ButtonText>Verify</ButtonText>
        </TouchableHighlight>
      </SafeAreaView>
      <Modal
  animationType='fade'
  visible={modalVisible}
  transparent={true}
>
<TouchableWithoutFeedback onPress={handlePress}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <View style={{ backgroundColor: 'white', height: '50%', borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 10  }}>
            <View>
              <View style={style.otpTextContainer}>
                <LoginText>Enter the OTP</LoginText>
                <Text>Send on your mobile 8756937547</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
</Modal>
    </MainContainer>
  );
};

export default Login;
