import { Text, StyleSheet } from "react-native";
import styled from "styled-components";

export const style = StyleSheet.create({
    textConatiner:{
        backgroundColor:'#1a237e',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        width:"100%",
        height:100,
    },
    safeArea:{
        marginLeft:30,
        marginRight:30,
        marginTop:100
    },
    inputFeild:{
        borderWidth:1,
        borderColor:"black",
        padding:10,
        height:40
    },
  
        button:{
            backgroundColor:"#1a237e",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:50,
            marginTop:30,
            borderRadius:20
        },
        buttonText:{
            color:"#ffff"
        },
        otpTextContainer:{
            alignItems:"center",
            marginTop:20
        }
})

export const LoginText = styled(Text)`
color:#1a237e;
font-size:24px;
font-weight:600;
`
export const ButtonText = styled(Text)`
font-size:18px;
font-weight:700;
color:#fff;
`