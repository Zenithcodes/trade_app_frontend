import StockCard from "../common/StockCard"
import { useEffect, useState } from "react";
import { ToggleSwitch } from "..";
import baseApi from '../../service/index'
import { List, Scroll, SwitchComponent } from "../../shared/styled-component";
import { API_URL } from "@env";

const LongTerm = () => {
    const [tradeSelectedTab, setTradeSelectedTab] = useState(0);
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
                        'type': 'longterm'
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
    const filteredStockData = tradeSelectedTab === 0 ? stockData.filter((stock: { status: string; }) => stock.status === "open") : stockData.filter((stock: { status: string; }) => stock.status === "close");
    return (
        <>
        <Scroll>
        <List>
            {filteredStockData.map((stock: any, index: any) => (
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
    )
}

export default LongTerm;
