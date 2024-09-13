import * as React from 'react';
import { View, Text, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { TextInput } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
function SignUp({navigation}) {
    return (
      <View>
        <CustomHeader
        lefticon={true}
        centertitle='Sign Up'
        righticon={false}
        righttext='Login'
        />
        <View style={{alignItems:'center',margin:10}}>
        <CustomTextInput
        placeHolder='Enter name'
        padd={10}
        
        />
        <CustomTextInput placeHolder='Email' padd={10}/>
        <CustomTextInput placeHolder='Password' padd={10}/>
        
        </View>
        <CustomButton title='Sign Up'/>


      </View>
    );
  }
  export default SignUp;