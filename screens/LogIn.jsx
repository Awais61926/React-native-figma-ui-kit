import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import auth from '@react-native-firebase/auth';

function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Login Success', 'You are now logged in!');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Error', 'User not found!');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  };

  return (
    <View>
      <View>
        <CustomHeader centertitle="LogIn" />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <CustomTextInput
          placeHolder="Email"
          padd={10}
          value={email}
          onChangeText={setEmail} // Update the state
        />
        <CustomTextInput
          placeHolder="Password"
          padd={10}
          value={password}
          secureTextEntry // Hide the password input
          onChangeText={setPassword} // Update the state
        />
      </View>
      <View style={{ height: '80%', alignItems: 'center', justifyContent: 'center' }}>
        <CustomButton title='Login' onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20, color: '#5DB075', fontWeight: '600' }}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LogIn;
