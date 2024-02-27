import {Button, Text, TouchableHighlight, View} from 'react-native';
import {LogInButtonText, SignButtonText, WelcomeText, style} from './style';
import {useState} from 'react';
import {Login} from '..';
import React from 'react';
import WelcomeLogo from "../../assests/logo/welcome-logo.svg";

const OnBoarding = ({navigation} : any) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };
  return (
    <>
      <View style={style.OnBoardConatiner}>
        <View style={style.welcomeContainer}>
          <WelcomeLogo />
          <View style={{marginLeft:50, marginTop:20}}>
          <WelcomeText>Start to Invest</WelcomeText>
          <WelcomeText>for future!</WelcomeText>
          <Text style={{color:"#1a237e"}}>The future of trading</Text>
          </View>
          <View style={style.actionContainer}>
          <TouchableHighlight underlayColor="#1a237e" style={style.button} onPress={handlePress}>
            <LogInButtonText>Get Started</LogInButtonText>
          </TouchableHighlight>
          </View>
        </View>
      </View>
    </>
  );
};

export default OnBoarding;
