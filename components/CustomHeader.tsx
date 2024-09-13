import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type headertype = {
    lefticon?: boolean,
    righticon?: boolean,
    righttext?: string,
    rightIconName?: string,
    leftIconName?: string,
    centertitle?: string,
    rightIconType?: any,
    leftIconType?: any
}

const CustomHeader = ({
    lefticon,
    righticon,
    righttext,
    rightIconName = 'close',
    leftIconName = 'close',
    centertitle,
    rightIconType = MaterialIcons,
    leftIconType = MaterialIcons
}: headertype) => {

    const RightIconComponent = rightIconType;
    const LeftIconComponent = leftIconType;

    return (
        <View style={{ paddingVertical: 15 }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
            }}>
                {/* Left Icon */}
                {
                    lefticon ? (
                        <LeftIconComponent name={leftIconName} size={30} />
                    ) : (
                        <View style={{ width: 30 }} />
                    )
                }

                {/* Center Title */}
                <View>
                    {
                        centertitle ? (
                            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>{centertitle}</Text>
                        ) : null
                    }
                </View>

                {/* Right Icon or Right Text */}
                {
                    righticon ? (
                        <RightIconComponent name={rightIconName} size={30} />
                    ) : righttext ? (
                        <Text>{righttext}</Text>
                    ) : (
                        <View style={{ width: 30 }} />
                    )
                }
            </View>
            
        </View>
    );
}

export default CustomHeader;
