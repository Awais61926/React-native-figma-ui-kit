import { View, TextInput } from "react-native";

type inputType = {
    placeHolder?: string,
    value?: string,
    padd?: number,
    onChangeText?: (text: string) => void,
}

const CustomTextInput = ({ padd, placeHolder, value, onChangeText }: inputType) => {
    return (
        <View>
            {
                placeHolder ? (
                    <View style={{ padding: padd }}>
                        <TextInput
                            placeholder={placeHolder}
                            value={value}
                            onChangeText={onChangeText}
                            style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 2 }}
                        />
                    </View>
                ) : (
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 2 }}
                    />
                )
            }
        </View>
    );
};

export default CustomTextInput;
