import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const StockCard = ({ name, targetPrice, stopLoss, buyPrice, createdAt }: any) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <StockContainer>
            <StockName>
                <StockNameHeading>
                    {capitalizedName}
                </StockNameHeading>
                <StockNameText>Nse</StockNameText>
            </StockName>
            <StockPriceConttainer>
                <StockPriceName>
                    <StockPriceData style={{color:"#858383"}}>Buy Price</StockPriceData>
                    <Text style={{fontWeight:'700', color:"#454343"}}>Rs: {buyPrice}</Text>
                </StockPriceName>
                <StockPriceName>
                    <StockPriceData  style={{color:"#00710B"}}>Target Price</StockPriceData>
                    <Text style={{fontWeight:'700', color:"#454343"}}>Rs: {targetPrice}</Text>
                </StockPriceName>
                <StockPriceName>
                    <StockPriceData  style={{color:"#770000"}}>Stop Loss</StockPriceData>
                    <Text style={{fontWeight:'700', color:"#454343"}}>Rs: {stopLoss}</Text>
                </StockPriceName>
            </StockPriceConttainer>
            <StockRecordDate>
                <StockRecordHeading>Record Date:</StockRecordHeading>
                <StockRecordDateTime>{createdAt}</StockRecordDateTime>
            </StockRecordDate>
        </StockContainer>
    )
}

export default StockCard
const StockContainer = styled(View)`
padding: 16px;
margin:12px 16px 0px 16px;
border-radius: 8px;
background-color: #ffffff;
elevation: 2;
`
const StockName = styled(View)`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 8px;
`
const StockNameText = styled(Text)`
  font-size: 13px;
`
const StockNameHeading = styled(Text)`
font-size: 15px;
font-family: serif;
font-weight: 700;
color:#5191f0;
`
const StockPriceConttainer = styled(View)`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const StockPriceName = styled(View)`
 display: flex;
 flex-direction: column;
 justify-content: start;
align-items: start; 
 padding:0;
margin:0;
`
const StockPriceData = styled(Text)`
  font-size: 15px;
  font-weight: 500;
`
const StockRecordDate = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
`
const StockRecordHeading = styled(Text)`
font-size: 12px;
font-weight: bold;
`
const StockRecordDateTime = styled(Text)`
font-size: 12px;
font-weight:500;
`