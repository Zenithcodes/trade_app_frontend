import { Text, View, Switch } from "react-native"
import StockCard from "../common/StockCard"
import styled from "styled-components/native"
import { useState } from "react";
import { ToggleSwitch } from "..";
import { List, Scroll, SwitchComponent } from "../../shared/styled-component";

const LongTerm = () => {
    const [tradeSelectedTab, setTradeSelectedTab] = useState(0);

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
    const filteredStockData = tradeSelectedTab === 0 ? stockData.filter(stock => stock.status === "open") : stockData.filter(stock => stock.status === "close");
    return (
        <>
        <Scroll>
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
    )
}

export default LongTerm;
