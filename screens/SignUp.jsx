import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../components/CustomHeader';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
//import CheckBox from 'react-native-check-box';
import auth from '@react-native-firebase/auth';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Sign Up Success', 'Your account has been created!');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View>
      <CustomHeader
        lefticon={true}
        centertitle='Sign Up'
        righticon={false}
        righttext='Login'
        onRightTextPress={() => navigation.navigate('LogIn')}
      />
      <View style={{ alignItems: 'center', margin: 20 }}>
        <CustomTextInput
          placeHolder='Enter name'
          padd={10}
          // Add the name field here if necessary
        />
        <CustomTextInput
          placeHolder='Email'
          padd={10}
          value={email}
          onChangeText={setEmail} // Update the state
        />
        <CustomTextInput
          placeHolder='Password'
          padd={10}
          value={password}
          secureTextEntry // Hide the password input
          onChangeText={setPassword} // Update the state
        />
      </View>

      <View style={{ alignItems: 'center', paddingTop: 0, paddingBottom: 10 }}></View>
      <View style={{ height: '15%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ paddingBottom: 8 }}>
          {/* <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            rightText='I would like to receive your newsletter and other promotional information.'
            checkBoxColor="#E8E8E8"
            style={{ width: 320, height: 34 }}
          /> */}
        </View>
        <CustomButton title='SignUp' onPress={handleSignUp} />
        <TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#5DB075', fontWeight: '600' }}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
