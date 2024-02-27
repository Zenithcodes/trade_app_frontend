import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { IntraDay, LongTerm, ShortTerm } from "..";

const StockList = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:"transparent", width:"95%", alignSelf:"center", marginTop:15},
      tabBarIndicatorStyle:{backgroundColor:"#1a237e", position:"absolute", zIndex:-1, bottom:"15%", height:"70%", borderRadius:20},
      tabBarActiveTintColor:"white",
      tabBarPressColor:"white",
      tabBarInactiveTintColor:"#b3b3b3"
  }}>
      <Tab.Screen name="Intra Day" component={IntraDay} />
      <Tab.Screen name="Short Term" component={ShortTerm} />
      <Tab.Screen name="Long Term" component={LongTerm} />
    </Tab.Navigator>
  );
};

export default StockList;