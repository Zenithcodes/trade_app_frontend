import {ScrollView, Switch, Text, View} from 'react-native';
import StockCard from '../common/StockCard';
import styled from 'styled-components/native';
import {useState} from 'react';
import {ToggleSwitch} from '..';
import {List, Scroll, SwitchComponent} from '../../shared/styled-component';

const ShortTerm = () => {
  const [tradeSelectedTab, setTradeSelectedTab] = useState(0);
  const stockData = [
    {
      name: 'JK Tyre & Industries',
      targetPrice: 600,
      stopLoss: 400,
      buyPrice: 440,
      status: 'open',
      createdAt: '20-01-2024',
    },
  ];
  const filteredStockData =
    tradeSelectedTab === 0
      ? stockData.filter(stock => stock.status === 'open')
      : stockData.filter(stock => stock.status === 'close');
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
  );
};

export default ShortTerm;
