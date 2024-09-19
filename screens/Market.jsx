import { Text, View, Modal, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomSearchBar from "../components/CustomSearchBar";
import { StyleSheet } from "react-native";
import { FlatList,Image } from "react-native";

const Market=({navigation})=>{
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
    return(
        <View>
            <View>
                <CustomHeader
                righttext="Filter"
                centertitle="Market"
                lefttext="Back"
                onRightTextPress={()=>{navigation.goBack()}}/>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <CustomSearchBar/>
            </View>
            <View>
                <Text style={styles.heading}>Hot Deals</Text>
            </View>
            <View style={{width:'100%', height:177}}>
                <FlatList
                horizontal
                data={product} renderItem={({item,index})=>
                    <View style={{width:110, height:177,padding:2,margin:5}}>
                        <View>
                        <Image source={{uri:item.image}} style={{width:100, height:100}}/>
                        </View>
                        
                        <View>
                        <Text style={{color:'black',fontSize:14,fontWeight:'regular'}}>{item.title.length>20?item.title.substring(0, 20):item.title}...</Text>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>${item.price}</Text>
                        </View>

                    </View>
                    
                }
                
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:'medium',
        color:'black',
        paddingLeft:15,
        paddingTop:2,
        fontStyle:'normal',


    },
})
export default Market;