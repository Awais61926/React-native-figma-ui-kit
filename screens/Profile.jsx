import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'

export default function Profile() {
    const [isPostsSelected, setIsPostsSelected] = useState(true);
    const data = [
        {
            picuri: require('./aa.png'), // Use require for static local images
            name: 'Ali',
            message: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
            time: 2,
        },
        {
            picuri: require('./aa.png'), // Use require for static local images
            name: 'Ahamad',
            message: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
            time: 4,
        },
        {
            picuri: require('./aa.png'), // Use require for static local images
            name: 'Aysha',
            message: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
            time: 10,
        }
    ]

    return (
        <View style={{ backgroundColor: '#5DB075' }}>
            <View style={{ height: 246 }}>
                <CustomHeader
                    centertitle='Profile'
                    lefttext='Settings'
                    righttext='Logout'
                    Ccolor='white'
                    Ctitlecolor='white'
                />
                <View style={{ width: 316, height: 316, borderRadius: 158, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                        source={require('./aa.png')} // Static image
                        style={{ width: 300, height: 300, borderRadius: 150 }}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Text style={styles.heading}>Victoria Robertson</Text>
                    <Text style={styles.txt}>A mantra goes here</Text>
                </View>
                <View style={{ backgroundColor: '#E8E8E8', height: 50, width: 343, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 171 }}>
                    {isPostsSelected ? (
                        <>
                            <TouchableOpacity
                                onPress={() => setIsPostsSelected(true)}
                                style={{ height: 45, width: '50%', borderRadius: 22, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={styles.txt}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setIsPostsSelected(false)}
                                style={{ height: 45, width: '50%', borderRadius: 22, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E8E8' }}>
                                <Text style={styles.txt}>Photos</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity
                                onPress={() => setIsPostsSelected(true)}
                                style={{ height: 45, width: '50%', borderRadius: 22, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E8E8' }}>
                                <Text style={styles.txt}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setIsPostsSelected(false)}
                                style={{ height: 45, width: '50%', borderRadius: 22, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={styles.txt}>Photos</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image
                                    source={item.picuri} 
                                    style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
                                />
                                <View>
                                    <Text style={styles.txt}>{item.name}</Text>
                                    <Text>{item.message}</Text>
                                </View>
                                <View>
                                    <Text>{item.time} min ago</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 16,
        fontWeight: "medium",
        color: 'black'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'semibold',
        color: 'black',
    },
});
