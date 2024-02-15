import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { IntraDay, LongTerm, ShortTerm } from "..";

const StockList = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarIndicatorStyle: { backgroundColor: "white" },
      tabBarStyle: {  borderTopWidth: 0, elevation: 0, marginTop: 20, backgroundColor:"white" },
      tabBarItemStyle: { flex: 1, height: 50,  borderRadius: 25, marginHorizontal: 5, borderWidth: 1, borderColor: 'black' },
      tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
      tabBarActiveTintColor: '#40A2E3',
      tabBarInactiveTintColor: 'black',
      tabBarPressColor:"transparent",
      tabBarScrollEnabled: true,
      // tabBarHoverColor: 'blue'
    }}>
      <Tab.Screen name="Intra Day" component={IntraDay}  />
      <Tab.Screen name="Short Term" component={ShortTerm} />
      <Tab.Screen name="Long Term" component={LongTerm} />
    </Tab.Navigator>
  );
};

export default StockList;