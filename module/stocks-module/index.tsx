import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Ipo} from '../../src/pages';
import { MainHeader } from '../../src/components';

const StocksModule = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <>
    <MainHeader/>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
          <BottomTab.Screen name="Home" component={Home} />
          <BottomTab.Screen name="News" component={Ipo} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StocksModule;
