import React, { useEffect, useState } from "react";
import StockCard from "../common/StockCard";
import { ToggleSwitch } from "..";
import { List, Scroll, SwitchComponent } from "../../shared/styled-component";
import baseApi from '../../service/index'
import {API_URL} from '@env'
import axios from "axios";
import { RefreshControl } from "react-native";
interface Stock {
    name: string;
    targetPrice: number;
    stopLoss: number;
    buyPrice: number;
    status: string;
    createdAt: string;
}
const IntraDay: React.FC = () => {
    const [tradeSelectedTab, setTradeSelectedTab] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [stockDetails, setStockDetails] = useState<any>([]);
    const startDate = '2024-1-13';
    const endDate = new Date();
    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-based
    const day = String(endDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const handleFetch = async () => {
        try {
            const response = await baseApi.get(
                `${API_URL}suggestions?start=${startDate}&end=${formattedDate}`,
                { 
                    headers: {
                        'type': 'intraday'
                    }
                }
            );
            setStockDetails(response?.data?.data)
            console.log("response", response?.data?.data);
        } catch (error) {
            console.log("Error getting",error);
        }
    };
    useEffect(() => {
       handleFetch()
    }, [])
  
    // const filteredStockData = tradeSelectedTab === 0 ? stockDetails.filter((stock: { status: string; }) => stock.status === "open") : stockDetails.filter((stock: { status: string; }) => stock.status === "close");
   
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

