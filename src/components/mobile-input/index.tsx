import React from "react"
import { Text, TextInput, View } from "react-native"

const MobileInput = () => {
    return(
        <View style={{display:"flex", flexDirection:"row", alignItems:"center", gap:10, borderWidth:0.5, borderBlockColor:"#e8eaf6", borderRadius:20, backgroundColor:"#e8eaf6"}}>
        <View>
            <Text style={{marginLeft:20, fontSize:18}}>+91</Text>
        </View>
        <TextInput placeholder='Mobile Number' inputMode='numeric' style={{fontSize:18}}/>
        </View>
    )
}

export default MobileInput