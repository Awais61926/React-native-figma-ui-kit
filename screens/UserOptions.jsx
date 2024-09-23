import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'

export default function UserOptions() {
    const [selectedRadio, setSelectedRadio] = useState()
    const data = [
        {
            id: 1,
            label: 'Radio option here'
        },
        {
            id: 2,
            label: 'Radio option here'
        },
        {
            id: 3,
            label: 'Radio option here'

        },
        {
            id: 4,
            label: 'Radio option here'
        },
        {
            id: 5,
            label: 'Radio option here'
        },
    ];

    return (
        <View>
            <View>
                <CustomHeader
                    centertitle='User Options'
                    lefttext='Back'
                    righttext='Next'
                />
            </View>
            <View>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={item.id} // Added a key here to avoid warning
                        style={{
                            flexDirection: 'row-reverse',
                            justifyContent: 'space-between',
                            padding: 15,
                            margin: 2,
                            alignItems: 'center'
                        }}
                        onPress={() => setSelectedRadio(item.id)}
                    >
                        {/* Outer Circle (Black border) */}
                        <View style={{
                            width: 24, // Adjusted size for better visual
                            height: 24,
                            margin: 10,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: 'black',
                            justifyContent: 'center', // Centers inner content vertically
                            alignItems: 'center' // Centers inner content horizontally
                        }}>
                            {/* Inner Circle (Green) */}
                            {selectedRadio === item.id ? (
                                <View style={{
                                    backgroundColor: '#5DB075',
                                    height: 14,
                                    width: 14,
                                    borderRadius: 7, // Keep it half of the width/height for a perfect circle
                                }} />
                            ) : null}
                        </View>

                        {/* Label */}
                        <View>
                            <Text>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={{ paddingTop: 300 }}>
                <CustomButton
                    title="I Love It!!"
                />
            </View>
        </View>
    )
}
