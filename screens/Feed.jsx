import { View,Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
function Feed({navigation}){
    return(
    <View>
        <CustomHeader
        centertitle="Feed"
        righttext="Filter"
        lefttext="Back"
        />

    </View>
);
}
export default Feed;