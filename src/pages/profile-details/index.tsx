import { Text, TextInput, TouchableHighlight, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { MainContainer } from "../../shared/styled-component"
import {style} from "../../pages/profile-details/style"
import { ButtonText } from "../otp"

const Profile = ({navigation}: any) =>{
    return(
        <MainContainer>
            <View>
            <TouchableHighlight underlayColor="none" onPress={()=>navigation.navigate('Otp')} style={{marginLeft:30, marginTop:50}}>
        <Icon name="chevron-left" size={20} color="#1a237e" />
        </TouchableHighlight>
            </View>
            <View style={{marginLeft:50, marginTop:50}}>
            <Text style={{fontSize:20, fontWeight:'700', color:"#1a237e"}}>Hi</Text>
            <Text style={{fontSize:12, fontWeight:'600', color:"#1a237e", marginTop:20}}>Your Verification has been done Successfull</Text>
            <Text style={{fontSize:12, fontWeight:'600', color:"#1a237e"}}>Complete the Profile to get the Personalized Trades</Text>
            </View>
            <View style={{marginRight:30, marginLeft:30,marginTop:20, display:"flex", gap:30}}>
                <TextInput placeholder="Name" style={{borderWidth:0.5, borderColor:"#1a237e", borderRadius:20, fontSize:18, backgroundColor:"#e8eaf6"}}/>
                <TextInput placeholder="Email" style={{borderWidth:0.5, borderColor:"#1a237e", borderRadius:20, fontSize:18, backgroundColor:"#e8eaf6"}} />
                <TouchableHighlight style={style.button}>
          <ButtonText>Submit</ButtonText>
        </TouchableHighlight>
            </View>
            
        </MainContainer>
    )
}

export default Profile