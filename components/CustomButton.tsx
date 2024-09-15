import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SignUp from "../screens/SignUp";
const CustomButton = ({ title,Cflex }: any) => {
    return (
        <View style={{ flex:Cflex,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{ backgroundColor: '#5DB075', width: 343, height: 51, borderRadius: 100,justifyContent:'center' }}>
                <Text style={{ textAlign:"center",color:'white', fontSize: 16, fontWeight: 600}}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomButton;