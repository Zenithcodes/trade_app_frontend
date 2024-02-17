import { Image, Text, View } from "react-native"
import styled from "styled-components/native"

const MainHeader = () => {
    return(
        <HeaderContainer>
         <LogoContainer source={require('../../assests/logo/download.png')} />
         <ProfileContainer>
            <ProfileText>T</ProfileText>
         </ProfileContainer>
        </HeaderContainer>
    )
}
export default MainHeader

const HeaderContainer =  styled(View)`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
border-bottom:1px solid black;
padding: 10px 10px 0px 10px;
background-color: white;


`
const LogoContainer = styled(Image)`
width:80px;
height:30px;
`
const ProfileContainer = styled(View)`
display: flex;
justify-content: center;
align-items: center;
background-color: #40A2E3;
width: 30px;
height: 30px;
border-radius: 15px;
`
const ProfileText = styled(Text)`
color: white;
font-size: 20px;
font-weight: 500;
`

