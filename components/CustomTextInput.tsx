import { View, TextInput } from "react-native";

type inputType = {
    placeHolder?: string,
    value?: string
    padd?:number
    rightText?:any
}
const CustomTextInput = ({ padd,placeHolder, value,rightText }: inputType) => {
    return (
        <View>
            {
                placeHolder && rightText ? (
                    <View style={{padding:padd}}>
                        <TextInput
                            placeholder={placeHolder}
                            
                            style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 9, }}
                        />
                    </View>
                ) : (
                    <TextInput

                        style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 9 }}
                    />
                )
            }
        </View>


    );


}
export default CustomTextInput;