import { View, TextInput } from "react-native";

const  CustomSearchBar= () => {
    
    return (
        <View>
                        <TextInput
                            placeholder="Search"
                            style={{ width: 343, height: 50, backgroundColor: '#E8E8E8', borderColor: 'lightgray', borderRadius: 15,paddingLeft:15 }}
                            
                        />
                    
            
        </View>


    );


}
export default CustomSearchBar;