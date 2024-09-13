import * as React from 'react';
import { View, Text, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { useState } from 'react';
import { TextInput } from 'react-native';
import CheckBox from 'react-native-check-box'
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
function SignUp({navigation}) {
  const [isChecked,setisChecked]=useState(false);
    return (
      <View>
        <CustomHeader
        lefticon={true}
        centertitle='Sign Up'
        righticon={false}
        righttext='Login'
        />
        <View style={{alignItems:'center',margin:20}}>
        <CustomTextInput
        placeHolder='Enter name'
        padd={10}
        
        />
        <CustomTextInput placeHolder='Email' padd={10}/>
        <CustomTextInput placeHolder='Password' padd={10}/>
        
        </View>

        <View style={{alignItems:'center', paddingTop:0}}>
        <CheckBox
        isChecked={isChecked} onClick={()=>setisChecked(!isChecked)}
        rightText='I would like to receive your newsletter and other promotional information.'
        checkBoxColor="#E8E8E8"

        style={{width:320,height:34}}
        

        />
        </View>
        <CustomButton title='Sign Up'/>



      </View>
    );
  }
  export default SignUp;