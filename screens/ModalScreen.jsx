import { Text, View, Modal, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const ModalScreen = () => {
    const [Mvisible, setVisible] = useState(true);
    
    return (
        <View style={{ flex: 1, backgroundColor: '#5DB075', justifyContent: 'center', alignItems: 'center' }}>
            <Modal visible={Mvisible} transparent={true} animationType='fade'>
                <View style={{ flex: 1, backgroundColor: '#5DB075', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: "white", width: 343, height: 363, borderRadius: 10 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', margin: 2 }}>Congratulations!</Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'medium', paddingTop: 15, paddingBottom: 15 }}>
                            Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 90 }}>
                            <TouchableOpacity style={{ backgroundColor: '#5DB075', width: 311, height: 51, borderRadius: 100, justifyContent: 'center' }}
                                onPress={() => setVisible(false)}>
                                <Text style={{ textAlign: "center", color: 'white', fontSize: 16, fontWeight: 600 }}>Click Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: '#5DB075', fontSize: 16 }}>Secondary Action</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalScreen;
