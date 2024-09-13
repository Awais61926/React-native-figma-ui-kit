import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SignUp from "../screens/SignUp";
const CustomButton = ({ title }: any) => {
    return (
        <View style={{ alignItems:'center'}}>
            <TouchableOpacity style={{ backgroundColor: '#5DB075', width: 343, height: 51, borderRadius: 100 }}>
                <Text style={{ textAlign:'center',paddingTop:12,color:'white', fontSize: 16, fontWeight: 600 }}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomButton;