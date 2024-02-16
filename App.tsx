import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Ipo} from './src/pages';
import { Image, Text, View } from 'react-native';
import { MainHeader } from './src/components';
// import Logo from "../trade_app_frontend/src/assests/logo/download.png"

const App = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <View style={{flex:1}}>
    <MainHeader />
    <NavigationContainer>
      {/* <BottomTab.Navigator screenOptions={{headerShown:false}}>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Ipo" component={Ipo} />
      </BottomTab.Navigator> */}
      <Home />
    </NavigationContainer>
    </View>
  );
};

export default App;
