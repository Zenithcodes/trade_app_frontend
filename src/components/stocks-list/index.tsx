import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { IntraDay, LongTerm, ShortTerm } from "..";

const StockList = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Intra Day" component={IntraDay} />
      <Tab.Screen name="Short Term" component={ShortTerm} />
      <Tab.Screen name="Long Term" component={LongTerm} />
    </Tab.Navigator>
  );
};

export default StockList;