import { View,Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

function LogIn({navigation}){
    
    return(
    <View>
        <View>
            <CustomHeader
            centertitle="LogIn"
            />
        </View>
        <View style={{alignItems:'center', paddingTop:20}}>
            <CustomTextInput
            placeHolder="Email"
            padd={10}
            />
            <CustomTextInput
            placeHolder="Password"
            padd={10}
            />
        </View>
        <View  style={{height:'80%', alignItems:'center', justifyContent:'center'}}>
            <CustomButton
            title='Login'
            />
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={{fontSize:20,color:'#5DB075',fontWeight:'600'}} >Forgot your password?</Text>
            </TouchableOpacity>
        </View>

    </View>
);
}
export default LogIn;