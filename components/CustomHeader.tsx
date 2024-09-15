import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
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
    leftIconType?: any,
    lefttext?:string,
    onRightTextPress?:()=> void,
}

const CustomHeader = ({
    lefticon,
    lefttext,
    righticon,
    righttext,
    rightIconName = 'close',
    leftIconName = 'close',
    centertitle,
    rightIconType = MaterialIcons,
    leftIconType = MaterialIcons,
    onRightTextPress
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
                    ) :
                    lefttext ? (
                        <View>
                            <Text>{lefttext}</Text>
                            </View>
                    ): (
                        <View></View>
                    )
                }

                {/* Center Title */}
                <View>
                    {
                        centertitle ? (
                            <Text style={{ fontSize: 30, fontWeight: '600', color: 'black' }}>{centertitle}</Text>
                        ) : null
                    }
                </View>

                {/* Right Icon or Right Text */}
                {
                    righticon ? (
                        <RightIconComponent name={rightIconName} size={30} />
                    ) : righttext ? (
                        <TouchableOpacity onPress={onRightTextPress}>
                        <Text>{righttext}</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ width: 30 }} />
                    )
                }
            </View>
            
        </View>
    );
}

export default CustomHeader;
