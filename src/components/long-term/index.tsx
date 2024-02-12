import { Text, View, Switch } from "react-native"
import StockCard from "../common/StockCard"
import styled from "styled-components/native"
import { useState } from "react";

const LongTerm = () => {
    const [showData, setShowData] = useState<boolean>(true);

    const toggleData = () => {
        setShowData(!showData);
    };
    const stockData =
        [{
            name: "Tcs",
            targetPrice: 2122,
            stopLoss: 2110,
            buyPrice: 2116,
            status: "open",
            createdAt: "20-01-2024"
        },
        {
            name: "IDBI Bank",
            targetPrice: 120,
            stopLoss: 60,
            buyPrice: 75,
            status: "open",
            createdAt: "20-01-2024"
        }]
        const filteredStockData = showData ? stockData.filter(stock => stock.status === "open") : stockData.filter(stock => stock.status === "close");
    return (
        <LongStockList>
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
        </LongStockList>
    )
}

export default LongTerm;
const LongStockList = styled(View)`
width:100%;
height: 100%;
background: white;
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