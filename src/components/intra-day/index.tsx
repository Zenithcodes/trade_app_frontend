import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import StockCard from "../common/StockCard";
import styled from "styled-components/native";

interface Stock {
    name: string;
    targetPrice: number;
    stopLoss: number;
    buyPrice: number;
    status: string;
    createdAt: string;
}

const IntraDay: React.FC = () => {
    const [showData, setShowData] = useState<boolean>(true);

    const toggleData = () => {
        setShowData(!showData);
    };

    const stockData: Stock[] = [
        {
            name: "advicka",
            targetPrice: 122,
            stopLoss: 110,
            buyPrice: 116,
            status: "open",
            createdAt: "20-01-2024"
        },
        {
            name: "dhani",
            targetPrice: 70,
            stopLoss: 50,
            buyPrice: 60,
            status: "close",
            createdAt: "20-01-2024"
        }
    ];
    const filteredStockData = showData ? stockData.filter(stock => stock.status === "open") : stockData.filter(stock => stock.status === "close");
    console.log(filteredStockData)
    return (
        <IntradayStockList>
            <SwitchComponent>
            <Text>{showData ? "Open" : "Close"}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={showData ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleData}
                    value={showData}
                />
            </SwitchComponent>
            {filteredStockData.map((stock, index) => (
                <StockCard
                    key={index}
                    name={stock.name}
                    targetPrice={stock.targetPrice}
                    stopLoss={stock.stopLoss}
                    buyPrice={stock.buyPrice}
                    createdAt={stock.createdAt}
                />
            ))}
        </IntradayStockList>
    );
};

export default IntraDay;
const IntradayStockList = styled(View)`
width:100%;
height: 100%;
background: white;
transition: all 0.5s ease-in-out; /* Smooth transition */
`
const SwitchComponent = styled(View)`
width: 100%;
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 8px;
transition: all 0.5s ease-in-out; /* Smooth transition */
`
