import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Ipo} from './src/pages';

const App = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown:false}}>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Ipo" component={Ipo} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
