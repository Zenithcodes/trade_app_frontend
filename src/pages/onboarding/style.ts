import { Text, TouchableHighlight } from "react-native"
import { Button, StyleSheet } from "react-native"
import styled from "styled-components"

export const style = StyleSheet.create({
    OnBoardConatiner:{
     backgroundColor:"#e8eaf6",
     flex:1,
    },
    welcomeContainer:{
      marginTop:100
      
    },
    actionContainer:{
      // backgroundColor:"black",
      height:100,
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-end",
      marginTop:100

    },
    button:{
        backgroundColor:"#1a237e",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:70,
        width:150,
        marginLeft:20,
        marginRight:20,
        borderRadius:20
    },
    buttonSignUp:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#fff",
      borderWidth:1,
      height:40,
      marginLeft:20,
      marginRight:20
    }
})
 export const SignButtonText = styled(Text)`
 font-size:18px;
 font-weight:700;
 color:#fff;
 `
 export const LogInButtonText = styled(Text)`
 font-size:18px;
 font-weight:700;
 color:#ffff;
 `

 export const WelcomeText = styled(Text)`
 font-size:28px;
 font-weight:700;
 color:#1a237e;

 `