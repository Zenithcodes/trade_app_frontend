import React, { useState } from "react";
import { View, Switch, Text, ScrollView, RefreshControl } from "react-native";
import StockCard from "../common/StockCard";
import styled from "styled-components/native";
import { ToggleSwitch } from "..";
import { List, Scroll, SwitchComponent } from "../../shared/styled-component";
import {API_URL} from '@env'
import axios from "axios";
interface Stock {
    name: string;
    targetPrice: number;
    stopLoss: number;
    buyPrice: number;
    status: string;
    createdAt: string;
}
console.log(API_URL)
const IntraDay: React.FC = () => {
    const [tradeSelectedTab, setTradeSelectedTab] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
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
        },
        {
            name: "advicka",
            targetPrice: 122,
            stopLoss: 110,
            buyPrice: 116,
            status: "open",
            createdAt: "20-01-2024"
        },
        {
            name: "advicka",
            targetPrice: 122,
            stopLoss: 110,
            buyPrice: 116,
            status: "open",
            createdAt: "20-01-2024"
        },
        {
            name: "advicka",
            targetPrice: 122,
            stopLoss: 110,
            buyPrice: 116,
            status: "open",
            createdAt: "20-01-2024"
        },
        {
            name: "advicka",
            targetPrice: 122,
            stopLoss: 110,
            buyPrice: 116,
            status: "open",
            createdAt: "20-01-2024"
        },
    ];
    const filteredStockData = tradeSelectedTab === 0 ? stockData.filter(stock => stock.status === "open") : stockData.filter(stock => stock.status === "close");
    console.log(filteredStockData)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
    return (
        <>
        <Scroll refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <List>
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
        </List>
        </Scroll>
         <SwitchComponent>
         <ToggleSwitch setTradeSelectedTab={setTradeSelectedTab} />
     </SwitchComponent>
     </>
    );
};

export default IntraDay

