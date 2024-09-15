import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { useState } from 'react';
import { TextInput } from 'react-native';
import CheckBox from 'react-native-check-box'
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import LogIn from './LogIn';
function SignUp({navigation}) {
  const [isChecked,setisChecked]=useState(false);
    return (
      <View>
        <CustomHeader
        lefticon={true}
        centertitle='Sign Up'
        righticon={false}
        righttext='Login'
        onRightTextPress={() => navigation.navigate('LogIn')}
        
        />
        <View style={{alignItems:'center',margin:20}}>
        <CustomTextInput
        placeHolder='Enter name'
        padd={10}
        
        />
        <CustomTextInput placeHolder='Email' padd={10}/>
        <CustomTextInput placeHolder='Password' padd={10}/>
        
        </View>

        <View style={{alignItems:'center', paddingTop:0,paddingBottom:10}}>
        
        </View>
        <View  style={{height:'15%', alignItems:'center', justifyContent:'center'}}>
          <View style={{paddingBottom:8}}>
        <CheckBox
        isChecked={isChecked} onClick={()=>setisChecked(!isChecked)}
        rightText='I would like to receive your newsletter and other promotional information.'
        checkBoxColor="#E8E8E8"

        style={{width:320,height:34}}
        

        />
        </View>
            <CustomButton
            title='SignUp'
            />
            <TouchableOpacity>
                <Text style={{fontSize:20,color:'#5DB075',fontWeight:'600'}} >Forgot your password?</Text>
            </TouchableOpacity>
        </View>



      </View>
    );
  }
  export default SignUp;