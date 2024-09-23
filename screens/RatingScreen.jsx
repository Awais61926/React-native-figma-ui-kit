import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AirbnbRating } from 'react-native-ratings';
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';

export default function RatingScreen() {
    const [Mvisible, setVisible] = useState()
    return (
        <View style={{ backgroundColor: '#5DB075', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal transparent={true}
            visible={Mvisible}
                animationType='fade'
                style={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <View style={{ backgroundColor: 'white', width: 343, height: 427 }}>
                        <View style={{ margin: 10 }}>
                            <AirbnbRating
                                showRating={false}
                                size={35}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.heading} >Rate our app</Text>
                            <Text style={{ textAlign: 'center', color: 'grey', fontSize: 16, fontWeight: 'medium' }}>Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.</Text>
                        </View>
                        <View style={{paddingTop:40 ,alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity style={{
                            backgroundColor: '#5DB075', width: 311, height: 51, borderRadius: 100,justifyContent:'center'
                        }}
                        onPress={()=>setVisible(false)}
                        >

                            <Text style={{ textAlign: "center", color: 'white', fontSize: 16, fontWeight: 600 }}>I love it!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}}>
                            <Text style={{color:'#5DB075', fontWeight:'semibold', fontSize:16}}>
                            Don’t like the app? Let us know.
                            </Text>
                        </TouchableOpacity>
                        </View>


                    </View>


                </View>


            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'semibold',
        color: "black",
        fontStyle: "normal",

    },
});