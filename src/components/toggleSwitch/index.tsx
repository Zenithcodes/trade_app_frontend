import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ToggleSwitch = ({ setTradeSelectedTab }: any) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const handleSelectedTab = (value: any) => {
        setTradeSelectedTab(value)
        setSelectedTab(value)
    }
    return (
        <View style={{ width: "50%", height: 30, borderRadius: 10, borderWidth:1, flexDirection: "row", alignItems: "center", paddingLeft: 5, paddingRight: 5, backgroundColor: "white", borderColor:"#b3b3b3" }}>
            <TouchableOpacity style={{ width: "50%", height: 22, backgroundColor: selectedTab === 0 ? '#5191f0' : 'white', borderRadius: 8, justifyContent: "center", alignItems: "center" }} onPress={() => handleSelectedTab(0)}>
                <Text style={{ color: selectedTab === 0 ? "#fff" : "#b3b3b3", fontSize: 10, fontWeight: '500' }}>
                    Open Trades
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "50%", height: 22, backgroundColor: selectedTab === 1 ? '#5191f0' : 'white', borderRadius: 8, justifyContent: "center", alignItems: "center" }} onPress={() => handleSelectedTab(1)}>
                <Text style={{ color: selectedTab === 1 ? "#fff" : "#b3b3b3", fontSize: 10, fontWeight: '500' }}>
                    Close Trades
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToggleSwitch