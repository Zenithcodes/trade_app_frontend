import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Ipo, OnBoarding} from './src/pages';
import { Image, Text, View } from 'react-native';
import { MainHeader } from './src/components';
// import HomeIcon from './src/shared/icons/HomeIcon';
import OnBoardingModule from './module/onboarding-module';
import { StocksModule } from './module';
// import Logo from "../trade_app_frontend/src/assests/logo/download.png"

const App = () => {
  const BottomTab = createBottomTabNavigator();
  const authorize = true;
  return (
  <>
    {authorize ? <StocksModule /> :  <OnBoardingModule />}
    </>
  );
};

export default App;
