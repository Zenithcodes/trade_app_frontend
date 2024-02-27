import React from 'react';
import {NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TextInputKeyPressEventData, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {MainContainer} from '../../shared/styled-component';
import { useRef } from 'react';
import styled from 'styled-components';
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../../assests/logo/icon-home.svg"
import HomeIcon from '../../shared/icons';


const Otp = ({navigation} : any) => {
    const inputRef = useRef<Array<TextInput | null | undefined>>([])

    const handleChange = (text : string, index:number) => {
    if(text?.length !== 0){
        return inputRef.current[index+1]?.focus()
    }
    return inputRef.current[index-1]?.focus()

    }

    const handleBackSpace = (event:NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      const {nativeEvent} : any = event
      if(nativeEvent.key === 'Backspace'){
        handleChange('', index)
      }
    }
  return (
    <MainContainer>
      <View>
        <TouchableHighlight underlayColor="none" onPress={()=>navigation.navigate('Login')} style={{marginLeft:30, marginTop:100}}>
        <Icon name="chevron-left" size={20} color="#1a237e" />
        </TouchableHighlight>
      </View>
      <View style={{height: '50%',marginLeft:30, marginRight:30}}>
        <Text style={style.otpText}>Enter the OTP</Text>
        <View
          style={{
            alignItems: 'center',
            marginTop: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 40,
            // backgroundColor:"#e8eaf6",
            // borderRadius:30
          }}>
          {[...new Array(4)].map((item, index) => {
            return (
              <TextInput
              ref={ref=>{
                if(ref && !inputRef.current.includes(ref)){
                  inputRef.current = [...inputRef.current, ref]
                }
              }}
                key={index}
                style={style.input}
                keyboardType="decimal-pad"
                maxLength={1}
                contextMenuHidden
                // selectTextOnFocus
                testID={`OtpInput${index}`}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={event=>handleBackSpace(event, index)}
              />
            );
          })}
        </View>
        <View style={{marginTop:20}}>
            <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('Profile')}>
                <ButtonText>Verify</ButtonText>
            </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};

const style = StyleSheet.create({
  otpText: {
    color: '#1a237e',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    borderBottomWidth:2,
    borderBottomColor:"#1a237e",
    width: 45,
    height: 45,
    textAlign: 'center',
    marginBottom:10,
    fontSize:18
  },
  button:{
    backgroundColor:"#1a237e",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    marginTop:30,
    borderRadius:20
}
});

export const ButtonText = styled(Text)`
font-size:18px;
font-weight:700;
color:#fff;
`

export default Otp;
