import { View,Text, TouchableOpacity, Button, FlatList } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Image,TextInput } from "react-native";

function Feed({navigation}){
    const [product, setProduct]= useState([])
    const [search, setSearch]=useState('')
    useEffect(()=>{
        getData();
    },
    []
    );
    const getData=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>
            {setProduct(json);
            });
    };
    // const searcFilter=(text)=>{
    //     let tempList=data.filter(item=>{
    //         return item.title.toLowerCase().indexOf(text.toLowerCase())>-1 ?;
    //     })

    // }

    return(
    <View>

        <CustomHeader
        centertitle="Feed"
        righttext="Filter"
        lefttext="Back"
        />
        <View style={{alignSelf:'center'}}>
                        <TextInput
                            placeholder="Search"
                            value={search}
                            onChangeText={(text)=>searcFilter(text)}
                            style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 15,paddingLeft:15 }}
                            
                        /> 


        </View>
        
        <FlatList
        data={product} renderItem={({item,index})=>
        <View style={{width:'90%', height:100, backgroundColor:'white',alignSelf:'center',marginTop:10, flexDirection:'row',borderColor:'black',borderWidth:2,borderRadius:5}}>
            <View>
            <Image source={{uri:item.image}} style={{width:100, height:97}}/>
            </View>
            <View style={{margin:5}}>
                <Text style={{fontSize:15,fontWeight:800}}>{item.title.length>30?item.title.substring(0, 30):item.title }...</Text>
                <Text>{item.description.length>30?item.description.substring(0, 30):item.description }...</Text>
                <Text style={{fontSize:20,fontWeight:"bold",color:'green',margin:2}}>${item.price}</Text>
            </View>

        </View>
        
    
    }
        />


    </View>
);
}
export default Feed;